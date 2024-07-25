import React, { useEffect } from 'react';

const LiteratureStudies = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="py-20 lg:py-16 bg-gray-100">
      <div className="md:container px-3">
        <div className="bg-white shadow-lg rounded-lg md:p-6 p-3">
          <h1 className="text-3xl font-bold mb-4 text-center text-purple-700">Literature Studies</h1>
          <p className="mb-4 text-lg">
            Literature encompasses the study of written or oral works of creative expression, including fiction, poetry, drama, and non-fiction. Here are some potential topics within the study of Literature that could be explored for publishing:
          </p>
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            <div className="border rounded-lg p-4 bg-gray-50">
              <h2 className="text-2xl font-semibold text-purple-600">1. Literary Theory and Criticism</h2>
              <p className="text-lg">Analysis of literary movements, literary theory, critical approaches (such as feminist theory, postcolonial theory, and queer theory), and interpretation of literary texts.</p>
            </div>
            <div className="border rounded-lg p-4 bg-gray-50">
              <h2 className="text-2xl font-semibold text-purple-600">2. Genres and Forms</h2>
              <p className="text-lg">Study of different literary genres, including novels, short stories, poetry, drama, essays, memoirs, and literary journalism.</p>
            </div>
            <div className="border rounded-lg p-4 bg-gray-50">
              <h2 className="text-2xl font-semibold text-purple-600">3. Author Studies</h2>
              <p className="text-lg">Research on individual authors, their biographies, literary influences, writing styles, thematic concerns, and contributions to literature.</p>
            </div>
            <div className="border rounded-lg p-4 bg-gray-50">
              <h2 className="text-2xl font-semibold text-purple-600">4. World Literature</h2>
              <p className="text-lg">Examination of literary works from different cultures, regions, and historical periods, exploring themes of global significance and cross-cultural influences.</p>
            </div>
            <div className="border rounded-lg p-4 bg-gray-50">
              <h2 className="text-2xl font-semibold text-purple-600">5. Literature and Society</h2>
              <p className="text-lg">Analysis of how literature reflects and shapes societal values, beliefs, identities, social norms, and historical contexts.</p>
            </div>
            <div className="border rounded-lg p-4 bg-gray-50">
              <h2 className="text-2xl font-semibold text-purple-600">6. Literature and Politics</h2>
              <p className="text-lg">Exploration of political themes, ideologies, revolutions, and resistance movements depicted in literature, as well as censorship and literary activism.</p>
            </div>
            <div className="border rounded-lg p-4 bg-gray-50">
              <h2 className="text-2xl font-semibold text-purple-600">7. Literature and the Environment</h2>
              <p className="text-lg">Study of ecological themes, nature writing, environmental justice, and the representation of landscapes in literature.</p>
            </div>
            <div className="border rounded-lg p-4 bg-gray-50">
              <h2 className="text-2xl font-semibold text-purple-600">8. Literature and Technology</h2>
              <p className="text-lg">Analysis of how technology influences literary production, distribution, reading practices, and the evolution of literary forms.</p>
            </div>
            <div className="border rounded-lg p-4 bg-gray-50">
              <h2 className="text-2xl font-semibold text-purple-600">9. Literature and Psychology</h2>
              <p className="text-lg">Research on psychological insights into characters, emotions, mental health themes, trauma narratives, and psychoanalytic approaches to literature.</p>
            </div>
            <div className="border rounded-lg p-4 bg-gray-50">
              <h2 className="text-2xl font-semibold text-purple-600">10. Translation Studies</h2>
              <p className="text-lg">Examination of issues related to literary translation, cross-cultural interpretation, linguistic challenges, and the role of translators in shaping literary reception.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiteratureStudies;
