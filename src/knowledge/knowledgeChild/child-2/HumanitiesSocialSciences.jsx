import React, { useEffect } from 'react';

const HumanitiesSocialSciences = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="py-20 lg:py-16 bg-gray-50">
      <div className="md:container px-3 bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-6 text-center text-indigo-700">Humanities and Social Sciences</h1>
        <p className="mb-6 text-lg leading-relaxed">
          Humanities and Social Sciences encompass a wide range of disciplines that study human culture, behavior, society, and interactions. Here are some potential topics within Humanities and Social Sciences that could be explored for publishing:
        </p>
        <div className="space-y-6">
          <div className="p-4 border rounded-lg bg-indigo-50">
            <h2 className="text-2xl font-semibold mb-2 text-indigo-600">1. Literature</h2>
            <p className="text-lg">Analysis of literary works, genres, authors, literary movements, and cultural contexts.</p>
          </div>
          <div className="p-4 border rounded-lg bg-indigo-50">
            <h2 className="text-2xl font-semibold mb-2 text-indigo-600">2. History</h2>
            <p className="text-lg">Study of past events, civilizations, societies, cultural developments, and historical interpretations.</p>
          </div>
          <div className="p-4 border rounded-lg bg-indigo-50">
            <h2 className="text-2xl font-semibold mb-2 text-indigo-600">3. Philosophy</h2>
            <p className="text-lg">Exploration of philosophical theories, ethical dilemmas, metaphysics, epistemology, and philosophy of mind.</p>
          </div>
          <div className="p-4 border rounded-lg bg-indigo-50">
            <h2 className="text-2xl font-semibold mb-2 text-indigo-600">4. Religious Studies</h2>
            <p className="text-lg">Analysis of religions, belief systems, religious practices, spirituality, and religious influence on societies.</p>
          </div>
          <div className="p-4 border rounded-lg bg-indigo-50">
            <h2 className="text-2xl font-semibold mb-2 text-indigo-600">5. Languages and Linguistics</h2>
            <p className="text-lg">Study of languages, language acquisition, sociolinguistics, semantics, and linguistic diversity.</p>
          </div>
          <div className="p-4 border rounded-lg bg-indigo-50">
            <h2 className="text-2xl font-semibold mb-2 text-indigo-600">6. Fine Arts</h2>
            <p className="text-lg">Examination of visual arts, performing arts, art history, artistic movements, and aesthetics.</p>
          </div>
          <div className="p-4 border rounded-lg bg-indigo-50">
            <h2 className="text-2xl font-semibold mb-2 text-indigo-600">7. Musicology</h2>
            <p className="text-lg">Research on music history, music theory, composition, performance, and cultural significance of music.</p>
          </div>
          <div className="p-4 border rounded-lg bg-indigo-50">
            <h2 className="text-2xl font-semibold mb-2 text-indigo-600">8. Anthropology</h2>
            <p className="text-lg">Study of human societies, cultures, social structures, ethnographic research, and cultural anthropology.</p>
          </div>
          <div className="p-4 border rounded-lg bg-indigo-50">
            <h2 className="text-2xl font-semibold mb-2 text-indigo-600">9. Sociology</h2>
            <p className="text-lg">Analysis of social behavior, institutions, social change, inequality, globalization, and sociological theories.</p>
          </div>
          <div className="p-4 border rounded-lg bg-indigo-50">
            <h2 className="text-2xl font-semibold mb-2 text-indigo-600">10. Political Science</h2>
            <p className="text-lg">Exploration of political systems, governance, international relations, political ideologies, and public policy.</p>
          </div>
        </div>
        <p className="mt-6 text-lg leading-relaxed">
          These topics highlight the breadth and depth of inquiry within Humanities and Social Sciences, addressing human experiences, cultural expressions, societal structures, and intellectual discourse. If you have specific areas or questions you'd like to explore further within Humanities and Social Sciences, feel free to ask.
        </p>
      </div>
    </div>
  );
};

export default HumanitiesSocialSciences;
