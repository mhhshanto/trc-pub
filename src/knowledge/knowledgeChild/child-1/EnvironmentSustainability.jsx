import React, { useEffect } from 'react';

const environmentSustainabilityData = [
  {
    category: "Environment",
    aspects: [
      { title: "Ecology", description: "Study of ecosystems, including their structure, function, and dynamics." },
      { title: "Environmental Chemistry", description: "Study of chemical processes in the environment, such as pollution and remediation." },
      { title: "Climate Science", description: "Study of climate patterns, variability, and change, including human impacts on the climate system." },
      { title: "Environmental Policy and Management", description: "Development and implementation of policies and strategies to address environmental issues, such as pollution control and natural resource management." },
      { title: "Conservation Biology", description: "Study of the preservation and management of biodiversity and ecosystems." },
    ]
  },
  {
    category: "Sustainability",
    aspects: [
      { title: "Environmental Sustainability", description: "Ensuring that natural resources and ecosystems are managed in a way that maintains their health and productivity over the long term." },
      { title: "Social Sustainability", description: "Ensuring that social systems, including communities and societies, are resilient and able to meet the needs of all individuals." },
      { title: "Economic Sustainability", description: "Ensuring that economic development is conducted in a way that does not deplete resources or harm the environment." },
      { title: "Sustainable Development", description: "Development that meets the needs of the present without compromising the ability of future generations to meet their own needs, balancing economic, social, and environmental considerations." },
    ]
  },
  {
    category: "Interconnections",
    aspects: [
      { title: "Integrated Approaches", description: "Both fields emphasize the interconnectedness of ecological, social, and economic systems, advocating for integrated approaches to address complex challenges." },
      { title: "Resource Management", description: "Sustainability principles guide environmental management practices to ensure the sustainable use of natural resources, such as water, forests, and fisheries." },
      { title: "Policy and Governance", description: "Environmental policies often incorporate principles of sustainability to promote practices that minimize environmental impact and enhance long-term resilience." },
      { title: "Climate Change Mitigation and Adaptation", description: "Sustainability frameworks include strategies to mitigate climate change impacts and adapt to changing environmental conditions." },
      { title: "Education and Awareness", description: "Both fields emphasize the importance of education and public awareness in promoting sustainable practices and environmental stewardship." },
    ]
  }
];

const EnvironmentSustainabilityComponent = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="p-8 bg-gradient-to-b lg:py-16 py-20 from-green-100 to-blue-100 min-h-screen">
      <div className="lg:container px-3">
      <h1 className="text-4xl font-bold text-center mb-10 text-green-900">Environment and Sustainability</h1>
      <p className="my-7">
      Environment and sustainability are closely related fields that focus on understanding and managing the natural environment to ensure its health and resilience for current and future generations. Here's an overview of each and their interconnections:
      <br />
      <br />
      #Environment:Environmental science involves studying the interactions between humans and the natural environment. Key aspects include:
      <br />
      #Sustainability:Sustainability focuses on meeting the needs of the present without compromising the ability of future generations to meet their own needs. Key aspects include:
      </p>
      <div className="flex flex-wrap -m-4">
        {environmentSustainabilityData.map((section, index) => (
          <div key={index} className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold text-blue-800 mb-4">{section.category}</h2>
              <ul className="space-y-4">
                {section.aspects.map((aspect, subIndex) => (
                  <li key={subIndex} className="border-b border-gray-300 pb-2 mb-2">
                    <h3 className="text-xl font-semibold text-purple-700">{aspect.title}</h3>
                    <p className="text-gray-700">{aspect.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <p className="my-7">
      By integrating knowledge and practices from both environment and sustainability fields, societies can work towards achieving a balance between human well-being and environmental health, ensuring a sustainable future for all.
      </p>
      </div>
    </div>
  );
};

export default EnvironmentSustainabilityComponent;
