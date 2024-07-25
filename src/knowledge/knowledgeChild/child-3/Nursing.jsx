import React, { useEffect } from 'react';

const Nursing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="py-20 lg:py-16">
      <div className="md:container px-3">
        <div className="bg-white md:p-8 p-3 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold mb-6 text-center text-teal-600">Nursing</h1>
          <p className="mb-6 text-lg text-gray-700">
            Nursing is a critical profession within healthcare focused on the care and support of individuals, families, and communities to promote health and well-being. Here are some potential topics within Nursing that could be explored for publishing:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-4 border rounded-lg border-teal-500 bg-teal-50">
              <h2 className="text-2xl font-semibold text-teal-600">1. Nursing Education and Training</h2>
              <p className="text-lg text-gray-700">
                <strong>Innovations in nursing education</strong>, curriculum development, simulation training, and continuing education programs.
              </p>
            </div>
            <div className="p-4 border rounded-lg border-teal-500 bg-teal-50">
              <h2 className="text-2xl font-semibold text-teal-600">2. Clinical Nursing Practice</h2>
              <p className="text-lg text-gray-700">
                Best practices in patient assessment, nursing care planning, medication administration, and patient advocacy.
              </p>
            </div>
            <div className="p-4 border rounded-lg border-teal-500 bg-teal-50">
              <h2 className="text-2xl font-semibold text-teal-600">3. Specialty Nursing Areas</h2>
              <p className="text-lg text-gray-700">
                Advanced practice nursing roles (e.g., nurse practitioner, clinical nurse specialist) in various specialties such as pediatrics, geriatrics, oncology, and psychiatric-mental health.
              </p>
            </div>
            <div className="p-4 border rounded-lg border-teal-500 bg-teal-50">
              <h2 className="text-2xl font-semibold text-teal-600">4. Nursing Management and Leadership</h2>
              <p className="text-lg text-gray-700">
                Strategies for nurse leadership, nurse staffing models, interdisciplinary collaboration, and healthcare team management.
              </p>
            </div>
            <div className="p-4 border rounded-lg border-teal-500 bg-teal-50">
              <h2 className="text-2xl font-semibold text-teal-600">5. Evidence-Based Practice in Nursing</h2>
              <p className="text-lg text-gray-700">
                Implementation of evidence-based guidelines, nursing research methodologies, and translating research into practice.
              </p>
            </div>
            <div className="p-4 border rounded-lg border-teal-500 bg-teal-50">
              <h2 className="text-2xl font-semibold text-teal-600">6. Patient Safety and Quality Improvement</h2>
              <p className="text-lg text-gray-700">
                Initiatives to enhance patient safety, reduce medical errors, and improve healthcare outcomes through quality improvement projects.
              </p>
            </div>
            <div className="p-4 border rounded-lg border-teal-500 bg-teal-50">
              <h2 className="text-2xl font-semibold text-teal-600">7. Ethical and Legal Issues in Nursing</h2>
              <p className="text-lg text-gray-700">
                Ethical dilemmas, patient rights, informed consent, and legal considerations in nursing practice.
              </p>
            </div>
            <div className="p-4 border rounded-lg border-teal-500 bg-teal-50">
              <h2 className="text-2xl font-semibold text-teal-600">8. Community and Public Health Nursing</h2>
              <p className="text-lg text-gray-700">
                Population-based healthcare delivery, health promotion, disease prevention, and addressing health disparities.
              </p>
            </div>
            <div className="p-4 border rounded-lg border-teal-500 bg-teal-50">
              <h2 className="text-2xl font-semibold text-teal-600">9. Nursing Informatics</h2>
              <p className="text-lg text-gray-700">
                Integration of healthcare technology, electronic health records (EHR), telehealth, and informatics solutions in nursing practice.
              </p>
            </div>
            <div className="p-4 border rounded-lg border-teal-500 bg-teal-50">
              <h2 className="text-2xl font-semibold text-teal-600">10. Global Health Nursing</h2>
              <p className="text-lg text-gray-700">
                Nursing roles in global health initiatives, disaster response, humanitarian aid, and international healthcare partnerships.
              </p>
            </div>
          </div>

          <p className="mt-6 text-lg text-gray-700">
            These topics reflect the diverse roles and responsibilities of nurses across different healthcare settings, from direct patient care to leadership, education, research, and policy development. If you have specific areas or questions you'd like to explore further within Nursing, feel free to ask!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Nursing;
