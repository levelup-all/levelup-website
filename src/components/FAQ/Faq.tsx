"use client";
import React, { useState } from "react";
import Panel from "./FaqPanel";
import { questions } from "@/constants";
const FaqData = () => {
  const [activeTab, setActiveTab] = useState(0);

  function activateTab(index: number) {
    setActiveTab((prev) => (prev === index ? -1 : index));
  }
  return (
    <section
      id="faq"
      className="2xl:max-w-screen-lg mx-auto xl:max-w-screen-lg px-2.5 py-10"
    >
      <div className="accordion " role="tablist">
        <h2 className="text-xl text-center mb-6 font-bold uppercase">
          Frequently Asked{" "}
          <span className="bg-theme px-3 text-white">Questions</span>
        </h2>
        {questions.map((panel: any, index: number) => (
          <Panel
            key={index}
            activeTab={activeTab}
            index={index}
            {...panel}
            activateTab={activateTab.bind(null, index)}
          />
        ))}
      </div>
    </section>
  );
};

export default FaqData;
