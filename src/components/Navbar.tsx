import { Link } from "react-router-dom"
import { useState } from "react"
import { FaShoppingCart, FaTimes, FaBars } from "react-icons/fa"
const Navbar = () => {
    const navLinks = [
        { path: "/", name: "HOME" },
        { path: "/phones", name: "PHONES" },
        { path: "/phonecases", name: "PHONECASES" },
        { path: "/watches", name: "WATCHES" },
        { path: "/accessories", name: "ACCESSORIES" },
    ]

    const  [showmobile, setShowMobile] = useState(false);

  return (
    <nav className="w-full relative text-white">
        <div className=" fixed bg-slate-500  flex justify-around items-center w-full shadow-lg border-b-2 py-8">
           <Link to="/" className="underline font-bold text-3xl md:text-2xl">Amazonpro</Link>

           <div className="hidden md:block">
            <ul className="flex justify-center gap-8 text-white">
                {navLinks.map((link, index) => (
                <Link key={index} to={link.path}>{link.name}</Link>
              ))}
            </ul>
           </div>


           <div>
              <Link to="/cart"><FaShoppingCart size={30}/></Link>
           </div>

           <div className="block md:hidden z-10 transition duration-300" onClick={() =>setShowMobile(!showmobile)}>
            {showmobile ? <FaTimes size={30}/> : <FaBars size={30}/> }
           </div>
           {showmobile && <div className="absolute w-full h-screen bg-slate-500 left-0 top-0 transition ease-out duration-200">
               
                <ul className="flex flex-col items-center justify-center h-[80%] gap-10 mt-3 text-xl">
                    {navLinks.map((item, index) => (
                        <Link to={item.path} key={index} onClick={() => setShowMobile(false)} className="px-3 py-1 text-center">{item.name}</Link>
                    ))}
                <Link to="/" className="border-4 bg-slate-400 py-3 px-7 rounded-lg">Shop Now</Link>
                </ul>
            </div>}
        </div>
    </nav>
  )
}

export default Navbar