import React, { useEffect } from 'react';

const ReligionComponent = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="py-20 lg:py-16">
      <div className="md:container px-3">
        <h1 className="text-3xl font-bold mb-6">Study of Religion</h1>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">1. Comparative Religion</h2>
            <p>Analysis of similarities and differences between major world religions (such as Christianity, Islam, Judaism, Hinduism, Buddhism), as well as indigenous and lesser-known religions.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">2. Religious History</h2>
            <p>Examination of the historical development, evolution, and spread of religious traditions, beliefs, rituals, and practices.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">3. Theology</h2>
            <p>Study of religious doctrines, beliefs about the nature of God or the divine, theological debates, and religious philosophy.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">4. Religion and Society</h2>
            <p>Analysis of the impact of religion on social norms, cultural practices, ethics, morality, politics, and societal values.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">5. Religion and Science</h2>
            <p>Exploration of the relationship between religious beliefs, scientific inquiry, evolution, cosmology, and ethics in science.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">6. Religion and Gender</h2>
            <p>Research on religious perspectives on gender roles, women's rights, LGBTQ+ issues, and feminist theology.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">7. Sacred Texts</h2>
            <p>Study of religious scriptures, sacred writings, interpretation methods, textual criticism, and hermeneutics.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">8. Religious Ethics</h2>
            <p>Examination of ethical principles within religious traditions, moral dilemmas, bioethics, and environmental ethics.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">9. Spirituality</h2>
            <p>Exploration of personal spiritual experiences, mystical traditions, spirituality in secular contexts, and spiritual practices.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">10. Religion and Conflict</h2>
            <p>Analysis of religious conflicts, religious tolerance, interfaith dialogue, religious extremism, and peacebuilding efforts.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReligionComponent;
