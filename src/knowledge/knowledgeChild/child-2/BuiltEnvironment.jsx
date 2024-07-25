import React, { useEffect } from 'react';

const BuiltEnvironment = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="py-20 lg:py-16 bg-gray-50">
      <div className="md:container px-3 mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">Built Environment</h1>
        <p className="text-lg text-gray-800 mb-8">
          The Built Environment encompasses the physical infrastructure and spaces that humans create and inhabit, influencing our daily lives, activities, and interactions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white border border-gray-300 shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">Architecture</h2>
            <p>
              <strong>Analysis</strong> of architectural styles, historical developments, sustainable design practices, and urban planning.
            </p>
          </div>
          <div className="bg-white border border-gray-300 shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">Urban Planning and Design</h2>
            <p>
              <strong>Strategies</strong> for city and regional planning, including smart cities, transportation systems, and mixed-use development.
            </p>
          </div>
          <div className="bg-white border border-gray-300 shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">Land Use and Zoning</h2>
            <p>
              <strong>Policies</strong> and regulations governing land use, zoning ordinances, and their impact on community development.
            </p>
          </div>
          <div className="bg-white border border-gray-300 shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">Sustainable Development</h2>
            <p>
              <strong>Practices</strong> and technologies promoting environmental sustainability in building design, construction, and urban development.
            </p>
          </div>
          <div className="bg-white border border-gray-300 shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">Real Estate Development</h2>
            <p>
              <strong>Trends</strong> in residential, commercial, and industrial real estate development, including financing and market analysis.
            </p>
          </div>
          <div className="bg-white border border-gray-300 shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">Infrastructure</h2>
            <p>
              <strong>Planning</strong>, design, and maintenance of essential infrastructure systems such as water supply, sewage, energy, and telecommunications.
            </p>
          </div>
          <div className="bg-white border border-gray-300 shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">Historic Preservation</h2>
            <p>
              <strong>Conservation</strong> and adaptive reuse of historic buildings and sites, heritage tourism, and cultural heritage management.
            </p>
          </div>
          <div className="bg-white border border-gray-300 shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">Public Space Design</h2>
            <p>
              <strong>Design</strong> and management of parks, plazas, streetscapes, and public facilities to enhance community engagement and quality of life.
            </p>
          </div>
          <div className="bg-white border border-gray-300 shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">Health and Well-being</h2>
            <p>
              <strong>Design principles</strong> that promote physical and mental health, including biophilic design and active living initiatives.
            </p>
          </div>
          <div className="bg-white border border-gray-300 shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">Smart and Resilient Cities</h2>
            <p>
              <strong>Integration</strong> of technology, data analytics, and resilience strategies to enhance urban livability and sustainability.
            </p>
          </div>
        </div>

        <p className="text-lg text-gray-800 mt-8">
          These topics illustrate the interdisciplinary nature of the Built Environment, encompassing architecture, urban planning, environmental sustainability, real estate development, and public policy. If you have specific areas or questions you'd like to explore further within the Built Environment, feel free to ask!
        </p>
      </div>
    </div>
  );
};

export default BuiltEnvironment;
