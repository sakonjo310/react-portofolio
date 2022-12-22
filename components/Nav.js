import {BsFillMoonStarsFill} from 'react-icons/bs';
import { FaBars } from 'react-icons/fa'
import Link from "next/link";

export default function Nav() {
  return (
      <nav className='py-10 mb-5 flex justify-between'>
        <h1 className='text-xl font-burtons text-navy dark:text-white'>satoesakonjo</h1>
        <ul className='items-center hidden md:flex'>
          <li className='text-navy font-semibold'><Link href={'#about'}>About</Link></li>
          <li className='ml-8 text-navy font-semibold'><Link href={'#projects'} scrollSmooth>Projects</Link></li>
          <li className='ml-8 text-navy font-semibold'><Link href={'#contact'}>Contact</Link></li>
          <li><BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl text-navy ml-8 dark:text-white'/></li>
          <li><a className='font-semibold bg-gradient-to-r from-[#f29b9b] to-[#f76c6c] text-white px-4 py-2 rounded-md ml-8' href="https://resume.creddle.io/resume/ioayo7nrql9" target='_blank' rel="noreferrer noopener">Resume</a></li>
        </ul>
        <div className='md:hidden'>
          <FaBars />
        </div>
      </nav>
  )
}
