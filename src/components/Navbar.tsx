import { useEffect, useState } from "react";
import axios from "axios";

function Navbar(){

    return(
        <AboveNavbar/>
    )
}

export default Navbar;

const Button = ({text} : {text : string}) =>{
    return <button className=" rounded-lg px-4 py-2 bg-blue-700 text-white">{text}</button>
}



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
        <div className=" text-white w-full bg-gray-950 h-12 border-b border-b-slate-700 flex items-center px-20">
            <div>

                {/* //  Left Side contents of Navbar */}
                <div className=" font-extralight text-sm flex gap-2">
                    {/* //  Getting Ether price */}
                    <div>
                        ETH Price : <span className=" text-blue-300">$ {ethPrice}</span>
                    </div>

                    {/* //  Getting Ether price change */}
                    <div>
                        {
                            (ethPriceChange > 0) ? 
                            <div className=" text-green-500">({'+' + ethPriceChange})</div> : 
                            <div className=" text-red-500">({'-' + ethPriceChange})</div>
                        }
                    </div>
                </div>

                {/* //  Right Side contents of Navbar */}
                <div className=" text-white">
                    
                </div>
            </div>
            <div></div>
        </div>
    )
}