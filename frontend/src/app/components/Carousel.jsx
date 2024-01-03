'use client';
import React, { useEffect, useState } from "react";
import Image from "next/image";

function Carousel() {
    const contents=[{
        "image":'/Images/home1.jpeg',
        "title":"Expand your horizon in Rwanda´s GBS industry hub",
        'description':'With a rapidly growing economy, political stability, a skilled talent pool, and a pro-business environment, Rwanda is establishing itself as a leading destination for Global Business Services, attracting both organizations active in the Business Process Outsourcing and Information and Technology Outsourcing sectors.'
      },
      {
        "image":'/Images/home2.jpeg',
        "title":"The Rwanda GBS Growth Initiative was launched!",
        'description':'The Rwanda Global Business Services Growth Initiative was launched on 28th of September at the Kigali Convention Centre. This momentous occasion marked a significant leap forward in positioning Rwanda as a leading Global Business Services (GBS) destination. The Rwanda GBS Growth Initiative is embarking on a transformative mission aimed at consolidating the GBS sector, with the ultimate objective of elevating the corporate environment for participating entities.'
      },
      {
        "image":'/Images/home3.jpeg',
        "title":"The GBS Growth Initiative: Fostering industry growth, investment promotion and talent in Rwanda",
        'description':' The Growth Initiative provides a dynamic platform dedicated to fostering the growth of the GBS industry, advocating for their needs, and nurturing skills and talent development, while enabling Rwanda as a collective to achieve sustainable, social and just development.'
      }
    ]


      const [currentImageIndex, setCurrentImageIndex] = useState(0);
      const handleNext = () => {
        if (
          
          currentImageIndex <
            contents.length - 1
        ) {
          setCurrentImageIndex(currentImageIndex + 1);
        } else {
          setCurrentImageIndex(0);
        }
      };
      const handlePrev = () => {
        if (contents) {
          if (currentImageIndex > 0) {
            setCurrentImageIndex(currentImageIndex - 1);
          } else {
            setCurrentImageIndex(
              contents.length - 1
            );
          }
        }
      };
      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 3);
        }, 30000);
        return () => clearInterval(interval);
      }, []);
      
  return (
    <div className='flex h-full w-full bg-green-300'>


 <div className="  h-[100vh] lg:h-[95vh] flex  px-4 md:px-10 lg:px-20 w-full  items-center relative">
        <div
          className="w-full h-[100vh] lg:h-[95vh] absolute top-0 left-0"
          key={currentImageIndex}
        >
          <Image
            src={
                contents[currentImageIndex].image
            }
            alt={
              "Images"
            }
            priority
            fill
            className={` object-cover ${
              currentImageIndex === 0 ? "object-left" : ""
            } transform ${
              currentImageIndex === 0 ? "full" : "full"
            } transition-transform duration-1000 ease-in-out`}
          />
          <div className="opacity-60 bg-black absolute inset-0"></div>
        </div>

        <div className="w-full  z-10 flex-col space-y-20 flex  justify-start items-start  ">
          <div className="w-full  space-y-6 md:space-y-9 lg:space-y-12  z-10 xl:pl-12 max-h-[40vh]">
            <p className="text-white title  text-3xl md:text-6xl lg:text-7xl font-bold mt-12">
              {
                contents[currentImageIndex].title
              }
            </p>
            <p className="text-white text-sm md:text-lg lg:text-xl md:leading-8">
              {
                contents[currentImageIndex].description
              }
            </p>
          </div>

          <div className="h-16 md:w-1/4 grid grid-cols-2 gap-2 absolute  bottom-16 lg:bottom-16 right-3">
            <button
              onClick={handlePrev}
              name="previous-btn"
              className="h-16 flex flex-row items-end justify-end"
            >
              <Image
                src={"/images/arrow1.svg"}
                alt={""}
                width={48}
                height={48}
                className="py-[18px] px-4 bg-transparent border border-white  rounded-full rotate-180 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-0 hover:scale-110  duration-300 "
              />
            </button>
            <button
              onClick={handleNext}
              name="next-btn"
              className="flex flex-row h-16 rounded-full w-12 items-end justify-start "
            >
              <Image
                src={"/images/arrow2.svg"}
                alt={""}
                width={54}
                height={54}
                className="py-[18px] px-4 bg-transparent border border-white  rounded-full rotate-0 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-0 hover:scale-110  duration-300"
              />
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Carousel