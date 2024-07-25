import React, { useEffect } from 'react';

const PublicHealth = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="py-20 lg:py-16">
      <div className="md:container px-3">
        <div className="bg-white shadow-lg rounded-lg md:p-10 p-3">
          <h1 className="text-4xl font-bold mb-8 text-center text-green-600">Public Health</h1>
          <p className="mb-6 text-lg text-gray-800">
            Public Health is a multidisciplinary field focused on improving the health and well-being of populations through disease prevention, health promotion, policy development, and research. Here are some potential topics within Public Health that could be explored for publishing:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col bg-green-100 border border-green-500 rounded-lg p-6 shadow-md">
              <h2 className="text-2xl font-semibold text-green-600">1. Epidemiology</h2>
              <p className="text-lg text-gray-700">
                Study of disease patterns, causes, and risk factors in populations, including outbreak investigations and disease surveillance.
              </p>
            </div>
            <div className="flex flex-col bg-green-100 border border-green-500 rounded-lg p-6 shadow-md">
              <h2 className="text-2xl font-semibold text-green-600">2. Health Policy and Management</h2>
              <p className="text-lg text-gray-700">
                Development and evaluation of health policies, healthcare systems, and management strategies to improve public health outcomes.
              </p>
            </div>
            <div className="flex flex-col bg-green-100 border border-green-500 rounded-lg p-6 shadow-md">
              <h2 className="text-2xl font-semibold text-green-600">3. Global Health</h2>
              <p className="text-lg text-gray-700">
                International health issues, global disease burden, health disparities, and global health interventions and partnerships.
              </p>
            </div>
            <div className="flex flex-col bg-green-100 border border-green-500 rounded-lg p-6 shadow-md">
              <h2 className="text-2xl font-semibold text-green-600">4. Environmental Health</h2>
              <p className="text-lg text-gray-700">
                Impact of environmental factors (air quality, water quality, climate change) on human health and strategies for environmental health protection.
              </p>
            </div>
            <div className="flex flex-col bg-green-100 border border-green-500 rounded-lg p-6 shadow-md">
              <h2 className="text-2xl font-semibold text-green-600">5. Health Promotion and Education</h2>
              <p className="text-lg text-gray-700">
                Strategies for promoting healthy behaviors, disease prevention, and community health education programs.
              </p>
            </div>
            <div className="flex flex-col bg-green-100 border border-green-500 rounded-lg p-6 shadow-md">
              <h2 className="text-2xl font-semibold text-green-600">6. Maternal and Child Health</h2>
              <p className="text-lg text-gray-700">
                Programs and interventions to improve maternal health, infant health outcomes, and child development.
              </p>
            </div>
            <div className="flex flex-col bg-green-100 border border-green-500 rounded-lg p-6 shadow-md">
              <h2 className="text-2xl font-semibold text-green-600">7. Occupational Health</h2>
              <p className="text-lg text-gray-700">
                Workplace health hazards, occupational safety regulations, and interventions to protect worker health.
              </p>
            </div>
            <div className="flex flex-col bg-green-100 border border-green-500 rounded-lg p-6 shadow-md">
              <h2 className="text-2xl font-semibold text-green-600">8. Nutrition and Food Safety</h2>
              <p className="text-lg text-gray-700">
                Public health nutrition policies, food security, dietary guidelines, and foodborne illness prevention.
              </p>
            </div>
            <div className="flex flex-col bg-green-100 border border-green-500 rounded-lg p-6 shadow-md">
              <h2 className="text-2xl font-semibold text-green-600">9. Infectious Disease Control</h2>
              <p className="text-lg text-gray-700">
                Prevention and control strategies for communicable diseases, vaccination programs, and pandemic preparedness.
              </p>
            </div>
            <div className="flex flex-col bg-green-100 border border-green-500 rounded-lg p-6 shadow-md">
              <h2 className="text-2xl font-semibold text-green-600">10. Social Determinants of Health</h2>
              <p className="text-lg text-gray-700">
                Impact of social, economic, and environmental factors on health disparities and strategies for addressing social determinants of health.
              </p>
            </div>
          </div>

          <p className="mt-8 text-lg text-gray-800">
            These topics encompass various aspects of Public Health, from epidemiology and policy development to health promotion and environmental health.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PublicHealth;
