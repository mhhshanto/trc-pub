import React, { useEffect } from 'react';

const PoliticsComponent = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="py-20 lg:py-16 bg-gray-100">
      <div className="md:container px-3 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">Politics</h1>
        <p className="mb-4 text-lg">
          Politics encompasses the study of power, governance, public policy, and political behavior within societies. Here are some potential topics within the study of Politics that could be explored for publishing:
        </p>
        <div className="space-y-6">
          <div className="p-4 border-b border-gray-300">
            <h2 className="text-xl font-bold mb-2">1. Political Theory</h2>
            <p>Analysis of political ideologies, theories of justice, democracy, liberalism, conservatism, socialism, and anarchism.</p>
          </div>
          <div className="p-4 border-b border-gray-300">
            <h2 className="text-xl font-bold mb-2">2. Comparative Politics</h2>
            <p>Examination of political systems, regimes, political parties, electoral systems, and governance structures across different countries.</p>
          </div>
          <div className="p-4 border-b border-gray-300">
            <h2 className="text-xl font-bold mb-2">3. International Relations</h2>
            <p>Study of international politics, diplomacy, international organizations, global governance, conflict resolution, and security studies.</p>
          </div>
          <div className="p-4 border-b border-gray-300">
            <h2 className="text-xl font-bold mb-2">4. Public Policy</h2>
            <p>Analysis of policy formulation, implementation, and evaluation in areas such as healthcare, education, economic policy, environmental policy, and social welfare.</p>
          </div>
          <div className="p-4 border-b border-gray-300">
            <h2 className="text-xl font-bold mb-2">5. Political Economy</h2>
            <p>Exploration of the intersection between politics and economics, including theories of economic development, inequality, and globalization.</p>
          </div>
          <div className="p-4 border-b border-gray-300">
            <h2 className="text-xl font-bold mb-2">6. Political Behavior</h2>
            <p>Research on voting behavior, public opinion, political participation, political communication, and the role of media in politics.</p>
          </div>
          <div className="p-4 border-b border-gray-300">
            <h2 className="text-xl font-bold mb-2">7. Political Institutions</h2>
            <p>Study of governmental institutions, legislative processes, executive authority, judicial systems, and administrative agencies.</p>
          </div>
          <div className="p-4 border-b border-gray-300">
            <h2 className="text-xl font-bold mb-2">8. Political Sociology</h2>
            <p>Analysis of social movements, political culture, identity politics, social inequality, and the relationship between society and politics.</p>
          </div>
          <div className="p-4 border-b border-gray-300">
            <h2 className="text-xl font-bold mb-2">9. Political Philosophy</h2>
            <p>Examination of philosophical foundations of politics, theories of rights, citizenship, political obligation, and theories of revolution.</p>
          </div>
          <div className="p-4 border-b border-gray-300">
            <h2 className="text-xl font-bold mb-2">10. Policy Analysis</h2>
            <p>Methods and tools for analyzing policy alternatives, cost-benefit analysis, policy evaluation, and evidence-based policymaking.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoliticsComponent;
