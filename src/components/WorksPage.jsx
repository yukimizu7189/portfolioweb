import React from 'react'
import FadeInUp from '../animation/fade'
import "../animation/animation.css"

const WorksPage = () => {
  return (
    <div class="container mb-auto p-4">
      <div class="row">
        <div>
        <div className="container mx-auto px-5 pb-5">
          <div className='flex text-center flex-col justify-center py-5'>
            <h1 className="text-5xl mb-5 font-bold text-black">works工事中</h1>
          </div>
          <div className='flex flex-col grid lg:flex-row lg:grid-cols-3 justify-center'>
            <div className='max-w-sm m-3 border border-gray-200 rounded-lg shadow-sm bg-gray-800'>
              <div className='p-5'>
                <p className="text-2xl mb-2 font-bold text-white">work1</p>
                <p className="text-lg mb-2 text-gray-300">test</p>
              </div>
            </div>
            <div className='max-w-sm m-3 border border-gray-200 rounded-lg shadow-sm bg-gray-800'>
              <div className='p-5'>
                <p className="text-2xl mb-2 font-bold text-white">work2</p>
                <p className="text-lg mb-2 text-gray-300">test</p>
              </div>
            </div>
            <div className='max-w-sm m-3 border border-gray-200 rounded-lg shadow-sm bg-gray-800'>
              <div className='p-5'>
                <p className="text-2xl mb-2 font-bold text-white">work3</p>
                <p className="text-lg mb-2 text-gray-300">test</p>
              </div>
            </div>
          </div>
        </div>
        </div>        
      </div>
    </div>
  )
}

export default WorksPage