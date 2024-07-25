import React, { useEffect } from 'react';

const Arts = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="py-20 lg:py-16 bg-gray-50">
      <div className="md:container px-3 mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">The Arts</h1>
        <p className="text-lg text-gray-700 mb-8">
          The arts encompass a wide range of creative and expressive disciplines that reflect human creativity, cultural heritage, and aesthetic experiences.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">Visual Arts</h2>
            <p><strong>Analysis</strong> and critique of visual art forms such as painting, sculpture, photography, and installation art.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">Performing Arts</h2>
            <p><strong>Study</strong> of performing arts disciplines including theater, dance, opera, and musical performance.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">Literary Arts</h2>
            <p><strong>Exploration</strong> of literature, poetry, and creative writing across different genres and historical periods.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">Music</h2>
            <p><strong>Research</strong> on music theory, composition, performance, musicology, ethnomusicology, and music technology.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">Film and Media Studies</h2>
            <p><strong>Analysis</strong> of film, television, digital media, and their impact on culture, society, and politics.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">Design</h2>
            <p><strong>Study</strong> of graphic design, fashion design, industrial design, and their influence on aesthetics and functionality.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">Architecture</h2>
            <p><strong>Examination</strong> of architectural styles, historical developments, urban design, and sustainable architecture practices.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">Art History</h2>
            <p><strong>Research</strong> on the historical context, movements, and artists that have shaped visual culture and artistic traditions.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">Cultural Studies in the Arts</h2>
            <p><strong>Exploration</strong> of how arts reflect and influence cultural identities, social movements, and global trends.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">Art Criticism and Theory</h2>
            <p><strong>Theoretical frameworks</strong> and critical approaches to understanding and interpreting art forms and their significance.</p>
          </div>
        </div>

        <p className="text-lg text-gray-700 mt-8">
          These topics highlight the diversity of artistic expressions and disciplines within the arts, offering avenues for research, critique, and creative exploration.
          If you have specific areas or questions you'd like to explore further within the arts, feel free to ask!
        </p>
      </div>
    </div>
  );
};

export default Arts;
