import React, { useEffect } from 'react';

const LawStudies = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="py-20 lg:py-16 bg-gray-100">
      <div className="md:container px-3">
        <div className="bg-white shadow-lg rounded-lg md:p-6 p-3">
          <h1 className="text-3xl font-bold mb-4 text-center text-green-700">Law Studies</h1>
          <p className="mb-4 text-lg">
            Law is a system of rules and regulations enforced through social institutions to govern behavior, maintain order, and ensure justice within societies. Here are some potential topics within the study of Law that could be explored for publishing:
          </p>
          <div className="space-y-6">
            <div className="border rounded-lg p-4 bg-gray-50">
              <h2 className="text-2xl font-semibold text-green-600">1. Legal Theory</h2>
              <p className="text-lg">Analysis of legal principles, theories of justice, jurisprudence, and philosophical foundations of law.</p>
            </div>
            <div className="border rounded-lg p-4 bg-gray-50">
              <h2 className="text-2xl font-semibold text-green-600">2. Constitutional Law</h2>
              <p className="text-lg">Study of constitutional principles, rights and liberties, constitutional interpretation, and constitutionalism.</p>
            </div>
            <div className="border rounded-lg p-4 bg-gray-50">
              <h2 className="text-2xl font-semibold text-green-600">3. Criminal Law</h2>
              <p className="text-lg">Examination of criminal offenses, criminal procedure, sentencing, theories of punishment, and criminal justice systems.</p>
            </div>
            <div className="border rounded-lg p-4 bg-gray-50">
              <h2 className="text-2xl font-semibold text-green-600">4. Civil Law</h2>
              <p className="text-lg">Analysis of civil disputes, tort law, contract law, property law, family law, and legal remedies.</p>
            </div>
            <div className="border rounded-lg p-4 bg-gray-50">
              <h2 className="text-2xl font-semibold text-green-600">5. International Law</h2>
              <p className="text-lg">Study of international legal principles, treaties, diplomatic relations, international organizations, and international human rights law.</p>
            </div>
            <div className="border rounded-lg p-4 bg-gray-50">
              <h2 className="text-2xl font-semibold text-green-600">6. Human Rights Law</h2>
              <p className="text-lg">Research on human rights treaties, international human rights standards, humanitarian law, and human rights advocacy.</p>
            </div>
            <div className="border rounded-lg p-4 bg-gray-50">
              <h2 className="text-2xl font-semibold text-green-600">7. Corporate Law</h2>
              <p className="text-lg">Examination of corporate governance, business ethics, corporate finance, mergers and acquisitions, and corporate responsibility.</p>
            </div>
            <div className="border rounded-lg p-4 bg-gray-50">
              <h2 className="text-2xl font-semibold text-green-600">8. Environmental Law</h2>
              <p className="text-lg">Analysis of environmental regulations, conservation laws, climate change law, and sustainable development.</p>
            </div>
            <div className="border rounded-lg p-4 bg-gray-50">
              <h2 className="text-2xl font-semibold text-green-600">9. Intellectual Property Law</h2>
              <p className="text-lg">Study of intellectual property rights, patents, copyrights, trademarks, and legal issues in digital technology.</p>
            </div>
            <div className="border rounded-lg p-4 bg-gray-50">
              <h2 className="text-2xl font-semibold text-green-600">10. Legal History</h2>
              <p className="text-lg">Exploration of historical developments in legal systems, legal institutions, and legal doctrines throughout different periods and civilizations.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LawStudies;
