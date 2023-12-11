import React from 'react'
import { MdOutlineSwapVert } from "react-icons/md";
import bnblogo from '../assets/binance-usd-busd-logo.webp'

const Swap = () => {
  return (
    <div className='flex justify-center items-center w-[100%] h-[90vh] bg-white' id='swap page'>

        <div className='flex flex-col items-center justify-center sm:w-[70vw] w-[92vw] max-w-[460px] h-[65vh] border-solid border-[3px] rounded-[20px] border-[#ececec] text-black bg-[#f5f5f5]' id='main swap div'>
            <div className='flex flex-col justify-between w-[95%] h-[92%]'>

        <div className='text-left w-full pb-[10px]' id='swap info'>
            <div className=' flex justify-center'>
                <h3 className='font-semibold text-[25px]'>
                Swap
                </h3>
            </div>
            <p className='text-gray-400 w-[180px] text-[10px]'>
            Swap Any Assets Simply And Securely With RlWorld Self Developed Algorithm
            </p>
        </div>
        <div className='flex flex-col text-left' id='what to swap'>
            <div className=' w-[100%] border-[2px] border-gray-300 bg-gradient-to-b from-gray-100 to-gray-200 rounded-[10px] h-[10vh] flex flex-row justify-between' id='token to swap'>


                <div className='flex flex-col ml-[10px] justify-around ' id='what token u have and amount of token'>

                    <div className='flex items-center mt-[5px] flex-row justify-around w-[50px]' id='token dropdown'>
                        <img className=' h-[20px] w-[20px] mr-[5px]' src={bnblogo} />
                    <p className=' text-[11px] flex flex-row' id='token dropdown menu with token logo and name'>
                        BUSD
                    </p>
                    </div>

                    <p className=' text-gray-700 text-[23px]' id='token amount'>
                        9999.99
                    </p>

                </div>

                <div className='flex flex-col mr-[10px] justify-around ' id='what token u have and amount of token'>

                    <div className='flex mt-[5px] flex-row justify-between w-[45px]' id='token dropdown'>
                    
                    <span>
                    </span>
                    </div>

                    <p className=' text-gray-700 text-[23px] mt-[20px]' id='token amount'>
                        9999.99
                    </p>
                
                </div>


                {/* <div className='flex mr-[10px] flex-col justify-around' id='your tokens worth in usd'>
                    <div>

                    <span className='flex flex-row justify-between'>
                        <p className=' text-[13px] font-medium'>
                            som:
                        </p>
                        <p className='mr-[2px] '>
                            text.....
                        </p>
                    </span>

                    <p className=' text-[30px]' id='token amount'>
                        9999
                    </p>

                    </div>

                </div> */}




            </div>
            <div className='flex justify-center' id='flip button'>
                <span className='flex justify-center items-center bg-gray-300 w-[20px] h-[20px] z-100 rounded-[20px]'>
                <MdOutlineSwapVert />
                </span>
            </div>

            <div className=' w-[100%] bg-gradient-to-b from-gray-100 to-gray-200 rounded-[10px] h-[10vh] flex flex-row justify-between' id='token to swap'>


                <div className='flex flex-col ml-[10px] justify-around ' id='what token u have and amount of token'>

                <div className='flex items-center mt-[5px] flex-row justify-around w-[50px]' id='token dropdown'>
                        <img className=' h-[20px] w-[20px] mr-[5px]' src={bnblogo} />
                    <p className=' text-[11px] flex flex-row' id='token dropdown menu with token logo and name'>
                        BUSD
                    </p>
                    </div>

                    <p className=' text-gray-700 text-[23px]' id='token amount'>
                        9999.99
                    </p>

                </div>

                <div className='flex flex-col mr-[10px] justify-around ' id='what token u have and amount of token'>

                    <div className='flex mt-[5px] flex-row justify-between w-[45px]' id='token dropdown'>
                    
                    <span>
                    </span>
                    </div>

                    <p className=' text-gray-700 text-[23px] mt-[20px]' id='token amount'>
                        9999.99
                    </p>
                
                </div>



            </div>


            <div className='flex mt-[12px] text-[12px] text-gray-400 justify-between' id='conversion rate component '>
                <p>
                    Conversion Rate:
                </p>
                <p>
                    1 USD = 0.23333333 MATIC
                </p>
            </div>
        </div>
        <div className=' flex flex-col justify-between w-[full] h-[28%]' id='confirmation'>
                
            <div id='swap statistic'>

                <div className='flex flex-row justify-between'>
                    <p className='text-[10px] text-gray-400' id='statistic name'>
                        Commision
                    </p>
                    <p className='text-[13px]' id='statistic value'>
                        $2.0
                    </p>
                </div>
                <div className='flex flex-row justify-between'>
                    <p className='text-[10px] text-gray-400' id='statistic name'>
                        Total Expected After Fees
                    </p>
                    <p className='text-[13px]' id='statistic value'>
                        $718.98
                    </p>
                </div>
                <div className='flex flex-row justify-between'>
                    <p className='text-[10px] text-gray-400 ' id='statistic name'>
                        The Least You'll Get At 1.00% Stoppage
                    </p>
                    <p className='text-[13px]' id='statistic value'>
                        $710.99
                    </p>
                </div>
            </div>

            <div id='confim/connect-wallet button'>
                <button className='flex  justify-center items-center w-full h-[35px] rounded-[5px]  bg-[#EBA91F]'>
                    Connect Wallet
                </button>
            </div>
        </div>
                        
        </div>
        </div>
    </div>
  )
}

export default Swap