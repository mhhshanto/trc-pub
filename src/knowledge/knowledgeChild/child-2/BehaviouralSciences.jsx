import React, { useEffect } from 'react';

const BehavioralSciences = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="py-20 lg:py-16 bg-white">
      <div className="md:container px-3 mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">Behavioral Sciences</h1>
        <p className="text-lg text-gray-800 mb-8">
          Behavioral Sciences encompass a range of disciplines that study human behavior and cognitive processes.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-50 border border-blue-200 shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">Psychology</h2>
            <p>
              <strong>Study</strong> of human behavior, cognition, emotions, and mental processes, including clinical psychology, cognitive psychology, and developmental psychology.
            </p>
          </div>
          <div className="bg-blue-50 border border-blue-200 shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">Sociology</h2>
            <p>
              <strong>Analysis</strong> of social behavior, social structures, institutions, and interactions within societies, covering social inequality, gender studies, and cultural sociology.
            </p>
          </div>
          <div className="bg-blue-50 border border-blue-200 shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">Anthropology</h2>
            <p>
              <strong>Study</strong> of human societies, cultures, and evolutionary development, including cultural anthropology, archaeology, and linguistic anthropology.
            </p>
          </div>
          <div className="bg-blue-50 border border-blue-200 shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">Cognitive Science</h2>
            <p>
              <strong>Interdisciplinary study</strong> of cognition, integrating cognitive psychology, neuroscience, linguistics, philosophy of mind, and artificial intelligence.
            </p>
          </div>
          <div className="bg-blue-50 border border-blue-200 shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">Behavioral Economics</h2>
            <p>
              <strong>Application</strong> of psychological insights into economic decision-making and behavior, covering topics like behavioral finance and public policy.
            </p>
          </div>
          <div className="bg-blue-50 border border-blue-200 shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">Social Psychology</h2>
            <p>
              <strong>Study</strong> of how social environments influence individual behavior, attitudes, and interactions, focusing on group dynamics and social cognition.
            </p>
          </div>
          <div className="bg-blue-50 border border-blue-200 shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">Neuroscience</h2>
            <p>
              <strong>Study</strong> of the nervous system and its relation to behavior, cognition, and mental processes, including cognitive neuroscience and affective neuroscience.
            </p>
          </div>
          <div className="bg-blue-50 border border-blue-200 shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">Health Psychology</h2>
            <p>
              <strong>Study</strong> of psychological factors influencing health, illness, and healthcare behaviors, focusing on stress and health behavior change.
            </p>
          </div>
          <div className="bg-blue-50 border border-blue-200 shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">Behavioral Genetics</h2>
            <p>
              <strong>Study</strong> of genetic influences on behavior, personality traits, and mental health disorders.
            </p>
          </div>
          <div className="bg-blue-50 border border-blue-200 shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">Human Development</h2>
            <p>
              <strong>Study</strong> of human growth, development, and life-span changes across physical, cognitive, and socio-emotional domains.
            </p>
          </div>
        </div>

        <p className="text-lg text-gray-800 mt-8">
          These topics illustrate the interdisciplinary nature of Behavioral Sciences, integrating insights from psychology, sociology, anthropology, neuroscience, and other disciplines to understand human behavior and mental processes.
          If you have specific areas or questions you'd like to explore further within Behavioral Sciences, feel free to ask!
        </p>
      </div>
    </div>
  );
};

export default BehavioralSciences;
