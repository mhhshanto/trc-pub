import React, { useEffect } from 'react';

const RadiologyComponent = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="md:container px-3 py-20 lg:py-16">
      <h1 className="text-4xl font-bold text-center mb-10">Radiology</h1>
      <p className="text-lg text-center mb-8">
        Radiology is a branch of medicine that uses medical imaging technologies to diagnose and treat diseases.
      </p>
      <div className="flex flex-col md:flex-row md:space-x-6">
        <div className="flex-1 bg-blue-100 rounded-lg p-6 shadow-md mb-6 md:mb-0">
          <h2 className="text-2xl font-semibold mb-4">Key Topics</h2>
          <ul className="list-disc list-inside space-y-3">
            <li><strong>Diagnostic Radiology:</strong> Use of imaging modalities such as X-ray, CT scan, MRI, ultrasound, and nuclear medicine for diagnosing various conditions.</li>
            <li><strong>Interventional Radiology:</strong> Minimally invasive procedures guided by imaging techniques for therapeutic purposes.</li>
            <li><strong>Radiation Oncology:</strong> Use of radiation therapy in the treatment of cancer.</li>
            <li><strong>Neuroradiology:</strong> Imaging of the brain and spine to diagnose conditions.</li>
            <li><strong>Musculoskeletal Radiology:</strong> Imaging of bones and joints to diagnose fractures and injuries.</li>
          </ul>
        </div>
        <div className="flex-1 bg-green-100 rounded-lg p-6 shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Additional Topics</h2>
          <ul className="list-disc list-inside space-y-3">
            <li><strong>Pediatric Radiology:</strong> Imaging techniques specific to children.</li>
            <li><strong>Cardiovascular Radiology:</strong> Imaging of the heart and blood vessels.</li>
            <li><strong>Breast Imaging:</strong> Screening and diagnostic techniques for breast cancer.</li>
            <li><strong>Abdominal Radiology:</strong> Imaging of abdominal organs for various conditions.</li>
            <li><strong>Emergency Radiology:</strong> Rapid interpretation of imaging studies in emergencies.</li>
          </ul>
        </div>
      </div>
      <div className="mt-10 text-lg text-center">
        <p>
          These topics highlight the diverse applications of radiology in clinical practice, research, and patient care across various medical specialties. 
          If you have specific areas or questions you'd like to explore further within Radiology, feel free to ask!
        </p>
      </div>
    </div>
  );
};

export default RadiologyComponent;
