import React, { useEffect } from 'react';

const Geography = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="py-20 lg:py-16 bg-gray-100">
      <div className="md:container px-3 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Geography</h1>
        <p className="mb-6 text-lg">
          Geography is a diverse field that studies the Earth's physical features, human populations, cultures, environments, and their interactions. Here are some potential topics within Geography that could be explored for publishing:
        </p>
        <div className="space-y-4">
          <div className="p-4 border border-gray-200 rounded-lg">
            <h2 className="text-xl font-semibold">1. Physical Geography:</h2>
            <p className="text-gray-700">
              Study of natural landscapes, landforms, climates, ecosystems, biogeography, and environmental processes.
            </p>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg">
            <h2 className="text-xl font-semibold">2. Human Geography:</h2>
            <p className="text-gray-700">
              Analysis of human activities, cultures, societies, urbanization, economic activities, and globalization.
            </p>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg">
            <h2 className="text-xl font-semibold">3. Geographic Information Systems (GIS):</h2>
            <p className="text-gray-700">
              Application of spatial data analysis, mapping techniques, remote sensing, and geospatial technology in various fields.
            </p>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg">
            <h2 className="text-xl font-semibold">4. Environmental Geography:</h2>
            <p className="text-gray-700">
              Examination of environmental issues, sustainability, natural resource management, climate change impacts, and conservation strategies.
            </p>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg">
            <h2 className="text-xl font-semibold">5. Urban and Regional Planning:</h2>
            <p className="text-gray-700">
              Strategies for urban development, transportation planning, housing policies, regional development, and sustainable cities.
            </p>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg">
            <h2 className="text-xl font-semibold">6. Cultural Geography:</h2>
            <p className="text-gray-700">
              Exploration of cultural landscapes, identities, cultural diffusion, heritage conservation, and the geography of tourism.
            </p>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg">
            <h2 className="text-xl font-semibold">7. Geopolitics:</h2>
            <p className="text-gray-700">
              Analysis of political geography, international relations, geopolitical conflicts, territorial disputes, and geopolitical strategies.
            </p>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg">
            <h2 className="text-xl font-semibold">8. Economic Geography:</h2>
            <p className="text-gray-700">
              Study of economic activities, trade flows, industrial locations, regional disparities, and global economic systems.
            </p>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg">
            <h2 className="text-xl font-semibold">9. Health Geography:</h2>
            <p className="text-gray-700">
              Spatial analysis of health issues, disease patterns, healthcare access, environmental health, and public health policies.
            </p>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg">
            <h2 className="text-xl font-semibold">10. Geography of Development:</h2>
            <p className="text-gray-700">
              Study of development theories, global inequalities, poverty alleviation, human development indices, and sustainable development goals.
            </p>
          </div>
        </div>
        <p className="mt-6 text-lg">
          These topics illustrate the interdisciplinary nature of Geography, integrating physical sciences, social sciences, and humanities to understand spatial patterns and processes on Earth. If you have specific areas or questions you'd like to explore further within Geography, feel free to ask.
        </p>
      </div>
    </div>
  );
};

export default Geography;
