import React, { useState } from "react";

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const handleTabClick = (id) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex space-x-4 mb-4">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => handleTabClick(tab.id)}
          className={`px-4 py-2 rounded ${
            activeTab === tab.id ? "bg-blue-500 text-white" : "bg-gray-300"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
