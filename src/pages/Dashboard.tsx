// import { RecoilRoot, useRecoilState } from "recoil";
// import { publicClient } from "../clients/publicClient";
// import { recentBlock } from "../state/atoms/BlockState";
// import { useEffect, useState } from "react";
import SearchComponent from "../components/SearchComponent";

function SampleDashboard(){
    return(
        <div>
            <SearchComponent/>
        </div>
    )
}

// function Dashboard(){
//     return(
//         <div className=" grid grid-rows-3 h-[calc(100vh-5rem)]">
//             <div className=" flex flex-col px-32 items-center justify-center gap-10 row-span-2 bg-blue-500">
//                 <div className=" text-white font-bold text-8xl">
//                     BlockSea
//                 </div>
//                 <div className=" text-white font-semibold text-center text-xl">
//                     At BlockSea, we provide an expansive view of the blockchain’s vast ocean. Our platform is your navigational tool for uncovering detailed insights into every transaction and block. Dive deep into the decentralized world with our comprehensive analytics, real-time data, and intuitive interface. Whether you’re tracking tokens, analyzing trends, or exploring new projects, BlockSea is your ultimate guide to mastering the blockchain horizon.
//                 </div>
//             </div>
//             <div className=" row-span-1 px-14 py-6">
//                 <RecoilRoot>
//                     <MinedBlocksInfo/>
//                 </RecoilRoot>
//             </div>
//         </div>
//     )
// }

// function MinedBlocksInfo(){

//     const [recentBlockNumber, setRecentBlockNumber] = useRecoilState(recentBlock);
//     const [ loading, setLoading ] = useState(true);

//     useEffect(()=>{
//         const gettingRecentBlocks = async () => {
//             const block = await publicClient.getBlockNumber();
//             setRecentBlockNumber(block.toString());
//             setLoading(false);
//         }

//         gettingRecentBlocks();
//     },[])


//     return(
//         <div className="  border w-1/6 p-4 rounded-lg border-black">
//             <div className=" font-semibold mb-2">
//                 Recently Mined Blocks
//             </div>
//             {loading ?
//                 <div className=" flex flex-col text-gray-400">
//                     <Loader/>
//                     <Loader/>
//                     <Loader/>
//                     <Loader/>
//                     <Loader/>
//                 </div>      :               
//                 <div className=" flex flex-col text-gray-400">
//                     <div>{parseInt(recentBlockNumber)}</div>
//                     <div>{parseInt(recentBlockNumber)-1}</div>
//                     <div>{parseInt(recentBlockNumber)-2}</div>
//                     <div>{parseInt(recentBlockNumber)-3}</div>
//                     <div>{parseInt(recentBlockNumber)-4}</div>
//                 </div>
//             }
//         </div>
//     )
// }

// function Loader(){
//     return(
//         <div className="h-2 bg-gray-400 rounded-full max-w-[100px] mb-2.5"></div>
//     )
// }

export default SampleDashboard;