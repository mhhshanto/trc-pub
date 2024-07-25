import React, { useEffect } from 'react';

const VeterinaryMedicine = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="py-20 lg:py-16 bg-gray-50">
      <div className="md:container px-3 mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">Veterinary Medicine</h1>
        <p className="text-lg text-gray-700 mb-8">
          Veterinary Medicine is the branch of medicine that focuses on the health and wellbeing of animals.
        </p>

        <div className="flex flex-wrap -mx-3">
          <div className="w-full lg:w-1/2 px-3 mb-6">
            <div className="bg-white shadow-lg rounded-lg p-6 h-full">
              <h2 className="text-xl font-semibold text-green-600 mb-2">Small Animal Medicine</h2>
              <p><strong>Diagnosis and treatment</strong> of diseases in companion animals such as dogs, cats, and rabbits.</p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-3 mb-6">
            <div className="bg-white shadow-lg rounded-lg p-6 h-full">
              <h2 className="text-xl font-semibold text-green-600 mb-2">Large Animal Medicine</h2>
              <p><strong>Health management and treatment</strong> of livestock animals like cattle, horses, and pigs.</p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-3 mb-6">
            <div className="bg-white shadow-lg rounded-lg p-6 h-full">
              <h2 className="text-xl font-semibold text-green-600 mb-2">Exotic Animal Medicine</h2>
              <p><strong>Care and treatment</strong> of non-traditional pets and exotic animals including birds, reptiles, and small mammals.</p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-3 mb-6">
            <div className="bg-white shadow-lg rounded-lg p-6 h-full">
              <h2 className="text-xl font-semibold text-green-600 mb-2">Veterinary Surgery</h2>
              <p><strong>Surgical procedures in animals</strong>, including soft tissue surgery, orthopedic surgery, and minimally invasive techniques.</p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-3 mb-6">
            <div className="bg-white shadow-lg rounded-lg p-6 h-full">
              <h2 className="text-xl font-semibold text-green-600 mb-2">Veterinary Dentistry</h2>
              <p><strong>Dental care and procedures in animals</strong>, including periodontal disease treatment and oral surgery.</p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-3 mb-6">
            <div className="bg-white shadow-lg rounded-lg p-6 h-full">
              <h2 className="text-xl font-semibold text-green-600 mb-2">Animal Behavior</h2>
              <p><strong>Study and management</strong> of animal behavior issues and training methods.</p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-3 mb-6">
            <div className="bg-white shadow-lg rounded-lg p-6 h-full">
              <h2 className="text-xl font-semibold text-green-600 mb-2">Veterinary Nutrition</h2>
              <p><strong>Nutritional requirements and dietary management</strong> for animals of different species.</p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-3 mb-6">
            <div className="bg-white shadow-lg rounded-lg p-6 h-full">
              <h2 className="text-xl font-semibold text-green-600 mb-2">Veterinary Pharmacology</h2>
              <p><strong>Use of pharmaceuticals in veterinary practice</strong>, including drug interactions and side effects.</p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-3 mb-6">
            <div className="bg-white shadow-lg rounded-lg p-6 h-full">
              <h2 className="text-xl font-semibold text-green-600 mb-2">Zoonotic Diseases</h2>
              <p><strong>Diseases that can be transmitted between animals and humans</strong>, and their prevention.</p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-3 mb-6">
            <div className="bg-white shadow-lg rounded-lg p-6 h-full">
              <h2 className="text-xl font-semibold text-green-600 mb-2">Veterinary Public Health</h2>
              <p><strong>Monitoring and management of animal populations</strong> to ensure public health and food safety.</p>
            </div>
          </div>
        </div>

        <p className="text-lg text-gray-700 mt-8">
          These topics reflect the breadth of Veterinary Medicine, encompassing clinical practice, research, and public health aspects related to animal health. If you have specific areas or questions you'd like to explore further within Veterinary Medicine, feel free to ask!
        </p>
      </div>
    </div>
  );
};

export default VeterinaryMedicine;
