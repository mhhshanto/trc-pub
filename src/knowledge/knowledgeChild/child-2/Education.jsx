import React, { useEffect } from 'react';

const Education = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="py-20 lg:py-16 bg-gray-100">
      <div className="md:container px-3 mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">Education</h1>
        <p className="text-lg text-gray-800 mb-8">
          Education encompasses the theories, practices, and policies related to teaching and learning across various educational settings. Here are some potential topics within Education that could be explored for publishing:
        </p>

        <div className="flex flex-wrap -mx-3">
          <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
            <div className="bg-white border border-gray-300 shadow-lg rounded-lg p-6">
              <h2 className="text-xl font-semibold text-blue-600 mb-2">Educational Psychology</h2>
              <p>
                <strong>Study</strong> of psychological principles and theories applied to educational practices, including learning theories, motivation, and cognitive development.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
            <div className="bg-white border border-gray-300 shadow-lg rounded-lg p-6">
              <h2 className="text-xl font-semibold text-blue-600 mb-2">Curriculum Development</h2>
              <p>
                <strong>Design</strong> and evaluation of educational curricula, including subject-specific curricula, interdisciplinary approaches, and curriculum alignment with standards.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
            <div className="bg-white border border-gray-300 shadow-lg rounded-lg p-6">
              <h2 className="text-xl font-semibold text-blue-600 mb-2">Pedagogy and Teaching Methods</h2>
              <p>
                <strong>Examination</strong> of effective teaching strategies, instructional methods, classroom management techniques, and student engagement.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
            <div className="bg-white border border-gray-300 shadow-lg rounded-lg p-6">
              <h2 className="text-xl font-semibold text-blue-600 mb-2">Educational Technology</h2>
              <p>
                <strong>Integration</strong> of technology in education, digital learning tools, online learning platforms, educational apps, and virtual reality in education.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
            <div className="bg-white border border-gray-300 shadow-lg rounded-lg p-6">
              <h2 className="text-xl font-semibold text-blue-600 mb-2">Assessment and Evaluation</h2>
              <p>
                <strong>Methods</strong> for assessing student learning outcomes, formative and summative assessments, standardized testing, and assessment-driven instruction.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
            <div className="bg-white border border-gray-300 shadow-lg rounded-lg p-6">
              <h2 className="text-xl font-semibold text-blue-600 mb-2">Special Education</h2>
              <p>
                <strong>Education</strong> of students with disabilities, special educational needs, inclusive education practices, and individualized education plans (IEPs).
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
            <div className="bg-white border border-gray-300 shadow-lg rounded-lg p-6">
              <h2 className="text-xl font-semibold text-blue-600 mb-2">Higher Education</h2>
              <p>
                <strong>Analysis</strong> of higher education policies, student enrollment trends, faculty development, academic governance, and institutional management.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
            <div className="bg-white border border-gray-300 shadow-lg rounded-lg p-6">
              <h2 className="text-xl font-semibold text-blue-600 mb-2">Educational Leadership</h2>
              <p>
                <strong>Roles</strong> and responsibilities of educational leaders, instructional leadership, school administration, and educational leadership theories.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
            <div className="bg-white border border-gray-300 shadow-lg rounded-lg p-6">
              <h2 className="text-xl font-semibold text-blue-600 mb-2">Global and Comparative Education</h2>
              <p>
                <strong>Comparative analysis</strong> of educational systems, international education policies, cross-cultural perspectives, and educational reforms.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
            <div className="bg-white border border-gray-300 shadow-lg rounded-lg p-6">
              <h2 className="text-xl font-semibold text-blue-600 mb-2">Early Childhood Education</h2>
              <p>
                <strong>Developmentally appropriate practices</strong> in early childhood education, preschool curriculum, parental involvement, and early intervention programs.
              </p>
            </div>
          </div>
        </div>

        <p className="text-lg text-gray-800 mt-8">
          These topics reflect the multidisciplinary nature of Education, addressing theoretical foundations, empirical research, and practical applications in improving educational practices and outcomes. If you have specific areas or questions you'd like to explore further within Education, feel free to ask!
        </p>
      </div>
    </div>
  );
};

export default Education;
