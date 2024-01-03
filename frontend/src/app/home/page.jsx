'use client'
import React, { useState } from 'react';
import Carousel from '../components/Carousel';

function Page() {

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + 3) % 3); // Assuming you have 3 slides
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % 3); // Assuming you have 3 slides
  };      
  
  return (
    <div>
     <Carousel />

      <div className="lg:p-20 p-12 bg-[#005DAC0D]">
        <div>
          <h1 className="lg:text-6xl md:text-4xl text-4xl text-blue font-medium pt-8 pb-4">What we do</h1>
        </div>
        
              <div className="grid lg:grid-cols-3 gap-x-10 grid-cols-1 gap-y-4 pt-12">
                  <div className="bg-white border-white border-2 hover:drop-shadow-lg rounded-md lg:p-10 p-5">
                      <img src="/Images/bullseye.svg" alt="bull's eye"/>
                      <div className="lg:pt-8 pt-3">
                          <h4 className="font-semibold lg:text-xl text-base">Entry support into Rwanda</h4>
                          <p className="font-light lg:pt-6 pt-3 lg:pb-8 pb-3 lg:text-base text-[0.80rem] text-gray text-justify">
                          We specialize in bridging investors with promising prospects in Rwanda, extending holistic support from inception to execution.
                          </p>
                          <div className="flex justify-between">
                            <p></p>
                            <img src="/Images/arrow2.svg" alt=""/>
                          </div>
                      </div>
                  </div>

                  <div className="bg-white border-white border-2 hover:drop-shadow-md rounded-md lg:p-10 p-5">
                      <img src="/Images/bullseye.svg" alt="bull's eye"/>
                      <div className="lg:pt-8 pt-3">
                          <h4 className="font-semibold lg:text-xl text-base">Coordination across the Rwandan GBS sector</h4>
                          <p className="font-light lg:pt-6 pt-3 lg:pb-8 pb-3 lg:text-base text-[0.80rem] text-gray text-justify">
                          Our collaboration extends to close partnerships with government agencies and key industry players, enabling us to champion policies that foster economic growth and encourage...
                          </p>
                          <div className="flex justify-between">
                            <p></p>
                            <img src="/Images/arrow2.svg" alt=""/>
                          </div>
                      </div>
                  </div>

                  <div className="bg-white border-white border-2 hover:drop-shadow-md rounded-md lg:p-10 p-5">
                      <img src="/Images/bullseye.svg" alt="bull's eye"/>
                      <div className="lg:pt-8 pt-3">
                          <h4 className="font-semibold lg:text-xl text-base">Coordinated upskilling of the Rwandan Workforce</h4>
                          <p className="font-light lg:pt-6 pt-3 lg:pb-8 pb-3 lg:text-base text-[0.80rem] text-gray text-justify ">
                          We provide a spectrum of training initiatives and workshops designed to elevate the skillset of Rwanda's workforce, in line with the industry needs.
                          </p>
                          <div className="flex justify-between">
                            <p></p>
                            <img src="/Images/arrow2.svg" alt=""/>
                          </div>
                      </div>
                  </div>

                  
              </div>
      </div>



      <div className="flex lg:flex-row flex-col justify-between w-full h-full gap-x-10 lg:p-16 p-12">
        <div className="lg:w-1/2 w-full h-auto object-cover">
          <img src="/Images/home4.jpeg" fill className="rounded-md h-full object-cover" alt=""/>
        </div>

        <div className="lg:w-1/2 w-full lg:pt-0 pt-8">
          <h1 className="lg:text-6xl text-4xl text-blue font-medium">Why Rwanda?</h1>
          <p className="text-gray pt-8 text-md pb-8">Rwanda has all the fundamentals it needs to grow as a leading GBS delivery destination.</p>

          <div className="flex flex-col gap-3">
            <div className="flex flex-row justify-between w-full border border-[#00000029] rounded-md px-3 py-4">
              <p class="font-light">Rwanda Vision 2050</p>
              <img src="/Images/add.svg" className="w-6 h-6" alt=""/>
            </div>

            <div className="flex flex-row justify-between w-full border border-[#00000029] rounded-md px-3 py-4">
              <p class="font-light">Ease of doing business</p>
              <img src="/Images/add.svg" className="w-6 h-6" alt=""/>
            </div>

            <div className="flex flex-row justify-between w-full border border-[#00000029] rounded-md px-3 py-4">
              <p class="font-light">Strong Infrastructure</p>
              <img src="/Images/add.svg" className="w-6 h-6" alt=""/>
            </div>

            <div className="flex flex-row justify-between w-full border border-[#00000029] rounded-md px-3 py-4">
              <p class="font-light">Bilinguality & digital skills</p>
              <img src="/Images/add.svg" className="w-6 h-6" alt=""/>
            </div>

            <div className="flex flex-row justify-between w-full border border-[#00000029] rounded-md px-3 py-4">
              <p class="font-light">Impact sourcing destination</p>
              <img src="/Images/add.svg" className="w-6 h-6" alt=""/>
            </div>

            <div className="flex flex-row justify-between w-full border border-[#00000029] rounded-md px-3 py-4">
              <p class="font-light">Lifestyle</p>
              <img src="/Images/add.svg" className="w-6 h-6" alt=""/>
            </div>
          </div>
        </div>
      </div>



    </div>
  )
}

export default Page