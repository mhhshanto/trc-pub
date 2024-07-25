import React, { useEffect } from 'react';

const anesthesiologyData = [
  {
    title: "Anesthetic Techniques",
    description: "Advances in anesthesia delivery methods, including regional anesthesia, general anesthesia, and sedation techniques."
  },
  {
    title: "Perioperative Care",
    description: "Optimization of patient care before, during, and after surgical procedures."
  },
  {
    title: "Pain Management",
    description: "Strategies for acute and chronic pain management, including pharmacological and non-pharmacological approaches."
  },
  {
    title: "Critical Care Anesthesiology",
    description: "Management of critically ill patients in intensive care units and operating rooms."
  },
  {
    title: "Anesthesia and Patient Safety",
    description: "Enhancing safety protocols, error prevention strategies, and patient monitoring technologies."
  },
  {
    title: "Pediatric Anesthesiology",
    description: "Anesthetic considerations and techniques specific to pediatric patients."
  },
  {
    title: "Obstetric Anesthesiology",
    description: "Anesthetic management during labor and delivery, including obstetric emergencies."
  },
  {
    title: "Regional Anesthesia",
    description: "Innovations in nerve blocks and epidural anesthesia techniques."
  },
  {
    title: "Anesthesia and Healthcare Technology",
    description: "Integration of technology in anesthesia practice, such as simulation training and anesthesia information systems."
  },
  {
    title: "Ethical and Legal Issues",
    description: "Discussions on informed consent, end-of-life care, and ethical dilemmas in anesthesia practice."
  }
];

const AnesthesiologyComponent = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen py-20 lg:py-16 bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600">
      <div className="md:container mx-auto px-3">
        <h1 className="text-4xl font-bold text-center text-blue-800 mb-10">Anesthesiology</h1>
        <p className="mb-10 text-lg text-gray-200">
          Anesthesiology is a specialized field of medicine focusing on perioperative care, pain management, and critical care medicine. Here are some potential topics within Anesthesiology that could be explored for publishing:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {anesthesiologyData.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-2xl font-semibold text-blue-900 mb-4">{item.title}</h2>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-lg text-gray-200">
          These topics reflect the breadth and depth of Anesthesiology as a specialty, addressing both clinical practice and research advancements.
        </p>
      </div>
    </div>
  );
};

export default AnesthesiologyComponent;
