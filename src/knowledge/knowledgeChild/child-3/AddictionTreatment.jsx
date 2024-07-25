import React, { useEffect } from 'react';

const addictionData = [
  {
    title: "Substance Use Disorders",
    description: "Exploration of different types of substances, their effects, and treatment approaches."
  },
  {
    title: "Behavioral Addictions",
    description: "Understanding and treating addictions such as gambling, gaming, or internet addiction."
  },
  {
    title: "Psychological and Neurobiological Mechanisms",
    description: "Research on the underlying mechanisms of addiction and their implications for treatment."
  },
  {
    title: "Intervention Strategies",
    description: "Examining various therapeutic modalities, including pharmacological, behavioral, and psychosocial interventions."
  },
  {
    title: "Prevention and Public Health",
    description: "Strategies for prevention at individual, community, and societal levels."
  },
  {
    title: "Dual Diagnosis",
    description: "Addressing the challenges of treating individuals with co-occurring substance use and mental health disorders."
  },
  {
    title: "Healthcare Policy and Ethics",
    description: "Discussions on policy implications, ethical considerations, and healthcare delivery related to addiction treatment."
  }
];

const AddictionTreatmentComponent = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen py-20 lg:py-16 bg-gradient-to-r from-green-200 via-blue-200 to-purple-200">
      <div className="md:container mx-auto px-3">
        <h1 className="text-4xl font-bold text-center text-purple-800 mb-10">Addiction & Treatment</h1>
        <p className="mb-10 text-lg text-gray-700">
          Addiction & Treatment is a crucial area that encompasses a variety of topics related to substance abuse, behavioral addictions, and therapeutic interventions. Some potential subtopics within Addiction & Treatment could include:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {addictionData.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-2xl font-semibold text-purple-900 mb-4">{item.title}</h2>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-lg text-gray-700">
          These topics can provide a comprehensive overview of Addiction & Treatment, catering to both academic and practical interests in the field. If you have specific aspects or questions you'd like to explore further, feel free to ask!
        </p>
      </div>
    </div>
  );
};

export default AddictionTreatmentComponent;
