import React, { useEffect } from 'react';

const ExpertCollectionComponent = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="md:container px-3">
      <div className="py-20 lg:py-16">
        <h1 className="text-2xl font-bold mb-4">Expert Collection</h1>
        <p className="mb-4">
          "Expert Collection" typically refers to curated compilations of articles, reviews, or contributions from subject matter experts in a specific field. These collections aim to provide comprehensive insights, latest research, and expert perspectives on a particular topic or discipline. Here are some steps to consider when developing an Expert Collection for publishing:
        </p>
        <ul className="grid gap-4">
          <li className="bg-gray-100 p-4 rounded shadow">
            <strong>1. Identify the Topic:</strong> Choose a focused area within Medicine & Healthcare, such as a specific medical specialty, emerging research area, or a current healthcare challenge.
          </li>
          <li className="bg-gray-100 p-4 rounded shadow">
            <strong>2. Select Experts:</strong> Identify key opinion leaders, researchers, clinicians, and professionals who have significant contributions and expertise in the chosen topic.
          </li>
          <li className="bg-gray-100 p-4 rounded shadow">
            <strong>3. Content Curation:</strong> Gather high-quality articles, reviews, case studies, and research papers authored by the selected experts. Ensure that the content reflects current trends, advancements, and diverse viewpoints within the field.
          </li>
          <li className="bg-gray-100 p-4 rounded shadow">
            <strong>4. Editorial Process:</strong> Coordinate with the contributors to ensure consistency in style, formatting, and content quality. Review and edit submissions for clarity, accuracy, and relevance.
          </li>
          <li className="bg-gray-100 p-4 rounded shadow">
            <strong>5. Publication Format:</strong> Decide on the format of the Expert Collection, which could be a special issue in a journal, a book compilation, or an online resource. Consider the target audience and the most suitable medium for dissemination.
          </li>
          <li className="bg-gray-100 p-4 rounded shadow">
            <strong>6. Promotion and Dissemination:</strong> Once published, promote the Expert Collection through academic channels, conferences, social media, and professional networks to reach a wide audience of researchers, clinicians, educators, and policymakers.
          </li>
        </ul>
        <p className="mt-6">
          Creating an Expert Collection requires collaboration, careful planning, and adherence to high editorial standards to provide valuable insights and contribute to the advancement of knowledge in Medicine & Healthcare.
        </p>
      </div>
    </div>
  );
};

export default ExpertCollectionComponent;
