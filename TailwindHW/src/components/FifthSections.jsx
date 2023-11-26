import React from 'react'

function FifthSections() {
  return (
    <div className='w-full flex justify-center items-center'>
        <div className=' grid grid-cols-2 max-sm:grid-cols-1 gap-x-5 grid-rows-2 justify-center items-center p-10'>
        
            <img className='w-80 col-span-1 row-span-3 justify-self-end m-2 items-center max-sm:m-0 max-sm:py-2 max-sm:col-span-full h-80 object-center ' src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/ef9d9b9f-freshgoods-about_100000000000000000001o.jpg" alt="" />

            
        <div className='col-start-2 col-end-2 row-span-1 max-sm:order-first max-sm:col-span-full'>
        <h1 className='text-4xl font-bold font-mono'>Some more <br /> information about <br /> your business</h1>
        </div>
        <div className='col-start-2 col-end-2 row-span-1 max-sm:col-span-full'>
        <p> Share a little about yourself as a business owner, or maybe <br /> describe what makes your product or service unique. Give <br /> visitors one more reason to care about your offer and want <br /> to buy from you.</p>
        </div>
        </div>
    </div>
  )
}

export default FifthSections