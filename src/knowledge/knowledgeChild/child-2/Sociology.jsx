import React, { useEffect } from 'react';

const SociologyComponent = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="py-20 lg:py-16">
      <div className="md:container px-2">
        <h1 className="text-3xl font-bold mb-8">Sociology</h1>
        <p className="mb-4">Sociology is the study of society, social behavior, social structures, and the dynamics of social relationships. Here are some potential topics within the study of Sociology that could be explored for publishing:</p>
        <div className="grid gap-6">
          <div className="border p-4 rounded-lg">
            <strong>1. Social Theory:</strong> Analysis of sociological theories and perspectives (such as functionalism, conflict theory, symbolic interactionism, and feminist theory) and their application to understanding social phenomena.
          </div>
          <div className="border p-4 rounded-lg">
            <strong>2. Social Stratification:</strong> Examination of social inequality, social class, poverty, wealth distribution, social mobility, and the impact of social stratification on individuals and groups.
          </div>
          <div className="border p-4 rounded-lg">
            <strong>3. Family and Gender:</strong> Study of family structures, marriage, parenthood, gender roles, feminist perspectives, LGBTQ+ families, and changes in family dynamics over time.
          </div>
          <div className="border p-4 rounded-lg">
            <strong>4. Race and Ethnicity:</strong> Analysis of racial and ethnic identities, racism, discrimination, racial inequality, multiculturalism, and social movements for racial justice.
          </div>
          <div className="border p-4 rounded-lg">
            <strong>5. Health and Illness:</strong> Research on social determinants of health, healthcare systems, disparities in health outcomes, medical sociology, and the sociology of illness and disability.
          </div>
          <div className="border p-4 rounded-lg">
            <strong>6. Urban Sociology:</strong> Examination of urbanization, cities as social systems, urban development, urban poverty, gentrification, and urban social movements.
          </div>
          <div className="border p-4 rounded-lg">
            <strong>7. Environmental Sociology:</strong> Study of human-environment interactions, environmental justice, sustainability, climate change activism, and the sociology of natural disasters.
          </div>
          <div className="border p-4 rounded-lg">
            <strong>8. Political Sociology:</strong> Analysis of political participation, social movements, power dynamics, social influence on politics, and the impact of social movements on policy change.
          </div>
          <div className="border p-4 rounded-lg">
            <strong>9. Education:</strong> Research on educational systems, inequalities in education, educational attainment, school culture, student outcomes, and the sociology of teaching and learning.
          </div>
          <div className="border p-4 rounded-lg">
            <strong>10. Globalization and Social Change:</strong> Exploration of global interconnectedness, transnational social movements, cultural globalization, migration, and social impacts of global economic trends.
          </div>
        </div>
        <p className="mt-8">These topics illustrate the breadth and relevance of Sociology in understanding social structures, processes, inequalities, and social change. Sociology integrates empirical research with theoretical insights to examine how societies function, evolve, and influence individual lives. If you have specific areas or questions you'd like to explore further within Sociology, feel free to ask.</p>
      </div>
    </div>
  );
};

export default SociologyComponent;
