import React from 'react'
import { RiArrowRightSLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { IoSearch } from "react-icons/io5";

function Service() {

    // const data = [
    //     {
    //         img: 'https://taylorandfrancis.com/wp-content/uploads/2021/01/tile-subscription-access.jpg',
    //         title: 'Subscription access',
    //         des: `Provide easy access to the right research at the right time. We offer flexible journal purchasing options to support your organization's goals and suit your budget. Build your custom plan with comprehensive journal subscriptions across various subject areas and research disciplines.`
    //     },
    //     {
    //         img: 'https://taylorandfrancis.com/wp-content/uploads/2021/08/tile-F1000-gr.png',
    //         title: 'Science & Technology Journals',
    //         des: `Gain access to the latest research in science and technology. Our subscription plans cover a wide range of disciplines including physics, chemistry, engineering, and more.`
    //     },
    //     {
    //         img: 'https://taylorandfrancis.com/wp-content/uploads/2021/01/tile-Open-Access-Publishing.jpg',
    //         title: 'Medical Journals',
    //         des: `Stay updated with cutting-edge medical research and clinical studies. Our medical journal subscriptions provide access to essential information in various medical fields.`
    //     },
    //     {
    //         img: 'https://taylorandfrancis.com/wp-content/uploads/2021/08/tile-Reprints-and-ePrints.jpg',
    //         title: 'Humanities & Social Sciences Journals',
    //         des: `Explore comprehensive research in humanities and social sciences. Our subscriptions include journals on history, sociology, political science, and more.`
    //     },
    //     {
    //         img: 'https://taylorandfrancis.com/wp-content/uploads/2021/08/tile-Advertising-solutions.jpg',
    //         title: 'Engineering & Technology Journals',
    //         des: `Access top-tier journals in engineering and technology. Our subscription plans offer the latest research findings and technological advancements in these fields.`
    //     },
    //     {
    //         img: 'https://taylorandfrancis.com/wp-content/uploads/2022/05/tile-accelerate-publication-22.jpg',
    //         title: 'Environmental Science Journals',
    //         des: `Stay informed on environmental research and sustainability practices. Our journal subscriptions cover topics such as climate change, conservation, and environmental policy.`
    //     },
    //     {
    //         img: 'https://taylorandfrancis.com/wp-content/uploads/2023/12/Medical-Comms-Services-480x300-1.jpg',
    //         title: 'Business & Management Journals',
    //         des: `Keep up with the latest trends and research in business and management. Our subscription plans include journals on marketing, finance, leadership, and more.`
    //     },
    //     {
    //         img: 'https://taylorandfrancis.com/wp-content/uploads/2023/12/Digital-Hubs-Services-480x300-1.jpg',
    //         title: 'Education Journals',
    //         des: `Enhance your knowledge with access to top education research. Our journal subscriptions cover pedagogy, educational policy, curriculum development, and more.`
    //     },
    //     {
    //         img: 'https://taylorandfrancis.com/wp-content/uploads/2021/01/tile-Author-services.png',
    //         title: 'Psychology Journals',
    //         des: `Dive into comprehensive research in psychology. Our subscriptions offer access to studies on cognitive psychology, behavioral science, mental health, and more.`
    //     },
    //     {
    //         img: 'https://taylorandfrancis.com/wp-content/uploads/2021/04/tile-editing-services-2.png',
    //         title: 'Health & Social Care Journals',
    //         des: `Stay updated with research in health and social care. Our journal subscriptions include topics on public health, social services, healthcare management, and more.`
    //     },
    //     {
    //         img: 'https://taylorandfrancis.com/wp-content/uploads/2021/04/tile-librarian-resources.png',
    //         title: 'Arts & Humanities Journals',
    //         des: `Explore the rich world of arts and humanities. Our subscriptions offer access to journals on literature, philosophy, art history, cultural studies, and more.`
    //     },
    //     {
    //         img: 'https://taylorandfrancis.com/wp-content/uploads/2021/04/tile-editor-resources.png',
    //         title: 'Law Journals',
    //         des: `Access leading research in the field of law. Our subscription plans cover various legal disciplines including international law, criminal justice, and legal theory.`
    //     },
    //     {
    //         img: 'https://taylorandfrancis.com/wp-content/uploads/2022/11/Routledge-Open-Research-480x300-1.jpg',
    //         title: 'Economics Journals',
    //         des: `Stay informed on the latest economic research and theories. Our journal subscriptions include topics such as macroeconomics, microeconomics, and international economics.`
    //     },
    //     {
    //         img: 'https://taylorandfrancis.com/wp-content/uploads/2021/01/tile-Researcher-services.jpg',
    //         title: 'Agriculture & Forestry Journals',
    //         des: `Gain access to crucial research in agriculture and forestry. Our subscriptions cover topics such as sustainable farming practices, forestry management, and agricultural economics.`
    //     }
    // ];


    const data = [
        {
            HTitle: 'High-quality English language editing services encompass several key aspects:',
            title: '',
            listItem: [
                {
                    LTitle: 'Language Proficiency',
                    LDes: ` Editors possess a high level of proficiency in English, including
                 grammar, syntax, punctuation, and vocabulary. They ensure that the language is clear,
                 concise, and error-free`
                },
                {
                    LTitle: 'Style Consistency',
                    LDes: `Editors maintain consistency in style throughout the document, adhering
                 to specified style guides (such as APA, MLA, Chicago, etc.) or client preferences.`
                },
                {
                    LTitle: 'Clarity and Coherence',
                    LDes: `They improve the clarity and coherence of the text by rephrasing
                 awkward or ambiguous sentences, organizing paragraphs logically, and ensuring smooth
                 transitions between ideas.`
                },
                {
                    LTitle: 'Attention to Detail',
                    LDes: `Editors meticulously review the document for spelling errors, typos, and
                 other mechanical issues, ensuring a polished final product.`
                },
                {
                    LTitle: 'Subject Matter Expertise',
                    LDes: ` Depending on the content, editors may possess subject matter
                 expertise or collaborate with specialists to ensure accuracy and precision in terminology and
                 concepts.
                 `
                },
                {
                    LTitle: 'Client Communication',
                    LDes: ` They maintain open communication with clients, addressing their
                 concerns and incorporating feedback to meet their specific needs and expectations.`
                },
                {
                    LTitle: 'Timeliness and Reliability',
                    LDes: `High-quality editing services are delivered within agreed-upon
                 timelines, demonstrating reliability and professionalism.`
                },
            ],
            summary: `Overall, high-quality English language editing services aim to enhance the overall readability, professionalism, and impact of written content across various genres and industries.`
        },
        {
            HTitle: 'Scientific editing',
            title: 'Scientific editing offers numerous benefits to researchers, academics, and institutions alike',
            listItem: [
                {
                    LTitle: 'Enhanced Clarity and Readability',
                    LDes: `Scientific editors improve the clarity and readability of
                 research manuscripts, making complex concepts more accessible to a wider audience. Clear communication increases the impact of the research and facilitates knowledge dissemination.
                 `
                },
                {
                    LTitle: 'Increased Publication Success',
                    LDes: `Manuscripts that undergo rigorous scientific editing are more
                 likely to meet the high standards of peer-reviewed journals, increasing the chances of acceptance for publication. Editors help authors address potential concerns and improve the overall quality of the manuscript, reducing the likelihood of rejection.`
                },
                {
                    LTitle: 'Improved Accuracy and Credibility',
                    LDes: `Editors meticulously review data, references, and
                 methodology to ensure accuracy and adherence to scientific standards. This enhances the credibility of the research and minimizes the risk of errors or inaccuracies slipping through the peer-review process.`
                },
                {
                    LTitle: 'Time and Effort Savings',
                    LDes: ` By entrusting the editing process to professionals, researchers can
                 save valuable time and effort that would otherwise be spent on revising and refining their manuscripts. Editors provide valuable feedback and guidance, streamlining the publication process and reducing the need for multiple rounds of revisions.`
                },
                {
                    LTitle: 'Enhanced Professionalism and Reputation',
                    LDes: `High-quality scientific editing reflects positively on
                 the professionalism and reputation of both individual researchers and their affiliated
                 institutions. Well-edited research papers are more likely to be cited by other scholars,
                 contributing to the author's academic recognition and institutional prestige.`
                },
                {
                    LTitle: 'Adherence to Ethical Standards',
                    LDes: `Editors ensure that research manuscripts comply with ethical
                 guidelines, including proper citation practices, avoidance of plagiarism, and disclosure of
                 potential conflicts of interest. This helps maintain the integrity of the research process and
                 promotes trust within the scientific community.
                 `
                },
                {
                    LTitle: 'Access to Expertise and Resources',
                    LDes: ` Scientific editors often possess specialized knowledge and
                 expertise in specific fields or disciplines, allowing them to provide valuable insights and
                 suggestions for improving the quality of the research. Additionally, they may have access to
                 resources such as style guides, databases, and reference materials that can further enhance the
                 manuscript.`
                },
                {
                    LTitle: 'Global Reach and Impact',
                    LDes: `Well-edited research manuscripts are more likely to be accepted by
                 international journals and reach a global audience of researchers, policymakers, and
                 practitioners. This broadens the impact of the research and facilitates collaboration and
                 knowledge exchange on a global scale.`
                },

            ],
            summary: 'Overall, scientific editing is essential for ensuring the quality, integrity, and impact of research publications, ultimately advancing the frontiers of knowledge across various scientific disciplines.'
        },
        {
            HTitle: 'Manuscript Formatting',
            title: `manuscript formatting can vary depending on the requirements of the publication or the
            preferences of the author. However, here are some general guidelines that are commonly
            followed`,
            listItem: [
                {
                    LTitle: 'Font and Size',
                    LDes: `Times New Roman or Arial are commonly used fonts, typically in size 12pt.`
                },
                {
                    LTitle: 'Margins',
                    LDes: `One-inch margins on all sides of the page are standard.`
                },
                {
                    LTitle: 'Line Spacing',
                    LDes: `Double-spacing is commonly used throughout the manuscript, including the title page,
                    abstract, text, references, tables, and figure legends.`
                },
                {
                    LTitle: 'Alignment and Indentation',
                    LDes: `Text should be aligned to the left, with a ragged right margin.
                    Paragraphs are usually indented, typically by 0.5 inches.`
                },
                {
                    LTitle: 'Title Page',
                    LDes: `This typically includes the title of the manuscript, author names and affiliations,
                    corresponding author details, and sometimes a word count.`
                },
                {
                    LTitle: 'Abstract',
                    LDes: `The abstract is a concise summary of the manuscript, usually no more than 250 words.`
                },
                {
                    LTitle: 'Headings',
                    LDes: `Headings and subheadings should be clear and consistent. They are often formatted using
                    bold, italics, or underlining to distinguish them from the main text.`
                },
                {
                    LTitle: 'Figures and Tables',
                    LDes: `These should be numbered consecutively and have clear titles or captions. They
                    should also be cited in the text in numerical order.`
                },
                {
                    LTitle: 'References',
                    LDes: `References should be listed at the end of the manuscript in a consistent format, such as
                    APA or MLA style.
                    `
                },
                {
                    LTitle: 'Page Numbers',
                    LDes: `Page numbers are typically placed in the top right corner, starting from the second
                    page (the title page is usually not numbered).`
                },
                {
                    LTitle: 'Word Count',
                    LDes: `Some journals or publishers may require a word count for the entire manuscript or
                    specific sections.`
                },
                {
                    LTitle: 'File Format',
                    LDes: `Manuscripts are often submitted in Word (.doc or .docx) format, but check the
                    submission guidelines of the target publication for any specific requirements.`
                },
                

            ],
            summary: `Always remember to check the specific guidelines of the publication you're submitting to, as they
            may have their own formatting requirements.
            `
        },
        {
            HTitle: 'Thesis to book conversion process',
            title: `Converting a thesis into a book is a significant endeavor that requires careful planning, restructuring,
            and refining to adapt the content for a broader audience and publication format. Here's a step-bystep guide to help you navigate the thesis to book conversion process`,
            listItem: [
                {
                    LTitle: 'Evaluate the Thesis',
                    LDes: `Begin by thoroughly evaluating your thesis to identify its strengths,
                    weaknesses, and areas for improvement. Consider whether the content is suitable for
                    expansion into a book and whether it aligns with the goals of a broader readership.
                    `
                },
                {
                    LTitle: `Define the Book's Audience and Purpose`,
                    LDes: `Determine the target audience for the book and
                    clarify its purpose. Are you aiming to reach academics, professionals, general readers, or a
                    specific niche audience? Understanding your audience and purpose will guide the content
                    and structure of the book.`
                },
                {
                    LTitle: 'Identify Key Themes and Arguments',
                    LDes: `Identify the key themes, arguments, and findings from
                    your thesis that are most relevant and compelling for the book's audience. Consider how
                    these elements can be expanded, updated, or reorganized to provide deeper insights and
                    broader relevance.`
                },
                {
                    LTitle: 'Restructure and Refine the Content',
                    LDes: `Restructure the content of your thesis to fit the format
                    and requirements of a book. This may involve reorganizing chapters, expanding or
                    condensing sections, integrating new research or perspectives, and refining the writing style
                    for clarity and engagement.`
                },
                {
                    LTitle: 'Fill Gaps and Expand Perspectives',
                    LDes: `Address any gaps or limitations in your thesis by
                    conducting additional research, incorporating new data or case studies, and engaging with
                    alternative perspectives or theoretical frameworks. Aim to provide a comprehensive and
                    nuanced exploration of the topic.`
                },
                {
                    LTitle: 'Enhance Accessibility and Readability',
                    LDes: `Ensure that the language, tone, and style of the book
                    are accessible and engaging for a broader audience. Avoid jargon and technical language
                    where possible, and use clear explanations, examples, and illustrations to enhance
                    readability`
                },
                {
                    LTitle: 'Add Value Through Additional Content',
                    LDes: `Consider adding value to the book by including
                    supplementary materials such as introductory chapters, case studies, practical applications,
                    discussion questions, or visual aids. These additions can enhance the book's relevance and
                    utility for readers.`
                },
                {
                    LTitle: 'Seek Feedback and Revision',
                    LDes: `Seek feedback from colleagues, mentors, and potential
                    readers to gain insights into the strengths and weaknesses of the book manuscript. Revise
                    and refine the content based on feedback, ensuring that the book meets the highest
                    standards of scholarship and readability`
                },
                {
                    LTitle: 'Prepare for Publication',
                    LDes: `Once the manuscript is polished and finalized, prepare the book for
                    publication by formatting it according to the publisher's guidelines, securing permissions for
                    any copyrighted material, and compiling supplementary materials such as references, tables,
                    and figures.`
                },
                {
                    LTitle: 'Submit and Promote the Book',
                    LDes: `Submit the manuscript to academic publishers or selfpublishing platforms that specialize in your field or genre. Develop a comprehensive
                    marketing and promotion strategy to raise awareness of the book and reach your target
                    audience through channels such as social media, academic conferences, and book reviews.`
                },
                

            ],
            summary: ``
        },
    ]




    return (
        <div className='lg:mt-[110px] sm:mt-16 mt-24'>
            <div className='pt-4 '>
                <h1 className='py-7 flex  gap-1 items-center md:container px-3'><Link className='hover:underline' to={'/'}>Home</Link> <RiArrowRightSLine className='text-2xl' /> Services</h1>
            </div>

            <div className="md:container mx-auto px-3">

                <h1 className='text-gray-700 text-3xl pb-2 mb-6'>Services</h1>


                {/* <div className='grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mb-10'>
                    {
                        data.map((item, index) => {
                            return (
                                <div key={index}>
                                    <img className='md:w-full sm:w-[70%] mx-auto'  src={item?.img} alt="" />
                                    <h1 className='text-gray-700 text-2xl my-5 font-medium'>{item?.title}</h1>
                                    <p>{item?.des}</p>
                                    <div className='flex items-center gap-1 px-2 py-1  w-fit border text-gray-500 border-gray-300 cursor-pointer my-5 mx-auto '>
                                        <IoSearch />
                                        <button className='text-sm'>LEARN MORE</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div> */}

                {
                    data.map((HItem, HIndex) => {
                        return (
                            <div key={HIndex} className='md:my-20 bg-[#f3f1f0] p-5 my-14'>
                                <h1 className='md:text-4xl text-3xl mb-10 font-semibold text-center'>{HItem?.HTitle}</h1>
                                <p className="my-7 sm:text-xl font-medium">
                                    {HItem?.title}
                                </p>
                                <div className='grid lg:grid-cols-2 grid-cols-1 md:gap-10 gap-5'>
                                    {
                                        HItem?.listItem?.map((item, index) => {
                                            return (
                                                <div key={index} className={`flex `}>
                                                    <div className='flex gap-1 mt-3'>
                                                        <span className='font-bold'>{index + 1}.</span>
                                                        <p className=''><span className='font-bold'>
                                                            {item?.LTitle }:
                                                        </span> {item?.LDes}</p>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <p className='my-8 font-medium first-letter:italic'>{HItem?.summary}</p>
                            </div>
                        )
                    })
                }

            </div>

        </div>
    )
}

export default Service