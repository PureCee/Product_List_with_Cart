import React from 'react'
import orderIcon from '../src/assets/images/icon-order-confirmed.svg'
import tiramisu from '../src/assets/images/image-tiramisu-mobile.jpg'

const Order = () => {
  return (
    <>
      <div id='order' className='bg-rose-50 p-10 rounded-3xl  w-[80%] mx-auto mt-5'>
        <img className='py-3' src={orderIcon} alt="" />
        <h1 className='text-rose-900 red-hat-text-700 text-2xl py-1.5'>Order Confirmed</h1>
        <h3 className='text-rose-500 red-hat-text-500 pb-5'>We hope you enjoy your food</h3>

        <div className='bg-rose-100 rounded-2xl p-5'>
        <ul>
                <li className='border-b-1 border-0 border-gray-400'>
                    <div className='flex flex-row align-middle'>
                        <div className='flex flex-row gap-3'>
                            <img className='rounded-2xl w-[20%]' src={tiramisu} alt="" />

                            <div className='flex flex-3/5 flex-row justify-between py-4 align-middle'>
                                <div>
                                    <h1 className='red-hat-text-600 text-gray-900'>Classic Tiramisu</h1>
                                    <span className='text-rose-600 red-hat-text-700 me-2'>1x</span>
                                    <span className='me-2 text-gray-500'>$5.50</span>
                                </div>
                        
                            </div>
                        </div>
                        
                        <div className='self-center'>
                            <p className='text-gray-700 ml-12'>$5.50</p>
                        </div>

                    </div>
                    
                </li>
            </ul>
            
            <div className='flex justify-between py-8'>
          <span>Order Total</span>
          <span className='red-hat-text-700 text-2xl'>$46.0</span>
        </div>
        </div>
            {/* <ul>
                <li className='border-b-1 border-0 border-gray-400'>
                    <div className='flex flex-row bg-rose-100'>
                        <div className='flex flex-row gap-3'>
                            <img className='rounded-2xl w-[20%]' src={tiramisu} alt="" />

                            <div className='flex flex-3/5 flex-row justify-between py-4 align-middle'>
                                <div>
                                    <h1 className='red-hat-text-600 text-gray-900'>Classic Tiramisu</h1>
                                    <span className='text-rose-600 red-hat-text-700 me-2'>1x</span>
                                    <span className='me-2 text-gray-500'>$5.50</span>
                                </div>
                        
                            </div>
                        </div>
                      
                        
                        <div>
                            <span className='text-gray-700'>$5.50</span>
                        </div>

                    </div>
                    
                </li>
            </ul> */}

        {/* <div className='flex justify-between py-8 bg-rose-100'>
          <span>Order Total</span>
          <span className='red-hat-text-700 text-2xl'>$46.0</span>
        </div> */}

        <div className='flex justify-center w-full pt-3'>
          <button className='rounded-4xl bg-red-800 text-amber-50 py-2 px-8 w-full cursor-pointer hover:bg-green-900'>Start New Order</button>
        </div>

      </div>
    </>
  )
}

export default Order
