import React, { useEffect } from 'react';

const InfectiousDiseases = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="py-20 lg:py-16">
      <div className="md:container px-3">
        <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold mb-6 text-center text-green-700">Infectious Diseases</h1>
          <p className="mb-6 text-lg text-gray-700">
            Infectious Diseases is a field of medicine focused on the study, diagnosis, treatment, and prevention of illnesses caused by microorganisms such as bacteria, viruses, fungi, parasites, and prions. Here are some potential topics within Infectious Diseases that could be explored for publishing:
          </p>
          
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-blue-600">Antimicrobial Resistance</h2>
              <p className="text-lg text-gray-700">Mechanisms of resistance, surveillance of resistant pathogens, and strategies to combat antimicrobial resistance.</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-blue-600">Vaccine Development</h2>
              <p className="text-lg text-gray-700">Advances in vaccine research and development, vaccine efficacy, and vaccine hesitancy.</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-blue-600">Emerging Infectious Diseases</h2>
              <p className="text-lg text-gray-700">Investigation of newly identified pathogens, outbreaks, and pandemics (e.g., COVID-19, Ebola, Zika).</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-blue-600">Global Health and Infectious Diseases</h2>
              <p className="text-lg text-gray-700">Impact of infectious diseases on global health, international health regulations, and efforts in disease control and eradication.</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-blue-600">Hospital-acquired Infections</h2>
              <p className="text-lg text-gray-700">Prevention, surveillance, and management of infections acquired in healthcare settings.</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-blue-600">Vector-borne Diseases</h2>
              <p className="text-lg text-gray-700">Transmission dynamics, prevention strategies, and control measures for diseases transmitted by vectors such as mosquitoes and ticks.</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-blue-600">HIV/AIDS</h2>
              <p className="text-lg text-gray-700">Advances in HIV treatment, prevention strategies (e.g., PrEP), and management of HIV-related complications.</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-blue-600">Tuberculosis</h2>
              <p className="text-lg text-gray-700">Diagnosis, treatment approaches (including drug-resistant TB), and global efforts in tuberculosis control.</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-blue-600">Parasitic Infections</h2>
              <p className="text-lg text-gray-700">Diagnosis and treatment of parasitic diseases, such as malaria, leishmaniasis, and schistosomiasis.</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-blue-600">Fungal Infections</h2>
              <p className="text-lg text-gray-700">Diagnosis, treatment, and management of fungal infections, including opportunistic fungal pathogens.</p>
            </div>
          </div>
          
          <p className="mt-6 text-lg text-gray-700">
            These topics encompass various aspects of Infectious Diseases, from basic science and epidemiology to clinical management and public health interventions. If you have specific areas or questions you'd like to explore further within Infectious Diseases, feel free to ask!
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfectiousDiseases;
