import React from 'react'
import { Link } from 'react-router-dom'
import FadeInUp from '../animation/fade'
import "../animation/animation.css"

const HomePage = () => {
  return (
    <div>
      <section className="text-white">
        <div className="container-flex bg-[url('./images/background.jpg')] min-h-[90vh] bg-no-repeat bg-cover mx-auto px-5 pt-36">
          <FadeInUp>
            <div className='md:flex-row flex flex-col items-center justify-center '>
              <img className="object-contain object-center rounded w-48 h-auto" src="illust.png" alt='yukimizu_logo'></img>
              <div className="text-center lg:w-2/3 w-auto px-5">
                <h1 className="text-5xl mb-4 font-bold text-white">yukimizu</h1>
                <p className="mb-8 leading-relaxed">ゆきみず</p>
                <div className="flex justify-center">
                  <Link to="/works" className="no-underline m-2 inline-flex text-gray-900 bg-gray-100 shadow-lg border-0 py-2 px-6 hover:bg-gray-300 rounded text-lg">find out more</Link>
                </div>
              </div>
            </div>
          </FadeInUp>
        </div>
        <div className="container-flex mx-auto pb-5 bg-black">
          <FadeInUp>
            <div className='flex text-center flex-col justify-center py-10'>
              
              <h1 className="text-5xl mb-5 font-bold text-white">About</h1>

              <div className='text-lg text-left mx-auto px-5 pb-5 text-white leading-relaxed'>
                映像制作, 写真撮影, コスプレ, アマチュア無線など多趣味にいろいろやっている学生<br></br>
                最近は情シスにも手を出し始めた<br></br>
                イベント好きで, 主に同人誌即売会を中心にライブやフリマに参加している
              </div>

              <div className="flex justify-center">
                  <Link to="/univ" className="no-underline m-2 inline-flex text-black bg-gray-100 border-0 py-2 px-6 hover:bg-gray-300 rounded text-lg">大学関係のプロフィールはこちら</Link>
              </div>
              
            </div>
          </FadeInUp>
        </div>
        <div className="container mx-auto px-5 pb-5">
        
          <div className='flex text-center flex-col justify-center py-5'>
            <FadeInUp>
              <h1 className="text-5xl mb-5 font-bold text-black">Interests</h1>
            </FadeInUp>
          </div>
          <FadeInUp>
            <div className='flex flex-col grid lg:flex-row lg:grid-cols-3 justify-center'>
              <div className='max-w-sm m-3 border border-gray-200 rounded-lg shadow-sm bg-gray-800'>
                <div className='p-5'>
                  <p className="text-2xl mb-2 font-bold text-white">Photo</p>
                  <p className="text-lg mb-2 text-gray-300">Nikon D610を用いて、主にポートレート・コスプレ撮影を行っています。GODOXストロボを3点所有。</p>
                </div>
              </div>
              <div className='max-w-sm m-3 border border-gray-200 rounded-lg shadow-sm bg-gray-800'>
                <div className='p-5'>
                  <p className="text-2xl mb-2 font-bold text-white">Video</p>
                  <p className="text-lg mb-2 text-gray-300">AviUtlをメインに、MVを中心に映像制作を行っています。</p>
                </div>
              </div>
              <div className='max-w-sm m-3 border border-gray-200 rounded-lg shadow-sm bg-gray-800'>
                <div className='p-5'>
                  <p className="text-2xl mb-2 font-bold text-white">Develop</p>
                  <p className="text-lg mb-2 text-gray-300">HTML、JS、React、Ruby、C、C++、Pythonあたりを勉強中です。</p>
                </div>
              </div>
            </div>
          </FadeInUp>
        </div>
         <div className="container mx-auto px-5 pb-5">
          <div className='flex text-center flex-col justify-center py-5'>
            <FadeInUp>
              <h1 className="text-5xl mb-5 font-bold text-black">Links</h1>
            </FadeInUp>
          </div>
          <FadeInUp>
            <div className='flex flex-col grid lg:flex-row lg:grid-cols-4 pb-20 justify-center'>
              <div className='mb-10 mx-1 text-center'>
                <p className="text-3xl mb-2 font-bold text-gray-900">X (Twitter)</p> 
                  <a href="https://x.com/yukimizu7189" target="_blank" rel="noreferrer" className="no-underline inline-flex items-center text-white bg-gray-900 border-0 py-2 px-4 mb-2 mx-2 hover:bg-gray-700 rounded">
                    <div className='text-sm text-left'>
                      <span className='block text-sm'>main</span>
                      <span className='block text-lg'>@yukimizu7189</span>
                    </div>
                  </a>
                  <a href="https://x.com/yukimizucosplay" target="_blank" rel="noreferrer" className="no-underline inline-flex items-center text-white bg-gray-900 border-0 py-2 px-4 mb-2 mx-2 hover:bg-gray-700 rounded">
                    <div className='text-sm text-left'>
                      <span className='block text-sm'>cosplay</span>
                      <span className='block text-lg'>@yukimizucosplay</span>
                    </div>
                  </a>
              </div>
              <div className='mb-10 mx-1 text-center'>
                <p className="text-3xl mb-2 font-bold text-gray-900">Github</p> 
                  <a href="https://github.com/yukimizu7189" target="_blank" rel="noreferrer" className="no-underline inline-flex items-center text-white bg-gray-900 border-0 py-2 px-4 mb-2 hover:bg-gray-700 rounded">
                    <div className='text-sm text-left'>
                      <span className='block text-sm'>Github</span>
                      <span className='block text-lg'>yukimizu7189</span>
                    </div>
                  </a>
              </div>
              <div className='mb-10 mx-1 text-center'>
                <p className="text-3xl mb-2 font-bold text-gray-900">Discord</p> 
                  <a href="https://discord.gg/gBy7krwY" target="_blank" rel="noreferrer" className="no-underline inline-flex items-center text-white bg-blue-700 border-0 py-2 px-4 mb-2 hover:bg-blue-400 rounded">
                    <div className='text-sm text-left'>
                      <span className='block text-sm'>Discord フレンド申請</span>
                      <span className='block text-lg'>yukimizu_7189</span>
                    </div>
                  </a>
              </div>
              <div className='mb-10 mx-1 text-center'>
                <p className="text-3xl mb-2 font-bold text-gray-900">Contact</p> 
                  <div className="no-underline inline-flex items-center text-white bg-emerald-500 border-0 py-2 px-4 mb-2 hover:bg-emerald-600 rounded">
                    <div className='text-sm text-left'>
                      <span className='block text-sm'>E-mail</span>
                      <span className='block text-lg'>yukimizu@yukidokemizu.com</span>
                    </div>
                  </div>
              </div>
            </div>
          </FadeInUp>
          <FadeInUp>
            <div className='flex flex-col grid lg:flex-row lg:grid-cols-3 pb-20 justify-center'> 
              <a href="https://love.tsukuba-ac.net/" target="_blank" rel="noreferrer">
                <img src="tsukuba-love1.png" className='mx-auto mb-4' width = "200" height = "40" alt="つくば大好き連合"></img>
              </a>
              <a href="https://www.city.tsukuba.lg.jp/index.html" target="_blank" rel="noreferrer">
                <img src="https://www.city.tsukuba.lg.jp/material/files/group/3/tsukuba_banner_234_60.jpg" className='mx-auto mb-4' width = "200" height = "40" alt="つくば市"></img>
              </a>
              <a href="https://sites.google.com/view/happy-busy/" target="_blank" rel="noreferrer">
                <img src="unnamed.png" className='mx-auto mb-4' width = "200" height = "40" alt="時間のないサイト運営者リング"></img>
              </a>
              <a href="http://www.comiket.co.jp/" target="_blank" rel="noreferrer">
                <img src="http://www.comiket.co.jp/images/comiket_banner00.gif" width="200" height="40" alt="コミックマーケット公式サイト" className='mx-auto mb-4'></img>
              </a>
              <a href="https://portal.circle.ms/" target="_blank" rel="noreferrer">
                <img src="https://emeraldportal.blob.core.windows.net/bunner/portalBN_200_40.png" className='mx-auto mb-4' width = "200" height = "40" alt="Circle.ms"></img>
              </a>
              <a href="https://www.comic1.jp/" target="_blank" rel="noreferrer">
                <img src="comic1_bnr_l_01.gif" className='mx-auto mb-4' width = "200" height = "40" alt="comic1"></img>
              </a>
            </div>
          </FadeInUp>
        </div>
      </section>
    </div>
  )
}

export default HomePage