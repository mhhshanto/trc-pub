import React, { useEffect } from 'react'


const chemistryFields = [
  { title: "Organic Chemistry", description: "Study of the structure, properties, composition, reactions, and synthesis of carbon-containing compounds." },
  { title: "Inorganic Chemistry", description: "Study of inorganic compounds, typically those that do not contain carbon-hydrogen bonds, including metals, minerals, and organometallic compounds." },
  { title: "Physical Chemistry", description: "Study of how matter behaves on a molecular and atomic level and how chemical reactions occur. It combines principles of physics and chemistry to understand the physical properties of molecules, the forces that act upon them, and their energy changes." },
  { title: "Analytical Chemistry", description: "Study of the composition of substances. It involves developing and applying methods and instruments to measure physical and chemical properties of matter." },
  { title: "Biochemistry", description: "Study of the chemical processes within and related to living organisms. It is a laboratory-based science that combines biology and chemistry." },
  { title: "Theoretical Chemistry", description: "Use of mathematics and computers to understand chemical behavior and predict properties of new compounds. It includes quantum chemistry and computational chemistry." },
  { title: "Environmental Chemistry", description: "Study of chemical and biochemical phenomena that occur in natural places. It focuses on the effects of human activity on the environment and includes the study of pollutants and their impacts." },
  { title: "Industrial Chemistry", description: "Application of chemical principles to industrial processes. It involves the development and optimization of processes for the production of chemicals and materials." },
  { title: "Polymer Chemistry", description: "Study of the chemical synthesis and properties of polymers, which are large molecules made up of repeating subunits." },
  { title: "Materials Chemistry", description: "Study of the properties and applications of materials such as metals, ceramics, and polymers. It involves understanding the relationship between the structure of materials at atomic or molecular scales and their macroscopic properties." },
  { title: "Medicinal Chemistry", description: "Design, development, and synthesis of pharmaceutical compounds. It combines aspects of organic chemistry, pharmacology, and other biological specialties." },
  { title: "Nuclear Chemistry", description: "Study of radioactive substances, nuclear processes, and properties and behavior of atomic nuclei." },
  { title: "Chemical Engineering", description: "Application of chemical principles to the design, optimization, and operation of chemical processes and equipment. It is an interdisciplinary field that integrates chemistry, physics, biology, and engineering principles." },
  { title: "Green Chemistry", description: "Design of chemical products and processes that reduce or eliminate the use and generation of hazardous substances. It aims for sustainability and environmental protection." },
  { title: "Forensic Chemistry", description: "Application of chemistry to law enforcement and the investigation of crime scenes. It involves the analysis of physical evidence and the detection of illicit substances." }
];

function Chemistry() {

  useEffect(()=>{
    scrollTo(0,0)
},[])

  return (
    <div className="bg-gradient-to-r from-green-100 to-blue-100 py-5 mt-16">
      <div className="md:container mx-auto px-3">
        <h1 className="text-5xl font-bold text-center mb-12 text-purple-800">Branches of Chemistry</h1>
        <p className='my-7'>
        Chemistry is the scientific discipline involved with elements and compounds composed of atoms, molecules, and ions. It focuses on their composition, structure, properties, behavior, and the changes they undergo during reactions with other substances. The scope of chemistry includes several major branches and interdisciplinary fields:
        </p>
        <div className="flex flex-wrap">
          {chemistryFields.map((field, index) => (
            <div key={index} className="max-w-sm w-fit lg:max-w-full lg:flex shadow-lg rounded-lg m-4 bg-white">
              <div className="p-6 border-b border-gray-200 lg:border-b-0 lg:border-r">
                <h2 className="text-2xl font-bold text-indigo-700 mb-4">{field.title}</h2>
                <p className="text-gray-700">{field.description}</p>
              </div>
            </div>
          ))}
        </div>
        <p className='my-7'>
        Each of these branches can further specialize into subfields, allowing for a diverse range of research areas and applications. Chemistry plays a crucial role in advancing technology, medicine, environmental science, and many other fields.
        </p>
      </div>
    </div>
  )
}

export default Chemistry