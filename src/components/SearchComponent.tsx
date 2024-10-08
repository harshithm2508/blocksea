import { useState } from "react";
import { publicClient } from "../clients/publicClient";

function SearchComponent(){

    const [ address, setAddress ] = useState('');
    const [ count, setCount ] = useState<number | string>("...");
    const [ loading, setLoading] = useState(false)


    const getTransactionCount = async () => {
        setLoading(true);
        if(address.length === 0){
            setLoading(false)
            return alert("Please enter an address")
        }

        if(address.length !== 40){
            setLoading(false)
            return alert("Please enter a valid address")
        }

        try{
            const transactions = await publicClient.getTransactionCount({
                address : `0x${address}`
            })
            setCount(transactions);
            setLoading(false);
        }catch(e){
            console.log("There was an error : ",e);
            setLoading(false);
            return alert("There was an error in fetching transactions.")
        }
    }


    return(
        <div className=" bg-black px-20 py-10">
            <div className=" text-white">
                <div className=" text-white font-semibold text-xl mb-2">The Ethereum Blockchain Explorer</div>
                <div className=" mb-2">
                    <form className="max-w-2xl">   
                        <label className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 
                                " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                </svg>
                            </div>
                            <input onChange={e => setAddress(e.target.value)} type="search" id="default-search" className="block w-full p-4 ps-10 text-base text-gray-50 border border-gray-700 rounded-lg bg-black " placeholder="Enter address to check transaction count" required />
                            <button
                                onClick={getTransactionCount}
                                type="button"
                                className={`text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
                                disabled={loading}> 
                                Search {loading ? <Spinner/> : ""}
                            </button>

                        </div>
                    </form>
                </div>
                <div>
                    Total Transactions : {loading ? <Spinner/> : count}
                </div>
            </div>
        </div>
    )
}


function Spinner(){
    return(   
        <div className=" inline-block" role="status">
            <svg aria-hidden="true" className="w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg>
        </div>
    )
}

export default SearchComponent;