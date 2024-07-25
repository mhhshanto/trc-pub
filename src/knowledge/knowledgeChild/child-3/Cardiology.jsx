import React, { useEffect } from 'react';

const cardiologyData = [
  {
    title: "Coronary Artery Disease",
    description: "Advances in the management of coronary artery disease, including interventions like coronary angioplasty and stenting."
  },
  {
    title: "Heart Failure",
    description: "Diagnosis, treatment strategies, and advancements in heart failure management, including heart transplantation."
  },
  {
    title: "Arrhythmias",
    description: "Understanding and treating cardiac arrhythmias, including atrial fibrillation, ventricular tachycardia, and bradyarrhythmias."
  },
  {
    title: "Cardiac Imaging",
    description: "Innovations in non-invasive imaging techniques such as echocardiography, cardiac MRI, and nuclear cardiology."
  },
  {
    title: "Interventional Cardiology",
    description: "Techniques and outcomes of interventional procedures, such as percutaneous coronary intervention (PCI) and structural heart interventions."
  },
  {
    title: "Preventive Cardiology",
    description: "Strategies for cardiovascular risk assessment, lifestyle interventions, and primary prevention of heart disease."
  },
  {
    title: "Cardiovascular Genetics",
    description: "Genetic factors influencing cardiovascular diseases and implications for personalized medicine."
  },
  {
    title: "Pediatric Cardiology",
    description: "Diagnosis and treatment of congenital heart defects and acquired heart diseases in children."
  },
  {
    title: "Cardiovascular Epidemiology",
    description: "Population-based studies on the prevalence, risk factors, and outcomes of cardiovascular diseases."
  },
  {
    title: "Cardiac Rehabilitation",
    description: "Multidisciplinary approaches to improve outcomes and quality of life for patients recovering from heart conditions."
  }
];

const CardiologyComponent = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen py-20 lg:py-16 bg-gradient-to-r from-green-200 via-green-400 to-green-600">
      <div className="md:container mx-auto px-3">
        <h1 className="text-4xl font-bold text-center text-green-900 mb-8">Cardiology</h1>
        <p className="mb-8 text-lg text-gray-100">
          Cardiology is a specialized field of medicine focusing on the diagnosis, treatment, and prevention of diseases related to the heart and blood vessels. Here are some potential topics within Cardiology that could be explored for publishing:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cardiologyData.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-semibold text-green-900 mb-4">{item.title}</h2>
              <p className="text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-lg text-gray-100">
          These topics reflect the breadth of Cardiology as a specialty, encompassing clinical care, research, and technological advancements.
        </p>
      </div>
    </div>
  );
};

export default CardiologyComponent;
