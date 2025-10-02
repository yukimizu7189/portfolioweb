import React from 'react'

const HomePage = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <div className="text-center lg:w-2/3 w-full">
     <img className="object-contain object-cover object-center rounded" src="public/logokari.jpg" alt='yukimizu_logo'></img>
      <h1 className="title-font sm:text-4xl text-3xl mb-2 font-medium text-gray-900">yukimizu</h1>
      <p className="mb-8 leading-relaxed">ゆきみず</p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default HomePage