import { GiEarthAsiaOceania } from 'react-icons/gi'
import { FaArrowRightLong } from 'react-icons/fa6'
import { IoMdClose } from 'react-icons/io'
import { useState, useEffect, useRef } from 'react'

import benfoldsImg from '../public/bf.png'
import gateio from '../public/gate.io.png'
import okx from '../public/okx.png'

import './App.scss'

import Spline from '@splinetool/react-spline'

export default function App() {
  const splineRef = useRef(null)

  const popWindow = () => {
    const cover = document.querySelector('.cover')
    cover.classList.toggle('flex')
    cover.classList.toggle('hidden')
  }

  const onLoad = () => {
    const observer = new MutationObserver(mutations => {
      try {
        mutations.forEach(mutation => {
          if (
            mutation.target.tagName === 'CANVAS' &&
            mutation.target.style.width === '100%' &&
            mutation.target.style.height === '100%'
          ) {
            console.log('模型加载完成')
            const loading = document.querySelector('.loading')
            loading.classList.toggle('hidden')
            observer.disconnect() // 停止监听
            throw new Error() //结束循环
          }
        })
      } catch (error) {}
    })

    const config = {
      attributes: true, // 监听属性的变化，因为我们关注的是style的变化
      attributeFilter: ['style'], // 仅监听style属性的变化
      subtree: true // 监听后代节点，以防canvas不是直接子元素
    }

    // 开始观察
    observer.observe(splineRef.current, config)
  }

  return (
    <div className="App w-full h-full overflow-hidden relative">
      {/* 背景3D模型 */}
      <div
        className="w-full h-full fixed top-0 left-0 flex items-center justify-center"
        ref={splineRef}
      >
        <div className="loading text-white absolute top-[50%] left-[50%] animate-pulse translate-x-[-50%] translate-y-[-50%] text-2xl font-bold tracking-widest ">
          加载中...
        </div>
        <Spline
          scene="https://prod.spline.design/QIKrJsLwCazcXXLB/scene.splinecode"
          onLoad={onLoad}
        />
      </div>
      {/* 内容 */}
      <header className="w-full fixed top-0 left-0 flex justify-between items-center p-3">
        <div className="flex items-center text-rose-600">
          <img className="w-10 h-10" src={benfoldsImg} alt="" />
          <span className="ml-2 italic font-bold font-serif text-xl">
            Benfolds
          </span>
        </div>
      </header>
      <main className="relative mt-20 px-4 w-full flex flex-col items-center justify-start text-white font-bold">
        <p className="pb-7">
          澳大利亚知名红酒品牌奔富（Penfolds）
          <span className=" text-center">
            中国代理商
            <span className="text-rose-800 font-extrabold font-serif italic">
              {' '}
              Benfolds{' '}
            </span>
            联合音浪公会致力打造“奔富”神话
          </span>
        </p>
        <div className="w-full max-w-[700px] rounded-lg p-3 shadow-xl flex flex-col justify-center items-center card break-words text-center">
          <p>合约地址:</p>
          <strong className="text-sm w-full font-sans">
            0x0318e1eb24ae0ca0d5f230e997abd38020d9b7ac
          </strong>
        </div>
      </main>
      <footer className="absolute bottom-14 text-white mb-16 flex flex-col w-full justify-center items-center ">
        <div
          className="flex justify-center items-center mb-2 cursor-pointer"
          onClick={popWindow}
        >
          <GiEarthAsiaOceania></GiEarthAsiaOceania>
          <span className="mx-2 text-lg">项目介绍</span>
          <FaArrowRightLong />
        </div>
        <div className="text-sm font-thin mb-8">现已上线BSC链</div>
        <div className="flex w-full justify-center items-center">
          <img className="w-8 h-8" src={benfoldsImg} alt="" />
          <IoMdClose className="mx-2"></IoMdClose>
          <img className="w-16 h-8" src={gateio} alt="" />
          <IoMdClose className="mx-2"></IoMdClose>
          <img className="w-16 h-16" src={okx} alt="" />
        </div>
      </footer>
      {/* 弹窗 */}
      <div className="cover absolute top-0 left-0 right-0 hidden items-center justify-center p-10 h-[100vh] w-[100vw]">
        <div className="rounded-lg p-4 bg-white flex flex-col drop-shadow-lg">
          <div className="ml-auto mb-2 w-5 h-5 font-black" onClick={popWindow}>
            <IoMdClose className="w-full h-full" />
          </div>
          <p>奔富BF 简介：</p>
          <p>
            由澳大利亚知名红酒品牌奔富（Penfolds）中国代理商（Benfolds）联合音浪公会致力打造“奔富”神话。
            💸奔富 $BF 代币经济学: 发行量：2100万枚 买/卖滑点： 3.8%
            1.5%持仓21000枚分红WBNB，1%回流、1%营销、0.3%黑洞销毁，无限销毁打造万倍！
          </p>
          <p className="mt-2">
            ✅BF 官方电报：
            <br />
            <a
              className="italic underline  decoration-sky-500"
              href="https://t.me/Benfolds_CN"
            >
              https://t.me/Benfolds_CN
            </a>
          </p>
          <p className="mt-1">
            ✅BF 官方QQ群:
            <br />
            <a
              className="italic underline  decoration-sky-500"
              href="http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=Ck8be1fFfr4zBbmxUtnfwSO7NGWFFZJa&authKey=oQa0ZS228tLwZZm0H3cjkVJkM0XTP7vS%2F1TkDvTKxcCFApUcS4UwN9DEzCa5iDe4&noverify=0&group_code=901308219"
            >
              901308219
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
