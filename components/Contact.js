import React from 'react'

export default function Contact() {
  return (
    <div class="contact">
      <div class="custom-shape-divider-top-1671685247">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 0L0 0 598.97 114.72 1200 0z" class="shape-fill"></path>
        </svg>
      </div>
      <div className='flex flex-col items-center text-center text-navy mb-10'>
        <h1 className='text-2xl md:text-4xl mt-10 '>Talk to me!</h1>
      </div>
      <div class="night h-8">
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
      </div>
      <div className='flex justify-center items-center'>
        <div className="w-full shadow-lg p-10 rounded-xl my-10 lg:max-w-xl">
          <form className="mt-6">
            <div className="mb-10">
              <label>
                <span className="text-gray-700">Your name</span>
                <input
                  type="text"
                  name="name"
                  className="
                    w-full
                    block
                    border-gray-300
                    rounded-md
                    shadow-sm
                    focus:border-[#f29b9b]
                    focus:ring
                    focus:ring-[#ecbcbc]
                    focus:ring-opacity-50
                  "
                  placeholder="John cooks"
                />
              </label>
            </div>
            <div className="mb-10">
              <label>
                <span className="text-gray-700">Email address</span>
                <input
                  name="email"
                  type="email"
                  className="
                    block
                    w-full
                    border-gray-300
                    rounded-md
                    shadow-sm
                    focus:border-[#f29b9b]
                    focus:ring
                    focus:ring-[#ecbcbc]
                    focus:ring-opacity-50
                  "
                  placeholder="john.cooks@example.com"
                  required
                />
              </label>
            </div>
            <div className="mb-2">
              <label>
                <span class="text-gray-700">Message</span>
                <textarea
                  name="message"
                  className="
                    block
                    w-full
                    border-gray-300
                    rounded-md
                    shadow-sm
                    focus:border-[#f29b9b]
                    focus:ring
                    focus:ring-[#ecbcbc]
                    focus:ring-opacity-50
                  "
                  rows="5"
                ></textarea>
              </label>
            </div>

            <div class="mb-6 flex justify-center mt-5">
              <button
                type="submit"
                className="font-semibold bg-gradient-to-r from-[#f29b9b] to-[#f76c6c] text-white px-8 py-2 rounded-md">
                Submit
              </button>
            </div>
            <div></div>
          </form>
        </div>
      </div>
    </div>
  )
}
