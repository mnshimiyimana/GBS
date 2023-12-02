import React from 'react'
import Image from 'next/image'

function Footer() {
  return (
    <div>
        <footer className="lg:px-12 px-8 divide-y bottom-0 bg-[#005DAC0D]">
	<div className="container flex flex-col justify-between py-10 mx-auto space-y-4 lg:flex-row lg:space-y-0">
		<div className="lg:w-1.5/5 lg:px-20 px-0">
			<a rel="noopener noreferrer" href="#" className="flex justify-start space-x-3 lg:justify-start">
				<div className="flex items-center justify-center ">
                <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="/Images/logo.png" class="h-16" alt="GBS Logo" />
                </a>
				</div>
			</a>
            <p className="flex flex-wrap lg:text-md text-[0.80rem] pt-3 text-gray">Fostering Collaboration, Fuelling Growth.</p>
		</div>
		<div className="text-md gap-x-3 gap-y-8 lg:w-1/5">
			<div className="space-y-3 lg:mt-0 mt-6">
				<h3 className="tracki uppercase text-blue font-bold">Contact Us</h3>
				<ul className="space-y-6">
					<li className="flex flex-row space-x-3">
                        <img src="/Images/mail.svg" class="text-gray lg:text-base text-[0.80rem]" alt="GBS Logo" />
						<a rel="noopener noreferrer" href="#" class="lg:text-base text-[0.80rem]">info@gbs.rw</a>
					</li>
					<li className="flex flex-row space-x-3">
                        <img src="/Images/location.svg" class="text-gray" alt="GBS Logo" />
						<a rel="noopener noreferrer" href="#" class="lg:text-base text-[0.80rem]">KG 562 st, Kigali - Rwanda</a>
					</li>

				</ul>
			</div>
		</div>
        <div className="text-md lg:w-5/5 lg:mx-8 ">
          <div className="flex space-y-3  lg:w-full ">
          
          <form className="gap-y-8" >
          <h3 className="text-blue font-bold mb-4 text-lg lg:pt-0 pt-4"> Leave Us A Message</h3>
          <div className="flex mb-4 items-center justify-center w-full">
            {/* <label className="mr-2"> */}
              <input
                type="text"
                name="fullName"
                className="border-2 mr-2 border-[#005DAC66] lg:py-3 py-2 lg:px-3 px-2 lg:p-0 p-4 rounded-md w-1/2"
                placeholder="Full Names"
              />
            {/* </label> */}
            {/* <label> */}
              <input
                type="email"
                name="email"
                className="border-2 border-[#005DAC66] lg:py-3 py-2 lg:px-3 px-2 lg:p-0 p-4 rounded-md w-1/2"
                placeholder="Email Address"
                required
              />
            {/* </label> */}
  </div>
                <label>
                  <input
                    type="text"
                    name="companyName"
                    className="border-2 w-full mb-4 py-3 px-3 rounded-md border-[#005DAC66]"
                    placeholder="Company Name"
                  />
                </label>
                <label>
                  <textarea
                    name="message"
                    className="w-full px-3 py-6 border-2 rounded-md text-start border-[#005DAC66]"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </label>
      <div className="flex justify-end">
      <button type="button" class=" text-white hover:bg-blue bg-blue border-2 border-blue focus:ring-2 focus:outline-2 focus:ring-blue font-medium rounded-lg text-base px-5 py-3 text-center right-0">Submit</button>
      </div>
            </form>


                </div>
              </div>
        </div>
	   <div className="py-6 text-center text-md border-t-4 border-[#005DAC] text-gray">Rwanda GBS GI. All rights reserved.</div>
</footer>
    </div>
  )
}

export default Footer