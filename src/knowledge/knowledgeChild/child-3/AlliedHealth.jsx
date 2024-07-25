import React, { useEffect } from 'react';

const alliedHealthData = [
  {
    title: "Medical Laboratory Science",
    description: "Advances in diagnostic testing, laboratory techniques, and quality assurance."
  },
  {
    title: "Radiography and Imaging Sciences",
    description: "Innovations in medical imaging technologies and radiation therapy."
  },
  {
    title: "Physical Therapy and Rehabilitation",
    description: "Techniques in rehabilitation, physical modalities, and exercise therapy."
  },
  {
    title: "Occupational Therapy",
    description: "Interventions to improve activities of daily living and occupational performance."
  },
  {
    title: "Speech-Language Pathology",
    description: "Treatments for communication disorders, swallowing disorders, and voice rehabilitation."
  },
  {
    title: "Nutrition and Dietetics",
    description: "Dietary interventions for various health conditions, nutritional counseling, and dietary guidelines."
  },
  {
    title: "Respiratory Therapy",
    description: "Management of respiratory disorders and therapeutic interventions."
  },
  {
    title: "Medical Coding and Health Informatics",
    description: "Coding practices, electronic health records, and healthcare data analytics."
  },
  {
    title: "Emergency Medical Services",
    description: "Pre-hospital care, emergency response systems, and trauma management."
  },
  {
    title: "Health Education and Promotion",
    description: "Strategies for health promotion, disease prevention, and patient education."
  }
];

const AlliedHealthComponent = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen py-20 lg:py-16 bg-gradient-to-r from-green-200 via-blue-200 to-purple-200">
      <div className="md:container mx-auto px-3">
        <h1 className="text-4xl font-bold text-center text-purple-800 mb-10">Allied Health</h1>
        <p className="mb-10 text-lg text-gray-700">
          Allied Health is a diverse and essential part of healthcare encompassing a range of professions that support medical practitioners in patient care. Here are some potential topics within Allied Health that you might consider for publishing:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {alliedHealthData.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-2xl font-semibold text-purple-900 mb-4">{item.title}</h2>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-lg text-gray-700">
          These areas highlight the interdisciplinary nature of Allied Health and its critical role in healthcare delivery. Depending on your interests and audience, you can delve deeper into specific professions or interdisciplinary collaborations within Allied Health. Let me know if you have any specific aspects you'd like to explore further!
        </p>
      </div>
    </div>
  );
};

export default AlliedHealthComponent;
