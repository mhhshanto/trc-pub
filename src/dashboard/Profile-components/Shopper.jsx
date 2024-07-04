import React from 'react'

function Shopper() {
  return (
    <div className='flex flex-wrap justify-between lg:gap-5 gap-10'>
        <div>
            <h1 className='border-b-2 border-gray-600 text-3xl pb-2'>Orders</h1>
            <p className='text-lg font-semibold pt-1'>You have not placed an order.</p>
        </div>
        <div>
            <h1 className='border-b-2 border-gray-600 text-3xl pb-2'>eBook Library</h1>
            <p className='text-lg font-semibold pt-1'>You have not purchased an eBook.</p>
        </div>
        <div>
            <h1 className='border-b-2 border-gray-600 text-3xl pb-2'>Billing / Shipping Address</h1>
            <p className='text-lg font-semibold pt-1'>You have not saved an address.</p>
        </div>
    </div>
  )
}

export default Shopper