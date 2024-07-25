import React, { useEffect } from 'react';

const Psychiatry = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="py-20 lg:py-16">
      <div className="md:container px-3">
        <div className="bg-gray-50 md:p-10 p-3 rounded-lg shadow-xl">
          <h1 className="text-4xl font-bold mb-8 text-center text-blue-600">Psychiatry</h1>
          <p className="mb-6 text-lg text-gray-800">
            Psychiatry is the medical specialty focused on the diagnosis, treatment, and prevention of mental disorders. Here are some potential topics within Psychiatry that could be explored for publishing:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col bg-blue-100 border border-blue-500 rounded-lg p-6 shadow-md">
              <h2 className="text-2xl font-semibold text-blue-600">1. Mood Disorders</h2>
              <p className="text-lg text-gray-700">
                Diagnosis and treatment of <strong>depression</strong>, <strong>bipolar disorder</strong>, and other mood disturbances.
              </p>
            </div>
            <div className="flex flex-col bg-blue-100 border border-blue-500 rounded-lg p-6 shadow-md">
              <h2 className="text-2xl font-semibold text-blue-600">2. Anxiety Disorders</h2>
              <p className="text-lg text-gray-700">
                Generalized anxiety disorder, panic disorder, phobias, and <strong>obsessive-compulsive disorder (OCD)</strong>.
              </p>
            </div>
            <div className="flex flex-col bg-blue-100 border border-blue-500 rounded-lg p-6 shadow-md">
              <h2 className="text-2xl font-semibold text-blue-600">3. Psychotic Disorders</h2>
              <p className="text-lg text-gray-700">
                <strong>Schizophrenia</strong>, schizoaffective disorder, and other psychotic disorders.
              </p>
            </div>
            <div className="flex flex-col bg-blue-100 border border-blue-500 rounded-lg p-6 shadow-md">
              <h2 className="text-2xl font-semibold text-blue-600">4. Personality Disorders</h2>
              <p className="text-lg text-gray-700">
                Borderline personality disorder, antisocial personality disorder, and <strong>narcissistic personality disorder</strong>.
              </p>
            </div>
            <div className="flex flex-col bg-blue-100 border border-blue-500 rounded-lg p-6 shadow-md">
              <h2 className="text-2xl font-semibold text-blue-600">5. Child and Adolescent Psychiatry</h2>
              <p className="text-lg text-gray-700">
                Diagnosis and treatment of mental health issues in children and teenagers, including <strong>ADHD</strong>, conduct disorders, and autism spectrum disorders.
              </p>
            </div>
            <div className="flex flex-col bg-blue-100 border border-blue-500 rounded-lg p-6 shadow-md">
              <h2 className="text-2xl font-semibold text-blue-600">6. Geriatric Psychiatry</h2>
              <p className="text-lg text-gray-700">
                Mental health issues in older adults, <strong>dementia</strong>, and cognitive disorders.
              </p>
            </div>
            <div className="flex flex-col bg-blue-100 border border-blue-500 rounded-lg p-6 shadow-md">
              <h2 className="text-2xl font-semibold text-blue-600">7. Addiction Psychiatry</h2>
              <p className="text-lg text-gray-700">
                Substance use disorders, alcoholism, and treatment approaches including <strong>pharmacotherapy</strong> and behavioral interventions.
              </p>
            </div>
            <div className="flex flex-col bg-blue-100 border border-blue-500 rounded-lg p-6 shadow-md">
              <h2 className="text-2xl font-semibold text-blue-600">8. Psychopharmacology</h2>
              <p className="text-lg text-gray-700">
                Pharmacological treatments for psychiatric disorders, including <strong>antidepressants</strong>, <strong>antipsychotics</strong>, anxiolytics, and mood stabilizers.
              </p>
            </div>
            <div className="flex flex-col bg-blue-100 border border-blue-500 rounded-lg p-6 shadow-md">
              <h2 className="text-2xl font-semibold text-blue-600">9. Psychotherapy</h2>
              <p className="text-lg text-gray-700">
                Different modalities of psychotherapy (e.g., <strong>cognitive-behavioral therapy</strong>, psychodynamic therapy) and their applications in treating mental disorders.
              </p>
            </div>
            <div className="flex flex-col bg-blue-100 border border-blue-500 rounded-lg p-6 shadow-md">
              <h2 className="text-2xl font-semibold text-blue-600">10. Forensic Psychiatry</h2>
              <p className="text-lg text-gray-700">
                Interaction between mental health and the legal system, including competency evaluations and criminal responsibility assessments.
              </p>
            </div>
          </div>

          <p className="mt-8 text-lg text-gray-800">
            These topics cover a wide range of psychiatric disorders, treatment modalities, and specialized areas within the field of Psychiatry.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Psychiatry;
