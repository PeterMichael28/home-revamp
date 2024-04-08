import { useState } from "react";
import { faqData } from "~/assets/data";

const Faqs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const toggleTab = (tab) => {
    if (activeTab === tab) {
      setActiveTab(0);
    } else {
      setActiveTab(tab);
    }
  };

  return (
    <div className="mx-auto space-y-6 text-left mt-16">
      {faqData.map((faq) => (
        <SingleFAQ
          toggleTab={(tab) => toggleTab(tab)}
          activeTab={activeTab}
          num={faq.id}
          key={faq.id}
          question={faq.question}
          answer={faq.answer}
        />
      ))}
    </div>
  );
};

export default Faqs;

export function SingleFAQ({ toggleTab, activeTab, num, answer, question }) {
  return (
    <div className="border-b border-gray-200 ">
      <button className="flex items-center justify-between w-full" onClick={() => toggleTab(num)}>
        <span className="text-[20px]  font-medium text-secondary text-left">{question}</span>
        {activeTab === num ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
            <path
              d="M7.75736 7.96139L12 12.204M12 12.204L16.2426 16.4467M12 12.204L7.75736 16.4467M12 12.204L16.2426 7.96139"
              stroke="#01100A"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        )}
      </button>
      {/* { activeTab === num && ( */}
      <div
        className={`mt-6 h-0 transition-all duration-500 ${activeTab === num && "h-[150px] md:h-[100px]"} overflow-hidden`}
      >
        <p className="text-[1rem] md:text-[.9rem] text-gray-dark tracking-[-0.32px] leading-[30px]">{answer}</p>
      </div>
    </div>
  );
}
