import React, { useEffect } from 'react';

const MuseumAndHeritageStudies = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="py-20 lg:py-16 bg-gray-100">
      <div className="md:container px-3">
        <div className="bg-white shadow-lg rounded-lg md:p-6 p-3">
          <h1 className="text-3xl font-bold mb-4 text-center text-indigo-700">Museum and Heritage Studies</h1>
          <p className="mb-4 text-lg">
            Museum and Heritage Studies focus on the preservation, interpretation, and management of cultural heritage, artifacts, and historical sites. Here are some potential topics within Museum and Heritage Studies that could be explored for publishing:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border rounded-lg p-4 bg-gray-50">
              <h2 className="text-2xl font-semibold text-indigo-600">1. Museum Management and Administration</h2>
              <p className="text-lg">Strategies for museum governance, collections management, exhibition planning, visitor engagement, and museum education.</p>
            </div>
            <div className="border rounded-lg p-4 bg-gray-50">
              <h2 className="text-2xl font-semibold text-indigo-600">2. Curatorial Practices</h2>
              <p className="text-lg">Curatorial approaches, exhibition design, interpretation strategies, curatorial ethics, and the role of curators in cultural institutions.</p>
            </div>
            <div className="border rounded-lg p-4 bg-gray-50">
              <h2 className="text-2xl font-semibold text-indigo-600">3. Cultural Heritage Conservation</h2>
              <p className="text-lg">Preservation techniques, conservation ethics, restoration practices, preventive conservation, and sustainable management of heritage sites.</p>
            </div>
            <div className="border rounded-lg p-4 bg-gray-50">
              <h2 className="text-2xl font-semibold text-indigo-600">4. Heritage Tourism</h2>
              <p className="text-lg">Impact of tourism on cultural heritage, heritage tourism development, visitor management, and sustainable tourism practices.</p>
            </div>
            <div className="border rounded-lg p-4 bg-gray-50">
              <h2 className="text-2xl font-semibold text-indigo-600">5. Digital Heritage</h2>
              <p className="text-lg">Use of digital technologies in heritage preservation, virtual museums, digital archives, 3D scanning, and digital storytelling.</p>
            </div>
            <div className="border rounded-lg p-4 bg-gray-50">
              <h2 className="text-2xl font-semibold text-indigo-600">6. Community Engagement and Outreach</h2>
              <p className="text-lg">Strategies for involving local communities in heritage preservation, community-based museums, oral history projects, and participatory heritage initiatives.</p>
            </div>
            <div className="border rounded-lg p-4 bg-gray-50">
              <h2 className="text-2xl font-semibold text-indigo-600">7. Cultural Heritage Law and Ethics</h2>
              <p className="text-lg">Legal frameworks for heritage protection, repatriation issues, ethical considerations in collections management, and cultural property rights.</p>
            </div>
            <div className="border rounded-lg p-4 bg-gray-50">
              <h2 className="text-2xl font-semibold text-indigo-600">8. Memory Studies</h2>
              <p className="text-lg">Exploration of collective memory, commemoration practices, memorialization, and the role of museums in shaping cultural memory.</p>
            </div>
            <div className="border rounded-lg p-4 bg-gray-50">
              <h2 className="text-2xl font-semibold text-indigo-600">9. Heritage and Identity</h2>
              <p className="text-lg">Study of how heritage shapes cultural identities, heritage interpretation, multiculturalism, and intercultural dialogue.</p>
            </div>
            <div className="border rounded-lg p-4 bg-gray-50">
              <h2 className="text-2xl font-semibold text-indigo-600">10. Global Heritage Issues</h2>
              <p className="text-lg">International perspectives on heritage conservation, UNESCO World Heritage sites, transnational heritage initiatives, and heritage diplomacy.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MuseumAndHeritageStudies;
