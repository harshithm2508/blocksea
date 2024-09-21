import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { etherPrice, btcPrice } from "../state/atoms/BlockState";

function Navbar(){

    return(
        <div>
            <AboveNavbar/>
            <BelowNavbar/>
        </div>
    )
}

export default Navbar;


function AboveNavbar(){

    const [ ethPrice, setEthPrice] = useRecoilState(etherPrice);
    const setBtcPrice = useSetRecoilState(btcPrice);
    const [ ethPriceChange, setEthPriceChange ] = useState(0);

    useEffect(()=>{
        const getETHPrice = () => {

        const options = {
            method: 'GET',
            url: 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum&vs_currencies=usd&include_24hr_change=true',
            headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-1Vws27H86UYSY5xqtW6KDZaE'}
        };

        axios
        .request(options)
        .then(function (response : any) {
            setEthPrice(response.data.ethereum.usd)
            setEthPriceChange(Math.round(response.data.ethereum.usd_24h_change * 100) / 100)
            setBtcPrice(response.data.bitcoin.usd);
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
                <li className=" flex items-center gap-2 px-2 border-l pl-3 hover:text-blue-300 cursor-pointer">
                        <div className="relative w-6 h-6 overflow-hidden bg-gray-700 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>

                        </div>
                    <Link to={'/signin'}>
                        <div className=" ">Sign In</div>
                    </Link>
                </li>
            </ul>
        </div>
    )
}