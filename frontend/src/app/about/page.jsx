import React from 'react'

function page() {
  return (
    <div>
      <section>
      <div className="h-full">
        <img src="/Images/team.jpeg" fill alt="team image" className="w-full"></img> 
      </div>
      <div className="lg:p-24 p-12">
        <h1 className="text-blue lg:text-5xl text-3xl font-bold text-center">Rwanda GBS Growth Initiative</h1>
        <div>
        <p class="lg:text-lg text-[0.80rem] flex text-justify text-gray pt-10 font-light">
        At the Rwanda Global Business Services Growth Initiative, we recognize the immense potential held by the GBS sector and its pivotal position in today's global economy. Rwanda, with its strategic geographic location, highly skilled workforce, and business-friendly environment, presents a distinctive and compelling opportunity for companies looking to establish a strong foothold. Our commitment is to actively support GBS companies in their investment ventures within Rwanda. Leveraging our extensive network, deep industry knowledge, and strong partnerships with government entities, we are dedicated to facilitating your smooth entry into this promising market and ensuring your sustained success.
        </p>
      </div>
      </div>


      <div class="bg-[#005DAC0D] lg:p-24 p-8">
        <div>
            <h1 className="lg:text-5xl text-2xl text-blue font-bold ">Advantages of joining the GBS Growth Initiative</h1>
            <p className="text-gray pt-8 font-light lg:text-base text-[0.80rem]">
            Our mission is to provide comprehensive support and guidance to businesses operating in Rwanda's evolving Global Business Services sector, helping them thrive. Through strategic partnerships, cutting-edge solutions, and a commitment to excellence, we aim to foster a conducive environment for GBS sector growth, job creation, and sustainable economic development.
            </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-x-5 grid-cols-1 gap-y-4 pt-12">
            <div className="bg-white border-white border-2 hover:drop-shadow-lg rounded-md lg:p-10 p-5">
                <img src="/Images/bullseye.svg" alt="bull's eye"/>
                <div className="lg:pt-8 pt-3">
                    <h4 className="font-semibold lg:text-xl text-base">Entry support into Rwanda</h4>
                    <p className="font-light lg:pt-6 pt-3 lg:pb-8 pb-3 lg:text-base text-[0.80rem] ">
                    The GBS Growth Initiative supports new investors by offering essential market intelligence and research. We deliver precise details on costs, a clear setup timeline, expert guidance on real estate, and connections to pertinent partners—all tailored to ensure a seamless and successful entry for GBS investors in Rwanda.
                    </p>
                </div>
            </div>

            <div className="bg-white border-white border-2 hover:drop-shadow-md rounded-md lg:p-10 p-5">
                <img src="/Images/bullseye.svg" alt="bull's eye"/>
                <div className="lg:pt-8 pt-3">
                    <h4 className="font-semibold lg:text-xl text-base">Coordination across the Rwandan GBS sector</h4>
                    <p className="font-light lg:pt-6 pt-3 lg:pb-8 pb-3 lg:text-base text-[0.80rem] ">
                    The GBS Growth Initiative offers a dynamic platform and a hub for knowledge sharing, fostering trusted collaboration among the private sector, ecosystem stakeholders, and government. Together, we engage in open dialogues to address industry challenges, co-create innovative solutions, and promote sustainable and scalable growth. Our mission includes advocating for policy alignment and sector development, acting as a bridge between the industry and government to drive positive change.
                    </p>
                </div>
            </div>

            <div className="bg-white border-white border-2 hover:drop-shadow-md rounded-md lg:p-10 p-5">
                <img src="/Images/bullseye.svg" alt="bull's eye"/>
                <div className="lg:pt-8 pt-3">
                    <h4 className="font-semibold lg:text-xl text-base">Coordinated upskilling of the Rwandan Workforce</h4>
                    <p className="font-light lg:pt-6 pt-3 lg:pb-8 pb-3 lg:text-base text-[0.80rem]">
                    The Growth Initiative strategically drives the implementation of upskilling initiatives, with a dedicated focus on enhancing, retraining, and future-proofing our talented workforce. We are committed to continually develop the human capital infrastructure, in supporting the industry's rapid growth.
                    </p>
                </div>
            </div>

            
        </div>
      </div>


      <div className="lg:p-24 p-8">
        <h1 className="text-blue font-bold lg:text-5xl text-2xl pb-16">GBS team</h1>
        <div class="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-10">
          <div className="flex flex-col space-y-2">
          <img src="/Images/Member1.webp" className="object-cover border lg:h-96  border-gray object-top rounded-[4px]" alt="First member"/>
          <div className="flex flex-row pt-4 justify-between items-center">
            <p className=" text-sm  md:text-xl text-black font-bold bold ">Charlotte Umutoni Karera</p>
            <img src="/Images/linkedin.svg" className="w-10 " alt="LinkedIn pic" href="https://www.linkedin.com/in/charlotte-umutoni-karera-804426108/?originalSubdomain=rw"/>      
          </div>
          <p className="text-gray lg:text-sm text-xs">GBS Growth Initiative Chief Executive Officer</p>
          </div>
        </div>
      </div>


      <div className="lg:p-24 p-8 bg-[#005DAC0D]">
        <h1 className="text-blue font-bold lg:text-5xl text-3xl pb-16">GBS Board</h1>
        <div class="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-10">
          <div className="flex flex-col space-y-2">
          <img src="/Images/board1.webp" className="object-cover h-96 border-gray object-top rounded-md" alt="First member"/>
          <div className="flex flex-row pt-4 justify-between items-center">
            <p className="text-sm  md:text-xl text-black font-bold bold ">Francis Gatare</p>
            <img src="/Images/linkedin.svg" className="w-10" alt="LinkedIn pic" href="https://www.linkedin.com/in/charlotte-umutoni-karera-804426108/?originalSubdomain=rw"/>      
          </div>
          <p className="text-gray text-sm">Advisory Board Member</p>
          </div>

          <div className="flex flex-col space-y-2">
          <img src="/Images/board2.webp" className="object-cover h-96 border-gray object-top rounded-md" alt="First member"/>
          <div className="flex flex-row pt-4 justify-between items-center">
            <p className="text-sm  md:text-xl text-black font-bold bold ">Gary Bennett</p>
            <img src="/Images/linkedin.svg" className="w-10" alt="LinkedIn pic" href="https://www.linkedin.com/in/charlotte-umutoni-karera-804426108/?originalSubdomain=rw"/>      
          </div>
          <p className="text-gray text-sm">Advisory Board Memberr</p>
          </div>

          <div className="flex flex-col space-y-2">
          <img src="/Images/board3.webp" className="object-cover h-96 border-gray object-top rounded-md" alt="First member"/>
          <div className="flex flex-row pt-4 justify-between items-center">
            <p className="text-sm  md:text-xl text-black font-bold bold ">HON. Ms. Paula Ingabire</p>
            <img src="/Images/linkedin.svg" className="w-10" alt="LinkedIn pic" href="https://www.linkedin.com/in/charlotte-umutoni-karera-804426108/?originalSubdomain=rw"/>      
          </div>
          <p className="text-gray text-sm">Advisory Board Member</p>
          </div>

          <div className="flex flex-col space-y-2">
          <img src="/Images/board4.webp" className="object-cover h-96 border-gray object-top rounded-md" alt="First member"/>
          <div className="flex flex-row pt-4 justify-between items-center">
            <p className="text-sm  md:text-xl text-black font-bold bold ">Martin Roe</p>
            <img src="/Images/linkedin.svg" className="w-10" alt="LinkedIn pic" href="https://www.linkedin.com/in/charlotte-umutoni-karera-804426108/?originalSubdomain=rw"/>      
          </div>
          <p className="text-gray text-sm">Advisory Board Member</p>
          </div>

          <div className="flex flex-col space-y-2">
          <img src="/Images/board5.webp" className="object-cover h-96 border-gray object-top rounded-md" alt="First member"/>
          <div className="flex flex-row pt-4 justify-between items-center">
            <p className="text-sm  md:text-xl text-black font-bold bold ">Sharmi Surianarain</p>
            <img src="/Images/linkedin.svg" className="w-10" alt="LinkedIn pic" href="https://www.linkedin.com/in/charlotte-umutoni-karera-804426108/?originalSubdomain=rw"/>      
          </div>
          <p className="text-gray text-sm">Advisory Board Member</p>
          </div>

          <div className="flex flex-col space-y-2">
          <img src="/Images/board6.webp" className="object-cover h-96 border-gray object-top rounded-md" alt="First member"/>
          <div className="flex flex-row pt-4 justify-between items-center">
            <p className="text-sm  md:text-xl text-black font-bold bold ">Fred Swaniker</p>
            <img src="/Images/linkedin.svg" className="w-10" alt="LinkedIn pic" href="https://www.linkedin.com/in/charlotte-umutoni-karera-804426108/?originalSubdomain=rw"/>      
          </div>
          <p className="text-gray text-sm">Advisory Board Member</p>
          </div>

          <div className="flex flex-col space-y-2">
          <img src="/Images/board7.webp" className="object-cover h-96 border-gray object-top rounded-md" alt="First member"/>
          <div className="flex flex-row pt-4 justify-between items-center">
            <p className="text-sm  md:text-xl text-black font-bold bold ">Ross Moody</p>
            <img src="/Images/linkedin.svg" className="w-10" alt="LinkedIn pic" href="https://www.linkedin.com/in/charlotte-umutoni-karera-804426108/?originalSubdomain=rw"/>      
          </div>
          <p className="text-gray text-sm">Advisory Board Member</p>
          </div>
        </div>
        
        
      </div>

      <div className="grid lg:grid-cols-2 gap-x-20 grid-cols-1 gap-y-4 justify-between lg:p-24 p-12">
        <div>
          <h1 className="text-blue font-semibold lg:text-6xl text-3xl lg:pb-16 pb-8">GBS partners</h1>
          <p className="text-gray font-light lg:text-base text-[0.80rem] lg:pb-0 pb-3">
          Cultivating strong partnerships is at the heart of our approach. We are deeply committed to collaborating with industry leaders who share our passion for delivering outstanding business solutions. Through our expansive network of strategic allies, we not only enhance our capabilities but also extend the breadth of services available to our valued clients.
          </p>
        </div>
       
       <div>
        <div className="flex mb-4 gap-x-6 w-full">
          <div className="border border-[#707070] rounded-md items-center w-1/2">
            <img src="/Images/partner1.png" fill alt="MINICT" className="w-60"/>
          </div>
          <div className="border border-[#707070] rounded-md w-1/2 flex justify-center items-center" >
            <img src="/Images/partner2.png" fill alt="RDB" className="w-28"/>
          </div>
        </div>

        <div className="flex mb-4 gap-x-6 w-full">
          <div className="border border-[#707070] rounded-lg p-2 items-center">
            <img src="/Images/partner3.jpeg" fill alt="Partners" className=""/>
          </div>
        </div>

        <div className="flex mb-4 gap-x-6 w-full">
          <div className="border border-[#707070] rounded-md w-1/2 flex justify-center items-center p-4">
            <img src="/Images/partner4.png" fill alt="MINICT" className="w-60"/>
          </div>
          <div className="border border-[#707070] rounded-md w-1/2 flex justify-center items-center" >
            <img src="/Images/partner5.png" fill alt="RDB" className="w-28"/>
          </div>
        </div>
       </div>
        
      </div>

      </section>

    </div>
  )
}

export default page