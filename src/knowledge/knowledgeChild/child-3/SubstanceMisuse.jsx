import React, { useEffect } from 'react';

const SubstanceUseMisuse = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="py-20 lg:py-16">
      <div className="md:container px-3 mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">Substance Use & Misuse</h1>
        <p className="text-lg text-gray-700 mb-8">
          Substance Use & Misuse is a field that focuses on the study, prevention, treatment, and management of substance use disorders, including addiction and dependence on substances such as alcohol, opioids, stimulants, and other drugs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-blue-600">Key Topics</h2>
            <ol className="list-decimal pl-5 mt-2">
              <li>Epidemiology of Substance Use</li>
              <li>Neurobiology of Addiction</li>
              <li>Screening and Assessment</li>
              <li>Treatment Approaches</li>
              <li>Harm Reduction Strategies</li>
              <li>Co-occurring Disorders</li>
              <li>Public Health Interventions</li>
              <li>Substance Use in Special Populations</li>
              <li>Recovery and Relapse Prevention</li>
              <li>Ethical and Legal Issues</li>
            </ol>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-blue-600">Overview of Topics</h2>
            <ul className="list-disc pl-5 mt-2">
              <li><strong>Epidemiology of Substance Use:</strong> Prevalence, trends, and patterns of substance use and misuse across different populations and regions.</li>
              <li><strong>Neurobiology of Addiction:</strong> Mechanisms underlying substance dependence, including neuroadaptive changes in the brain's reward pathways.</li>
              <li><strong>Screening and Assessment:</strong> Tools and approaches for screening individuals for substance use disorders and assessing severity.</li>
              <li><strong>Treatment Approaches:</strong> Pharmacological treatments, behavioral therapies, and integrated treatment models.</li>
              <li><strong>Harm Reduction Strategies:</strong> Programs aimed at reducing the negative consequences of substance use.</li>
              <li><strong>Co-occurring Disorders:</strong> Management of substance use disorders in individuals with comorbid mental health conditions.</li>
              <li><strong>Public Health Interventions:</strong> Policies and public health campaigns aimed at preventing substance use initiation.</li>
              <li><strong>Substance Use in Special Populations:</strong> Substance use disorders among various marginalized groups.</li>
              <li><strong>Recovery and Relapse Prevention:</strong> Strategies to support long-term recovery from substance use disorders.</li>
              <li><strong>Ethical and Legal Issues:</strong> Ethical considerations in the treatment of substance use disorders.</li>
            </ul>
          </div>
        </div>

        <p className="text-lg text-gray-700 mt-8">
          These topics encompass the multifaceted nature of Substance Use & Misuse, addressing both clinical aspects and public health approaches to tackling substance use disorders. If you have specific areas or questions you'd like to explore further within this field, feel free to ask!
        </p>
      </div>
    </div>
  );
};

export default SubstanceUseMisuse;
