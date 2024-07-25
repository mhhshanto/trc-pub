import React, { useEffect } from 'react';

const Philosophy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="py-20 lg:py-16 bg-gray-100">
      <div className="md:container px-3">
        <div className="bg-white shadow-lg rounded-lg md:p-6 p-3">
          <h1 className="text-3xl font-bold mb-4 text-center text-indigo-700">Philosophy</h1>
          <p className="mb-4 text-lg">
            Philosophy is the study of fundamental questions about existence, knowledge, ethics, reason, mind, and language. Here are some potential topics within Philosophy that could be explored for publishing:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            <div className="border rounded-lg p-4 bg-gray-50">
              <h2 className="text-2xl font-semibold text-indigo-600">1. Metaphysics</h2>
              <p className="text-lg">Exploration of the nature of reality, existence, causality, space, time, and the relationship between mind and body.</p>
            </div>
            <div className="border rounded-lg p-4 bg-gray-50">
              <h2 className="text-2xl font-semibold text-indigo-600">2. Epistemology</h2>
              <p className="text-lg">Analysis of knowledge, belief, justification, skepticism, theories of truth, and the nature of evidence.</p>
            </div>
            <div className="border rounded-lg p-4 bg-gray-50">
              <h2 className="text-2xl font-semibold text-indigo-600">3. Ethics</h2>
              <p className="text-lg">Study of moral principles, ethical theories (such as utilitarianism, deontology, virtue ethics), ethical decision-making, and applied ethics.</p>
            </div>
            <div className="border rounded-lg p-4 bg-gray-50">
              <h2 className="text-2xl font-semibold text-indigo-600">4. Political Philosophy</h2>
              <p className="text-lg">Examination of political ideologies, theories of justice, rights, democracy, political authority, and social contract theory.</p>
            </div>
            <div className="border rounded-lg p-4 bg-gray-50">
              <h2 className="text-2xl font-semibold text-indigo-600">5. Philosophy of Mind</h2>
              <p className="text-lg">Research on consciousness, mental states, perception, identity, free will, cognition, and the mind-body problem.</p>
            </div>
            <div className="border rounded-lg p-4 bg-gray-50">
              <h2 className="text-2xl font-semibold text-indigo-600">6. Philosophy of Language</h2>
              <p className="text-lg">Analysis of meaning, reference, language acquisition, linguistic semantics, pragmatics, and theories of communication.</p>
            </div>
            <div className="border rounded-lg p-4 bg-gray-50">
              <h2 className="text-2xl font-semibold text-indigo-600">7. Philosophy of Science</h2>
              <p className="text-lg">Exploration of scientific methodology, theories of explanation, philosophy of biology, physics, chemistry, and social sciences.</p>
            </div>
            <div className="border rounded-lg p-4 bg-gray-50">
              <h2 className="text-2xl font-semibold text-indigo-600">8. Aesthetics</h2>
              <p className="text-lg">Study of beauty, art, aesthetic experience, theories of art criticism, philosophy of literature, and the nature of artistic expression.</p>
            </div>
            <div className="border rounded-lg p-4 bg-gray-50">
              <h2 className="text-2xl font-semibold text-indigo-600">9. Philosophy of Religion</h2>
              <p className="text-lg">Examination of religious experience, the existence of God, religious language, faith, reason, and religious pluralism.</p>
            </div>
            <div className="border rounded-lg p-4 bg-gray-50">
              <h2 className="text-2xl font-semibold text-indigo-600">10. Environmental Philosophy</h2>
              <p className="text-lg">Ethics of environmental stewardship, nature conservation, sustainability, eco-philosophy, and environmental justice.</p>
            </div>
          </div>
          <p className="mt-4 text-lg">
            These topics illustrate the breadth of philosophical inquiry, addressing foundational questions about human existence, knowledge, values, and the nature of reality. Philosophy intersects with various disciplines such as science, ethics, politics, language, and aesthetics, offering critical perspectives on diverse aspects of human experience. If you have specific areas or questions you'd like to explore further within Philosophy, feel free to ask.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Philosophy;
