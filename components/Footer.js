import React from 'react'
import {FiLinkedin, FiGithub, FiMail} from 'react-icons/fi';

export default function Footer() {
  return (
    <div class='footer'>
      <div className='text-2xl pb-5 flex gap-4'>
        <a href='https://www.linkedin.com/in/satoe-sakonjo-528558124/' target='_blank' rel="noreferrer noopener"><FiLinkedin /></a>
        <a href='https://github.com/sakonjo310' target='_blank' rel="noreferrer noopener"><FiGithub /></a>
        <a href='https://mail.google.com/mail/?view=cm&source=mailto&to=sakonjo310@gmail.com' target='_blank' rel="noreferrer noopener"><FiMail /></a>
      </div>
      <div className='mb-2'>
        <p>© Satoe Sakonjo. All right reserved</p>
      </div>
    </div>
  )
}
