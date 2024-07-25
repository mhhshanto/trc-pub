import React, { useEffect } from 'react';

const DentistryComponent = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const topics = [
    {
      title: "Dental Caries (Tooth Decay)",
      description: "Prevention, diagnosis, and treatment of dental cavities, including advancements in restorative materials and techniques."
    },
    {
      title: "Periodontology",
      description: "Diagnosis and management of gum diseases, such as gingivitis and periodontitis, and periodontal surgical techniques."
    },
    {
      title: "Endodontics",
      description: "Root canal therapy, treatment of dental pulp diseases, and advancements in endodontic materials and techniques."
    },
    {
      title: "Orthodontics",
      description: "Correction of malocclusions and bite abnormalities through braces, aligners, and other orthodontic appliances."
    },
    {
      title: "Prosthodontics",
      description: "Restorative dentistry involving crowns, bridges, dentures, and dental implants for rehabilitation of missing teeth."
    },
    {
      title: "Oral and Maxillofacial Surgery",
      description: "Surgical procedures for conditions affecting the mouth, jaw, and face, including wisdom teeth extraction and jaw reconstruction."
    },
    {
      title: "Pediatric Dentistry",
      description: "Dental care for children, including preventive care, behavior management, and treatment of pediatric dental conditions."
    },
    {
      title: "Dental Implantology",
      description: "Techniques and outcomes of dental implant placement, bone grafting procedures, and implant-supported prostheses."
    },
    {
      title: "Oral Medicine",
      description: "Diagnosis and management of oral mucosal diseases, oral manifestations of systemic diseases, and oral cancer screening."
    },
    {
      title: "Dental Public Health",
      description: "Community-based dental programs, oral health promotion, epidemiology of dental diseases, and access to dental care."
    }
  ];

  return (
    <div className="min-h-screen py-20 lg:py-16 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-600">
      <div className="md:container mx-auto px-3">
        <h1 className="text-4xl font-bold text-center text-blue-900 mb-8">Dentistry</h1>
        <p className="mb-8 text-lg text-gray-100">
          Dentistry is a specialized field of healthcare focused on the diagnosis, prevention, and treatment of diseases and conditions affecting the teeth, gums, and oral cavity. Here are some potential topics within Dentistry that could be explored for publishing:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {topics.map((topic, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-2 text-blue-800">{topic.title}</h2>
              <p className="text-gray-700">{topic.description}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-lg text-gray-100">
          These topics cover various aspects of Dentistry, from clinical practice to research and advancements in dental technology.
        </p>
      </div>
    </div>
  );
}

export default DentistryComponent;
