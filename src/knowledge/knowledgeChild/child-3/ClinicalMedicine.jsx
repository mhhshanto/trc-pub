import React, { useEffect } from 'react';

const ClinicalMedicineComponent = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const topics = [
    {
      title: "Internal Medicine",
      description: "Diagnosis and management of adult diseases, including common conditions like diabetes, hypertension, and infectious diseases."
    },
    {
      title: "Surgery",
      description: "Techniques and outcomes in various surgical specialties, such as general surgery, orthopedic surgery, neurosurgery, and plastic surgery."
    },
    {
      title: "Family Medicine",
      description: "Comprehensive healthcare for individuals and families across all ages, emphasizing preventive care and health maintenance."
    },
    {
      title: "Emergency Medicine",
      description: "Management of acute illnesses and injuries in emergency settings, including trauma care and critical care medicine."
    },
    {
      title: "Palliative Care",
      description: "Multidisciplinary care for patients with serious illnesses, focusing on pain management and quality of life."
    },
    {
      title: "Geriatric Medicine",
      description: "Health issues and care specific to older adults, including geriatric syndromes, polypharmacy, and end-of-life care."
    },
    {
      title: "Infectious Diseases",
      description: "Diagnosis, treatment, and prevention of infectious diseases, including emerging infections and antimicrobial resistance."
    },
    {
      title: "Neurology",
      description: "Diagnosis and treatment of neurological disorders, such as stroke, epilepsy, Alzheimer's disease, and movement disorders."
    },
    {
      title: "Endocrinology",
      description: "Management of hormonal disorders, including diabetes mellitus, thyroid disorders, and adrenal gland disorders."
    },
    {
      title: "Gastroenterology",
      description: "Diagnosis and treatment of gastrointestinal disorders, including inflammatory bowel disease, liver diseases, and gastrointestinal cancers."
    }
  ];

  return (
    <div className="min-h-screen py-20 lg:py-16 bg-gradient-to-r from-green-200 via-green-400 to-green-600">
      <div className="md:container mx-auto px-3">
        <h1 className="text-4xl font-bold text-center text-green-900 mb-8">Clinical Medicine</h1>
        <p className="mb-8 text-lg text-gray-100">
          Clinical Medicine encompasses the practical application of medical knowledge and skills in diagnosing, treating, and preventing diseases in individual patients. Here are some potential topics within Clinical Medicine that could be explored for publishing:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {topics.map((topic, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-2 text-green-800">{topic.title}</h2>
              <p className="text-gray-700">{topic.description}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-lg text-gray-100">
          These topics highlight the breadth and depth of Clinical Medicine, addressing various medical specialties and aspects of patient care. Depending on your interests and audience, you can explore specific diseases, treatments, or clinical guidelines within these areas.
        </p>
      </div>
    </div>
  );
}

export default ClinicalMedicineComponent;
