import React, { useEffect } from 'react';

const cisFields = [
    {
        title: "Computer Science",
        subfields: [
            { title: "Artificial Intelligence", description: "Development of systems that can perform tasks that typically require human intelligence." },
            { title: "Machine Learning", description: "Study of algorithms and statistical models that enable computers to learn from and make predictions or decisions based on data." },
            { title: "Data Science", description: "Extraction of knowledge and insights from structured and unstructured data through computational and statistical techniques." },
            { title: "Computer Vision", description: "Study of enabling computers to interpret and understand visual information from the world." },
            { title: "Natural Language Processing", description: "Study of enabling computers to interact with humans using natural language." },
            { title: "Theory of Computation", description: "Study of the fundamental capabilities and limitations of computers and computational systems." },
            { title: "Computational Complexity", description: "Study of the resources (time, space) required to solve computational problems." },
            { title: "Algorithms and Data Structures", description: "Design and analysis of efficient algorithms and data organization methods." }
        ]
    },
    {
        title: "Information Systems",
        subfields: [
            { title: "Database Systems", description: "Design, implementation, and management of databases to store and retrieve data." },
            { title: "Information Security", description: "Protection of information systems from unauthorized access, use, disclosure, disruption, modification, or destruction." },
            { title: "Human-Computer Interaction", description: "Study of how people interact with computers and design interfaces that are intuitive and efficient." },
            { title: "Software Engineering", description: "Development of reliable and efficient software systems, including software design, testing, and maintenance." }
        ]
    },
    {
        title: "Computer Engineering",
        subfields: [
            { title: "Digital Systems", description: "Design and implementation of digital circuits and systems." },
            { title: "Embedded Systems", description: "Design of computer systems that are part of larger systems or devices." },
            { title: "Computer Architecture", description: "Design of the structure and organization of computer systems." },
            { title: "Operating Systems", description: "Development and management of software that manages computer hardware and provides services for computer programs." }
        ]
    },
    { title: "Cybersecurity", description: "Protection of computer systems and networks from theft or damage to their hardware, software, or electronic data, as well as from disruption or misdirection of the services they provide." },
    { title: "Information Technology", description: "Application of computers and telecommunications equipment to store, retrieve, transmit, and manipulate data, often in the context of business or enterprise operations." },
    { title: "Networking", description: "Study of the design, implementation, and management of computer networks, including protocols, hardware, and software." },
    { title: "Bioinformatics", description: "Application of computer science and information technology to the field of biology and medicine, particularly in the management and analysis of biological data." },
    { title: "Artificial Intelligence Ethics", description: "Study of the ethical implications of AI systems, including issues of fairness, transparency, accountability, and bias." }
];

const CISComponent = () => {

    useEffect(()=>{
        scrollTo(0,0)
    },[])

    return (
        <div className='bg-gray-100 py-16'>
            <div className="lg:container mx-auto px-3 min-h-screen">
                <h1 className="text-5xl font-bold text-center mb-12 text-blue-700">Computer and Information Sciences</h1>
                <p className="my-7">
                    Computer and Information Sciences (CIS) is a broad field that encompasses the study of computers and computational systems. It includes both theoretical and practical aspects of computing. The scope of CIS covers various disciplines and subfields, including:
                </p>
                <div className="space-y-8">
                    {cisFields.map((field, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                            <h2 className="text-3xl font-semibold text-purple-700 mb-4">{field.title}</h2>
                            {field.subfields ? (
                                <ul className="list-disc list-inside space-y-2">
                                    {field.subfields.map((subfield, subIndex) => (
                                        <li key={subIndex}>
                                            <h3 className="text-xl font-semibold text-green-600">{subfield.title}</h3>
                                            <p className="text-gray-700 ml-4">{subfield.description}</p>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-gray-700">{field.description}</p>
                            )}
                        </div>
                    ))}
                </div>
                <p className="mt-7">
                CIS is a dynamic field that continues to evolve with technological advancements, playing a critical role in various sectors such as healthcare, finance, transportation, entertainment, and beyond.
                </p>
            </div>
        </div>
    );
};

export default CISComponent;
