import React, { useEffect } from 'react';

const earthSciencesFields = [
    {
        title: "Geology",
        subfields: [
            { title: "Mineralogy", description: "Study of minerals and their properties." },
            { title: "Petrology", description: "Study of the origin, composition, distribution, and structure of rocks." },
            { title: "Geomorphology", description: "Study of landforms and the processes that shape the Earth's surface." },
            { title: "Structural Geology", description: "Study of the deformation of rocks and the processes that create geological structures." }
        ]
    },
    {
        title: "Geophysics",
        subfields: [
            { title: "Seismology", description: "Study of earthquakes and the propagation of seismic waves through the Earth." },
            { title: "Geodesy", description: "Measurement and representation of the Earth's geometric shape, orientation in space, and gravitational field." },
            { title: "Geomagnetism", description: "Study of the Earth's magnetic field and its variations over time." },
            { title: "Gravimetry", description: "Measurement of variations in gravitational field strength." }
        ]
    },
    {
        title: "Oceanography",
        subfields: [
            { title: "Physical Oceanography", description: "Study of ocean currents, waves, tides, and ocean-atmosphere interactions." },
            { title: "Chemical Oceanography", description: "Study of the chemical composition and processes of seawater." },
            { title: "Biological Oceanography", description: "Study of marine life, ecosystems, and their interactions with the environment." },
            { title: "Marine Geology", description: "Study of the geological processes and features of the ocean floor." }
        ]
    },
    {
        title: "Atmospheric Sciences",
        subfields: [
            { title: "Meteorology", description: "Study of weather patterns, atmospheric phenomena, and climate." },
            { title: "Climatology", description: "Study of long-term weather patterns, climate variability, and climate change." },
            { title: "Atmospheric Chemistry", description: "Study of chemical composition, reactions, and processes in the atmosphere." }
        ]
    },
    {
        title: "Hydrology",
        subfields: [
            { title: "Surface Hydrology", description: "Study of water on the Earth's surface, including rivers, lakes, and streams." },
            { title: "Groundwater Hydrology", description: "Study of water beneath the Earth's surface in aquifers and groundwater systems." },
            { title: "Hydrometeorology", description: "Study of the interactions between the atmosphere and the Earth's surface in the water cycle." }
        ]
    },
    { title: "Environmental Science", description: "Study of the interactions between humans and the environment, including the impact of human activities on Earth's systems and ecosystems." },
    { title: "Geochemistry", description: "Study of the chemical composition of the Earth and its rocks and minerals, including processes such as weathering, sedimentation, and geochemical cycles." },
    { title: "Paleontology", description: "Study of the history of life on Earth through the examination of plant and animal fossils." }
];

const EarthSciencesComponent = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='bg-gradient-to-r lg:py-16 py-20 from-yellow-100 to-blue-100 min-h-screen'>
            <div className="lg:container mx-auto px-3">
                <h1 className="text-5xl font-bold text-center mb-12 text-teal-800">Earth Sciences</h1>
                <p className="my-7">
                Earth Sciences, also known as geosciences, encompass a wide range of disciplines that study the Earth and its processes. This interdisciplinary field integrates aspects of physics, chemistry, biology, mathematics, and engineering to understand the Earth's structure, composition, history, and dynamic processes. The scope of Earth Sciences includes:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {earthSciencesFields.map((field, index) => (
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
                <p className="my-7">
                Earth Sciences play a crucial role in addressing global challenges such as natural hazards, climate change, resource management, and environmental sustainability. Interdisciplinary research and collaboration across these fields are essential for understanding Earth's complex systems and their interactions.
                </p>
            </div>
        </div>
    );
};

export default EarthSciencesComponent;
