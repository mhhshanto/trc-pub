import React, { useEffect } from 'react'

const bioscienceFields = [
  { title: "Molecular Biology", description: "Study of the molecular mechanisms by which genetic information encoded in DNA is able to result in the processes of life." },
  { title: "Genetics", description: "Study of genes, genetic variation, and heredity in living organisms." },
  { title: "Microbiology", description: "Study of microorganisms, including bacteria, viruses, fungi, and protozoa." },
  { title: "Biochemistry", description: "Study of the chemical processes and substances that occur within living organisms." },
  { title: "Cell Biology", description: "Study of cell structure and function, including the processes of cell growth, differentiation, and division." },
  { title: "Developmental Biology", description: "Study of the process by which organisms grow and develop." },
  { title: "Physiology", description: "Study of the normal function of living systems, focusing on how organisms, organ systems, organs, cells, and biomolecules carry out the chemical and physical functions in a living system." },
  { title: "Neuroscience", description: "Study of the nervous system, including the brain, spinal cord, and neural networks." },
  { title: "Ecology", description: "Study of the interactions between organisms and their environment." },
  { title: "Evolutionary Biology", description: "Study of the origins and changes in the diversity of life over time." },
  { title: "Botany", description: "Study of plants, including their physiology, structure, genetics, ecology, distribution, classification, and economic importance." },
  { title: "Zoology", description: "Study of animals, including their biology, behavior, and interactions with their environments." },
  { title: "Biotechnology", description: "Application of biological knowledge and techniques to develop products and technologies for various uses, including medicine, agriculture, and industry." },
  { title: "Bioinformatics", description: "Use of computer technology to manage and analyze biological data, particularly in genomics and proteomics." },
  { title: "Immunology", description: "Study of the immune system, including its structure, function, disorders, and responses to pathogens." },
  { title: "Pharmacology", description: "Study of drugs and their effects on living organisms." },
  { title: "Biophysics", description: "Application of the principles of physics to understand how biological systems work." },
  { title: "Environmental Biology", description: "Study of the relationships between organisms and their environments, including topics like conservation biology and ecosystem management." },
];


function Bioscience() {

  useEffect(()=>{
    scrollTo(0,0)
},[])

  return (
    <div className='lg:container mt-16 mx-auto px-3 bg-gray-100'> 
      <div className="p-6 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-800">Fields of Bioscience</h1>

      <p className='my-8'>Bioscience, also known as biological science or life science, encompasses a broad range of disciplines that study living organisms and their interactions with each other and their environments. The scope of bioscience includes:</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bioscienceFields.map((field, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">{field.title}</h2>
            <p className="text-gray-700">{field.description}</p>
          </div>
        ))}
      </div>
      <p className='my-8'>
      These fields often overlap and interconnect, leading to interdisciplinary research and applications that drive advances in medicine, agriculture, environmental science, and many other areas
      </p>
    </div>
    </div>
  )
}

export default Bioscience