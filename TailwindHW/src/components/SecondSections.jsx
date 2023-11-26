import React from 'react'

function SecondSections() {
  return (
    <div className='w-full flex flex-col justify-center my-7'>
        <h1 className='w-full text-center text-3xl'>
        Here are some of the benefits of your offer
        </h1>
        <p className='w-auto text-center font-light text-2xl p-10'>Explain what makes your product or service great. Talk about features in a way that highlights the real value people get out of them.</p>
        <div className='flex flex-wrap w-full gap-20 justify-center pt-20'>
            <div className='flex flex-wrap flex-col w-48 justify-evenly'>
                <img className='h-20 ms-16 w-20' src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/b41bc87d-freshgoods-benefit2-icon_1000000000000000000028.png" alt="" />
                <h1 className='text-3xl text-center pt-5'>Benefit 1</h1>
                <p className='text-center'>For example, restaurants and bakeries could outline the health benefits of their all-natural ingredients</p>
            </div>
            <div className='flex flex-wrap flex-col w-48 justify-evenly'>
                <img className='h-20 ms-16 w-20' src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/6622ad60-freshgoods-benefit3-icon_1000000000000000000028.png" alt="" />
                <h1 className='text-3xl text-center pt-5'>Benefit 2</h1>
                <p className='text-center'>Florists and other small retailers might use this space to describe how their products make delightful, one-of-a-kind gifts.</p>

            </div>
            <div className='flex flex-wrap flex-col w-48 justify-evenly'>
                <img className='h-20 ms-16 w-20' src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/3a18a275-freshgoods-benefit1-icon_1000000000000000000028.png" alt="" />
                <h1 className='text-3xl text-center pt-5'>Benefit 3</h1>
                <p className='text-center'>You could also add buttons to this section and share links to other products or available delivery methods.</p>
            </div>
        </div>
    </div>
  )
}

export default SecondSections