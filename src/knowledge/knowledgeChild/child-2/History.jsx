import React, { useEffect } from 'react';

const HistoryComponent = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="py-20 lg:py-16 bg-gray-50">
      <div className="md:container px-3 bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-800">History</h1>
        <p className="mb-6 text-lg leading-relaxed">
          History is the study of past events, societies, cultures, and civilizations, providing insights into the evolution of human societies and their impact on the world today. Here are some potential topics within History that could be explored for publishing:
        </p>
        <div className="space-y-4">
          <div className="border-b pb-4">
            <h2 className="text-2xl font-semibold mb-2 text-blue-600">1. Ancient History</h2>
            <p className="text-lg">Study of early civilizations, ancient empires, and cultural developments from prehistoric times to the fall of Rome and the Han Dynasty.</p>
          </div>
          <div className="border-b pb-4">
            <h2 className="text-2xl font-semibold mb-2 text-blue-600">2. Medieval History</h2>
            <p className="text-lg">Examination of medieval Europe, Islamic civilizations, Byzantium, feudalism, and the Crusades.</p>
          </div>
          <div className="border-b pb-4">
            <h2 className="text-2xl font-semibold mb-2 text-blue-600">3. Early Modern History</h2>
            <p className="text-lg">Analysis of the Renaissance, Reformation, Age of Exploration, colonialism, and the Scientific Revolution.</p>
          </div>
          <div className="border-b pb-4">
            <h2 className="text-2xl font-semibold mb-2 text-blue-600">4. Modern History</h2>
            <p className="text-lg">Study of the Enlightenment, Industrial Revolution, nation-state formation, imperialism, and the World Wars.</p>
          </div>
          <div className="border-b pb-4">
            <h2 className="text-2xl font-semibold mb-2 text-blue-600">5. Global History</h2>
            <p className="text-lg">Comparative study of global interactions, trade networks, cultural exchanges, and the rise of global empires.</p>
          </div>
          <div className="border-b pb-4">
            <h2 className="text-2xl font-semibold mb-2 text-blue-600">6. Social History</h2>
            <p className="text-lg">Exploration of everyday life, social structures, gender roles, labor movements, and social reforms throughout history.</p>
          </div>
          <div className="border-b pb-4">
            <h2 className="text-2xl font-semibold mb-2 text-blue-600">7. Political History</h2>
            <p className="text-lg">Analysis of political systems, revolutions, wars, diplomacy, and the development of political ideologies.</p>
          </div>
          <div className="border-b pb-4">
            <h2 className="text-2xl font-semibold mb-2 text-blue-600">8. Cultural History</h2>
            <p className="text-lg">Study of cultural expressions, artistic movements, literature, philosophy, and intellectual trends across different historical periods.</p>
          </div>
          <div className="border-b pb-4">
            <h2 className="text-2xl font-semibold mb-2 text-blue-600">9. Military History</h2>
            <p className="text-lg">Examination of military strategies, warfare tactics, battles, and the evolution of military technology throughout history.</p>
          </div>
          <div className="border-b pb-4">
            <h2 className="text-2xl font-semibold mb-2 text-blue-600">10. Historiography</h2>
            <p className="text-lg">Study of historical methods, interpretations, sources, and the evolution of historical writing and analysis.</p>
          </div>
        </div>
        <p className="mt-6 text-lg leading-relaxed">
          These topics illustrate the diverse areas of study within History, covering political, social, cultural, economic, and intellectual dimensions of human experience over time. If you have specific historical periods, events, or questions you'd like to explore further, feel free to ask.
        </p>
      </div>
    </div>
  );
};

export default HistoryComponent;
