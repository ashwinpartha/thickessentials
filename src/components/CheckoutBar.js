import React, { useEffect, useState } from 'react'
import { FiPlus, FiMinus, FiArrowLeft } from "react-icons/fi";
import { motion,  useInView, useAnimation } from 'framer-motion'

const CheckoutBar = ({children,active}) => {

    const [flag,setFlag] = useState(active);

    const mainControls = useAnimation();

    useEffect(()=>{
        mainControls.start("animate");
    })

    const close=()=>{
        setFlag(false);
        mainControls.start("initial");
    }

  return (
    <>
    {flag?
    <motion.div
     variants={{
        initial:{ x: 300,opacity:0 },
        animate:{ x: 0 ,opacity:100 },
    }}
    initial='initial'
    animate={mainControls}
    transition={{ duration: 0.9, delay: 0.1 }}
    className='flex w-full h-full fixed flex-row-reverse z-20'>
        <div className='flex flex-col px-7 py-4 w-[650px] gap-2 h-full bg-[#141617]'>

            <div className='flex items-center gap-4'>
            <FiArrowLeft onClick={close} className='hover:cursor-pointer active:opacity-40' size={24} color='white' />
            <p className='text-white'>Checkout</p>
            </div>


            {/* <div className='flex flex-col'>

            <p className='text-white'>Customer Information</p>

            <div className='flex flex-col gap-3 p-7'>

                <input type='text' className='w-full p-3 h-12 bg-zinc-700 border rounded-md border-neutral-800 ' placeholder='Full name' />

                <input type='text' className='w-full p-3 h-12 bg-zinc-700 border rounded-md border-neutral-800 ' placeholder='Phone number' />

                <input type='text' className='w-full p-3 h-12 bg-zinc-700 border rounded-md border-neutral-800 ' placeholder='Email address' />

                <input type='text' className='w-full p-3 h-12 bg-zinc-700 border rounded-md border-neutral-800 ' placeholder='Street name, Area, Landmark' />

                <input type='text' className='w-full p-3 h-12 bg-zinc-700 border rounded-md border-neutral-800 ' placeholder='Pin code' />

            </div>

            </div> */}

            <div className='flex w-full flex-col items-center gap-4'>

                <p className='text-white'>Order Details</p>

                <div className='flex items-center justify-between p-2 w-full h-[106px] border-b-[1px] border-b-zinc-800'>

                    <div className='flex gap-4'>
                    <img className='w-[90px] h-[90px] bg-neutral-400 rounded-md'/>
                    
                    <div className='flex flex-col justify-center'>
                        <p className='text-white'>Thick Essentials long hair oil</p>
                        <p className='text-gray-400'>$49.00</p>
                    </div>
                    </div>

                    <div className='flex w-[103px] h-[42px] px-2 py-3 rounded-[90px] border items-center justify-around border-neutral-400'>
                        <FiPlus className='hover:cursor-pointer active:opacity-40' size={16} color='white'/>
                        <p className='text-gray-400'>2</p>
                        <FiMinus className='hover:cursor-pointer active:opacity-40' size={16} color='white'/>
                    </div>

                </div>


            <div className='flex w-full flex-col p-4 gap-3 bg-zinc-700 rounded-md border border-neutral-800'>

                <div className='flex items-center justify-between'>
                    <p className='text-gray-400'>Discount</p>
                    <p className='text-gray-400'>-40%</p>
                </div>

                <div className='flex items-center justify-between'>
                    <p className='text-gray-400'>Shipping charges</p>
                    <p className='text-gray-400'>$2.00</p>
                </div>

                <div className='flex items-center justify-between'>
                    <p className='text-gray-400'>Tax and services</p>
                    <p className='text-gray-400'>$4.00</p>
                </div>

                <div className='flex pt-3 items-center justify-between border-t-[1px] border-t-[#EBEBEB]'>
                    <p className='text-white'>Amount to be paid</p>
                    <p className='text-white'>$40.00</p>
                </div>

            </div>


            <div class="w-[70%] h-[51px] hover:cursor-pointer active:opacity-40 p-4 bg-black rounded-[999px] justify-center items-center gap-2.5 inline-flex">
                <p class="text-center text-white text-base font-medium ">Checkout</p>
            </div>

            </div>





        </div>     
    </motion.div>:""}
    

    {children}
    </>
  )
}

export default CheckoutBar