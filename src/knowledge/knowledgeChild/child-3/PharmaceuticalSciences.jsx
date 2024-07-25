import React, { useEffect } from 'react';

const PharmaceuticalSciences = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="py-20 lg:py-16">
      <div className="md:container px-3">
        <div className="bg-white md:p-10 p-3 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold mb-8 text-center text-indigo-600">Pharmaceutical Sciences</h1>
          <p className="mb-6 text-lg text-gray-800">
            Pharmaceutical Sciences encompass a multidisciplinary field that integrates chemistry, biology, pharmacology, and technology to discover, develop, and evaluate drugs and medications. Here are some potential topics within Pharmaceutical Sciences that could be explored for publishing:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col bg-indigo-100 border border-indigo-500 rounded-lg p-6 shadow-md">
              <h2 className="text-2xl font-semibold text-indigo-600">1. Drug Discovery and Development</h2>
              <p className="text-lg text-gray-700">
                Methods for identifying and synthesizing new drug candidates, high-throughput screening, and preclinical testing.
              </p>
            </div>
            <div className="flex flex-col bg-indigo-100 border border-indigo-500 rounded-lg p-6 shadow-md">
              <h2 className="text-2xl font-semibold text-indigo-600">2. Pharmacokinetics and Pharmacodynamics</h2>
              <p className="text-lg text-gray-700">
                Study of drug absorption, distribution, metabolism, and excretion (ADME), as well as drug-receptor interactions and mechanisms of action.
              </p>
            </div>
            <div className="flex flex-col bg-indigo-100 border border-indigo-500 rounded-lg p-6 shadow-md">
              <h2 className="text-2xl font-semibold text-indigo-600">3. Formulation Development</h2>
              <p className="text-lg text-gray-700">
                Techniques for formulating drugs into dosage forms (tablets, capsules, injectables) that optimize drug delivery and bioavailability.
              </p>
            </div>
            <div className="flex flex-col bg-indigo-100 border border-indigo-500 rounded-lg p-6 shadow-md">
              <h2 className="text-2xl font-semibold text-indigo-600">4. Biopharmaceutics</h2>
              <p className="text-lg text-gray-700">
                Factors influencing drug absorption and bioavailability, including drug solubility, permeability, and formulation strategies.
              </p>
            </div>
            <div className="flex flex-col bg-indigo-100 border border-indigo-500 rounded-lg p-6 shadow-md">
              <h2 className="text-2xl font-semibold text-indigo-600">5. Pharmaceutical Analysis</h2>
              <p className="text-lg text-gray-700">
                Analytical methods (HPLC, spectroscopy, mass spectrometry) for drug quantification, purity assessment, and stability testing.
              </p>
            </div>
            <div className="flex flex-col bg-indigo-100 border border-indigo-500 rounded-lg p-6 shadow-md">
              <h2 className="text-2xl font-semibold text-indigo-600">6. Clinical Pharmacology</h2>
              <p className="text-lg text-gray-700">
                Evaluation of drug safety, efficacy, and pharmacokinetics in humans through clinical trials and pharmacovigilance.
              </p>
            </div>
            <div className="flex flex-col bg-indigo-100 border border-indigo-500 rounded-lg p-6 shadow-md">
              <h2 className="text-2xl font-semibold text-indigo-600">7. Regulatory Affairs</h2>
              <p className="text-lg text-gray-700">
                Drug approval processes, regulatory requirements, and compliance with international pharmaceutical regulations.
              </p>
            </div>
            <div className="flex flex-col bg-indigo-100 border border-indigo-500 rounded-lg p-6 shadow-md">
              <h2 className="text-2xl font-semibold text-indigo-600">8. Pharmaceutical Technology</h2>
              <p className="text-lg text-gray-700">
                Advances in drug delivery systems (liposomes, nanoparticles, implants) and novel drug delivery approaches.
              </p>
            </div>
            <div className="flex flex-col bg-indigo-100 border border-indigo-500 rounded-lg p-6 shadow-md">
              <h2 className="text-2xl font-semibold text-indigo-600">9. Pharmaceutical Biotechnology</h2>
              <p className="text-lg text-gray-700">
                Applications of biotechnology in drug development, including biopharmaceuticals and gene therapy.
              </p>
            </div>
            <div className="flex flex-col bg-indigo-100 border border-indigo-500 rounded-lg p-6 shadow-md">
              <h2 className="text-2xl font-semibold text-indigo-600">10. Pharmaceutical Education and Training</h2>
              <p className="text-lg text-gray-700">
                Innovations in pharmaceutical education, curriculum development, and professional development programs.
              </p>
            </div>
          </div>

          <p className="mt-8 text-lg text-gray-800">
            These topics reflect the diverse aspects of Pharmaceutical Sciences, from basic research to clinical applications and regulatory affairs. If you have specific areas or questions you'd like to explore further within Pharmaceutical Sciences, feel free to ask!
          </p>
        </div>
      </div>
    </div>
  );
};

export default PharmaceuticalSciences;
