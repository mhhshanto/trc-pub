import React, { useEffect } from 'react';

const Neurology = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="py-20 lg:py-16">
      <div className="md:container px-3">
        <div className="bg-white lg:p-8 p-3 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold mb-6 text-center text-blue-800">Neurology</h1>
          <p className="mb-6 text-lg text-gray-700">
            Neurology is the branch of medicine that deals with disorders of the nervous system, including the brain, spinal cord, nerves, and muscles. Here are some potential topics within Neurology that could be explored for publishing:
          </p>
          
          <div className="flex flex-col space-y-8">
            <div className="border-l-4 border-blue-600 pl-4">
              <h2 className="text-2xl font-semibold text-blue-600">Stroke</h2>
              <p className="text-lg text-gray-700"><strong>Types of stroke</strong> (ischemic, hemorrhagic), acute management, rehabilitation strategies, and prevention.</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h2 className="text-2xl font-semibold text-blue-600">Epilepsy</h2>
              <p className="text-lg text-gray-700">Diagnosis, treatment options (antiepileptic drugs, surgery), and management of epilepsy syndromes.</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h2 className="text-2xl font-semibold text-blue-600">Movement Disorders</h2>
              <p className="text-lg text-gray-700">Parkinson's disease, essential tremor, dystonia, and other disorders affecting movement and coordination.</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h2 className="text-2xl font-semibold text-blue-600">Neurodegenerative Diseases</h2>
              <p className="text-lg text-gray-700"><strong>Alzheimer's disease</strong>, Parkinson's disease, amyotrophic lateral sclerosis (ALS), and Huntington's disease.</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h2 className="text-2xl font-semibold text-blue-600">Multiple Sclerosis (MS)</h2>
              <p className="text-lg text-gray-700">Pathophysiology, clinical features, disease-modifying therapies, and management of MS relapses.</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h2 className="text-2xl font-semibold text-blue-600">Headache Disorders</h2>
              <p className="text-lg text-gray-700">Migraine, tension-type headache, cluster headache, and management strategies including pharmacological and non-pharmacological approaches.</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h2 className="text-2xl font-semibold text-blue-600">Neuromuscular Disorders</h2>
              <p className="text-lg text-gray-700">Myasthenia gravis, muscular dystrophy, neuropathies, and motor neuron diseases.</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h2 className="text-2xl font-semibold text-blue-600">Neuroimmunology</h2>
              <p className="text-lg text-gray-700">Immune-mediated neurological disorders, such as multiple sclerosis and autoimmune encephalitis.</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h2 className="text-2xl font-semibold text-blue-600">Neurocritical Care</h2>
              <p className="text-lg text-gray-700">Management of critical neurological conditions, including traumatic brain injury, status epilepticus, and cerebral hemorrhage.</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h2 className="text-2xl font-semibold text-blue-600">Neuro-oncology</h2>
              <p className="text-lg text-gray-700"><strong>Diagnosis</strong> and treatment of brain tumors, including gliomas, meningiomas, and metastatic brain tumors.</p>
            </div>
          </div>

          <p className="mt-6 text-lg text-gray-700">
            These topics cover a wide range of neurological disorders and advancements in clinical practice, research, and treatment options. If you have specific areas or questions you'd like to explore further within Neurology, feel free to ask!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Neurology;
