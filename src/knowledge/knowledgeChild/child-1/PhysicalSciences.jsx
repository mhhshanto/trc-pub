import React, { useEffect } from 'react';

const physicalSciencesData = [
  {
    category: "Physics",
    intro: "Physics is the fundamental science that studies matter, energy, and their interactions. It encompasses various subfields such as:",
    topics: [
      { title: "Classical Mechanics", description: "Study of the motion of objects and the forces acting upon them." },
      { title: "Electromagnetism", description: "Study of electromagnetic fields, including electricity, magnetism, and light." },
      { title: "Thermodynamics", description: "Study of heat and temperature and their relation to energy and work." },
      { title: "Quantum Mechanics", description: "Study of the behavior of matter and energy at the atomic and subatomic scales." },
      { title: "Particle Physics", description: "Study of the fundamental particles and forces of nature." },
      { title: "Astrophysics and Cosmology", description: "Study of celestial objects, the universe, and its origins." }
    ]
  },
  {
    category: "Chemistry",
    intro: "Chemistry is the science that studies the composition, structure, properties, and reactions of matter. Key subfields include:",
    topics: [
      { title: "Organic Chemistry", description: "Study of carbon-containing compounds." },
      { title: "Inorganic Chemistry", description: "Study of non-carbon-containing compounds, including metals and minerals." },
      { title: "Physical Chemistry", description: "Study of the physical principles and properties of chemical systems." },
      { title: "Analytical Chemistry", description: "Study of techniques for analyzing the composition of substances." },
      { title: "Biochemistry", description: "Study of chemical processes within and related to living organisms." }
    ]
  },
  {
    category: "Earth Sciences",
    intro: "Earth sciences focus on the study of the Earth and its processes. Major subfields include:",
    topics: [
      { title: "Geology", description: "Study of the Earth's solid materials, including rocks and minerals." },
      { title: "Geophysics", description: "Study of the Earth's physical properties, including its magnetic and gravitational fields." },
      { title: "Oceanography", description: "Study of the oceans and marine environments." },
      { title: "Atmospheric Sciences", description: "Study of the Earth's atmosphere and its interactions with the oceans and land." }
    ]
  },
  {
    category: "Astronomy",
    intro: "Astronomy is the study of celestial objects, space, and the universe as a whole. Subfields include:",
    topics: [
      { title: "Observational Astronomy", description: "Study of celestial objects and phenomena using telescopes and other instruments." },
      { title: "Theoretical Astronomy", description: "Use of mathematical models and computer simulations to study astronomical phenomena." },
      { title: "Astrobiology", description: "Study of the potential for life beyond Earth." }
    ]
  },
  {
    category: "Materials Science",
    intro: "Materials science is an interdisciplinary field that studies the properties of matter and how these properties can be manipulated and applied. Subfields include:",
    topics: [
      { title: "Nanotechnology", description: "Study and manipulation of materials at the nanoscale." },
      { title: "Materials Engineering", description: "Application of materials science principles to the design and development of new materials." }
    ]
  }
];

const PhysicalSciencesComponent = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen p-3 bg-gradient-to-r from-green-200 via-blue-200 to-purple-200 py-20 lg:py-16">
      <div className="md:container mx-auto px-3">
        <h1 className="text-4xl font-bold text-center text-blue-800 mb-10">Physical Sciences</h1>
        <p className="mb-10 text-lg text-gray-700">
          Physical sciences encompass a group of disciplines that study the natural world and its physical properties. These disciplines are rooted in scientific principles and involve the investigation of matter, energy, space, and time. The major branches of physical sciences include:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {physicalSciencesData.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-2xl font-semibold text-blue-900 mb-4">{category.category}</h2>
              {category.intro && <p className="mb-4 text-gray-600">{category.intro}</p>}
              {category.topics.map((topic, idx) => (
                <div key={idx} className="mb-3">
                  <h3 className="text-xl font-bold text-blue-800">{topic.title}</h3>
                  <p className="text-gray-500">{topic.description}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
        <p className="mt-10 text-lg text-gray-700">
          Physical sciences play a critical role in advancing our understanding of the natural world, developing technologies, and addressing global challenges such as climate change, energy production, and sustainable development. These disciplines often intersect and collaborate to tackle complex scientific questions and drive innovation in various industries and fields of study.
        </p>
      </div>
    </div>
  );
};

export default PhysicalSciencesComponent;
