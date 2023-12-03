import { GiEarthAsiaOceania } from 'react-icons/gi'
import { FaArrowRightLong } from 'react-icons/fa6'
import { IoMdClose } from 'react-icons/io'

import benfoldsImg from '../public/bf.png'

import './App.scss'

import Spline from '@splinetool/react-spline'

export default function App() {
  const popWindow = () => {
    const cover = document.querySelector('.cover')
    cover.classList.toggle('flex')
    cover.classList.toggle('hidden')
  }

  return (
    <div className="App w-full h-full overflow-hidden relative">
      <div className="w-full h-full fixed top-0 left-0">
        <Spline scene="https://prod.spline.design/QIKrJsLwCazcXXLB/scene.splinecode" />
      </div>
      <div className="w-full fixed top-0 left-0 flex justify-between items-center p-3">
        <div className="flex items-center text-rose-600">
          <img className="w-10 h-10" src={benfoldsImg} alt="" />
          <span className="ml-2 italic font-bold font-serif text-xl">
            Benfolds
          </span>
        </div>
      </div>
      <div className="relative mt-20 px-4 w-full flex flex-col items-center justify-start text-white font-bold">
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
        <div className="w-full rounded-lg p-3 shadow-xl flex flex-col justify-center items-center card break-words text-center">
          <p>合约地址:</p>
          <strong className="text-sm w-full font-sans">
            0x0318e1eb24ae0ca0d5f230e997abd38020d9b7ac
          </strong>
        </div>
      </div>
      <div className="absolute bottom-14 text-white mb-16 flex flex-col w-full justify-center items-center ">
        <div
          className="flex justify-center items-center mb-2 cursor-pointer"
          onClick={popWindow}
        >
          <GiEarthAsiaOceania></GiEarthAsiaOceania>
          <span className="mx-2 text-lg">项目介绍</span>
          <FaArrowRightLong />
        </div>
        <div className="text-sm font-thin">现已上线BSC链</div>
      </div>
      <div className="cover absolute top-0 left-0 right-0 hidden items-center justify-center p-10 h-[100vh] w-[100vw]">
        <div className="rounded-lg p-4 bg-white flex flex-col">
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
            <a className="italic underline  decoration-sky-500" href="">
              901308219
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
