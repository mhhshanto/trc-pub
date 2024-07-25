import React, { useEffect } from 'react';

const WomensHealth = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="py-20 lg:py-16 bg-gray-100">
      <div className="md:container px-3 mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">Women's Health</h1>
        <p className="text-lg text-gray-700 mb-8">
          Women's Health focuses on the unique health needs and conditions that affect women throughout their lives.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold text-pink-600 mb-2">Reproductive Health</h2>
            <p><strong>Comprehensive care</strong> for women's reproductive systems, including contraception, fertility issues, and menopause management.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold text-pink-600 mb-2">Breast Health</h2>
            <p><strong>Screening guidelines, diagnosis, and treatment</strong> of breast conditions, including breast cancer.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold text-pink-600 mb-2">Maternal Health</h2>
            <p><strong>Prenatal care, childbirth, postpartum care,</strong> and management of pregnancy-related complications.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold text-pink-600 mb-2">Gynecological Health</h2>
            <p><strong>Diagnosis and treatment</strong> of gynecological conditions such as menstrual disorders, pelvic pain, and infections.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold text-pink-600 mb-2">Sexual Health</h2>
            <p><strong>Issues related to sexual function, sexual dysfunction,</strong> and sexually transmitted infections (STIs).</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold text-pink-600 mb-2">Osteoporosis and Bone Health</h2>
            <p><strong>Prevention, diagnosis, and treatment</strong> of osteoporosis and other bone health conditions.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold text-pink-600 mb-2">Cardiovascular Health</h2>
            <p><strong>Risk factors, prevention, and management</strong> of heart disease and stroke in women.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold text-pink-600 mb-2">Mental Health</h2>
            <p><strong>Psychological and emotional well-being,</strong> including issues like postpartum depression and anxiety disorders.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold text-pink-600 mb-2">Cancer Prevention and Screening</h2>
            <p><strong>Guidelines for cervical cancer, ovarian cancer,</strong> and other gynecological cancers.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold text-pink-600 mb-2">Healthy Aging</h2>
            <p><strong>Health concerns and strategies for maintaining well-being</strong> as women age, including hormone replacement therapy and healthy lifestyle choices.</p>
          </div>
        </div>

        <p className="text-lg text-gray-700 mt-8">
          These topics cover a wide range of issues relevant to women's health, addressing both preventive care and specialized medical treatments. If you have specific areas or questions you'd like to explore further within Women's Health, feel free to ask!
        </p>
      </div>
    </div>
  );
};

export default WomensHealth;
