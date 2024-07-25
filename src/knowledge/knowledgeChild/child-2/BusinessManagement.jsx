import React, { useEffect } from 'react';

const BusinessManagement = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="py-20 lg:py-16 bg-gray-100">
      <div className="md:container px-3 mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">Business and Management</h1>
        <p className="text-lg text-gray-800 mb-8">
          Business and Management encompass various disciplines focused on organizational practices, strategies, and economic activities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white border border-gray-300 shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">Strategic Management</h2>
            <p>
              <strong>Analysis</strong> of strategic planning processes, competitive advantage, business models, and corporate governance.
            </p>
          </div>
          <div className="bg-white border border-gray-300 shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">Organizational Behavior</h2>
            <p>
              <strong>Study</strong> of individual and group dynamics within organizations, including leadership, motivation, team dynamics, and organizational culture.
            </p>
          </div>
          <div className="bg-white border border-gray-300 shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">Human Resource Management</h2>
            <p>
              <strong>Practices</strong> and strategies related to recruitment, training, performance management, compensation, and employee relations.
            </p>
          </div>
          <div className="bg-white border border-gray-300 shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">Marketing and Consumer Behavior</h2>
            <p>
              <strong>Analysis</strong> of marketing strategies, market research, branding, consumer psychology, and digital marketing trends.
            </p>
          </div>
          <div className="bg-white border border-gray-300 shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">Financial Management</h2>
            <p>
              <strong>Techniques</strong> for financial analysis, budgeting, capital investment decisions, risk management, and corporate finance.
            </p>
          </div>
          <div className="bg-white border border-gray-300 shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">Operations Management</h2>
            <p>
              <strong>Management</strong> of production and service delivery processes, supply chain management, quality control, and logistics.
            </p>
          </div>
          <div className="bg-white border border-gray-300 shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">Entrepreneurship</h2>
            <p>
              <strong>Strategies</strong> for new venture creation, innovation management, startup financing, and entrepreneurial leadership.
            </p>
          </div>
          <div className="bg-white border border-gray-300 shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">Business Ethics and Corporate Social Responsibility</h2>
            <p>
              <strong>Ethical dilemmas</strong> in business, sustainability practices, stakeholder engagement, and corporate governance.
            </p>
          </div>
          <div className="bg-white border border-gray-300 shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">International Business</h2>
            <p>
              <strong>Analysis</strong> of global markets, cross-cultural management, international trade, foreign direct investment, and global strategy.
            </p>
          </div>
          <div className="bg-white border border-gray-300 shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">Technology and Innovation Management</h2>
            <p>
              <strong>Impact</strong> of technological advancements, innovation strategies, digital transformation, and disruptive technologies on business.
            </p>
          </div>
        </div>

        <p className="text-lg text-gray-800 mt-8">
          These topics reflect the diverse areas of study within Business and Management, addressing both theoretical frameworks and practical applications in the business world. If you have specific areas or questions you'd like to explore further within Business and Management, feel free to ask!
        </p>
      </div>
    </div>
  );
};

export default BusinessManagement;
