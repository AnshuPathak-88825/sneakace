import React from 'react'
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FaRegHeart } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";

const SideBar = () => {
  return (
    <div className='w-full h-full bg-white rounded-lg shadow'>
        <div className='w-full flex flex-col gap-2'>
            <div className='w-full flex flex-col gap-5 text-slate-600 text-sm'>
                <div className='w-full text-slate-400 px-6 pt-6'>
                    DASHBOARD
                </div>
                <div className='w-full flex items-center justify-between px-6 border-l-4 text-red-700 border-red-700'>
                    <div className='flex items-center gap-1'><HiOutlineShoppingBag /> Orders</div>
                    <div>5</div>
                </div>
                <div className='w-full flex items-center justify-between px-6 border-l-4 border-transparent'>
                    <div className='flex items-center gap-1'><FaRegHeart /> Wishlist</div>
                    <div>19</div>
                </div>
                <div className='w-full flex items-center justify-between px-6 border-l-4 border-transparent'>
                    <div className='flex items-center gap-1'><BiSupport /> Support Tickets</div>
                    <div>1</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SideBar