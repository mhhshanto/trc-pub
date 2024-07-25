import React, { useEffect } from 'react';

const CommunicationStudies = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="py-20 lg:py-16 bg-gray-100">
      <div className="md:container px-3 mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">Communication Studies</h1>
        <p className="text-lg text-gray-800 mb-8">
          Communication Studies is an interdisciplinary field that examines the processes, theories, and effects of human communication across various contexts.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white border border-gray-300 shadow-lg rounded-lg p-6 flex flex-col justify-between">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">Media Studies</h2>
            <p>
              <strong>Analysis</strong> of media institutions, media content, audience reception, and the social, cultural, and political implications of media.
            </p>
          </div>
          <div className="bg-white border border-gray-300 shadow-lg rounded-lg p-6 flex flex-col justify-between">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">Interpersonal Communication</h2>
            <p>
              <strong>Study</strong> of communication dynamics between individuals, including relationship development, conflict resolution, and nonverbal communication.
            </p>
          </div>
          <div className="bg-white border border-gray-300 shadow-lg rounded-lg p-6 flex flex-col justify-between">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">Intercultural Communication</h2>
            <p>
              <strong>Examination</strong> of communication between people from different cultural backgrounds, including cross-cultural understanding, identity negotiation, and cultural adaptation.
            </p>
          </div>
          <div className="bg-white border border-gray-300 shadow-lg rounded-lg p-6 flex flex-col justify-between">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">Organizational Communication</h2>
            <p>
              <strong>Communication practices</strong> within organizations, including leadership communication, team dynamics, organizational culture, and internal communication strategies.
            </p>
          </div>
          <div className="bg-white border border-gray-300 shadow-lg rounded-lg p-6 flex flex-col justify-between">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">Health Communication</h2>
            <p>
              <strong>Communication strategies</strong> in healthcare settings, including patient-provider communication, health campaigns, and health literacy.
            </p>
          </div>
          <div className="bg-white border border-gray-300 shadow-lg rounded-lg p-6 flex flex-col justify-between">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">Political Communication</h2>
            <p>
              <strong>Analysis</strong> of communication strategies in political campaigns, media framing of political issues, and public opinion formation.
            </p>
          </div>
          <div className="bg-white border border-gray-300 shadow-lg rounded-lg p-6 flex flex-col justify-between">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">Digital and Social Media</h2>
            <p>
              <strong>Impact</strong> of digital technologies and social media platforms on communication practices, online communities, and digital activism.
            </p>
          </div>
          <div className="bg-white border border-gray-300 shadow-lg rounded-lg p-6 flex flex-col justify-between">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">Rhetoric and Persuasion</h2>
            <p>
              <strong>Study</strong> of persuasive communication, rhetorical strategies, argumentation theory, and public speaking.
            </p>
          </div>
          <div className="bg-white border border-gray-300 shadow-lg rounded-lg p-6 flex flex-col justify-between">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">Mass Communication</h2>
            <p>
              <strong>Study</strong> of the production, distribution, and reception of media messages, including journalism, broadcasting, and public relations.
            </p>
          </div>
          <div className="bg-white border border-gray-300 shadow-lg rounded-lg p-6 flex flex-col justify-between">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">Communication Ethics and Law</h2>
            <p>
              <strong>Ethical considerations</strong> in communication practices, freedom of speech, media regulation, and privacy issues in communication.
            </p>
          </div>
        </div>

        <p className="text-lg text-gray-800 mt-8">
          These topics highlight the diverse areas of study within Communication Studies, addressing communication processes in interpersonal, organizational, media, and societal contexts. If you have specific areas or questions you'd like to explore further within Communication Studies, feel free to ask!
        </p>
      </div>
    </div>
  );
};

export default CommunicationStudies;
