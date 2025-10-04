import React from 'react'
import FadeInUp from '../animation/fade'
import "../animation/animation.css"

const UnivPage = () => {
  return (
      <div>
        <div className="container mx-auto pb-2">
          <div className='flex text-center flex-col justify-center py-5'>
            <FadeInUp>
              <h1 className="text-5xl mb-5 font-bold text-gray-900">Univ.Bio</h1>
            </FadeInUp>
            <FadeInUp>
              <div className='text-lg text-center mx-auto px-5 pb-5 text-gray-900 leading-relaxed'>
                筑波大学 情報学群 情報メディア創成学類 mast24<br></br>
                神奈川県から通っており、始発と終電に生活を支配されている<br></br>
                様々な組織に所属し、いろいろやっている
              </div>
            </FadeInUp>
          </div>
        </div>
        <div className="container mx-auto px-5 pb-5">
          <FadeInUp>
            <div className='flex text-center flex-col justify-center py-2'>
              <h1 className="text-3xl mb-5 font-bold text-black">所属組織</h1>
            </div>
          </FadeInUp>
          <FadeInUp>
            <div className='flex flex-col grid lg:flex-row lg:grid-cols-3 justify-center'>
              
              <a href="https://sohosai.com/" target="_blank" rel="noreferrer" className='no-underline hover:bg-orange-400 max-w-sm m-3 rounded-lg shadow-lg bg-orange-500'>
                <div className='p-5'>
                  <p className="text-2xl mb-2 font-bold text-white">学園祭実行委員会</p>
                  <p className="text-lg mb-2 text-white">
                    情報メディアシステム局 (jsys) <br></br>
                    jsys25 映像部門 制作担当長
                  </p>
                </div>
              </a>
              <a href="https://gsk-tsukuba.net/" target="_blank" rel="noreferrer"  className='no-underline hover:bg-purple-300 max-w-sm m-3  rounded-lg shadow-lg bg-purple-400'>
                <div className='p-5'>
                  <p className="text-2xl mb-2 font-bold text-white">現代視覚文化研究会</p>
                  <p className="text-lg mb-2 text-white">コスプレ班 班長<br></br>他喫茶班・ボカロ班に所属</p>
                </div>
              </a>
              <a href="https://www.comic-tsukuba.com/" target="_blank" rel="noreferrer"  className='no-underline hover:bg-sky-300 max-w-sm m-3 rounded-lg shadow-lg bg-sky-400'>
                <div className='p-5'>
                  <p className="text-2xl mb-2 font-bold text-white">コミックつくば！準備会</p>
                  <p className="text-lg mb-2 text-white">設立時参画・総合業務・情シス<br></br>筑波大学内同人誌即売会</p>
                </div>
              </a>
              <a href="https://www.word-ac.net/" target="_blank" rel="noreferrer"  className='no-underline hover:bg-gray-700 max-w-sm m-3 rounded-lg shadow-lg bg-gray-900'>
                <div className='p-5'>
                  <p className="text-2xl mb-2 font-bold text-white">WORD編集部</p>
                  <p className="text-lg mb-2 text-gray-300">
                    WORDIAN<br></br>
                    筑波大学情報科学類誌WORD
                  </p>
                </div>
              </a>
              <a href="https://kirinohanovel.com/" target="_blank" rel="noreferrer"  className='no-underline hover:bg-gray-400 max-w-sm m-3 rounded-lg shadow-lg bg-gray-500'>
                <div className='p-5'>
                  <p className="text-2xl mb-2 font-bold text-white">きりのはのべる</p>
                  <p className="text-lg mb-2 text-white">映像担当<br></br>同人ゲーム制作サークル</p>
                </div>
              </a>
            </div>
          </FadeInUp>
        </div>
      </div>        
  )
}

export default UnivPage