import { useRecoilState, useRecoilValue } from "recoil";
import { btcPrice, etherPrice, recentBlock } from "../state/atoms/BlockState";
import { useEffect, useState } from "react";
import { publicClient } from "../clients/publicClient";

function Statistics(){

    const ethPrice = useRecoilValue(etherPrice)
    const bitcoinPrice = useRecoilValue(btcPrice);
    const [recentlyMinedBlock, setRecentlyMinedBlock ] = useRecoilState(recentBlock);
    const [ currentGasPrice, setCurrentGasPrice ] = useState<bigint>(BigInt(0));

    useEffect(() => {
        const getRecentlyMinedBlock = async () => {
            const block = await publicClient.getBlockNumber();
            setRecentlyMinedBlock(block.toString());
        };

        const getGasPrice = async () => {
            const gas : bigint = await publicClient.getGasPrice();
            setCurrentGasPrice(gas);
        }
        getGasPrice();

        const blockIntervalId = setInterval(() => {
            getRecentlyMinedBlock();
        }, 12000); 

        const gasIntervalId = setInterval(() => {
            getGasPrice();
        },5000);
    
        getRecentlyMinedBlock();
        return (()=> {clearInterval(blockIntervalId), clearInterval(gasIntervalId)});
    }, []);


    return(
        <div className=" w-full h-auto bg-black px-20 py-8">
            <div className=" grid grid-rows-2 grid-cols-3 border-2 rounded-lg">
                {/* //   Displaying Ether Price */}
                <div className=" flex items-center gap-4 p-4 border-r-2 border-b-2">
                    <div>
                        <img src="https://etherscan.io/images/svg/brands/ethereum-original-light.svg" width={18} height={18} alt="" />
                    </div>
                    <div className=" flex flex-col text-gray-400">
                        <div className=" text-xs tracking-widest ">ETHER PRICE</div>
                        <div className=" flex gap-2">
                            <div className=" text-gray-50 ">{ethPrice}</div>
                            <div>@</div>
                            <div>{Math.round((ethPrice  / bitcoinPrice) * 100)  / 100 + "  BTC"}</div>
                        </div>
                    </div>
                </div>

                {/* //  Recently Mined Block  */}
                <div className=" p-4 border-r-2 border-b-2 flex flex-col justify-center text-gray-50">
                    <div className=" flex gap-4">
                        <div className=" flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"        className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m7.875 14.25 1.214 1.942a2.25 2.25 0 0 0 1.908 1.058h2.006c.776 0 1.497-.4 1.908-1.058l1.214-1.942M2.41 9h4.636a2.25 2.25 0 0 1 1.872 1.002l.164.246a2.25 2.25 0 0 0 1.872 1.002h2.092a2.25 2.25 0 0 0 1.872-1.002l.164-.246A2.25 2.25 0 0 1 16.954 9h4.636M2.41 9a2.25 2.25 0 0 0-.16.832V12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 12V9.832c0-.287-.055-.57-.16-.832M2.41 9a2.25 2.25 0 0 1 .382-.632l3.285-3.832a2.25 2.25 0 0 1 1.708-.786h8.43c.657 0 1.281.287 1.709.786l3.284 3.832c.163.19.291.404.382.632M4.5 20.25h15A2.25 2.25 0 0 0 21.75 18v-2.625c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125V18a2.25 2.25 0 0 0 2.25 2.25Z" />
                            </svg>
                        </div>

                        <div className=" flex flex-col">
                            <div className=" text-gray-400 text-xs tracking-widest">RECENTLY MINED BLOCK </div>
                            <div>{recentlyMinedBlock}</div>
                        </div>
                    </div>
                    
                </div>

                
                <div className=" p-2 border-b-2 row-span-2">d</div>

                {/* //  Current price of gas  */}
                <div className=" p-2 border-r-2 flex items-center text-white gap-4">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"         className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
                        </svg>
                    </div>

                    <div className=" flex flex-col">
                        <div className="  text-xs text-gray-400">CURRENT GAS PRICE</div>
                        <div>{currentGasPrice.toString() + " wei "}</div>
                    </div>
                </div>
                <div className=" p-2 border-r-2">d</div>
            </div>
        </div>
    )
}

export default Statistics;