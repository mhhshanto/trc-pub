import React, { useEffect } from 'react';

const foodScienceData = [
    { title: "Food Chemistry", description: "Study of the chemical composition, structure, and properties of food components such as carbohydrates, proteins, lipids, vitamins, minerals, and additives." },
    { title: "Food Microbiology", description: "Study of microorganisms in food, including their growth, metabolism, spoilage mechanisms, and methods for microbial control and preservation." },
    { title: "Food Engineering", description: "Application of engineering principles to food processing, packaging, and preservation technologies. This includes designing and optimizing processes to improve efficiency, safety, and quality." },
    { title: "Food Processing", description: "Techniques and methods used to transform raw agricultural materials into food products suitable for consumption. This includes methods such as heating, cooling, drying, fermentation, and extrusion." },
    { title: "Food Safety and Quality Assurance", description: "Ensuring that food products are safe for consumption and meet regulatory standards. This involves practices such as Hazard Analysis and Critical Control Points (HACCP) and quality control measures." },
    { title: "Nutrition and Food Health", description: "Study of the nutritional content and health benefits of foods, including their role in preventing diseases and promoting overall health." },
    { title: "Sensory Evaluation", description: "Assessment of the sensory attributes of food products, including taste, texture, appearance, and aroma, to understand consumer preferences and optimize product development." },
    { title: "Food Packaging", description: "Design and development of packaging materials and technologies that protect food products from physical, chemical, and biological damage, as well as maintain product quality and extend shelf life." },
    { title: "Food Biotechnology", description: "Application of biotechnological techniques to improve food production, processing, and quality. This includes genetic modification, enzyme technology, and fermentation processes." },
    { title: "Food Regulations and Policy", description: "Development and enforcement of regulations and policies related to food safety, labeling, marketing, and international trade." },
];

const FoodScienceComponent = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen p-3 bg-gradient-to-r from-yellow-200 via-red-200 to-purple-200 md:py-16 py-20">
            <div className="lg:container mx-auto px-3">
                <h1 className="text-4xl font-bold text-center text-red-800 mb-10">Food Science and Technology</h1>
                <p className="my-7">
                    Food Science and Technology is a field that applies scientific principles and techniques to the study of food, its composition, processing, preservation, and safety. It encompasses a wide range of disciplines and specialties aimed at understanding the properties of food materials and developing methods to ensure food quality, safety, and nutritional value. Here are key aspects of Food Science and Technology:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {foodScienceData.map((item, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <h2 className="text-xl font-semibold text-green-900 mb-2">{item.title}</h2>
                            <p className="text-gray-700">{item.description}</p>
                        </div>
                    ))}
                </div>
                <p className="mt-7">
                    Food Science and Technology play a crucial role in ensuring the availability of safe, nutritious, and appealing food products for consumers worldwide. Advances in this field contribute to food security, sustainability, and the global food supply chain, addressing challenges such as foodborne illnesses, food waste, and nutritional deficiencies.
                </p>
            </div>
        </div>
    );
};

export default FoodScienceComponent;
