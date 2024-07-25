import React, { useEffect } from 'react';

const environmentalSciencesData = [
    { title: "Environmental Systems", description: "Study of the Earth's natural systems, including ecosystems, biogeochemical cycles, and climate processes." },
    { title: "Environmental Impact Assessment", description: "Evaluation of the potential environmental consequences of human activities, such as development projects, industrial processes, and policies." },
    { title: "Environmental Pollution", description: "Study of pollutants in air, water, soil, and their effects on ecosystems and human health. This includes topics such as air quality, water quality, and soil contamination." },
    { title: "Conservation Biology", description: "Study of biodiversity conservation, species extinction, habitat restoration, and ecosystem management." },
    { title: "Natural Resource Management", description: "Sustainable management of natural resources such as forests, fisheries, and water resources to ensure their long-term availability and ecosystem health." },
    { title: "Climate Change Science", description: "Study of climate patterns, climate variability, climate modeling, and the impacts of anthropogenic activities on the Earth's climate system." },
    { title: "Environmental Policy and Governance", description: "Development, implementation, and evaluation of policies and regulations aimed at protecting the environment and promoting sustainable development." },
    { title: "Environmental Health", description: "Study of how environmental factors, including pollutants and contaminants, impact human health and well-being." },
    { title: "Environmental Education and Outreach", description: "Promotion of awareness, education, and public engagement in environmental issues and sustainability practices." },
    { title: "Interdisciplinary Approaches", description: "Environmental Sciences often employs interdisciplinary approaches to address complex environmental challenges, involving collaboration between scientists, policymakers, stakeholders, and the public." }
];

const EnvironmentalSciencesComponent = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-r from-green-200 via-blue-200 to-purple-200 lg:py-16 py-20">
            <div className="lg:container px-3">
                <h1 className="text-5xl font-bold text-center text-green-800 mb-10">Environmental Sciences</h1>
                <p className="my-7">
                    Environmental Sciences is a multidisciplinary field that integrates elements of biology, chemistry, physics, geology, geography, and social sciences to study the environment and address environmental issues. It encompasses a wide range of topics related to the natural environment, human interactions with the environment, and strategies for sustainable management. Here are key aspects of Environmental Sciences:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-8">
                    {environmentalSciencesData.map((item, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <h2 className="text-2xl font-semibold text-blue-900 mb-4">{item.title}</h2>
                            <p className="text-gray-700">{item.description}</p>
                        </div>
                    ))}
                </div>
                <p className="mt-7">
                    Environmental Sciences play a critical role in understanding the impacts of human activities on the environment, identifying solutions to environmental problems, and promoting sustainable practices that ensure the well-being of current and future generations. Research in this field contributes to
                    policy development, environmental management strategies, and the advancement of technologies that support environmental sustainability.
                </p>
            </div>
        </div>
    );
};

export default EnvironmentalSciencesComponent;
