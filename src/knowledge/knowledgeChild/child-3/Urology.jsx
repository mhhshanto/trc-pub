import React, { useEffect } from 'react';

const UrologyTopics = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="py-20 lg:py-16 bg-gray-100">
      <div className="md:container px-3 mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">Urology</h1>
        <p className="text-lg text-gray-700 mb-8">
          Urology is the branch of medicine that focuses on the diagnosis and treatment of disorders of the urinary tract in both males and females, as well as the male reproductive system.
        </p>

        <div className="space-y-6">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">Benign Prostatic Hyperplasia (BPH)</h2>
            <p><strong>Diagnosis</strong>, medical management, and surgical interventions for BPH, including transurethral resection of the prostate (TURP) and minimally invasive treatments.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">Prostate Cancer</h2>
            <p><strong>Screening guidelines</strong>, treatment options (such as radical prostatectomy, radiation therapy, and active surveillance), and advances in prostate cancer research.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">Kidney Stones</h2>
            <p><strong>Prevention strategies</strong>, minimally invasive treatments (such as shock wave lithotripsy and ureteroscopy), and management of recurrent stone formers.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">Urinary Incontinence</h2>
            <p><strong>Evaluation and management</strong> of urinary incontinence in men and women, including pelvic floor exercises, medications, and surgical options.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">Erectile Dysfunction</h2>
            <p><strong>Causes</strong>, evaluation, medical therapies (such as oral medications and penile injections), and surgical treatments (including penile prostheses).</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">Bladder Cancer</h2>
            <p><strong>Diagnosis</strong>, staging, surgical and non-surgical treatment options (such as transurethral resection of bladder tumor, intravesical therapy, and radical cystectomy).</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">Pediatric Urology</h2>
            <p><strong>Surgical and non-surgical management</strong> of congenital urological abnormalities in children, such as hypospadias, vesicoureteral reflux, and undescended testicles.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">Male Infertility</h2>
            <p><strong>Evaluation, medical and surgical treatments</strong> for male infertility, including varicocele repair and sperm retrieval techniques.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">Female Urology</h2>
            <p><strong>Diagnosis and management</strong> of urinary tract disorders unique to women, such as urinary tract infections, pelvic organ prolapse, and voiding dysfunction.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">Urological Oncology</h2>
            <p><strong>Multidisciplinary approach</strong> to the treatment of genitourinary cancers, including bladder, kidney, prostate, testicular, and adrenal cancers.</p>
          </div>
        </div>

        <p className="text-lg text-gray-700 mt-8">
          These topics encompass various aspects of urological care, from common conditions to specialized treatments and research advancements. If you have specific areas or questions you'd like to explore further within Urology, feel free to ask!
        </p>
      </div>
    </div>
  );
};

export default UrologyTopics;
