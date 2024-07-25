import React, { useEffect } from 'react';

const Oncology = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="py-20 lg:py-16">
      <div className="md:container px-3">
        <div className="bg-white md:p-8 p-3 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold mb-6 text-center text-indigo-600">Oncology</h1>
          <p className="mb-6 text-lg text-gray-700">
            Oncology is the branch of medicine that deals with the prevention, diagnosis, and treatment of cancer. Here are some potential topics within Oncology that could be explored for publishing:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 border border-indigo-500 rounded-lg bg-indigo-50">
              <h2 className="text-2xl font-semibold text-indigo-600">1. Cancer Biology</h2>
              <p className="text-lg text-gray-700">
                <strong>Mechanisms of cancer development</strong>, tumor microenvironment, and molecular pathways involved in oncogenesis.
              </p>
            </div>
            <div className="p-6 border border-indigo-500 rounded-lg bg-indigo-50">
              <h2 className="text-2xl font-semibold text-indigo-600">2. Cancer Diagnosis</h2>
              <p className="text-lg text-gray-700">
                Imaging techniques (MRI, CT, PET), biopsy procedures, and advancements in early cancer detection.
              </p>
            </div>
            <div className="p-6 border border-indigo-500 rounded-lg bg-indigo-50">
              <h2 className="text-2xl font-semibold text-indigo-600">3. Cancer Treatment Modalities</h2>
              <p className="text-lg text-gray-700">
                Surgery, chemotherapy, radiation therapy, immunotherapy, targeted therapy, and combination therapies.
              </p>
            </div>
            <div className="p-6 border border-indigo-500 rounded-lg bg-indigo-50">
              <h2 className="text-2xl font-semibold text-indigo-600">4. Precision Oncology</h2>
              <p className="text-lg text-gray-700">
                <strong>Personalized medicine approaches</strong> based on genetic profiling, biomarkers, and molecular diagnostics.
              </p>
            </div>
            <div className="p-6 border border-indigo-500 rounded-lg bg-indigo-50">
              <h2 className="text-2xl font-semibold text-indigo-600">5. Supportive Care in Oncology</h2>
              <p className="text-lg text-gray-700">
                Management of cancer-related symptoms, palliative care, pain management, and improving quality of life for cancer patients.
              </p>
            </div>
            <div className="p-6 border border-indigo-500 rounded-lg bg-indigo-50">
              <h2 className="text-2xl font-semibold text-indigo-600">6. Pediatric Oncology</h2>
              <p className="text-lg text-gray-700">
                Diagnosis and treatment of childhood cancers, supportive care needs, survivorship issues, and psychosocial aspects.
              </p>
            </div>
            <div className="p-6 border border-indigo-500 rounded-lg bg-indigo-50">
              <h2 className="text-2xl font-semibold text-indigo-600">7. Cancer Survivorship</h2>
              <p className="text-lg text-gray-700">
                Long-term follow-up care, survivorship plans, late effects of cancer treatment, and survivorship research.
              </p>
            </div>
            <div className="p-6 border border-indigo-500 rounded-lg bg-indigo-50">
              <h2 className="text-2xl font-semibold text-indigo-600">8. Cancer Epidemiology</h2>
              <p className="text-lg text-gray-700">
                Population-based studies on cancer incidence, prevalence, risk factors, and trends.
              </p>
            </div>
            <div className="p-6 border border-indigo-500 rounded-lg bg-indigo-50">
              <h2 className="text-2xl font-semibold text-indigo-600">9. Cancer Prevention and Screening</h2>
              <p className="text-lg text-gray-700">
                Strategies for cancer prevention, screening guidelines (e.g., mammography, colonoscopy), and lifestyle interventions.
              </p>
            </div>
            <div className="p-6 border border-indigo-500 rounded-lg bg-indigo-50">
              <h2 className="text-2xl font-semibold text-indigo-600">10. Psycho-oncology</h2>
              <p className="text-lg text-gray-700">
                <strong>Psychological and emotional aspects</strong> of cancer diagnosis, treatment, and survivorship, including coping mechanisms and mental health support.
              </p>
            </div>
          </div>

          <p className="mt-6 text-lg text-gray-700">
            These topics encompass the breadth of Oncology, covering basic science research, clinical practice, patient care, and public health approaches to cancer prevention and treatment. If you have specific areas or questions you'd like to explore further within Oncology, feel free to ask!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Oncology;
