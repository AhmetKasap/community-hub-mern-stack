import React from 'react'
import Link from 'next/link'

import { AiOutlineArrowDown } from "react-icons/ai";
import { FaHome } from "react-icons/fa";
import { FiTrendingUp } from "react-icons/fi";







const LeftNavbar = () => {
  return (
    <>
      <div className='flex flex-col h-full gap-8 ml-4'>
        <div className='flex flex-col '>
          <Link href="/" className='flex flex-row '>
            <FaHome className='text-3xl text-gray-700 mr-5 mb-2'></FaHome>
            <h1 className='text-xl font-roboto text-gray-700 mt-1'>Anasayfa</h1>
          </Link>
          <Link href="/" className='flex flex-row mt-5'>
            <FiTrendingUp className="text-3xl text-gray-700 mr-5 mb-2"></FiTrendingUp>
            <h1 className='text-xl font-roboto text-gray-700 mt-1'>Popüler</h1>
          </Link>

        </div>
        <hr></hr>

        <div className=''>
          <Link href="/"><h1 className='text-xl font-roboto text-gray-700'>Kategoriler</h1></Link>
        </div>

        <div className='group ml-4'>

          <div className='  '>
            <button className='flex flex-row justify-between  w-full'>
              <span className='font-roboto text-gray-800'>Spor</span>
              <AiOutlineArrowDown className='text-xl self-center'></AiOutlineArrowDown>
            </button>
          </div>

          <div className='hidden group-focus-within:block mt-5 ml-5 h-auto'>
            <ul>
              <li className='mt-3'><Link href="/pop" className='text-sm text-gray-500 font-roboto  hover:text-gray-700 '>NBA</Link></li>
              <li className='mt-3'><Link href="/pop" className='text-sm text-gray-500 font-roboto  hover:text-gray-700 '>UFC</Link></li>
              <li className='mt-3'><Link href="/pop" className='text-sm text-gray-500 font-roboto  hover:text-gray-700 '>UCL</Link></li>
            </ul>
          </div>

        </div>

        <div className='group ml-4'>

          <div className='  '>
            <button className='flex flex-row justify-between  w-full'>
              <span className='font-roboto text-gray-800'>Oyun</span>
              <AiOutlineArrowDown className='text-xl self-center'></AiOutlineArrowDown>
            </button>
          </div>

          <div className='hidden group-focus-within:block mt-5 ml-5 h-auto'>
            <ul>
              <li className='mt-3'><Link href="/pop" className='text-sm text-gray-500 font-roboto  hover:text-gray-700 '>CS:GO</Link></li>
              <li className='mt-3'><Link href="/pop" className='text-sm text-gray-500 font-roboto  hover:text-gray-700 '>Valorant</Link></li>
              <li className='mt-3'><Link href="/pop" className='text-sm text-gray-500 font-roboto  hover:text-gray-700 '>Metin2</Link></li>
              <li className='mt-3'><Link href="/pop" className='text-sm text-gray-500 font-roboto  hover:text-gray-700 '>Fifa</Link></li>

            </ul>
          </div>

        </div>

        <div className='group ml-4'>

          <div className='  '>
            <button className='flex flex-row justify-between  w-full'>
              <span className='font-roboto text-gray-800'>Kripto Para</span>
              <AiOutlineArrowDown className='text-xl self-center'></AiOutlineArrowDown>
            </button>
          </div>

          <div className='hidden group-focus-within:block mt-5 ml-5 h-auto'>
            <ul>
              <li className='mt-3'><Link href="/pop" className='text-sm text-gray-500 font-roboto  hover:text-gray-700 '>Bitcoin</Link></li>
              <li className='mt-3'><Link href="/pop" className='text-sm text-gray-500 font-roboto  hover:text-gray-700 '>Avax</Link></li>
              <li className='mt-3'><Link href="/pop" className='text-sm text-gray-500 font-roboto  hover:text-gray-700 '>Etherium</Link></li>
              <li className='mt-3'><Link href="/pop" className='text-sm text-gray-500 font-roboto  hover:text-gray-700 '>Sol</Link></li>

            </ul>
          </div>

        </div>


        <div className='group ml-4'>

          <div className='  '>
            <button className='flex flex-row justify-between  w-full'>
              <span className='font-roboto text-gray-800'>Tarih</span>
              <AiOutlineArrowDown className='text-xl self-center'></AiOutlineArrowDown>
            </button>
          </div>

          <div className='hidden group-focus-within:block mt-5 ml-5 h-auto'>
            <ul>
              <li className='mt-3'><Link href="/pop" className='text-sm text-gray-500 font-roboto  hover:text-gray-700 '>Osmanlı</Link></li>
              <li className='mt-3'><Link href="/pop" className='text-sm text-gray-500 font-roboto  hover:text-gray-700 '>Roma</Link></li>
            </ul>
          </div>

        </div>

        <div className='group ml-4'>

          <div className='  '>
            <button className='flex flex-row justify-between  w-full'>
              <span className='font-roboto text-gray-800'>Bilim</span>
              <AiOutlineArrowDown className='text-xl self-center'></AiOutlineArrowDown>
            </button>
          </div>

          <div className='hidden group-focus-within:block mt-5 ml-5 h-auto'>
            <ul>
              <li className='mt-3'><Link href="/pop" className='text-sm text-gray-500 font-roboto  hover:text-gray-700 '>Radyoaktivite</Link></li>
              <li className='mt-3'><Link href="/pop" className='text-sm text-gray-500 font-roboto  hover:text-gray-700 '>Kara Delikler</Link></li>
              <li className='mt-3'><Link href="/pop" className='text-sm text-gray-500 font-roboto  hover:text-gray-700 '>Paralel Evrenler</Link></li>
            </ul>
          </div>

        </div>













      </div>




    </>
  )
}

export default LeftNavbar