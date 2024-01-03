'use client' 
import React from 'react'
import { useRouter } from 'next/navigation'
function page() {

    const router = useRouter()

    
  return (
    <div>
    <div className=" bg-blue pt-12 lg:px-28 px-8 z-10">
        <div className="flex gap-x-2 ">
        <img src="/Images/expand.svg" alt="arrow" className=""/>
        <p className="text-white lg:text-sm text-xs">NEWS</p>
        </div>
        <p className="text-white font-medium lg:text-4xl text-2xl text-center lg:px-32 pt-6">Global Business Services Growth Initiative to create more jobs for Rwandans</p>
        <p className="text-white text-center font-extralight pt-10 pb-40">10 . Oct . 2023</p>
    </div>


    <div className="  w-full glide-02 flex justify-center h-full z-20">
   
    <div className="overflow-hidden w-full pb-12" data-glide-el="track">
        <ul className=" w-full overflow-hidden p-0 whitespace-no-wrap grid grid-cols-3 [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] w-full pt-6">
            <li><img src="/Images/image1.jpeg" className="object-cover w-full max-w-[300px] max-h-full m-auto rounded-md" /></li>
            <li><img src="/Images/image4.jpeg" className="object-cover w-full max-w-[700px] max-h-[900px] m-auto rounded-md " /></li>
            <li><img src="/Images/image5.jpeg" className="object-cover w-full max-w-[300px] max-h-full m-auto rounded-md" /></li>
        </ul>
    </div>
    
    <div className="absolute flex items-center justify-center w-full gap-2 pt-96" data-glide-el="controls[nav]">
        <button class="p-4 group" data-glide-dir="=0" aria-label="goto slide 1"><span className="block  w-2 h-2 transition-colors duration-300 rounded-full ring-1 ring-slate-500 bg-gray focus:outline-none"></span></button>
        <button class="p-4 group" data-glide-dir="=1" aria-label="goto slide 2"><span className="block w-2 h-2 transition-colors duration-300 rounded-full ring-1 ring-slate-500 bg-gray focus:outline-none"></span></button>
        <button class="p-4 group" data-glide-dir="=2" aria-label="goto slide 3"><span className="block w-2 h-2 transition-colors duration-300 rounded-full ring-1 ring-slate-500 bg-gray focus:outline-none"></span></button>
    </div>
</div>



    <div className="lg:px-60 px-12 text-justify">
        <p className="pt-20 text-gray font-light">
        In a historic collaboration that sets the stage for Rwanda’s economic transformation, the Rwanda Development Board (RDB) and the Rwandan Ministry of ICT and Innovation (MINICT), in partnership with Harambee, the Mastercard Foundation, and the Special Initiative “Decent Work for a Just Transition” of the German Federal Ministry for Economic Cooperation and Development (BMZ) today launched the Rwanda Global Business Services (GBS) Growth Initiative. The launch marked a significant step in positioning Rwanda as a leading Global Business Services (GBS) destination. </p>

        <p className="pt-3 text-gray font-light">The Rwanda GBS Growth Initiative sets forth on a transformative journey, with the main objective to grow the GBS sector in Rwanda, create high-quality employment for young Rwandans, drive exports, grow the Government’s revenue base, and offer competitive profits to operators. The joint industry initiative is driven by three mandates: Support for market entry in Rwanda (a one-stop store for investors), promotion of investment-enabling conditions, and education and training of a skilled workforce.</p>


        <p className="pt-3 text-gray font-light">In 2019, the Global Business Services sector was established in Rwanda. Today, the transformation is remarkable. Sixteen international GBS companies have chosen Rwanda as their operational base, starkly contrasting the two that existed in 2019. These companies have emerged as beacons of economic growth, creating over 1,800 jobs for young Rwandans.</p>

        <p className="pt-3 text-gray font-light">Rwanda’s ambitions stretch beyond mere numbers and its goal to create at least 5,500 decent jobs by 2025 in the GBS sector. The Rwanda GBS Growth Initiative’s long-term vision extends well into the future. By enhancing the overall business climate, it aspires to position Rwanda as a preeminent global destination for premium global business services, marking a promising trajectory for the nation’s economy and global business ambitions.</p>

        <p className="pt-3 text-gray font-light">The official launch event unveiled the roadmap of the Rwanda GBS Growth Initiative and emphasised the strategic partnerships that will drive its success.</p>

        <p className="pt-3 text-gray font-light">Commenting on the launch, Paula Musoni, the Hon Minister of ICT and Innovation, said:</p>

        <p className="pt-3 text-gray font-light">“It is heart-warming to see the Rwanda Global Business Services Growth Initiative come to life. We have young people looking for opportunities and the Rwanda Global Business Services Growth Initiative will skill them and create efficiencies across the economy that will have a multiplier effort for our economic growth. I can’t wait to see what the future holds for the Global Business Services sector in Rwanda. For the young people, now is the time. Take up every opportunity you can.”</p>

        <p className="pt-3 text-gray font-light">Philip Lucky, the Acting Chief Investment Officer at RDB said:</p>

        <p className="pt-3 text-gray font-light">“The GBS Growth Initiative is a welcome development for Rwanda. The initiative will be key to identifying and removing blockages to the sector’s success and ensuring that Rwandan youth are well-prepared for successful careers in the sector.”</p>

        <p className="pt-3 text-gray font-light">On her part, Charlotte Karera, the Executive of Rwanda GBS Growth Initiative, said:</p>

        <p className="pt-3 text-gray font-light">“This initiative aims to boost Rwanda as a GBS destination, ensuring readiness in infrastructure, skills, and support for investors. We are excited to collaborate with Rwanda’s government, especially RDB and the Ministry of ICT, and education and skilling partners like Harambee. Our focus includes marketing, investment promotion, skills, and industry development to create youth employment opportunities with transferable skills. Our vision is to strengthen Rwanda’s value proposition for sustained job creation and economic growth.”</p>

        <p className="pt-3 text-gray font-light">As Rwanda opens its doors wider to the world, the call to action for companies is clear. Whether already operating in Rwanda or exploring new opportunities, the Rwanda GBS Growth Initiative offers a golden opportunity to be part of a thriving sector.</p>

        <p className="pt-3 text-gray font-light pb-8">Rwanda’s dedication to the Global Business Services sector is evident in its ambitious vision for the future. Collaborating with Rwanda presents an opportunity to not only bolster companies’ prospects but also play a role in the nation’s economic expansion and technological progress. The Global Business Services industry outlook in Rwanda is promising, and there is an invitation to get involved in its unfolding success story.</p>

        <div className="flex h-12 gap-x-4">
            <img src="/Images/profile.png" alt="profile" className=""/>
            <div className="grid grid-cols-1">
                <p className="font-semibold text-gray">RWANDA GBS GROWTH INITIATIVE</p>
                <p className="text-gray">RWANDA GBS GROWTH INITIATIVE</p>
            </div>
        </div>
    </div>
    
    <h1 class="lg:text-6xl text-4xl text-center text-blue font-medium pt-20">More Articles</h1>
 <div className="grid lg:grid-cols-3 grid-cols-1 pt-16 px-28 pb-12">
    <div className="w-full">
        <div className="w-full relative">
            <img src="/Images/news1.jpeg" fill alt="First Image" class="object-cover rounded-md h-[200px] lg:h-[350px] w-[450px] lg:w-[450px]"/>
        </div>
            <p className="lg:text-xs text-xs font-light pt-3">10 . OCT . 2023</p>
            <p className="font-bold lg:text-base text-xs pt-4 pb-3">Urubyiruko rwashyiriweho uburyo rwakorera ibigo mpuzamahanga rutavuye mu Rwanda</p>
            <button onClick={() => router.push('/article1')} type="button" class=" hover:drop-shadow-lg  text-blue hover:bg-white border-2 border-blue focus:ring-2 focus:outline-2 focus:ring-blue rounded-lg lg:text-[0.850rem] text-xs font-extrabold px-6 py-3 text-center">Read More</button>
    </div>
 </div>
</div>
  )
}



export default page