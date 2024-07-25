import React, { useEffect } from 'react'

function StartReading() {

    useEffect(() => {
        scrollTo(0, 0)
    }, [])


    const data = [
        {
            title: 'Understand the Market and Your Audience',
            des: 'Research similar books and identify the target audience for your book. Demonstrating a clear understanding of the market and how your book fits in will make your proposal more compelling.'
        },
        {
            title: 'Craft a Compelling Overview',
            des: 'Begin your proposal with a strong overview that hooks the reader. Explain the concept, the book\'s unique angle, and why it\'s needed in the market.'
        },
        {
            title: 'Provide a Detailed Chapter Outline',
            des: 'Outline each chapter with a brief summary of the key points. This helps publishers understand the structure and content of your book.'
        },
        {
            title: 'Include a Strong Author Bio',
            des: 'Highlight your qualifications, writing experience, and any relevant expertise. Showcase your credibility and connection to the subject matter.'
        },
        {
            title: 'Showcase Your Platform and Marketing Plan',
            des: 'Detail how you plan to promote your book. Include information about your social media presence, email list, speaking engagements, and other marketing strategies.'
        },
        {
            title: 'Provide Sample Chapters',
            des: 'Include one or two sample chapters to give publishers a taste of your writing style and the book\'s content. Choose chapters that best represent the book\'s tone and direction.'
        },
        {
            title: 'Address Competing Titles',
            des: 'Identify competing books and explain how yours is different or better. This shows you\'ve done your homework and understand the competitive landscape.'
        },
        {
            title: 'Explain the Book\'s Format and Length',
            des: 'Specify the estimated word count and format (e.g., hardcover, paperback, e-book). This helps publishers envision the final product.'
        },
        {
            title: 'Highlight Potential Endorsements',
            des: 'Mention any notable endorsements or testimonials you plan to secure. Endorsements from well-known figures can add credibility to your proposal.'
        },
        {
            title: 'Provide a Realistic Timeline',
            des: 'Outline your timeline for completing the manuscript and any other relevant milestones. A clear timeline shows you\'re organized and serious about your project.'
        }
    ];


    const bioscienceFields = [
        { title: "Molecular Biology", description: "Study of the molecular mechanisms by which genetic information encoded in DNA is able to result in the processes of life." },
        { title: "Genetics", description: "Study of genes, genetic variation, and heredity in living organisms." },
        { title: "Microbiology", description: "Study of microorganisms, including bacteria, viruses, fungi, and protozoa." },
        { title: "Biochemistry", description: "Study of the chemical processes and substances that occur within living organisms." },
        { title: "Cell Biology", description: "Study of cell structure and function, including the processes of cell growth, differentiation, and division." },
        { title: "Developmental Biology", description: "Study of the process by which organisms grow and develop." },
        { title: "Physiology", description: "Study of the normal function of living systems, focusing on how organisms, organ systems, organs, cells, and biomolecules carry out the chemical and physical functions in a living system." },
        { title: "Neuroscience", description: "Study of the nervous system, including the brain, spinal cord, and neural networks." },
        { title: "Ecology", description: "Study of the interactions between organisms and their environment." },
        { title: "Evolutionary Biology", description: "Study of the origins and changes in the diversity of life over time." },
        { title: "Botany", description: "Study of plants, including their physiology, structure, genetics, ecology, distribution, classification, and economic importance." },
        { title: "Zoology", description: "Study of animals, including their biology, behavior, and interactions with their environments." },
        { title: "Biotechnology", description: "Application of biological knowledge and techniques to develop products and technologies for various uses, including medicine, agriculture, and industry." },
        { title: "Bioinformatics", description: "Use of computer technology to manage and analyze biological data, particularly in genomics and proteomics." },
        { title: "Immunology", description: "Study of the immune system, including its structure, function, disorders, and responses to pathogens." },
        { title: "Pharmacology", description: "Study of drugs and their effects on living organisms." },
        { title: "Biophysics", description: "Application of the principles of physics to understand how biological systems work." },
        { title: "Environmental Biology", description: "Study of the relationships between organisms and their environments, including topics like conservation biology and ecosystem management." },
      ];
      



    return (
        <div className="p-5 bg-gray-100 min-h-screen lg:container mx-auto">

            {/* <div className='mt-5 mb-10'>


                {
                    data.map((item, index) => {
                        return (
                            <div key={index} className='flex gap-4 mt-10'>
                                <div className='bg-gray-800 px-3 py-[5px] rounded text-gray-100 text-xl h-fit w-fit font-bold'>{index + 1}</div>
                                <div>
                                    <h1 className='text-2xl mb-3 font-bold'>{item?.title}</h1>
                                    <p className=''>{item?.des}</p>
                                </div>

                            </div>
                        )
                    })
                }




            </div> */}

            <div className="p-6 bg-gray-100 min-h-screen">
                <h1 className="text-4xl font-bold text-center mb-8 text-blue-800">Fields of Bioscience</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {bioscienceFields.map((field, index) => (
                        <div key={index} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <h2 className="text-xl font-semibold text-blue-600 mb-2">{field.title}</h2>
                            <p className="text-gray-700">{field.description}</p>
                        </div>
                    ))}
                </div>
            </div>

        </div>

    )
}

export default StartReading