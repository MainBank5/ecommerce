import useProducts from "../Hooks/useProducts"
import ProductsCard from "../UI/ProductsCard";
import { useState } from "react";

type Product = {
  _id: number;
  category: string;
  brand: string;
  image: string;
  price: number;
  title: string;
  description: string;
  quantity: number;
};


const Products = () => {
  const [search, setSearch] = useState("")
 
  const {data, status, error,} = useProducts();

  if (status ==="pending") {
    return <h1 className="text-center text-4xl">Please wait Loading....</h1>
  }

  if(error) {
    return <h1>{error.name} : {error.message}</h1>
  }

  const handleSearch = (e:React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }
  
  const filteredData = data.filter((item:Product) => item.brand.toLowerCase().includes(search.toLowerCase()))
 
  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen ">
      <div className="flex flex-col justify-center items-center py-8 px-10 my-6">

        <div >
          <h1 className="pb-6 text-center w-full text-4xl md:text-3xl font-semibold text-slate-600">Best Selling products</h1>
        </div>
        <input type="text" placeholder="search by brand.." className="border-2 w-1/4 outline px-2 rounded-md" onChange={handleSearch} />
        <div  className="my-3 w-full flex justify-center items-center ">
          
           { search && filteredData.length === 0 ? (<h1>No Matching results</h1>) : <ProductsCard products={filteredData} /> }
        </div>

      </div>
        
    </div>
  )
}

export default Products