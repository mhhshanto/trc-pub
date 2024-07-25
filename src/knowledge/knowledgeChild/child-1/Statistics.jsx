import React, { useEffect } from 'react';

const statisticsData = [
  {
    aspect: "Descriptive Statistics",
    description: "Descriptive statistics involves methods for summarizing and describing data sets. This includes measures of central tendency (e.g., mean, median, mode) and measures of dispersion (e.g., range, variance, standard deviation)."
  },
  {
    aspect: "Inferential Statistics",
    description: "Inferential statistics involves using sample data to make inferences or predictions about a larger population. This includes hypothesis testing, confidence intervals, and regression analysis."
  },
  {
    aspect: "Probability Theory",
    description: "Probability theory provides a foundation for statistical methods, defining the likelihood of events occurring and enabling the quantification of uncertainty in statistical analysis."
  },
  {
    aspect: "Statistical Methods",
    description: "Statistical methods include a wide range of techniques used to analyze different types of data. Some common methods include:",
    subtopics: [
      { title: "Parametric Tests", details: "Tests that assume specific distributions for the data, such as t-tests and ANOVA." },
      { title: "Nonparametric Tests", details: "Tests that do not assume specific distributions, such as Wilcoxon rank-sum test and Kruskal-Wallis test." },
      { title: "Regression Analysis", details: "Techniques for modeling the relationship between variables and making predictions." },
      { title: "Time Series Analysis", details: "Techniques for analyzing data collected over time to identify patterns and trends." },
      { title: "Survival Analysis", details: "Techniques for analyzing time-to-event data, such as in medical research or reliability engineering." }
    ]
  },
  {
    aspect: "Experimental Design",
    description: "Experimental design involves planning experiments to ensure valid and reliable results, including considerations of randomization, replication, and control."
  },
  {
    aspect: "Statistical Software",
    description: "Statistical software packages such as R, Python (with libraries like NumPy, Pandas, and SciPy), SAS, SPSS, and STATA are commonly used for data analysis and statistical modeling."
  },
  {
    aspect: "Applications in Research and Industry",
    description: "Statistics is widely used in scientific research, business analytics, healthcare, social sciences, economics, engineering, and many other fields to make informed decisions, evaluate hypotheses, and solve problems."
  }
];

const StatisticsComponent = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen p-3 bg-gradient-to-r from-indigo-200 via-pink-200 to-yellow-200 py-20 lg:py-16">
      <div className="md:container mx-auto px-3">
        <h1 className="text-4xl font-bold text-center text-blue-800 mb-10">Statistics</h1>
        <p className="mb-10 text-lg text-gray-700">
          Statistics is a branch of mathematics that deals with the collection, analysis, interpretation, presentation, and organization of data. It provides methods and techniques for making decisions and drawing conclusions from data, often in the presence of uncertainty. Here are key aspects and applications of statistics:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {statisticsData.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-2xl font-semibold text-blue-900 mb-4">{item.aspect}</h2>
              <p className="text-gray-600 mb-4">{item.description}</p>
              {item.subtopics && item.subtopics.map((subtopic, idx) => (
                <div key={idx} className="mb-3">
                  <h3 className="text-xl font-bold text-blue-800">{subtopic.title}</h3>
                  <p className="text-gray-500">{subtopic.details}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
        <p className="mt-10 text-lg text-gray-700">
          Statistics plays a crucial role in data-driven decision-making, quality improvement, risk assessment, and policy formulation. It provides a systematic framework for understanding and interpreting data, allowing researchers and practitioners to derive meaningful insights and conclusions from empirical observations.
        </p>
      </div>
    </div>
  );
};

export default StatisticsComponent;
