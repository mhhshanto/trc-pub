import React, { useEffect } from 'react';

const Finance = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="py-20 lg:py-16 bg-gray-100">
      <div className="md:container px-3 mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">Finance</h1>
        <p className="text-lg text-gray-800 mb-8">
          Finance is a field that deals with the management of money, investments, and financial institutions. Here are some potential topics within Finance that could be explored for publishing:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white border border-gray-300 shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">Corporate Finance</h2>
            <p>
              <strong>Analysis</strong> of financial decisions within corporations, including capital budgeting, risk management, financing sources, and dividend policy.
            </p>
          </div>
          <div className="bg-white border border-gray-300 shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">Investments</h2>
            <p>
              <strong>Study</strong> of financial assets, investment strategies, portfolio management, asset pricing models, and behavioral finance.
            </p>
          </div>
          <div className="bg-white border border-gray-300 shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">Financial Markets</h2>
            <p>
              <strong>Examination</strong> of financial instruments, stock markets, bond markets, derivatives, and market efficiency.
            </p>
          </div>
          <div className="bg-white border border-gray-300 shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">Financial Institutions</h2>
            <p>
              <strong>Analysis</strong> of banks, insurance companies, investment banks, and other financial intermediaries, including their roles, regulations, and risk management practices.
            </p>
          </div>
          <div className="bg-white border border-gray-300 shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">Personal Finance</h2>
            <p>
              <strong>Financial planning</strong>, budgeting, savings, investment strategies for individuals, retirement planning, and estate planning.
            </p>
          </div>
          <div className="bg-white border border-gray-300 shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">International Finance</h2>
            <p>
              <strong>Study</strong> of foreign exchange markets, international trade finance, global capital flows, and multinational corporate finance.
            </p>
          </div>
          <div className="bg-white border border-gray-300 shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">Financial Regulation</h2>
            <p>
              <strong>Analysis</strong> of financial laws, regulations, and regulatory agencies, including their impact on financial markets and institutions.
            </p>
          </div>
          <div className="bg-white border border-gray-300 shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">Behavioral Finance</h2>
            <p>
              <strong>Application</strong> of psychology and behavioral economics principles to understand investor behavior, decision-making biases, and market anomalies.
            </p>
          </div>
          <div className="bg-white border border-gray-300 shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">Financial Risk Management</h2>
            <p>
              <strong>Techniques</strong> and strategies for identifying, assessing, and managing financial risks, including credit risk, market risk, and liquidity risk.
            </p>
          </div>
          <div className="bg-white border border-gray-300 shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">Quantitative Finance</h2>
            <p>
              <strong>Use</strong> of mathematical models, statistical tools, and computational techniques in financial analysis, asset pricing, and risk management.
            </p>
          </div>
        </div>

        <p className="text-lg text-gray-800 mt-8">
          These topics cover various aspects of Finance, ranging from theoretical frameworks to practical applications in financial management and investment strategies. If you have specific areas or questions you'd like to explore further within Finance, feel free to ask!
        </p>
      </div>
    </div>
  );
};

export default Finance;
