import React from 'react'
import CarPng from '../../assets/car1.png'

const About = () => {
  return (
    <>
     <span id="about"></span>
    <div className='dark:bg-dark bg-slate-100 dark:text-white sm:min-h-[600px] sm:grid sm:place-items-center duration-300'>
      <div className='container'>
        <div className='grid grid-cols-1 sm:grid-cols-2 place-items-center'>
          <div data-aos="slide-right" data-aos-duration="1500">
            <img src={CarPng} alt='' className='sm:scale-125 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]' />

          </div>
          <div>
            <div className='space-y-5 sm:p-16 pb-6'>
              <h1 className='text-3xl sm:text-4xl font-bold font-serif' data-aos="fade-up" >
                  About Us
              </h1>
              <p data-aos="fade-up" className='leading-8 tracking-wide'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam consectetur, dolore minima eum repellat molestiae iure? Ea obcaecati pariatur totam, quae accusamus ex, sint ratione nihil praesentium, nam ut quos.
              </p>
              <p className='' data-aos="fade-up">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti inventore hic corporis similique, distinctio vitae voluptatem maiores dolore iure dolores tenetur voluptatum reiciendis eos mollitia impedit quasi dicta ipsa quas.
              </p>
              <button data-aos="fade-up" className='button-outline'>
                  Get Started
              </button>
            </div>
          </div>
        </div>
      </div>


    </div>
    </>
  )
}

export default About

