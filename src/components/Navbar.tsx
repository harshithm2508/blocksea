import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Navbar(){

    return(
        <div>
            <AboveNavbar/>
            <BelowNavbar/>
        </div>
    )
}

export default Navbar;

// const Button = ({text} : {text : string}) =>{
//     return <button className=" rounded-lg px-4 py-2 bg-blue-700 text-white">{text}</button>
// }



function AboveNavbar(){

    const [ ethPrice, setEthPrice] = useState(0);
    const [ ethPriceChange, setEthPriceChange ] = useState(0);

    useEffect(()=>{
        const getETHPrice = () => {

    const options = {
            method: 'GET',
            url: 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=ethereum',
            headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-1Vws27H86UYSY5xqtW6KDZaE'}
        };

        axios
        .request(options)
        .then(function (response : any) {
            console.log(response.data);
            setEthPrice(response.data[0].current_price)
            setEthPriceChange(Math.round(response.data[0].price_change_percentage_24h * 100) / 100)
        })
        .catch(function (error : any) {
            console.error(error);
        });
                }
        getETHPrice();
    })

    return(
        <div className=" text-white w-full bg-gray-950 h-12 border-b border-b-slate-700 flex justify-between items-center px-20">
                {/* //  Left Side contents of AboveNavbar */}
            <div>
                <div className=" font-extralight text-sm flex gap-2">
                    {/* //  Getting Ether price */}
                    <div className=" text-gray-300">
                        ETH Price : <span className=" text-blue-300">$ {ethPrice}</span>
                    </div>

                    {/* //  Getting Ether price change */}
                    <div>
                        {
                            (ethPriceChange > 0) ? 
                            <div className=" text-green-500">({'+' + ethPriceChange+' %'})</div> : 
                            <div className=" text-red-500">({'' + ethPriceChange+' %'})</div>
                        }
                    </div>
                </div>
            </div>

            {/* // Right Side contents of AboveNavbar */}
            <div>
                hell
            </div>

        </div>
    )
}


function BelowNavbar() {
    

    return(
        <div className=" text-white w-full bg-gray-950 h-14 border-b border-b-slate-700 flex justify-between items-center px-20">
            {/* //  Left Side of Below Navbar  */}
            <div className=" flex items-center gap-2">
                <div>
                    <img src="https://opensea.io/static/images/logos/opensea-logo.svg" width={35} height={35} alt="" />
                </div>
                <div className=" text-white font-semibold text-2xl">
                    BlockSea
                </div>
            </div>


            {/* //  Right Side of Below Navbar  */}
            <ul className=" flex gap-6 text-sm text-gray-300">
                <li>Home</li>
                <li>Blockchain</li>
                <li>NFTs</li>
                <li>Resources</li>
                <li>Developers</li>


                {/* // Avatar Sign In Part  */}
                <li className=" flex items-center gap-2 px-2 border-l pl-3">
                        <div className="relative w-6 h-6 overflow-hidden bg-gray-700 rounded-full">
                            <svg className="absolute w-7 h-7 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"></path></svg>
                        </div>
                    <Link to={'/signin'}>
                        <div className=" hover:text-blue-300">Sign In</div>
                    </Link>
                </li>
            </ul>
        </div>
    )
}