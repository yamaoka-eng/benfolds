import { GiEarthAsiaOceania } from 'react-icons/gi'
import { FaArrowRightLong } from 'react-icons/fa6'
import { IoMdClose } from 'react-icons/io'
import { FaAngleDown } from 'react-icons/fa6'
import { FcMindMap, FcMoneyTransfer, FcStatistics } from 'react-icons/fc'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import benfoldsImg from '../public/bf.png'
import gateio from '../public/gate.io.png'
import okx from '../public/okx.png'
import phone from '../public/phone.png'
import coin from '../public/coin.png'
import wineManor from '../public/wineManor.png'

import './App.scss'

import Spline from '@splinetool/react-spline'

export default function App() {
  gsap.registerPlugin(ScrollTrigger)

  const splineRef = useRef(null)

  useEffect(() => onLoad(), [])

  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: '.coin',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        }
      })
      .to('.coin', {
        y: -1
      })
  }, [])

  // 弹窗
  const popWindow = () => {
    const cover = document.querySelector('.cover')
    cover.classList.toggle('flex')
    cover.classList.toggle('hidden')
  }

  // 模型加载
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
            if (!loading.classList.contains('.loading'))
              loading.classList.add('hidden')
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
    <div className="App w-full h-full flex flex-col">
      {/* 第一层内容 */}
      <div className="showStand fixed w-[100vw] h-[100vh] flex flex-col items-center">
        {/* 背景3D模型 */}
        <div
          className="absolute w-[100%] h-[100%] flex items-center justify-center translate-y-10 md:translate-y-16"
          ref={splineRef}
        >
          <div className="loading text-white absolute text-2xl font-bold tracking-widest animate-pulse">
            加载中...
          </div>
          <Spline scene="https://prod.spline.design/QIKrJsLwCazcXXLB/scene.splinecode" />
        </div>
        {/* 内容 */}
        <div className="relative w-full h-full flex flex-col items-center">
          <header className="w-full flex justify-between items-center p-3">
            <div className="flex items-center text-rose-600">
              <img className="w-7 h-7 md:w-10 md:h-10" src={benfoldsImg} />
              <span className="ml-2 italic font-bold font-serif text-xl">
                Benfolds
              </span>
            </div>
          </header>
          <main className="mt-0 md:mt-8 px-4 w-full flex flex-col items-center justify-start text-white font-bold">
            <p className="pb-7">
              <span className="text-lg">
                澳大利亚知名红酒品牌奔富（Penfolds）
              </span>
              <br />
              <span className=" text-center">
                中国代理商
                <span className="text-rose-800 font-extrabold font-serif italic">
                  {' '}
                  Benfolds{' '}
                </span>
                联合音浪公会致力打造“奔富”神话
              </span>
            </p>
            <div className="bg-white w-full z-10 max-w-[700px] rounded-lg p-3 shadow-xl flex flex-col justify-center items-center break-words text-center">
              <p className="text-black">合约地址:</p>
              <strong className="text-sm w-full font-sans">
                0x0318e1eb24ae0ca0d5f230e997abd38020d9b7ac
              </strong>
            </div>
          </main>
          <footer className="mt-auto text-white flex flex-col w-full justify-center items-center ">
            <div
              className="flex transition-all hover:scale-105 justify-center items-center mb-2 cursor-pointer p-5 bg-rose-800 rounded-lg"
              onClick={popWindow}
            >
              <GiEarthAsiaOceania></GiEarthAsiaOceania>
              <span className="mx-2 text-lg">项目介绍</span>
              <FaArrowRightLong />
            </div>
            <div className="w-10 h-10 mt-8 mb-5 font-extrabold animate-bounce">
              <FaAngleDown className="w-full h-full" />
            </div>
          </footer>
        </div>
      </div>
      {/* 第二层内容 */}
      <div className="relative w-full mt-[100vh] bg-white flex flex-col text-center">
        <div className="relative">
          <div className="w-full pt-6 pb-16 md:pt-12 md:pb-28 text-white bg-gradient-to-b from-rose-900 to-black md:font-extrabold md:text-xl md:leading-loose">
            挖掘加密货币很困难。
            <br />
            投资加密货币存在风险。
            <br />
            我们中的许多人被排除在加密货币革命之外...
          </div>
          {/* 波浪 */}
          <svg
            className="md:h-12 h-8 w-full absolute bottom-0 fill-white"
            aria-hidden="true"
            fill=""
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 300"
            preserveAspectRatio="none"
          >
            <path
              className="opacity-10"
              d="M 1000 299 l 2 -279 c -155 -36 -310 135 -415 164 c -102.64 28.35 -149 -32 -232 -31 c -80 1 -142 53 -229 80 c -65.54 20.34 -101 15 -126 11.61 v 54.39 z"
            ></path>{' '}
            <path
              className="opacity-20"
              d="M 1000 286 l 2 -252 c -157 -43 -302 144 -405 178 c -101.11 33.38 -159 -47 -242 -46 c -80 1 -145.09 54.07 -229 87 c -65.21 25.59 -104.07 16.72 -126 10.61 v 22.39 z"
            ></path>{' '}
            <path
              className=""
              d="M 1000 300 l 1 -230.29 c -217 -12.71 -300.47 129.15 -404 156.29 c -103 27 -174 -30 -257 -29 c -80 1 -130.09 37.07 -214 70 c -61.23 24 -108 15.61 -126 10.61 v 22.39 z"
            ></path>
          </svg>
        </div>
        {/* 生态展示 */}
        <div className=" w-full flex flex-col justify-center items-center overflow-x-hidden">
          <div className="flex flex-col md:flex-row justify-center items-center md:items-start">
            {/* 手机币展示 */}
            <div className="aspect-w-1 aspect-h-1 relative flex px-6 items-center justify-center overflow-y-hidden md:ml-20 md:order-2">
              <div className="w-full h-full md:w-80 md:h-80 translate-y-16">
                <img className="w-full h-full" src={phone} />
              </div>
              <div className="coin absolute w-[78%] h-[100%] translate-y-14">
                <img className="w-full h-full" src={coin} />
              </div>
            </div>
            {/* 联名展示 */}
            <div className="flex flex-col mt-20 justify-between items-center md:order-1 md:mt-14">
              <p className="text-rose-800 font-bold text-4xl mb-6">
                Penfolds酒庄联名
              </p>
              <p className="font-bold">更多生态即将推出</p>
              <div className="w-80 h-80 -translate-y-2">
                <img src={wineManor} />
              </div>
            </div>
          </div>
          {/* 卡片 */}
          <div className="flex flex-col md:flex-row items-center justify-center leading-relaxed">
            <div className="w-60 flex flex-col justify-center items-center rounded-md p-10 m-4">
              <div className="w-16 h-16 mb-3">
                <FcMindMap className="w-full h-full" />
              </div>
              <p className="text-rose-900 font-extrabold text-2xl mb-2">生态</p>
              <p className="text-lg">拥有红酒的庞大市场，生态完整可靠。</p>
            </div>
            <div className="w-60 flex flex-col justify-center items-center rounded-md p-10 m-4">
              <div className="w-16 h-16 mb-3">
                <FcMoneyTransfer className="w-full h-full" />
              </div>
              <p className="text-rose-900 font-extrabold text-2xl mb-2">分红</p>
              <p className="text-lg">持有奔富治理代币则享受WBNB分红。</p>
            </div>
            <div className="w-60 flex flex-col justify-center items-center rounded-md p-10 m-4">
              <div className="w-16 h-16 mb-3">
                <FcStatistics className="w-full h-full" />
              </div>
              <p className="text-rose-900 font-extrabold text-2xl mb-2">回购</p>
              <p className="text-lg">项目方将不定期进行回购，拉升市值。</p>
            </div>
          </div>
        </div>
        {/* 合作伙伴 */}
        <div className=" w-full flex-col md:flex-row justify-center items-center">
          <div className="text-3xl font-black translate-y-10">合 作</div>
          <div className="flex w-full justify-center items-center">
            <img className="w-32 h-16" src={gateio} />
            <img className="w-52 h-52" src={okx} />
          </div>
        </div>
      </div>

      {/* 弹窗 */}
      <div className="cover fixed top-0 left-0 right-0 hidden items-center justify-center p-10 h-[100vh] w-[100vw]">
        <div className="rounded-lg p-4 bg-white flex flex-col drop-shadow-lg md:w-96">
          <div
            className="ml-auto mb-2 w-5 h-5 font-black cursor-pointer"
            onClick={popWindow}
          >
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
