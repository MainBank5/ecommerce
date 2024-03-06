import {useQuery} from '@tanstack/react-query'
import { getProducts } from '../API/getProducts'

const useProducts = () => {
    const {data, status, error, refetch} = useQuery({
        queryKey:["products"],
        queryFn: getProducts, //queyFn is designed to resolve promises internally
    })

    const handleRefetch = () => {
        refetch()
    }

    return {data, error, status, handleRefetch}
}

export default useProducts;
