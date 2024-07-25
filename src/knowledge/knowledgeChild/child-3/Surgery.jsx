import React, { useEffect } from 'react';

const SurgeryTopics = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="py-20 lg:py-16 bg-gray-100">
      <div className="md:container px-3 mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">Surgery</h1>
        <p className="text-lg text-gray-700 mb-8">
          Surgery is a medical specialty that involves operative procedures to treat diseases, injuries, or deformities through manual or instrumental techniques.
        </p>

        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-xl font-semibold text-blue-600 mb-2">General Surgery</h2>
              <p>Basic surgical procedures, including appendectomies, hernia repairs, and gallbladder removal.</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-xl font-semibold text-blue-600 mb-2">Orthopedic Surgery</h2>
              <p>Surgical treatment of musculoskeletal injuries and conditions, such as fractures, joint replacements, and sports injuries.</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-xl font-semibold text-blue-600 mb-2">Cardiothoracic Surgery</h2>
              <p>Surgical procedures involving the heart, lungs, and chest cavity, including coronary artery bypass grafting (CABG) and lung resections.</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-xl font-semibold text-blue-600 mb-2">Neurosurgery</h2>
              <p>Surgical treatment of disorders affecting the brain, spinal cord, and peripheral nerves, such as brain tumors, spinal fusion, and neurotrauma.</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-xl font-semibold text-blue-600 mb-2">Plastic Surgery</h2>
              <p>Cosmetic and reconstructive surgical procedures, including breast reconstruction, facelifts, and rhinoplasty.</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-xl font-semibold text-blue-600 mb-2">Urology</h2>
              <p>Surgical treatment of urinary tract disorders, including kidney stones, prostatectomy, and bladder surgeries.</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-xl font-semibold text-blue-600 mb-2">Gynecological Surgery</h2>
              <p>Surgical procedures related to the female reproductive system, such as hysterectomy, ovarian cyst removal, and tubal ligation.</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-xl font-semibold text-blue-600 mb-2">Ophthalmic Surgery</h2>
              <p>Surgical procedures involving the eyes, such as cataract surgery, LASIK, and corneal transplants.</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-xl font-semibold text-blue-600 mb-2">ENT Surgery</h2>
              <p>Surgical treatment of disorders affecting the ear, nose, and throat, including tonsillectomy, sinus surgery, and cochlear implants.</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-xl font-semibold text-blue-600 mb-2">Minimally Invasive Surgery</h2>
              <p>Techniques such as laparoscopy and robotic surgery for less invasive procedures with reduced recovery times and complications.</p>
            </div>
          </div>
        </div>

        <p className="text-lg text-gray-700 mt-8">
          These topics highlight the diversity of surgical specialties and the range of conditions that surgeons address through various surgical techniques. If you have specific areas or questions you'd like to explore further within Surgery, feel free to ask!
        </p>
      </div>
    </div>
  );
};

export default SurgeryTopics;
