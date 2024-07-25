import React, { useEffect } from 'react';

const DermatologyComponent = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const topics = [
    {
      title: "Skin Cancer",
      description: "Diagnosis, treatment options (surgery, radiation, immunotherapy), and prevention strategies for melanoma, basal cell carcinoma, and squamous cell carcinoma."
    },
    {
      title: "Acne and Dermatologic Therapeutics",
      description: "Management of acne vulgaris, rosacea, and other common dermatologic conditions using topical and systemic therapies."
    },
    {
      title: "Psoriasis and Autoimmune Skin Disorders",
      description: "Pathophysiology, treatment options (biologics, phototherapy), and impact on quality of life."
    },
    {
      title: "Atopic Dermatitis (Eczema)",
      description: "Management strategies, including topical corticosteroids, calcineurin inhibitors, and emerging biologic therapies."
    },
    {
      title: "Cosmetic Dermatology",
      description: "Procedures such as Botox injections, dermal fillers, chemical peels, and laser treatments for aesthetic enhancement."
    },
    {
      title: "Pediatric Dermatology",
      description: "Diagnosis and treatment of skin disorders in children, including birthmarks, genetic skin conditions, and infectious diseases."
    },
    {
      title: "Dermatopathology",
      description: "Study of skin diseases at a microscopic level, including interpretation of skin biopsies and histopathologic findings."
    },
    {
      title: "Dermatologic Surgery",
      description: "Techniques for skin cancer excision, Mohs micrographic surgery, and reconstructive surgery."
    },
    {
      title: "Hair Disorders",
      description: "Diagnosis and treatment of alopecia (hair loss), including genetic, autoimmune, and hormonal causes."
    },
    {
      title: "Infectious Skin Diseases",
      description: "Diagnosis and management of bacterial, viral, fungal, and parasitic infections affecting the skin."
    }
  ];

  return (
    <div className="min-h-screen py-20 lg:py-16 bg-gradient-to-r from-purple-200 via-purple-400 to-purple-600">
      <div className="md:container mx-auto px-3">
        <h1 className="text-4xl font-bold text-center text-purple-900 mb-8">Dermatology</h1>
        <p className="mb-8 text-lg text-gray-100">
          Dermatology is a branch of medicine focused on the diagnosis, treatment, and prevention of conditions related to the skin, hair, nails, and mucous membranes. Here are some potential topics within Dermatology that could be explored for publishing:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {topics.map((topic, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-2 text-purple-800">{topic.title}</h2>
              <p className="text-gray-700">{topic.description}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-lg text-gray-100">
          These topics encompass the breadth of Dermatology, from clinical care to research and therapeutic advancements.
        </p>
      </div>
    </div>
  );
}

export default DermatologyComponent;
