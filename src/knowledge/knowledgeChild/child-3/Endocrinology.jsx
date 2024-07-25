import React, { useEffect } from 'react';

const EndocrinologyComponent = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="md:container px-3">
      <div className="py-20 lg:py-16">
        <h1 className="text-2xl font-bold mb-4">Endocrinology</h1>
        <p className="mb-4">
          Endocrinology is a specialized field of medicine focused on the study of hormones and their effects on the body's metabolic processes, growth, development, and reproduction. Here are some potential topics within Endocrinology that could be explored for publishing:
        </p>
        <ul className="grid gap-4">
          <li className="bg-gray-100 p-4 rounded shadow">
            <strong>1. Diabetes Mellitus:</strong> Types of diabetes (Type 1, Type 2, gestational), management strategies (insulin therapy, oral medications), and complications (neuropathy, nephropathy, retinopathy).
          </li>
          <li className="bg-gray-100 p-4 rounded shadow">
            <strong>2. Thyroid Disorders:</strong> Hypothyroidism, hyperthyroidism, thyroid nodules, thyroid cancer, and advancements in thyroid hormone replacement therapy.
          </li>
          <li className="bg-gray-100 p-4 rounded shadow">
            <strong>3. Pituitary Disorders:</strong> Pituitary adenomas, acromegaly, Cushing's syndrome, and other disorders affecting pituitary hormone production.
          </li>
          <li className="bg-gray-100 p-4 rounded shadow">
            <strong>4. Adrenal Disorders:</strong> Adrenal insufficiency (Addison's disease), adrenal tumors, Cushing's syndrome, and adrenal hormone replacement therapies.
          </li>
          <li className="bg-gray-100 p-4 rounded shadow">
            <strong>5. Reproductive Endocrinology:</strong> Infertility evaluations and treatments, polycystic ovary syndrome (PCOS), and hormonal contraception.
          </li>
          <li className="bg-gray-100 p-4 rounded shadow">
            <strong>6. Bone and Mineral Disorders:</strong> Osteoporosis, vitamin D deficiency, hyperparathyroidism, and management of metabolic bone diseases.
          </li>
          <li className="bg-gray-100 p-4 rounded shadow">
            <strong>7. Endocrine Hypertension:</strong> Evaluation and management of hypertension secondary to endocrine disorders such as primary aldosteronism.
          </li>
          <li className="bg-gray-100 p-4 rounded shadow">
            <strong>8. Pediatric Endocrinology:</strong> Growth disorders, puberty disorders, congenital adrenal hyperplasia, and genetic endocrine disorders in children.
          </li>
          <li className="bg-gray-100 p-4 rounded shadow">
            <strong>9. Neuroendocrinology:</strong> Hormonal regulation of the nervous system, neuroendocrine tumors, and hypothalamic-pituitary disorders.
          </li>
          <li className="bg-gray-100 p-4 rounded shadow">
            <strong>10. Endocrine Oncology:</strong> Diagnosis and treatment of endocrine tumors, including thyroid cancer, adrenal tumors, and neuroendocrine tumors.
          </li>
        </ul>
        <p className="mt-6">
          These topics highlight the diverse aspects of Endocrinology, encompassing clinical care, research, and advancements in understanding hormone-related disorders.
        </p>
      </div>
    </div>
  );
};

export default EndocrinologyComponent;
