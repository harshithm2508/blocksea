import { useRecoilState, useRecoilValue } from "recoil";
import { btcPrice, etherPrice, recentBlock } from "../state/atoms/BlockState";
import { useEffect } from "react";
import { publicClient } from "../clients/publicClient";

function Statistics(){

    const ethPrice = useRecoilValue(etherPrice)
    const bitcoinPrice = useRecoilValue(btcPrice);
    const [recentlyMinedBlock, setRecentlyMinedBlock ] = useRecoilState(recentBlock);

    useEffect(() => {
        const getRecentlyMinedBlock = async () => {
            const block = await publicClient.getBlockNumber();
            setRecentlyMinedBlock(block.toString());
        };

        const intervalId = setInterval(() => {
            console.log("Set Interval run ")
            getRecentlyMinedBlock();
        }, 12000); 
    
        getRecentlyMinedBlock();
        return (()=> clearInterval(intervalId));
    }, []);


    return(
        <div className=" w-full h-auto bg-black px-20 py-8">
            <div className=" grid grid-rows-2 grid-cols-3 border-2 rounded-lg">
                {/* //   Displaying Ether Price */}
                <div className=" flex items-center gap-2 p-4 border-r-2 border-b-2">
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
                <div className=" p-4 border-r-2 border-b-2 flex flex-col text-gray-50">
                    <div className=" text-gray-400 text-xs tracking-widest">RECENTLY MINED BLOCK </div>
                    <div>{recentlyMinedBlock}</div>
                </div>

                
                <div className=" p-2 border-b-2 row-span-2">d</div>
                <div className=" p-2 border-r-2">d</div>
                <div className=" p-2 border-r-2">d</div>
            </div>
        </div>
    )
}

export default Statistics;