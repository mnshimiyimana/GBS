'use client' 
import React from 'react'
import { useRouter } from 'next/navigation'

function page() {
    const router = useRouter()
  return (
    <div>
        <div>
            <div className="lg:px-16 px-6 lg:pb-60 pb-32">
                <div className="flex lg:flex-row flex-col pt-12">
                    <div className="lg:w-8/12 w-full ">
                        <h1 className="lg:text-6xl text-4xl text-blue font-bold pb-16">News</h1>
                        <div className="grid grid-cols-2 lg:gap-x-5 md:gap-x-5 gap-x-2 lg:border-r border-[#bdbdbd]">
                            <div className="w-full">
                                <div className="w-full relative">
                                    <img src="/Images/news1.jpeg" fill alt="First Image" class="object-cover rounded-md h-[200px] lg:h-[350px] w-[450px] lg:w-[450px]"/>
                                </div>
                                <p className="lg:text-sm text-xs font-light pt-3">10 . OCT . 2023</p>
                                <p className="font-bold lg:text-base text-xs pt-4 pb-3">Urubyiruko rwashyiriweho uburyo rwakorera ibigo mpuzamahanga rutavuye mu Rwanda</p>
                                <button onClick={() => router.push('/article1')} type="button" class=" hover:drop-shadow-lg  text-blue hover:bg-white border-2 border-blue focus:ring-2 focus:outline-2 focus:ring-blue rounded-lg lg:text-[0.850rem] text-xs font-extrabold px-6 py-3 text-center">Read More</button>
                            </div>
                            
                            <div className="w-full lg:pr-12 pr-0">
                                <div className="w-full relative">
                                    <img src="/Images/news2.jpeg" fill alt="First Image" class="bg-blue object-cover rounded-md h-[200px] lg:h-[350px] w-[450px] lg:w-[450px]"/>
                                </div>
                                <p className="lg:text-sm text-xs font-light pt-3">10 . OCT . 2023</p>
                                <p className="font-bold lg:text-base text-xs pt-4 pb-3">Global Business Services Growth Initiative to create more jobs for Rwandans</p>
                                <button onClick={() => router.push('/article2')} type="button" href="/article1" class=" hover:drop-shadow-lg  text-blue hover:bg-white border-2 border-blue focus:ring-2 focus:outline-2 focus:ring-blue rounded-lg lg:text-[0.850rem] text-xs font-extrabold px-6 py-3 text-center">Read More</button>
                            </div>

                        </div>
                    </div>

                    <div className="lg:w-4/12 w-full lg:pl-12 pl-2 lg:pt-0 pt-20">
                              <h1 className="lg:text-6xl text-4xl text-blue font-bold lg:pb-16 pb-8">GBS events</h1>
                                <div className="w-full relative  ">
                                    <img src="/Images/news2.jpeg" fill alt="First Image" class="object-cover rounded-t-md h-[200px] lg:h-[350px] w-[450px] lg:w-[450px]"/>
                                </div>

                                <div className="bg-[#005DAC0D] px-6 border-2 border-[#169EEE1A] rounded-b-md  w-[450px] lg:w-full">
                                <p className="lg:text-base text-sm font-bold pt-10 text-green-300">UPCOMING</p>
                                <p className="font-semibold lg:text-lg text-base pt-4">GBS Connect & Celebrate</p>
                                <p className="font-light lg:text-sm text-xs text-[#818080] pt-1">Come Celebrate the Fantastic Year We Have Had!</p>
                                <div>
                                <ul className="space-y-2 pt-4">
                                    <li className="flex flex-row space-x-3">
                                        <img src="/Images/location.svg" class="text-gray lg:text-base text-[0.50rem]" alt="GBS Logo" />
                                        <a rel="noopener noreferrer" href="#" class="lg:text-md font-light text-[0.80rem]">Kigali</a>
                                    </li>
                                    <li className="flex flex-row space-x-3 pb-6">
                                        <img src="/Images/calendar.svg" class="text-gray" alt="GBS Logo" />
                                        <a rel="noopener noreferrer" href="#" class="lg:text-md font-light text-[0.80rem]">07 . DEC . 2023</a>
                                    </li>

                                </ul>
                                </div>
                                </div>
                            </div>


                </div>
            </div>
        </div>
    </div>
  )
}

export default page