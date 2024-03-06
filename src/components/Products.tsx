
import useProducts from "../Hooks/useProducts"
import ProductsCard from "../UI/ProductsCard";



const Products = () => {
 
  const {data, status, error,} = useProducts();

  if (status ==="pending") {
    return <h1 className="text-center text-4xl">Please wait Loading....</h1>
  }

  if(error) {
    return <h1>{error.name} : {error.message}</h1>
  }
  
 
  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen ">
      <div className="flex flex-col justify-center items-center py-8 px-10 my-6">

        <div >
          <h1 className="text-center w-full text-4xl md:text-3xl font-semibold text-slate-600">Best Selling products</h1>
        </div>

        <div  className="my-3 w-full flex justify-center items-center ">
           {data ? <ProductsCard products={data} /> : null}
        </div>

      </div>
        
    </div>
  )
}

export default Products