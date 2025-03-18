import { useState } from 'react'
import './App.css'
import waffle from '../src/assets/images/image-waffle-mobile.jpg'
import cart from '../src/assets/images/icon-add-to-cart.svg'
import vanilla from '../src/assets/images/image-creme-brulee-mobile.jpg'
import macaron from '../src/assets/images/image-macaron-mobile.jpg'
import tiramisu from '../src/assets/images/image-tiramisu-mobile.jpg'
import baklava from '../src/assets/images/image-baklava-mobile.jpg'
import lemonPie from '../src/assets/images/image-meringue-mobile.jpg'
import cake from '../src/assets/images/image-cake-mobile.jpg'
import brownie from '../src/assets/images/image-brownie-mobile.jpg'
import panna from '../src/assets/images/image-panna-cotta-mobile.jpg'
import emptyCart from '../src/assets/images/illustration-empty-cart.svg'
import removeItem from '../src/assets/images/icon-remove-item.svg'
import carbonNeutral from '../src/assets/images/icon-carbon-neutral.svg'

function App() {
  const [cartValue, setCartValue] = useState([0])
  const [cartItems, setCartItems] = useState([0])


  const addCartItems = (item) => {
    setCartValue(cartValue + 1)
    setCartItems([...cartItems, item])
  }

  // Removes one item at a time
  const removeCartItems = (itemName) =>{
    setCartItems((prevCart) => {
      const index = prevCart.findIndex(item => item.name === itemName)
      if (index !== false) {
        const newCart = [...prevCart]
        newCart.splice(index, 1)
        return newCart
      }
      return prevCart
    })
  }

    // removes all items at once
  const removeAllCartItems = (itemName) => {
    const newItem = cartItems.filter(item => item.name !== itemName)
    setCartItems(newItem)
    setCartValue(cartValue - 1)
    setCartItems([...cartItems, item])
  }

  return (
    <>
    <div className='p-10'>
      <h1 className='text-7xl red-hat-text-600 mb-10'>Desserts</h1>
    <div className='mx-auto'>
    <div id="one" className='grid grid-cols-1 sm:grid-cols-3 gap-3'>
      <div className='w-[70%] mx-auto lg:w-[80%]'>
        <div className="relative">
            <img className='rounded-3xl' src={waffle} alt="" />
          <div className="absolute top-[90%] left-[10%] flex justify-center w-[80%] max-w-[80%] mx-auto">
            <button onClick={()=>addCartItems({name: 'Waffles with berries', price: '$6.50'})} className='flex align-center px-10 py-4 border-1 border-gray-900 rounded-4xl shadow-sm text-black hover:text-rose-50 font-semigold bg-white hover:bg-red-700 '>
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
          

     <div className='w-[70%] mx-auto lg:w-[80%]'>
       <div className="relative">
         <img className='rounded-3xl ' src={vanilla} alt="" />
         <div className="absolute top-[90%] left-[10%] flex justify-center w-[80%] max-w-[80%] mx-auto">
           <button onClick={()=>addCartItems({name: 'Vanilla Bean Creme Brulee', price: '$7.00'})} className='flex align-center px-10 py-4 border-1 border-gray-900 rounded-4xl shadow-sm text-black hover:text-rose-50 font-semigold bg-white hover:bg-red-700 '>
            <span>
              <img src={cart} alt="" />
            </span>
            Add to Cart
           </button>
          </div>
       </div>
       <div className='pt-12'>
        <p className='text-rose-400'>Creme Brulee</p>
        <p className='text-rose-900 red-hat-text-600'>Vanilla Bean Creme Brulee</p>
        <p className='text-red-900 red-hat-text-600'>$7.00</p>
       </div>
      </div>

      <div className='w-[70%] mx-auto lg:w-[80%]'>
       <div className="relative">
         <img className='rounded-3xl ' src={macaron} alt="" />
         <div className="absolute top-[90%] left-[10%] flex justify-center w-[80%] max-w-[80%] mx-auto">
           <button onClick={()=>addCartItems({name: 'Maracon Mix of Five', price: '$8.00'})} className='flex align-center px-10 py-4 border-1 border-gray-900 rounded-4xl shadow-sm text-black hover:text-rose-50 font-semigold bg-white hover:bg-red-700 '>
            <span>
              <img src={cart} alt="" />
            </span>
            Add to Cart
           </button>
         </div>
       </div>
       <div className='pt-12'>
        <p className='text-rose-400'>Macaron</p>
        <p className='text-rose-900 red-hat-text-600'>Macaron Mix of Five</p>
        <p className='text-red-900 red-hat-text-600'>$8.00</p>
       </div>
       </div>
      </div>
    </div>
    
    <div id="two" className='grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6'>
     <div className='w-[70%] mx-auto lg:w-[80%]'>
        <div className="relative">
            <img className='rounded-3xl' src={tiramisu} alt="" />
          <div className="absolute top-[90%] left-[10%] flex justify-center w-[80%] max-w-[80%] mx-auto">
            <button onClick={()=>addCartItems({name: 'Classic Tiramisu', price: '$5.50'})} className='flex align-center px-10 py-4 border-1 border-gray-900 rounded-4xl shadow-sm text-black hover:text-rose-50 font-semigold bg-white hover:bg-red-700 '>
              <span>
              <img src={cart} alt="" />
              </span>
             Add to Cart
            </button>
          </div>
        </div>
        <div className='pt-12'>
        <p className='text-rose-400'>Tiramisu</p>
        <p className='text-rose-900 red-hat-text-600'>Classic Tiramisu</p>
        <p className='text-red-900 red-hat-text-600'>$5.50</p>
        </div>
      </div>

      <div className='w-[70%] mx-auto lg:w-[80%]'>
        <div className="relative">
            <img className='rounded-3xl' src={baklava} alt="" />
          <div className="absolute top-[90%] left-[10%] flex justify-center w-[80%] max-w-[80%] mx-auto">
            <button onClick={()=>addCartItems({name: 'Pistachio Baklava', price: '$4.00'})} className='flex align-center px-10 py-4 border-1 border-gray-900 rounded-4xl shadow-sm text-black hover:text-rose-50 font-semigold bg-white hover:bg-red-700 '>
              <span>
              <img src={cart} alt="" />
              </span>
             Add to Cart
            </button>
          </div>
        </div>
        <div className='pt-12'>
        <p className='text-rose-400'>Baklava</p>
        <p className='text-rose-900 red-hat-text-600'>Pistachio Baklava</p>
        <p className='text-red-900 red-hat-text-600'>$4.00</p>
        </div>
      </div>

      <div className='w-[70%] mx-auto lg:w-[80%]'>
        <div className="relative">
            <img className='rounded-3xl' src={lemonPie} alt="" />
          <div className="absolute top-[90%] left-[10%] flex justify-center w-[80%] max-w-[80%] mx-auto">
            <button onClick={()=>addCartItems({name: 'Lemon Meringue Pie', price: '$5.00'})} className='flex align-center px-10 py-4 border-1 border-gray-900 rounded-4xl shadow-sm text-black hover:text-rose-50 font-semigold bg-white hover:bg-red-700 '>
              <span>
              <img src={cart} alt="" />
              </span>
             Add to Cart
            </button>
          </div>
        </div>
        <div className='pt-12'>
        <p className='text-rose-400'>Pie</p>
        <p className='text-rose-900 red-hat-text-600'>Lemon Meringue Pie</p>
        <p className='text-red-900 red-hat-text-600'>$5.00</p>
        </div>
      </div>

    </div>

    <div id="three" className='grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6'>
     <div className='w-[70%] mx-auto lg:w-[80%]'>
        <div className="relative">
            <img className='rounded-3xl' src={cake} alt="" />
          <div className="absolute top-[90%] left-[10%] flex justify-center w-[80%] max-w-[80%] mx-auto">
            <button onClick={()=>addCartItems({name: 'Red Velvet Cake', price: '$4.50'})} className='flex align-center px-10 py-4 border-1 border-gray-900 rounded-4xl shadow-sm text-black hover:text-rose-50 font-semigold bg-white hover:bg-red-700 '>
              <span>
              <img src={cart} alt="" />
              </span>
             Add to Cart
            </button>
          </div>
        </div>
        <div className='pt-12'>
        <p className='text-rose-400'>Cake</p>
        <p className='text-rose-900 red-hat-text-600'>Red Velvet Cake</p>
        <p className='text-red-900 red-hat-text-600'>$4.50</p>
        </div>
      </div>

      <div className='w-[70%] mx-auto lg:w-[80%]'>
        <div className="relative">
            <img className='rounded-3xl' src={brownie} alt="" />
          <div className="absolute top-[90%] left-[10%] flex justify-center w-[80%] max-w-[80%] mx-auto">
            <button onClick={()=>addCartItems({name: 'Salted Caramel Brownie', price: '$5.50'})} className='flex align-center px-10 py-4 border-1 border-gray-900 rounded-4xl shadow-sm text-black hover:text-rose-50 font-semigold bg-white hover:bg-red-700 '>
              <span>
              <img src={cart} alt="" />
              </span>
             Add to Cart
            </button>
          </div>
        </div>
        <div className='pt-12'>
        <p className='text-rose-400'>Brownie</p>
        <p className='text-rose-900 red-hat-text-600'>Salted Caramel Brownie</p>
        <p className='text-red-900 red-hat-text-600'>$5.50</p>
        </div>
      </div>

      <div className='w-[70%] mx-auto lg:w-[80%]'>
        <div className="relative">
            <img className='rounded-3xl' src={panna} alt="" />
          <div className="absolute top-[90%] left-[10%] flex justify-center w-[80%] max-w-[80%] mx-auto">
            <button onClick={()=>addCartItems({name: 'Vanilla Panna Cotta', price: '$6.50'})} className='flex align-center px-10 py-4 border-1 border-gray-900 rounded-4xl shadow-sm text-black hover:text-rose-50 font-semigold bg-white hover:bg-red-700 '>
              <span>
              <img src={cart} alt="" />
              </span>
             Add to Cart
            </button>
          </div>
        </div>
        <div className='pt-12'>
        <p className='text-rose-400'>Panna Cotta</p>
        <p className='text-rose-900 red-hat-text-600'>Vanilla Panna Cotta</p>
        <p className='text-red-900 red-hat-text-600'>$6.50</p>
        </div>
      </div>
    </div>

{/* empty cart */}
{(cartValue.length === 0) ? (
  <div id='empty' className='grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 mx-auto'>
       <div className='bg-rose-50 rounded-3xl p-8 lg:w-full w-[80%] mx-auto'>
          <h3 className='text-red-900 text-2xl red-hat-text-700'>Your Cart (0)</h3>
          <img className='mx-auto' src={emptyCart} alt="" />
          <p className='text-rose-400 text-center p-8'>Your added items will appear here</p>
        </div>
        </div>)
 : (
  <div id="cart" className='bg-rose-50 p-8 rounded-3xl lg:h-full lg:w-full w-[80%] mx-auto'>
        <h1 className='text-red-900 red-hat-text-700 text-2xl'>Your Cart ({cartItems.length})</h1>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index} className='border-b-1 border-0 border-gray-400'>
            <div className='flex flex-3/5 flex-row justify-between py-4 align-middle'>
              <div>
                <h1 className='red-hat-text-600 text-gray-900'>{item.name}</h1>
                {/* <span className='text-rose-900 red-hat-text-700 me-2'>1x</span> */}
                <span className='me-2 text-gray-500'>{item.price}</span>
                {/* <span className='me-2 text-gray-700'>$5.50</span> */}
              </div>
              <div>
                <button onClick={()=>removeCartItems(item.name)} className='border border-gray-700 rounded-full p-1 cursor-pointer hover:border-amber-950 hover:border-2'>
                <img src={removeItem} alt="" />
                </button>
              </div>
            </div>
          </li>
          ))}
          
          </ul>
        <div className='flex justify-between py-8'>
          <span>Order Total</span>
          <span className='red-hat-text-700 text-2xl'>$450</span>
        </div>
        <div className='flex flex-row gap-2 justify-center bg-rose-100 rounded-2xl mx-auto w-full p-3'>
          <img src={carbonNeutral} alt="" />
          <p className='text-red-hat-text-600 text-rose-500'>This is a carbon-neutral delivery</p>
        </div>
        <div className='flex justify-center w-full pt-3'>
          <button className='rounded-4xl bg-red-800 text-amber-50 py-2 px-8 w-full cursor-pointer hover:bg-green-900'>Confirm Order</button>
        </div>
      </div>)}

    
      
    
      


    </div>
      

   
      
    </>
  )
}

export default App
