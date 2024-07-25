import React, { useEffect } from 'react';

const Economics = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="py-20 lg:py-16 bg-gray-100">
      <div className="md:container px-3 mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">Economics</h1>
        <p className="text-lg text-gray-800 mb-8">
          Economics is a social science that studies how individuals, businesses, governments, and societies make decisions regarding the allocation of resources.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white border border-gray-300 shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-green-600 mb-2">Microeconomics</h2>
            <p>
              <strong>Study</strong> of individual economic behavior, markets, supply and demand, consumer choice, and production theory.
            </p>
          </div>
          <div className="bg-white border border-gray-300 shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-green-600 mb-2">Macroeconomics</h2>
            <p>
              <strong>Analysis</strong> of aggregate economic phenomena, including economic growth, inflation, unemployment, monetary policy, and fiscal policy.
            </p>
          </div>
          <div className="bg-white border border-gray-300 shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-green-600 mb-2">International Economics</h2>
            <p>
              <strong>Examination</strong> of international trade, exchange rates, balance of payments, globalization, and international economic policy.
            </p>
          </div>
          <div className="bg-white border border-gray-300 shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-green-600 mb-2">Development Economics</h2>
            <p>
              <strong>Study</strong> of economic development, poverty alleviation, inequality, and economic growth in developing countries.
            </p>
          </div>
          <div className="bg-white border border-gray-300 shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-green-600 mb-2">Labor Economics</h2>
            <p>
              <strong>Analysis</strong> of labor markets, wages, employment trends, human capital development, and labor market policies.
            </p>
          </div>
          <div className="bg-white border border-gray-300 shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-green-600 mb-2">Public Economics</h2>
            <p>
              <strong>Study</strong> of government spending, taxation, public goods, social welfare programs, and public policy implications.
            </p>
          </div>
          <div className="bg-white border border-gray-300 shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-green-600 mb-2">Financial Economics</h2>
            <p>
              <strong>Examination</strong> of financial markets, asset pricing, risk management, banking systems, and financial regulation.
            </p>
          </div>
          <div className="bg-white border border-gray-300 shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-green-600 mb-2">Environmental Economics</h2>
            <p>
              <strong>Analysis</strong> of environmental issues, natural resource management, pollution control policies, and sustainability.
            </p>
          </div>
          <div className="bg-white border border-gray-300 shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-green-600 mb-2">Behavioral Economics</h2>
            <p>
              <strong>Integration</strong> of psychological insights into economic analysis, including decision-making biases, behavioral finance, and economic experiments.
            </p>
          </div>
          <div className="bg-white border border-gray-300 shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-green-600 mb-2">Health Economics</h2>
            <p>
              <strong>Study</strong> of healthcare systems, healthcare financing, health insurance, and economic analysis of healthcare policies.
            </p>
          </div>
        </div>

        <p className="text-lg text-gray-800 mt-8">
          These topics illustrate the breadth of Economics as a field of study, addressing both theoretical frameworks and practical applications in understanding economic systems and policies. If you have specific areas or questions you'd like to explore further within Economics, feel free to ask!
        </p>
      </div>
    </div>
  );
};

export default Economics;
