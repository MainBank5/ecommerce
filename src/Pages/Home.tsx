import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import slide1 from '../assets/sliderOne.png'
import slide2 from '../assets/sliderTwo.png'
import slide3 from '../assets/sliderThree.png'
import slide4 from '../assets/sliderFour.png'

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const slides = [slide1, slide2, slide3, slide4];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }, 4000) 
    return () => clearInterval(intervalId)
  }, [setCurrentImage, slides.length])
  return (
    <div className="min-h-screen w-full flex justify-center items-center py-10 md:py-28  bg-yellow-400">
        <div className="py-5  flex justify-center items-center px-20 max-md:flex-col">

          <div className="w-full h-[90%] overflow-hidden md:w-1/2">
            <img src={slides[currentImage]} alt="heroimg" className="object-cover h-98 w-96" />
          </div>
            
            <div className=" px-4 flex flex-col ml-1 md:text-center leading-relaxed max-md:w-full ">
               <h1 className="text-2xl">Shop For The Best Gadgets</h1>
               <p className="py-3">Browse the latest phones and watches in the market and accessories to complement</p>
               <h2 className="py-4 font-bold self-center">In-Demand Gadgets</h2>
               <Link to="/phones" className="px-10 py-1 text-nowrap border-2 self-center rounded-xl text-xl bg-yellow-300">Shop Now</Link>
            </div>
           
        </div> 
        
    </div>
  )
}

export default Home