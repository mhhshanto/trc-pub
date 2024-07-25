import React, { useEffect } from 'react';

const environmentAgricultureFields = [
    {
        title: "Environment",
        subfields: [
            { title: "Ecology", description: "Study of the interactions between organisms and their environment, including ecosystems, populations, and communities." },
            { title: "Environmental Chemistry", description: "Study of chemical processes occurring in the environment, including pollution and remediation." },
            { title: "Environmental Physics", description: "Study of physical processes in the environment, such as climate and atmospheric dynamics." },
            { title: "Conservation Biology", description: "Study of the preservation and management of biodiversity and ecosystems." },
            { title: "Environmental Policy and Management", description: "Development and implementation of policies and strategies to address environmental issues, including sustainability, pollution control, and natural resource management." },
            { title: "Climate Science", description: "Study of climate patterns, variability, and change, including the impacts of human activities on the Earth's climate." },
            { title: "Environmental Health", description: "Study of how environmental factors affect human health, including exposure to pollutants and contaminants." },
        ]
    },
    {
        title: "Agriculture",
        subfields: [
            { title: "Crop Science", description: "Study of crop production, genetics, breeding, and management practices." },
            { title: "Soil Science", description: "Study of soil properties, fertility, conservation, and management." },
            { title: "Animal Science", description: "Study of livestock production, genetics, nutrition, and welfare." },
            { title: "Agroecology", description: "Study of ecological processes applied to agricultural systems, emphasizing sustainability and biodiversity." },
            { title: "Food Science and Technology", description: "Study of food production, processing, preservation, and safety." },
            { title: "Agricultural Economics", description: "Study of the economics of agricultural production, markets, and policies." },
            { title: "Sustainable Agriculture", description: "Focus on practices that maintain or enhance agricultural productivity while minimizing environmental impacts." },
        ]
    },
    {
        title: "Interconnections",
        subfields: [
            { title: "Agroecology", description: "Applying ecological principles to agriculture to enhance sustainability and minimize environmental impact." },
            { title: "Environmental Impact of Agriculture", description: "Studying how agricultural practices affect ecosystems, water quality, and biodiversity." },
            { title: "Sustainable Agriculture Practices", description: "Implementing practices that promote environmental health and resource conservation." },
        ]
    }
];

const EnvironmentAgricultureComponent = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-gradient-to-b py-20 md:py-14  from-green-200 to-blue-200 min-h-screen">
            <div className="md:container px-3">
                <h1 className="text-4xl font-extrabold text-center mb-10 text-green-800">Environment and Agriculture</h1>
                <p className="my-7">
                    Environment and Agriculture are two interconnected fields that focus on understanding and managing natural resources, ecosystems, and sustainable practices. Here's an overview of each:
                </p>
                <p className="my-1">
                    Environmental science focuses on the study of the natural world and how humans interact with it. Key aspects include:
                </p>
                <p className="mb-7 ">
                    Agricultural science focuses on the study of agricultural practices, crop production, and sustainable food systems. Key aspects include:
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {environmentAgricultureFields.map((field, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-2xl font-semibold text-blue-700 mb-4">{field.title}</h2>
                            <ul className="space-y-2">
                                {field.subfields.map((subfield, subIndex) => (
                                    <li key={subIndex} className="border-b border-gray-300 pb-2 mb-2">
                                        <h3 className="text-xl font-semibold text-purple-600">{subfield.title}</h3>
                                        <p className="text-gray-700">{subfield.description}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <p className="mt-10">
                    Both Environment and Agriculture play crucial roles in addressing global challenges such as climate change, food security, biodiversity loss, and sustainable development. Integrated approaches that combine knowledge from these fields are essential for developing solutions that balance human needs with environmental stewardship.
                </p>
            </div>
        </div>
    );
};

export default EnvironmentAgricultureComponent;
