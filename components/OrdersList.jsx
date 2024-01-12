
import { HiOutlineShoppingBag } from "react-icons/hi";
import { HiShoppingBag } from "react-icons/hi";
import { FaArrowRightLong } from "react-icons/fa6";



const OrdersList = () => {
  return (
    <div className='w-full h-full rounded-lg p-6'>
        <div className='w-full flex flex-col gap-2'>
            <div className='w-full flex flex-col gap-3 text-slate-600 text-sm'>
                <div className='w-full text-slate-700 text-4xl mb-4'>
                    <div className='flex items-center gap-2 font-semibold'> <HiShoppingBag className='text-red-700' /> My Orders</div>
                </div>
                <div className='w-full max-w-[1000px] px-6 py-3 flex items-center justify-between bg-white rounded-lg shadow hover:scale-[1.01] transition ease-in-out'>
                    <div>Lorem ipsum dolor sit amet.</div>
                    <div className='px-3 py-1 bg-slate-200 text-slate-600 rounded-full'>Processing</div>
                    <div>Nov 10, 2022</div>
                    <div>Rs. 560</div>
                    <button><FaArrowRightLong /></button>
                </div>
                <div className='w-full max-w-[1000px] px-6 py-3 flex items-center justify-between bg-white rounded-lg shadow hover:scale-[1.01] transition ease-in-out'>
                    <div>Lorem ipsum dolor sit amet.</div>
                    <div className='px-3 py-1 bg-orange-200 text-orange-600 rounded-full'>Pending</div>
                    <div>Nov 10, 2022</div>
                    <div>Rs. 560</div>
                    <button><FaArrowRightLong /></button>
                </div>
                <div className='w-full max-w-[1000px] px-6 py-3 flex items-center justify-between bg-white rounded-lg shadow hover:scale-[1.01] transition ease-in-out'>
                    <div>Lorem ipsum dolor sit amet.</div>
                    <div className='px-3 py-1 bg-green-200 text-green-600 rounded-full'>Delivered</div>
                    <div>Nov 10, 2022</div>
                    <div>Rs. 560</div>
                    <button><FaArrowRightLong /></button>
                </div>
                <div className='w-full max-w-[1000px] px-6 py-3 flex items-center justify-between bg-white rounded-lg shadow hover:scale-[1.01] transition ease-in-out'>
                    <div>Lorem ipsum dolor sit amet.</div>
                    <div className='px-3 py-1 bg-red-200 text-red-600 rounded-full'>Cancelled</div>
                    <div>Nov 10, 2022</div>
                    <div>Rs. 560</div>
                    <button><FaArrowRightLong /></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OrdersList