import React, { useEffect } from 'react';

const behavioralHealthData = [
  {
    title: "Psychiatry and Behavioral Sciences",
    description: "Diagnosis and treatment of psychiatric disorders, including mood disorders, anxiety disorders, psychotic disorders, and personality disorders."
  },
  {
    title: "Psychosomatic Medicine",
    description: "Understanding the relationship between psychological factors and physical health conditions."
  },
  {
    title: "Health Behavior and Change",
    description: "Behavioral interventions for health promotion, disease prevention, and lifestyle modification."
  },
  {
    title: "Addiction Medicine",
    description: "Comprehensive care for individuals with substance use disorders, including assessment, treatment, and recovery support."
  },
  {
    title: "Behavioral Pediatrics",
    description: "Behavioral and developmental aspects of pediatric care, including autism spectrum disorders, ADHD, and developmental delays."
  },
  {
    title: "Health Psychology",
    description: "Psychological factors influencing health outcomes, patient adherence to medical treatments, and coping with chronic illness."
  },
  {
    title: "Geriatric Psychiatry",
    description: "Mental health issues in older adults, including dementia, depression, and anxiety."
  },
  {
    title: "Integrative Behavioral Health",
    description: "Integration of behavioral health services into primary care settings and collaborative care models."
  },
  {
    title: "Cultural Psychiatry",
    description: "Cultural influences on mental health, cultural competency in psychiatric practice, and disparities in mental health care."
  },
  {
    title: "Mind-Body Medicine",
    description: "The role of mind-body techniques (e.g., meditation, yoga) in promoting mental and physical well-being."
  }
];

const BehavioralHealthComponent = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen py-20 lg:py-16 bg-gradient-to-r from-purple-200 via-purple-400 to-purple-600">
      <div className="md:container mx-auto px-3">
        <h1 className="text-4xl font-bold text-center text-purple-900 mb-10">Behavioral Health and Medicine</h1>
        <p className="mb-10 text-lg text-gray-100">
          Behavioral Health and Medicine is a multidisciplinary field that focuses on the interactions between behavior, biology, and the environment as they relate to health and illness. Here are some potential topics within Behavioral Health and Medicine that could be explored for publishing:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {behavioralHealthData.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-2xl font-semibold text-purple-900 mb-4">{item.title}</h2>
              <p className="text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-lg text-gray-100">
          These topics highlight the diverse aspects of Behavioral Health and Medicine, addressing both clinical practice and research in understanding and treating behavioral health conditions.
        </p>
      </div>
    </div>
  );
};

export default BehavioralHealthComponent;
