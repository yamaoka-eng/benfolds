import { useEffect } from 'react'
import { LuFileText } from 'react-icons/lu'
import { GiEarthAsiaOceania } from 'react-icons/gi'
import { FaArrowRightLong } from 'react-icons/fa6'

import './App.scss'

import Spline from '@splinetool/react-spline'

export default function App() {
  const popWindow = () => {
    const cover = document.querySelector('.cover')
    cover.classList.toggle('opacity-0')
  }

  return (
    <div className="App w-full h-full overflow-hidden relative">
      <div className="w-full h-full fixed top-0 left-0">
        <Spline scene="https://prod.spline.design/QIKrJsLwCazcXXLB/scene.splinecode" />
      </div>
      <div className="w-full fixed top-0 left-0 flex justify-between items-center p-3">
        <div className="flex items-center text-rose-600">
          <img className="w-10 h-10" src="/public/bf.png" alt="" />
          <span className="ml-2 italic font-bold font-serif text-xl">
            Benfolds
          </span>
        </div>
        <div className="w-8 h-8 text-slate-200" onClick={popWindow}>
          <LuFileText className="w-full h-full" />
        </div>
      </div>
      <div className="mt-20 h-[90%] px-4 w-full flex flex-col items-center justify-start text-white font-bold font-mono">
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
        <div className="w-full rounded-lg p-3 shadow-xl flex flex-col flex-wrap card text-center">
          <span>合约地址:</span>
          <span className="text-sm">
            0x0318e1eb24ae0ca0d5f230e997abd38020d9b7ac
          </span>
        </div>
        <div className="mt-auto mb-16 flex flex-col w-full justify-center items-center ">
          <div className="flex justify-center items-center mb-2">
            <GiEarthAsiaOceania></GiEarthAsiaOceania>
            <span className="mx-2 text-lg" onClick={popWindow}>
              About Benfolds
            </span>
            <FaArrowRightLong />
          </div>
          <div className="text-sm font-thin">现已上线BSC链</div>
        </div>
      </div>
      <div
        className="cover absolute top-0 left-0 right-0 opacity-0 flex items-center justify-center p-10 h-[100vh] w-[100vw]"
        onClick={popWindow}
      >
        <div className="rounded-lg p-4 bg-white flex flex-col">
          奔富BF 简介：
          由澳大利亚知名红酒品牌奔富（Penfolds）中国代理商（Benfolds）联合音浪公会致力打造“奔富”神话。
          💸奔富 $BF 代币经济学: 发行量：2100万枚 买/卖滑点： 3.8%
          1.5%持仓21000枚分红WBNB，1%回流、1%营销、0.3%黑洞销毁，无限销毁打造万倍！
          <span className="mt-2">
            ✅BF 官方电报：
            <br />
            https://t.me/Benfolds_CN
          </span>
          <span className="mt-1">
            ✅BF 官方QQ群:
            <br />
            901308219
          </span>
        </div>
      </div>
    </div>
  )
}
