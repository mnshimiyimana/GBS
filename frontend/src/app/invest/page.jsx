'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

function page() {
  const router = useRouter()
  return (
    <div>
      <section>
        <div className="lg:px-20 md:px-12 px-4 lg:pt-8 pt-4">
        <div className="bg-[#005DAC0D] lg:p-20 p-8 rounded-md">
          <h1 className="text-blue lg:text-6xl text-2xl text-center font-semibold">Invest in Rwanda</h1>
          <p className="text-gray mt-6 lg:text-lg text-xs text-justify font-light">
            Rwanda, nestled in the heart of Africa, beckons as a compelling destination for Global Business Services (GBS) firms seeking strategic growth opportunities. Renowned for its stable political climate, strategic location, and a burgeoning pool of skilled professionals, Rwanda offers an ideal ecosystem for GBS investments. With a government committed to fostering a business-friendly environment, extensive infrastructure development, and a focus on sustainability, Rwanda presents GBS firms with a unique platform to tap into the burgeoning African market, optimize operational efficiency, and contribute to the nation's ongoing economic transformation. In this dynamic landscape, Rwanda stands as a beacon of opportunity, inviting GBS firms to thrive, expand, and make a lasting impact.
          </p>
        </div>
        </div>

        <div className="lg:px-0 md:px-8 px-4">
          <div className="grid lg:grid-cols-2 gap-x-20 grid-cols-1 gap-y-4 justify-between lg:px-48 pt-12">
            <div className="">
              <img src="/Images/logo2.png" alt="logo"/>
              <h4 class="text-blue lg:text-xl text-lg font-semibold pt-5">Move-in-ready prime real estate</h4>
              <p class="text-gray lg:text-base md:text-sm text-xs pt-5 font-light text-justify">Kigali, the capital city, boasts readily available prime real estate, featuring top-tier office spaces strategically situated for businesses. With approximately 9,000 square meters of both available and constructed office facilities, businesses can discover the ideal setting to establish and run their operations with maximum efficiency and effectiveness. Kigali invites you to carve your path to success in a location where opportunity knows no bounds.</p>
            </div>
            <div className=" flex w-full gap-4">
              <img src="/Images/building1.png" alt="KH" className="w-1/2 rounded-md"/>
              <img src="/Images/building2.png" alt="I&M" className="w-1/2 rounded-md"/>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-x-20 grid-cols-1 gap-y-4 justify-between lg:px-48 pt-12">
            <div className="">
              <img src="/Images/logo2.png" alt="logo"/>
              <h4 class="text-blue lg:text-xl text-lg font-semibold pt-5">Strong & reliable communication infrastructure</h4>
              <p class="text-gray lg:text-md md:text-sm text-xs pt-5 font-light text-justify">Rwanda shines brightly as it clinches an impressive second place ranking within the East African community for network readiness. The country offers a compelling proposition with its swift and dependable international fiber optic connectivity, perfectly tailored to meet the exacting demands of the Global Business Services (GBS) sector. Rwanda's exceptional infrastructure boasts an extensive domestic fiber optic backbone, spanning a remarkable 7,000 kilometres and extending its reach to every district across the nation. This remarkable feat underscores Rwanda's unwavering dedication to providing businesses with a rock-solid foundation, ensuring not only the efficiency but the resilience of their operations in an increasingly interconnected world. With Rwanda's cutting-edge connectivity, GBS firms can confidently navigate the digital landscape, harnessing the power of seamless communication and collaboration to drive success and innovation.</p>
            </div>
            <div className=" flex flex-col gap-4 w-full lg:pt-24 pt-2">
              <div className="flex gap-4 w-full h-1/3">
              <img src="/Images/liquid.png" alt="liquid" className="w-1/2 rounded-md border border-gray p-6"/>
              <img src="/Images/KT.png" alt="KT logo" className="w-1/2 rounded-md border border-gray px-12"/>
              </div>
              <div className="flex gap-4 w-full" >
              <img src="/Images/canalbox.png" alt="canalbox" className="w-1/2  rounded-md border border-gray p-3"/>
              <img src="/Images/starlink.svg" alt="starlink" className="w-1/2 rounded-md border border-gray p-3"/>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-x-20 grid-cols-1 gap-y-4 pt-12 justify-between lg:px-48">
            <div className="">
              <img src="/Images/logo2.png" alt="logo"/>
              <h4 class="text-blue lg:text-xl text-lg font-semibold pt-5">Rich & growing talent pool</h4>
              <p class="text-gray lg:text-base md:text-sm text-xs pt-5 font-light text-justify">Rwanda boasts a thriving talent ecosystem, underpinned by its rich and expanding talent pool. With over 30% of Rwandans proficient in both English and French, the country stands as a linguistic bridge to global opportunities. Moreover, Rwanda annually produces an impressive cohort of over 50,000 higher education graduates, ensuring a consistent influx of highly qualified professionals. Notably, Rwanda plays host to prestigious STEM-focused universities, including Carnegie Mellon University, African Leadership University, and the Africa Institute of Mathematical Sciences, serving as fertile ground for cultivating a reservoir of top-tier talent. This convergence of linguistic versatility, educational excellence, and a commitment to STEM education solidifies Rwanda's position as a magnet for skilled individuals, ready to drive innovation and growth.</p>
            </div>
            <div className=" flex w-full gap-4">
              <img src="/Images/people.webp" fill alt="KH" className="w-full rounded-md"/>
            </div>
          </div>
        </div>

      <div className="lg:p-28 p-4">
          <div>
          <h1 class="text-blue lg:text-5xl text-2xl font-semibold lg:pt-0 pt-12">Find out more about Rwanda as an outsourcing destination</h1>
          <h4 className="font-medium pt-10 lg:text-base text-sm">RWANDA GLOBAL BUSINESS SERVICES CASE STUDY & SPECIAL COUNTRY REPORT</h4>
          <p className="text-gray lg:pt-10 pt-4 font-light pb-6 lg:text-base md:text-sm text-xs">
          Harambee Rwanda has released a Rwanda Global Business Services case study & special country report outlining the growing GBS Sector in Rwanda. The report highlights Rwanda’s strengths including ease of doing business, a strong and growing talent pool of young people, strong and reliable IT infrastructure, and a high level of service delivery compared to other African locations for GBS businesses already in operation.
          </p>
          <button onClick={() => router.push('https://harambee.rw/wp-content/uploads/2022/11/Rwanda-GBS-Case-Study-and-Country-Report.pdf')} type="button" class=" hover:drop-shadow-lg  text-blue hover:bg-white border-2 border-blue focus:ring-2 focus:outline-2 focus:ring-blue rounded-lg lg:text-base text-xs font-bold px-4 py-3 text-center">Read Report</button>
          </div>


      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-2 justify-between w-full pt-10 lg:gap-x-16 gap-x-8 pb-4">

        <div className="w-full h-[200px] lg:h-[400px]">
          <iframe src="https://www.youtube.com/embed/uDEpKy10c3o" title="Rwanda As a Global Business Services Destination" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className="rounded-md w-full h-full"></iframe>
        </div>

        <div className="w-full h-[200px] lg:h-[400px]">
          <iframe src="https://www.youtube.com/embed/VIo9Cel8w-4" title="Rwanda Global Business Services Ecosystem" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className="rounded-md w-full h-full"></iframe>
        </div>

      </div>


      </div>
      </section>
    </div>
  )
}

export default page