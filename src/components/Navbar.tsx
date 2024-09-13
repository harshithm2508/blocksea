import {  Link } from "react-router-dom";

function Navbar(){

    return(
        <div className=" w-full h-20 bg-black opacity-95 pr-20 flex items-center justify-between">
            
            {/* Left Elements */}
            <div className=" flex mr-2">
                {/* {Logo and Title} */}
                <div className="  pl-7 pr-4 border-r-2">
                    <Link to={'/'} className=" flex items-center gap-4">
                            <img src="https://opensea.io/static/images/logos/opensea-logo.svg"  width={40} height={40} alt="" />
                            <div className=" text-white text-2xl font-bold">BlockSea</div>
                    </Link>
                </div>

                <div className=" flex mx-6 items-center gap-7 text-white font-semibold text-xl">
                    <div>Drops</div>
                    <div>State</div>
                    <div>Create</div>
                </div>
            </div>


            {/* Search Bar */}
            <form className="w-[500px]">   {/* Set a custom width for the form */}
                <label className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
                    <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 ">Search</button>
                </div>
            </form>


            {/* Right Elements */}
            <div className=" flex gap-7">                    
                <Button text="Login"/>
                <Button text="Sign Up"/>
            </div>
        </div>
    )
}

export default Navbar;

const Button = ({text} : {text : string}) =>{
    return <button className=" rounded-lg px-4 py-2 bg-blue-700 text-white">{text}</button>
}