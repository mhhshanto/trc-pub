import React, { useEffect } from 'react';

const Nephrology = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="py-20 lg:py-16">
      <div className="md:container px-3">
        <div className="bg-gray-50 p-3 md:p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold mb-6 text-center text-green-700">Nephrology</h1>
          <p className="mb-6 text-lg text-gray-700">
            Nephrology is the branch of medicine that focuses on the diagnosis, treatment, and management of kidney diseases and disorders. Here are some potential topics within Nephrology that could be explored for publishing:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold text-blue-600">Chronic Kidney Disease (CKD)</h2>
              <p className="text-lg text-gray-700"><strong>Epidemiology</strong>, risk factors, progression, and management strategies for CKD stages 1-5.</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-blue-600">Acute Kidney Injury (AKI)</h2>
              <p className="text-lg text-gray-700">Causes, diagnosis, management, and complications of acute kidney injury in hospitalized patients.</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-blue-600">End-stage Renal Disease (ESRD)</h2>
              <p className="text-lg text-gray-700"><strong>Treatment options</strong> for ESRD, including dialysis (hemodialysis, peritoneal dialysis) and kidney transplantation.</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-blue-600">Glomerular Diseases</h2>
              <p className="text-lg text-gray-700">Diagnosis and management of glomerulonephritis, including nephrotic syndrome and autoimmune glomerular diseases.</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-blue-600">Hypertension and Kidney Disease</h2>
              <p className="text-lg text-gray-700"><strong>Relationship</strong> between hypertension and renal function, management of hypertensive nephropathy.</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-blue-600">Diabetic Nephropathy</h2>
              <p className="text-lg text-gray-700">Pathophysiology, screening, prevention, and management of kidney complications in diabetes mellitus.</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-blue-600">Renal Replacement Therapies</h2>
              <p className="text-lg text-gray-700">Innovations and outcomes in dialysis techniques, access care, and vascular access complications.</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-blue-600">Pediatric Nephrology</h2>
              <p className="text-lg text-gray-700">Diagnosis and treatment of kidney disorders in children, including congenital abnormalities and pediatric dialysis.</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-blue-600">Renal Transplantation</h2>
              <p className="text-lg text-gray-700"><strong>Advances</strong> in kidney transplantation, immunosuppressive therapies, organ donation, and long-term outcomes.</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-blue-600">Mineral and Bone Disorders</h2>
              <p className="text-lg text-gray-700">Management of electrolyte abnormalities, bone metabolism disorders (e.g., hyperparathyroidism), and renal osteodystrophy.</p>
            </div>
          </div>
          
          <p className="mt-6 text-lg text-gray-700">
            These topics reflect the broad scope of Nephrology, covering both clinical care and research advancements in kidney diseases and renal function. If you have specific areas or questions you'd like to explore further within Nephrology, feel free to ask!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Nephrology;
