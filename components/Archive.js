import design from '../public/design.png';
import code from '../public/code.png';
import consulting from '../public/consulting.png';
import Image from 'next/image';

<section className='bg-navy'>
          <div className='text-center font-sans'>
            <h3 className='text-3xl py-1 text-navy dark:text-white'>Skills</h3>
          </div>
          <div className='lg:flex gap-10'>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
              <Image src={design} width={100} height={100} className='mx-auto' />
              <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
              <p>
                Creating elegant designs suited for your needs following core design theory.
              </p>
              <h4 className='py-4 text-orange-500'>Design tools I use</h4>
              <p className='text-navy py-1'>Photoshop</p>
              <p className='text-navy py-1'>Illustrator</p>
              <p className='text-navy py-1'>Figma</p>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white '>
              <Image src={code} width={100} height={100} className='mx-auto' />
              <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
              <p>
                Creating elegant designs suited for your needs following core design theory.
              </p>
              <h4 className='py-4 text-orange-500'>Design tools I use</h4>
              <p className='text-navy py-1'>Photoshop</p>
              <p className='text-navy py-1'>Illustrator</p>
              <p className='text-navy py-1'>Figma</p>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
              <Image src={consulting} width={100} height={100} className='mx-auto' />
              <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
              <p>
                Creating elegant designs suited for your needs following core design theory.
              </p>
              <h4 className='py-4 text-orange-500'>Design tools I use</h4>
              <p className='text-navy py-1'>Photoshop</p>
              <p className='text-navy py-1'>Illustrator</p>
              <p className='text-navy py-1'>Figma</p>
            </div>
          </div>
        </section>