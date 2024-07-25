import React, { useEffect } from 'react';

const mathematicsData = [
    {
        category: "Pure Mathematics",
        topics: [
            { title: "Algebra", description: "Study of mathematical symbols and the rules for manipulating these symbols." },
            { title: "Analysis", description: "Study of limits, continuity, derivatives, integrals, and infinite series." },
            { title: "Number Theory", description: "Study of integers and their properties, including prime numbers, divisibility, and arithmetic functions." },
            { title: "Geometry", description: "Study of shapes, sizes, properties of space, and relationships between shapes." },
            { title: "Topology", description: "Study of properties that are preserved under continuous deformations, such as stretching, bending, and twisting." }
        ]
    },
    {
        category: "Applied Mathematics",
        topics: [
            { title: "Probability and Statistics", description: "Study of uncertainty and data analysis, including methods for collecting, analyzing, interpreting, and presenting data." },
            { title: "Mathematical Physics", description: "Application of mathematical methods to problems in physics, such as mechanics, electromagnetism, and quantum mechanics." },
            { title: "Operations Research", description: "Application of mathematical methods to optimize decision-making processes, including optimization, simulation, and mathematical modeling." },
            { title: "Mathematical Biology", description: "Application of mathematical techniques to understand biological systems, such as population dynamics, epidemiology, and ecological modeling." },
            { title: "Financial Mathematics", description: "Application of mathematics to financial markets, including pricing of derivatives, risk management, and portfolio optimization." }
        ]
    },
    {
        category: "Computational Mathematics",
        topics: [
            { title: "Numerical Analysis", description: "Study of algorithms for solving mathematical problems numerically, including methods for integration, differentiation, and solving differential equations." },
            { title: "Computer Algebra", description: "Use of computer systems to manipulate mathematical expressions and perform symbolic computations." }
        ]
    }
];

const MathematicsComponent = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen py-20 lg:py-16 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200">
            <div className="md:container mx-auto px-3">
                <h1 className="text-4xl font-bold text-center text-indigo-800 mb-10">Mathematics</h1>
                <p className="my-7">
                    Mathematics is the study of numbers, quantity, structure, space, and change. It is a fundamental and universal field that underpins various disciplines and plays a crucial role in understanding the world and solving practical problems. Here are key aspects and branches of mathematics:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {mathematicsData.map((category, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <h2 className="text-2xl font-semibold text-purple-900 mb-4">{category.category}</h2>
                            {category.topics.map((topic, idx) => (
                                <div key={idx} className="mb-3">
                                    <h3 className="text-xl font-medium text-indigo-700">{topic.title}</h3>
                                    <p className="text-gray-700">{topic.description}</p>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
                <p className="mt-7">
                    Mathematics provides a framework for logical reasoning, problem-solving, and abstraction, which are essential in scientific research, engineering, economics, computer science, and many other fields. It is a tool for understanding patterns and relationships in nature, technology, and human behavior, and it continues to evolve with new discoveries and applications in our increasingly complex world.
                </p>
            </div>
        </div>
    );
};

export default MathematicsComponent;
