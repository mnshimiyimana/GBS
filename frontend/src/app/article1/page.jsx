'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
function page() {
    const router = useRouter()
  return (
    <div>
        <div className="bg-blue pt-12 lg:px-28 px-8">
            <div className="flex gap-x-2 ">
            <img src="/Images/expand.svg" alt="arrow" className=""/>
            <p className="text-white lg:text-sm text-xs">NEWS</p>
            </div>
            <p className="text-white font-medium lg:text-4xl text-2xl text-center lg:px-32 pt-6">Urubyiruko rwashyiriweho uburyo rwakorera ibigo mpuzamahanga rutavuye mu Rwanda</p>
            <p className="text-white text-center font-extralight pt-10 pb-16">10 . Oct . 2023</p>
        </div>
        <div className="lg:px-60 px-12 text-justify">
            <p className="pt-20 text-gray font-light">
            Iyi gahunda yiswe Rwanda Global Business Services Growth Initiative, yatangijwe kuri uyu wa Kane tariki 28 Nzeri 2023, mu muhango witabiriwe na Minisitiri w’Ikoranabuhanga na Inovasiyo, Ingabire Paula n’abandi bayobozi mu nzego zitandukanye. </p>

            <p className="pt-3 text-gray font-light">Yari imaze igihe yaratangijwe na Guverinoma y’u Rwanda ku bufatanye na Mastercard Foundation n’ikigo Harambee Rwanda gitera inkunga ba rwiyemezamirimo b’urubyiruko.</p>


            <p className="pt-3 text-gray font-light">Igamije kwagura no guteza imbere uburyo bushya bw’imirimo aho umuntu ashobora kuba ari mu Rwanda agakorera ikigo nka Google cyangwa Microsoft Corporation bitamusabye kuva mu gihugu.</p>

            <p className="pt-3 text-gray font-light">Leta n’abandi bafatanyabikorwa, bazajya bafasha sosiyete zo mu Rwanda kubona amahugurwa no kubona ibigo mpuzamahanga bikeneye abakozi.</p>

            <p className="pt-3 text-gray font-light">Umunyamabanga Uhoraho muri Minisiteri y’Ikoranabuhanga na Inovasiyo, Yves Iradukunda, yavuze ko iyi gahunda ikomeje gufasha mu guhanga imirimo mishya ishingiye ku ikoranabuhanga.</p>

            <p className="pt-3 text-gray font-light">Ati “Dushaka ko twahanga imirimo hifashishijwe ikoranabuhanga cyane cyane kuri serivisi zifashishwa n’ibigo bikomeye mu ikoranabuhanga akenshi biba biri hanze ariko tukagira Abanyarwanda cyane cyane urubyiruko bashobora gutanga serivisi bari mu Rwanda ariko bazitanga kuri ibyo bigo biri mu mahanga.”</p>

            <p className="pt-3 text-gray font-light">Yatanze urugero rw’Ikigo Mpuzamahanga gikora ibijyanye n’ikoranabuhanga, Tek Experts, cyatangiye mu 2021 ariko kuri ubu kikaba gifite abakozi barenga 500.</p>

            <p className="pt-3 text-gray font-light">Hari kandi Ikigo CCI Rwanda Ltd, gifite Abanyarwanda barenga 200 bakorera mu Rwanda ariko bakorera ibigo birimo Microsoft Corporation n’ibindi.</p>

            <p className="pt-3 text-gray font-light">Iradukunda ati “Turizera ko uyu mushinga uzafasha cyane mu guhanga imirimo, kuzana ibindi bigo bitandukanye no kubifasha gukura kugira ngo bihe imirimo Abanyarwanda. Ni ikintu cyiza kuko igihugu cyacu cyashyize ikoranabuhanga ku isonga mu guteza imbere ubukungu bw’igihugu, ibi rero biraza kudufasha.”</p>

            <p className="pt-3 text-gray font-light">Minisiteri y’Ikoranabuhanga na Inovasiyo igaragaza ko kugira ngo ibi bigerweho byose bituruka mu bikorwaremezo igihugu cyubatse ari nayo mpamvu hazakomeza kubakwa ibisabwa byose ngo ikoranabuhanga rigere hose kandi Abanyarwanda babashe kumenya kuribyaza umusaruro.</p>

            <p className="pt-3 text-gray font-light">Ibigo bibarizwa muri Global Business Rwanda harimo icyitwa AmaliTech Rwanda, gikora ibijyanye no gukora porogaramu za mudasobwa, guhugura urubyiruko mu bijyanye n’ikoranabuhanga n’ibindi.</p>

            <p className="pt-3 text-gray font-light">Ni ikigo cyafashijwe gihabwa ubushobozi bwo kwagura ibikorwa ndetse no kuba cyabona abashoramari bafasha kugira ngo gikore neza akazi ka buri munsi.</p>

            <p className="pt-3 text-gray font-light pb-8">Umukozi w’Umushinga Harambee, Sharmi Surianarain yavuze ko bafite intego yo gukorana n’inzego zirimo amashuri, inganda n’ibigo bito mu kwagura ubumenyi bw’urubyiruko kugira ngo baharanire ko u Rwanda rwitegura kubyaza umusaruro imirimo mishya igenda iboneka ku Isi by’umwihariko ishingiye ku ikoranabuhanga.</p>

            <div className="flex h-12 gap-x-4">
                <img src="/Images/profile.png" alt="profile" className=""/>
                <div className="grid grid-cols-1">
                    <p className="font-semibold text-gray">IGIHE</p>
                    <p className="text-gray">IGIHE</p>
                </div>
            </div>
        </div>
        
        <h1 class="lg:text-6xl text-4xl text-center text-blue font-medium pt-12">More Articles</h1>
     <div className="grid lg:grid-cols-3 grid-cols-1 pt-16 px-28 pb-12">
        <div className="w-full lg:pr-12 pr-0">
                                <div className="w-full relative">
                                    <img src="/Images/news2.jpeg" fill alt="First Image" class="bg-blue object-cover rounded-md h-[200px] lg:h-[350px] w-[450px] lg:w-[450px]"/>
                                </div>
                                <p className="lg:text-xs text-xs font-light pt-3">10 . OCT . 2023</p>
                                <p className="font-bold lg:text-base text-xs pt-4 pb-3">Global Business Services Growth Initiative to create more jobs for Rwandans</p>
                                <button onClick={() => router.push('/article2')} type="button" class=" hover:drop-shadow-lg  text-blue hover:bg-white border-2 border-blue focus:ring-2 focus:outline-2 focus:ring-blue rounded-lg lg:text-[0.850rem] text-xs font-extrabold px-6 py-3 text-center">Read More</button>
        </div>
     </div>
    </div>
  )
}

export default page