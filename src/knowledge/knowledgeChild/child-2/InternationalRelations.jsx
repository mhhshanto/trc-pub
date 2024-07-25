import React, { useEffect } from 'react';

const InternationalRelations = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="py-20 lg:py-16 bg-gray-50">
      <div className="md:container px-3 bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-6 text-center text-green-700">International Relations</h1>
        <p className="mb-6 text-lg leading-relaxed">
          International Relations (IR) is a field of study that examines interactions between states, international organizations, non-governmental organizations (NGOs), and other actors in the global system. Here are some potential topics within International Relations that could be explored for publishing:
        </p>
        <div className="space-y-4">
          <div className="border-l-4 border-green-500 pl-4 mb-4">
            <h2 className="text-2xl font-semibold mb-2 text-green-600">1. International Security</h2>
            <p className="text-lg">Analysis of security threats, conflict resolution, peacekeeping operations, terrorism, nuclear proliferation, and arms control.</p>
          </div>
          <div className="border-l-4 border-green-500 pl-4 mb-4">
            <h2 className="text-2xl font-semibold mb-2 text-green-600">2. Diplomacy and Negotiation</h2>
            <p className="text-lg">Study of diplomatic practices, negotiation strategies, diplomatic history, and the role of diplomats in international affairs.</p>
          </div>
          <div className="border-l-4 border-green-500 pl-4 mb-4">
            <h2 className="text-2xl font-semibold mb-2 text-green-600">3. Global Governance</h2>
            <p className="text-lg">Examination of international institutions, global governance mechanisms, multilateralism, and global cooperation on issues such as climate change and human rights.</p>
          </div>
          <div className="border-l-4 border-green-500 pl-4 mb-4">
            <h2 className="text-2xl font-semibold mb-2 text-green-600">4. International Law</h2>
            <p className="text-lg">Analysis of international legal frameworks, treaties, human rights law, humanitarian law, and international criminal law.</p>
          </div>
          <div className="border-l-4 border-green-500 pl-4 mb-4">
            <h2 className="text-2xl font-semibold mb-2 text-green-600">5. Political Economy</h2>
            <p className="text-lg">Study of the intersection between politics and economics in international relations, including trade policy, economic development, and globalization.</p>
          </div>
          <div className="border-l-4 border-green-500 pl-4 mb-4">
            <h2 className="text-2xl font-semibold mb-2 text-green-600">6. Foreign Policy Analysis</h2>
            <p className="text-lg">Research on the formulation, implementation, and evaluation of foreign policies by states and international actors.</p>
          </div>
          <div className="border-l-4 border-green-500 pl-4 mb-4">
            <h2 className="text-2xl font-semibold mb-2 text-green-600">7. Regional Studies</h2>
            <p className="text-lg">Focus on specific regions such as the Middle East, Asia-Pacific, Europe, Latin America, and Africa, examining regional dynamics, conflicts, and cooperation.</p>
          </div>
          <div className="border-l-4 border-green-500 pl-4 mb-4">
            <h2 className="text-2xl font-semibold mb-2 text-green-600">8. Humanitarian Interventions</h2>
            <p className="text-lg">Ethics and practices of humanitarian interventions, humanitarian aid, refugee crises, and protection of civilians in conflict zones.</p>
          </div>
          <div className="border-l-4 border-green-500 pl-4 mb-4">
            <h2 className="text-2xl font-semibold mb-2 text-green-600">9. Conflict and Peace Studies</h2>
            <p className="text-lg">Analysis of causes of conflict, conflict resolution strategies, peacebuilding efforts, and post-conflict reconstruction.</p>
          </div>
          <div className="border-l-4 border-green-500 pl-4 mb-4">
            <h2 className="text-2xl font-semibold mb-2 text-green-600">10. Globalization and Transnational Issues</h2>
            <p className="text-lg">Impact of globalization on sovereignty, identity, migration, environment, health, and other transnational issues.</p>
          </div>
        </div>
        <p className="mt-6 text-lg leading-relaxed">
          These topics illustrate the complexity of International Relations as a field, addressing political, economic, legal, and social dimensions of global interactions. If you have specific areas or questions you'd like to explore further within International Relations, feel free to ask.
        </p>
      </div>
    </div>
  );
};

export default InternationalRelations;
