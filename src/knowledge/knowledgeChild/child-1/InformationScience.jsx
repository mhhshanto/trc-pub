import React, { useEffect } from 'react';

const informationScienceData = [
    { title: "Information Systems", description: "Design, development, and management of systems that facilitate the collection, organization, storage, and retrieval of information. This includes databases, content management systems, and digital libraries." },
    { title: "Information Retrieval", description: "Techniques and methods for retrieving relevant information from large collections of data, including search engines, indexing, and relevance ranking algorithms." },
    { title: "Data Science", description: "Application of scientific methods, processes, algorithms, and systems to extract knowledge and insights from structured and unstructured data. This includes data analysis, machine learning, and statistical modeling." },
    { title: "Human-Computer Interaction (HCI)", description: "Study of how people interact with computers and information systems, focusing on usability, user experience (UX), and interface design." },
    { title: "Digital Libraries and Archives", description: "Management and preservation of digital collections of information, including digitization, metadata creation, and long-term access strategies." },
    { title: "Information Ethics and Privacy", description: "Study of ethical issues related to the collection, use, and dissemination of information, as well as privacy concerns in digital environments." },
    { title: "Knowledge Organization and Management", description: "Principles and methods for organizing, classifying, and managing information resources to facilitate access and retrieval. This includes ontology development, taxonomy design, and knowledge representation." },
    { title: "Information Behavior", description: "Study of how individuals, groups, and organizations seek, use, share, and create information in various contexts. This includes information seeking behaviors and information literacy." },
    { title: "Information Policy", description: "Development and implementation of policies and regulations related to information access, intellectual property rights, censorship, and information security." },
    { title: "Library Science", description: "Study of library management, services, and information resources in traditional and digital formats. This includes collection development, cataloging, and reference services." },
];

const InformationScienceComponent = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen p-3 bg-gradient-to-r from-blue-200 via-green-200 to-yellow-200 lg:py-16 py-20">
            <div className="md:container mx-auto px-3">
                <h1 className="text-4xl font-bold text-center text-blue-800 mb-10">Information Science</h1>
                <p className="my-7">
                    Information Science is a multidisciplinary field that focuses on the study of information and its processing, storage, retrieval, and dissemination. It encompasses a wide range of topics related to the management, organization, analysis, and use of information in various contexts. Here are key aspects of Information Science:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {informationScienceData.map((item, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <h2 className="text-xl font-semibold text-green-900 mb-2">{item.title}</h2>
                            <p className="text-gray-700">{item.description}</p>
                        </div>
                    ))}
                </div>
                <p className="mt-7">
                    Information Science plays a critical role in advancing knowledge management, communication technologies, and information access across various sectors, including academia, business, government, healthcare, and entertainment. It intersects with disciplines such as computer science, psychology, sociology, linguistics, and communication studies to address complex information challenges and opportunities in the digital age.
                </p>
            </div>
        </div>
    );
};

export default InformationScienceComponent;
