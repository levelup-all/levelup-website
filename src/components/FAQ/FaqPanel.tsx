"use client";

import { useEffect, useState } from "react";

const Panel = (props: any) => {
  const [height, setHeight] = useState(0);
  const { label, content, activeTab, index, activateTab } = props;
  useEffect(() => {
    const timer = setTimeout(() => {
      const el = document.querySelector(".panel__inner");
      if (el) {
        const scrollHeight = el.scrollHeight;
        setHeight(scrollHeight);
      }
    }, 333);

    return () => {
      clearTimeout(timer); // Clear the timeout if the component unmounts before the timer fires
    };
  }, []);

  const isActive = activeTab === index;
  const innerStyle = {
    height: `${isActive ? height : 0}px`,
  };

  return (
    <div
      className="panel bg-themeLight text-black rounded-md"
      aria-expanded={isActive}
    >
      <button
        className="panel__label relative w-full border-0 font-medium text-base focus:outline-none transition-colors duration-200 ease-linear cursor-pointer text-left"
        role="tab"
        onClick={activateTab}
      >
        {label}
      </button>
      <div className="panel__inner" style={innerStyle} aria-hidden={!isActive}>
        <p
          dangerouslySetInnerHTML={{ __html: content }}
          className="panel__content text-black text-base opacity-0 transition-opacity duration-300 ease-linear delay-200"
        ></p>
      </div>
    </div>
  );
};

export default Panel;
