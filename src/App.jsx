import { useState } from 'react'
import './App.css'
import waffle from '../src/assets/images/image-waffle-mobile.jpg'
import cart from '../src/assets/images/icon-add-to-cart.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='p-10'>
      <h1 className='text-7xl red-hat-text-600 mb-10'>Desserts</h1>
      <div>
        <div id="one" className='grid grid-cols-1 sm:grid-cols-3 gap-3'>
          <div>
       <div className="relative">
        <img className='rounded-3xl'
        src={waffle} alt="" />
        <div className="absolute top-[90%] left-[10%] flex justify-center w-[80%] max-w-[80%] mx-auto">
          <button className='flex align-center px-10 py-4 border-1 border-gray-900 rounded-4xl shadow-sm text-black hover:text-rose-50 font-semigold bg-white hover:bg-red-700 '>
            <span>
              <img src={cart} alt="" />
            </span>
            Add to Cart
          </button>
        </div>
      </div>
      <div className='pt-12'>
        <p className='text-rose-400'>Waffle</p>
        <p className='text-rose-900 red-hat-text-600'>Waffle with berries</p>
        <p className='text-red-900 red-hat-text-600'>$6.50</p>
      </div>
          </div>

          <div>
       <div className="relative">
        <img className='rounded-3xl'
        src={waffle} alt="" />
        <div className="absolute top-[90%] left-[10%] flex justify-center w-[80%] max-w-[80%] mx-auto">
          <button className='flex align-center px-10 py-4 border-1 border-gray-900 rounded-4xl shadow-sm text-black hover:text-rose-50 font-semigold bg-white hover:bg-red-700 '>
            <span>
              <img src={cart} alt="" />
            </span>
            Add to Cart
          </button>
        </div>
      </div>
      <div className='pt-12'>
        <p className='text-rose-400'>Waffle</p>
        <p className='text-rose-900 red-hat-text-600'>Waffle with berries</p>
        <p className='text-red-900 red-hat-text-600'>$6.50</p>
      </div>
          </div>

          <div>
       <div className="relative">
        <img className='rounded-3xl'
        src={waffle} alt="" />
        <div className="absolute top-[90%] left-[10%] flex justify-center w-[80%] max-w-[80%] mx-auto">
          <button className='flex align-center px-10 py-4 border-1 border-gray-900 rounded-4xl shadow-sm text-black hover:text-rose-50 font-semigold bg-white hover:bg-red-700 '>
            <span>
              <img src={cart} alt="" />
            </span>
            Add to Cart
          </button>
        </div>
      </div>
      <div className='pt-12'>
        <p className='text-rose-400'>Waffle</p>
        <p className='text-rose-900 red-hat-text-600'>Waffle with berries</p>
        <p className='text-red-900 red-hat-text-600'>$6.50</p>
      </div>
          </div>
        </div>

      
      </div>
      

      
    </div>
      
    </>
  )
}

export default App
