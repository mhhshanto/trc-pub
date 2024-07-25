import React, { useEffect } from 'react';

const AreaStudies = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="py-20 lg:py-16 bg-blue-50">
      <div className="md:container px-3 mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">Area Studies</h1>
        <p className="text-lg text-gray-700 mb-8">
          Area Studies is an interdisciplinary field that focuses on the study of specific regions or countries,
          typically within the context of their historical, cultural, political, economic, and social dimensions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">East Asian Studies</h2>
            <p><strong>Analysis</strong> of East Asian countries such as China, Japan, and South Korea, including their politics, economies, cultures, and international relations.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">Latin American Studies</h2>
            <p><strong>Examination</strong> of Latin American countries, their history, literature, indigenous cultures, political movements, and economic development.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">African Studies</h2>
            <p><strong>Research</strong> on African countries, including issues of colonialism, post-colonialism, ethnic diversity, development challenges, and cultural practices.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">Middle Eastern Studies</h2>
            <p><strong>Study</strong> of Middle Eastern countries such as Iran, Turkey, and Egypt, focusing on geopolitics, religious dynamics, socio-economic trends, and cultural heritage.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">European Studies</h2>
            <p><strong>Analysis</strong> of European countries, European Union dynamics, historical developments, cultural identities, and political integration.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">South Asian Studies</h2>
            <p><strong>Exploration</strong> of South Asian countries like India, Pakistan, and Bangladesh, covering topics such as colonial history, independence movements, and socio-economic challenges.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">Southeast Asian Studies</h2>
            <p><strong>Research</strong> on countries like Thailand, Vietnam, and Indonesia, including their political systems, economic development, cultural diversity, and regional cooperation.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">Russian and Eurasian Studies</h2>
            <p><strong>Analysis</strong> of Russia and former Soviet republics, their political transitions, economic transformations, cultural developments, and international relations.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">Global and Transnational Studies</h2>
            <p><strong>Comparative analysis</strong> of global issues, transnational flows of culture and capital, and interconnectedness among regions and countries.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">Area-Specific Cultural and Literary Studies</h2>
            <p><strong>Exploration</strong> of literature, arts, and cultural productions specific to particular regions or countries, examining their significance and impact.</p>
          </div>
        </div>

        <p className="text-lg text-gray-700 mt-8">
          These topics demonstrate the interdisciplinary approach of Area Studies, combining insights from history, politics,
          economics, sociology, anthropology, literature, and cultural studies to understand specific regions and their global implications.
          If you have specific areas or questions you'd like to explore further within Area Studies, feel free to ask!
        </p>
      </div>
    </div>
  );
};

export default AreaStudies;
