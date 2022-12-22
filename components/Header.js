import React from 'react'
import Link from 'next/link'
import {FiLinkedin, FiGithub, FiMail} from 'react-icons/fi'
import { RxDoubleArrowRight } from 'react-icons/rx'
import svg from '../public/Creator-cuate.svg';
import Image from 'next/image';

export default function Header() {
  return (
    <div className='xl:flex xl:justify-center xl:mt-20 w-full'>
      <div className='flex justify-center 2xl:justify-between'>
        <div className='hidden text-2xl p-10 md:flex flex-col justify-center gap-7 py-1 text-navy dark:text-white'>
          <a href='https://www.linkedin.com/in/satoe-sakonjo-528558124/' target='_blank' rel="noreferrer noopener"><FiLinkedin /></a>
          <a href='https://github.com/sakonjo310' target='_blank' rel="noreferrer noopener"><FiGithub /></a>
          <a href='https://mail.google.com/mail/?view=cm&source=mailto&to=sakonjo310@gmail.com' target='_blank' rel="noreferrer noopener"><FiMail /></a>
        </div>
        <div className='text-center p-10 xl:text-left flex flex-col items-center xl:items-start'>
          <h2 className='text-5xl py-2 text-[#f76c6c] font-medium md:text-6xl font-serif'>Hi&#128075;&#127995; I&apos;m Satoe</h2>
          <h3 className='text-2xl py-2 text-navy md:text-3xl dark:text-white'>Full-stack Web Developer</h3>
          <p className='text-md pt-5 leading-8 text-navy md:text-xl max-w-xl mx-auto dark:text-white'>I am a full-stack web developer who has a passion for clean, reusable code and creating a seamless user experience. Please check out my projects down below!</p>
          <div className='md:hidden text-2xl pt-10 flex gap-4 text-navy dark:text-white'>
            <a href='https://www.linkedin.com/in/satoe-sakonjo-528558124/' target='_blank' rel="noreferrer noopener"><FiLinkedin /></a>
            <a href='https://github.com/sakonjo310' target='_blank' rel="noreferrer noopener"><FiGithub /></a>
            <a href='https://mail.google.com/mail/?view=cm&source=mailto&to=sakonjo310@gmail.com' target='_blank' rel="noreferrer noopener"><FiMail /></a>
          </div>
          <Link href={'#about'}><button className='bg-gradient-to-r from-[#628586] to-[#304242] text-white px-4 py-2 rounded-md mt-10 font-semibold flex items-center' href="#">More about me<RxDoubleArrowRight className='ml-2' /></button></Link>
        </div>
      </div>
      <div className='relative mx-auto w-96 h-96 mt-10 mb-10 xl:mx-10 hidden xl:block'>
        <Image src={svg} />
      </div>
      <div class="custom-shape-divider-bottom-1671660728">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
        </svg>
      </div>
    </div>
  )
}
