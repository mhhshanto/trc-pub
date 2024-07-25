import React, { useEffect } from 'react';

const Pediatrics = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="py-20 lg:py-16">
      <div className="md:container px-3">
        <div className="bg-white md:p-10 p-3 rounded-lg shadow-md">
          <h1 className="text-4xl font-bold mb-8 text-center text-teal-600">Pediatrics</h1>
          <p className="mb-6 text-lg text-gray-800">
            Pediatrics is the branch of medicine that focuses on the healthcare of infants, children, and adolescents. Here are some potential topics within Pediatrics that could be explored for publishing:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-teal-100 border border-teal-500 rounded-lg p-6 flex flex-col">
              <h2 className="text-2xl font-semibold text-teal-600">1. Developmental Pediatrics</h2>
              <p className="text-lg text-gray-700">
                <strong>Growth and development milestones</strong>, developmental delays, and early intervention programs.
              </p>
            </div>
            <div className="bg-teal-100 border border-teal-500 rounded-lg p-6 flex flex-col">
              <h2 className="text-2xl font-semibold text-teal-600">2. Pediatric Infectious Diseases</h2>
              <p className="text-lg text-gray-700">
                Diagnosis, treatment, and prevention of infectious diseases in children, including vaccination strategies.
              </p>
            </div>
            <div className="bg-teal-100 border border-teal-500 rounded-lg p-6 flex flex-col">
              <h2 className="text-2xl font-semibold text-teal-600">3. Pediatric Neurology</h2>
              <p className="text-lg text-gray-700">
                Diagnosis and management of neurological disorders in children, such as epilepsy, cerebral palsy, and developmental delays.
              </p>
            </div>
            <div className="bg-teal-100 border border-teal-500 rounded-lg p-6 flex flex-col">
              <h2 className="text-2xl font-semibold text-teal-600">4. Pediatric Respiratory Medicine</h2>
              <p className="text-lg text-gray-700">
                Respiratory conditions in children, including asthma, cystic fibrosis, and respiratory infections.
              </p>
            </div>
            <div className="bg-teal-100 border border-teal-500 rounded-lg p-6 flex flex-col">
              <h2 className="text-2xl font-semibold text-teal-600">5. Pediatric Cardiology</h2>
              <p className="text-lg text-gray-700">
                Diagnosis and treatment of congenital heart defects, arrhythmias, and other cardiac conditions in children.
              </p>
            </div>
            <div className="bg-teal-100 border border-teal-500 rounded-lg p-6 flex flex-col">
              <h2 className="text-2xl font-semibold text-teal-600">6. Pediatric Gastroenterology</h2>
              <p className="text-lg text-gray-700">
                Diagnosis and management of gastrointestinal disorders in children, including GERD, IBD, and celiac disease.
              </p>
            </div>
            <div className="bg-teal-100 border border-teal-500 rounded-lg p-6 flex flex-col">
              <h2 className="text-2xl font-semibold text-teal-600">7. Pediatric Endocrinology</h2>
              <p className="text-lg text-gray-700">
                Hormonal disorders in children, such as diabetes mellitus, growth disorders, and thyroid conditions.
              </p>
            </div>
            <div className="bg-teal-100 border border-teal-500 rounded-lg p-6 flex flex-col">
              <h2 className="text-2xl font-semibold text-teal-600">8. Pediatric Hematology and Oncology</h2>
              <p className="text-lg text-gray-700">
                Diagnosis and treatment of blood disorders and childhood cancers, including leukemia, lymphoma, and brain tumors.
              </p>
            </div>
            <div className="bg-teal-100 border border-teal-500 rounded-lg p-6 flex flex-col">
              <h2 className="text-2xl font-semibold text-teal-600">9. Pediatric Surgery</h2>
              <p className="text-lg text-gray-700">
                Surgical procedures in children, including congenital anomalies, trauma surgery, and minimally invasive surgery.
              </p>
            </div>
            <div className="bg-teal-100 border border-teal-500 rounded-lg p-6 flex flex-col">
              <h2 className="text-2xl font-semibold text-teal-600">10. Pediatric Emergency Medicine</h2>
              <p className="text-lg text-gray-700">
                Management of pediatric emergencies, trauma care, and critical care in children.
              </p>
            </div>
          </div>

          <p className="mt-8 text-lg text-gray-800">
            These topics encompass various aspects of pediatric healthcare, from preventive care and acute illness management to chronic disease management and specialized care. If you have specific areas or questions you'd like to explore further within Pediatrics, feel free to ask!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pediatrics;
