import React, { useState } from 'react';

const accordionContent = [
  {
    question: "Rwanda Vision 2050",
    answer:
      "The Rwanda Vision 2050 is a policy blueprint that guides the country´s socio-economic transformation. The vision emphasizes various sectors to drive economic growth and development but has already identified services as the “most important engine of Rwanda’s medium to long term growth”. Vision 2050 therefore identifies “export-oriented knowledge services” as a key priority to the country´s economic transformation agenda. The vision also places a strong emphasis on investing in education and skills development to build a highly skilled workforce capable of driving the country´s economic growth.",
  },
  {
    question: "Ease of doing business",
    answer:
      "Rwanda's impressive second place ranking in the Ease of Doing Business index highlights the nation's commitment to creating a favorable business environment. This suggests the potential for significant benefits, as it signifies streamlined bureaucracy, reduced red tape, and improved infrastructure. These factors can attract investment, foster entrepreneurship, and ultimately contribute to economic growth and a higher quality of life for Rwandans. In addition, Rwanda has implemented the ‘’New Investment Code’’, which introduces a new set of investment incentives applicable to key priority sectors, including ICT and BPO.",
  },
  {
    question: "Strong Infrastructure",
    answer:
      "Rwanda's strong infrastructure, boasting 96% 4G LTE coverage and a 7000 km fiber optic network, plays a pivotal role in its business appeal. Ranked second in the East African Community and sixth in Africa for network readiness according to the World Bank's ‘’Doing Business 2020’’ report, this connectivity enhances business efficiency and innovation. It positions Rwanda as an enticing hub for entrepreneurs, enabling them to leverage advanced technology for business growth.",
  },
  {
    question: "Bilinguality & digital skills",
    answer:
      "Rwanda's workforce stands out for its bilingual proficiency and digital literacy. With many of its citizens possessing excellent bilingual skills in English and French, and a growing proficiency in digital skills, Rwanda offers a uniquely versatile talent pool. This bilingualism enables effective communication in international business, while the workforce's digital prowess fosters innovation and adaptability. For businesses, it means access to a skilled and adaptable workforce ready to excel in an increasingly globalized and technology-driven economy.",
  },
  {
    question: "Impact sourcing destination",
    answer:
      "Rwanda has an intricate, synergized GBS ecosystem that facilitates skills development and subsequently allowing operators to access untapped talent. There are several coordinated segments, including national, private, non-profit and institutionalized education that are interlinked to form a single mega GBS ecosystem, coordinated by the GBS Growth Initiative, championing transformation, diversity, equity, and inclusion.",
  },
  {
    question: "Lifestyle",
    answer:
      "Rwanda, located in the heart of Africa, is a captivating destination known for its breathtaking landscapes of rolling hills and serene lakes and its rich cultural heritage. The country´s natural beauty, including national parks and the famous mountain gorillas, offers a unique and unforgettable experience.<br>Additionally, Rwanda's dedication to eco-tourism, safety, and cleanliness, coupled with its commitment to make the country accessible with many nationalities receiving visa-free or visa-on-arrival access make it a top destination on the continent.",
  },
  // Add more objects as needed
];

function Accordion() {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion((prevActiveAccordion) =>
      prevActiveAccordion === index ? null : index
    );
  };

  return (
    <div>
      {accordionContent.map((section, index) => (
        <div className="relative mb-3" key={index}>
          <h6 className="mb-0">
            <button
              className="relative flex items-center w-full p-4 text-left transition-all ease-in cursor-pointer border rounded-md border-gray text-black font-light "
              onClick={() => toggleAccordion(index)}
            >
              <span>{section.question}</span>
              <img
                src="/Images/add.svg"
                className={`w-4 h-4 ml-auto transition-transform ${
                  activeAccordion === index ? 'rotate-90' : ''
                }`}
                alt=""
              />
            </button>
          </h6>
          {activeAccordion === index && (
            <div className="p-4 text-sm leading-normal text-gray font-light bg-[#005DAC0D] rounded-md mt-1">
              {section.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Accordion;
