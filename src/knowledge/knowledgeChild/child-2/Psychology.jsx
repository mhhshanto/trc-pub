import React, { useEffect } from 'react';

const PsychologyComponent = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="py-20 lg:py-16 bg-gray-100">
      <div className="md:container p-3 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">Psychology</h1>
        <p className="mb-4 text-lg">
          Psychology is the scientific study of behavior, cognition, emotion, and mental processes. Here are some potential topics within the study of Psychology that could be explored for publishing:
        </p>
        <div>
          <section className="p-4 mb-4 bg-gray-200 rounded-lg">
            <h2 className="text-xl font-bold mb-2">1. Clinical Psychology</h2>
            <p>Assessment, diagnosis, and treatment of mental disorders, therapeutic approaches (such as cognitive-behavioral therapy, psychodynamic therapy), and clinical research.</p>
          </section>
          <section className="p-4 mb-4 bg-gray-300 rounded-lg">
            <h2 className="text-xl font-bold mb-2">2. Cognitive Psychology</h2>
            <p>Study of mental processes, including attention, memory, perception, language, reasoning, problem-solving, and decision-making.</p>
          </section>
          <section className="p-4 mb-4 bg-gray-200 rounded-lg">
            <h2 className="text-xl font-bold mb-2">3. Developmental Psychology</h2>
            <p>Examination of human development across the lifespan, including cognitive, emotional, social, and physical development.</p>
          </section>
          <section className="p-4 mb-4 bg-gray-300 rounded-lg">
            <h2 className="text-xl font-bold mb-2">4. Social Psychology</h2>
            <p>Analysis of how social influences, relationships, group dynamics, attitudes, persuasion, conformity, and prejudice affect behavior and cognition.</p>
          </section>
          <section className="p-4 mb-4 bg-gray-200 rounded-lg">
            <h2 className="text-xl font-bold mb-2">5. Health Psychology</h2>
            <p>Research on psychological factors influencing health, illness prevention, health behaviors, coping mechanisms, and the impact of stress on health.</p>
          </section>
          <section className="p-4 mb-4 bg-gray-300 rounded-lg">
            <h2 className="text-xl font-bold mb-2">6. Industrial-Organizational Psychology</h2>
            <p>Study of human behavior in the workplace, including employee motivation, leadership, organizational behavior, and workplace diversity.</p>
          </section>
          <section className="p-4 mb-4 bg-gray-200 rounded-lg">
            <h2 className="text-xl font-bold mb-2">7. Educational Psychology</h2>
            <p>Application of psychological principles to learning, teaching methods, educational assessment, student motivation, and educational interventions.</p>
          </section>
          <section className="p-4 mb-4 bg-gray-300 rounded-lg">
            <h2 className="text-xl font-bold mb-2">8. Neuropsychology</h2>
            <p>Examination of the relationship between brain function, behavior, and cognition, including neuropsychological assessment and rehabilitation.</p>
          </section>
          <section className="p-4 mb-4 bg-gray-200 rounded-lg">
            <h2 className="text-xl font-bold mb-2">9. Forensic Psychology</h2>
            <p>Application of psychology to legal issues, including criminal behavior, forensic assessment, eyewitness testimony, and courtroom procedures.</p>
          </section>
          <section className="p-4 mb-4 bg-gray-300 rounded-lg">
            <h2 className="text-xl font-bold mb-2">10. Cross-Cultural Psychology</h2>
            <p>Study of cultural influences on behavior, cognition, and psychological processes, including cultural psychology and cultural competence.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PsychologyComponent;
