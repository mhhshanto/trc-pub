import React from 'react'
import { RiArrowRightSLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { IoSearch } from "react-icons/io5";

function Service() {

    const data = [
        {
            img: 'https://taylorandfrancis.com/wp-content/uploads/2021/01/tile-subscription-access.jpg',
            title: 'Subscription access',
            des: `Provide easy access to the right research at the right time. We offer flexible journal purchasing options to support your organization's goals and suit your budget. Build your custom plan with comprehensive journal subscriptions across various subject areas and research disciplines.`
        },
        {
            img: 'https://taylorandfrancis.com/wp-content/uploads/2021/08/tile-F1000-gr.png',
            title: 'Science & Technology Journals',
            des: `Gain access to the latest research in science and technology. Our subscription plans cover a wide range of disciplines including physics, chemistry, engineering, and more.`
        },
        {
            img: 'https://taylorandfrancis.com/wp-content/uploads/2021/01/tile-Open-Access-Publishing.jpg',
            title: 'Medical Journals',
            des: `Stay updated with cutting-edge medical research and clinical studies. Our medical journal subscriptions provide access to essential information in various medical fields.`
        },
        {
            img: 'https://taylorandfrancis.com/wp-content/uploads/2021/08/tile-Reprints-and-ePrints.jpg',
            title: 'Humanities & Social Sciences Journals',
            des: `Explore comprehensive research in humanities and social sciences. Our subscriptions include journals on history, sociology, political science, and more.`
        },
        {
            img: 'https://taylorandfrancis.com/wp-content/uploads/2021/08/tile-Advertising-solutions.jpg',
            title: 'Engineering & Technology Journals',
            des: `Access top-tier journals in engineering and technology. Our subscription plans offer the latest research findings and technological advancements in these fields.`
        },
        {
            img: 'https://taylorandfrancis.com/wp-content/uploads/2022/05/tile-accelerate-publication-22.jpg',
            title: 'Environmental Science Journals',
            des: `Stay informed on environmental research and sustainability practices. Our journal subscriptions cover topics such as climate change, conservation, and environmental policy.`
        },
        {
            img: 'https://taylorandfrancis.com/wp-content/uploads/2023/12/Medical-Comms-Services-480x300-1.jpg',
            title: 'Business & Management Journals',
            des: `Keep up with the latest trends and research in business and management. Our subscription plans include journals on marketing, finance, leadership, and more.`
        },
        {
            img: 'https://taylorandfrancis.com/wp-content/uploads/2023/12/Digital-Hubs-Services-480x300-1.jpg',
            title: 'Education Journals',
            des: `Enhance your knowledge with access to top education research. Our journal subscriptions cover pedagogy, educational policy, curriculum development, and more.`
        },
        {
            img: 'https://taylorandfrancis.com/wp-content/uploads/2021/01/tile-Author-services.png',
            title: 'Psychology Journals',
            des: `Dive into comprehensive research in psychology. Our subscriptions offer access to studies on cognitive psychology, behavioral science, mental health, and more.`
        },
        {
            img: 'https://taylorandfrancis.com/wp-content/uploads/2021/04/tile-editing-services-2.png',
            title: 'Health & Social Care Journals',
            des: `Stay updated with research in health and social care. Our journal subscriptions include topics on public health, social services, healthcare management, and more.`
        },
        {
            img: 'https://taylorandfrancis.com/wp-content/uploads/2021/04/tile-librarian-resources.png',
            title: 'Arts & Humanities Journals',
            des: `Explore the rich world of arts and humanities. Our subscriptions offer access to journals on literature, philosophy, art history, cultural studies, and more.`
        },
        {
            img: 'https://taylorandfrancis.com/wp-content/uploads/2021/04/tile-editor-resources.png',
            title: 'Law Journals',
            des: `Access leading research in the field of law. Our subscription plans cover various legal disciplines including international law, criminal justice, and legal theory.`
        },
        {
            img: 'https://taylorandfrancis.com/wp-content/uploads/2022/11/Routledge-Open-Research-480x300-1.jpg',
            title: 'Economics Journals',
            des: `Stay informed on the latest economic research and theories. Our journal subscriptions include topics such as macroeconomics, microeconomics, and international economics.`
        },
        {
            img: 'https://taylorandfrancis.com/wp-content/uploads/2021/01/tile-Researcher-services.jpg',
            title: 'Agriculture & Forestry Journals',
            des: `Gain access to crucial research in agriculture and forestry. Our subscriptions cover topics such as sustainable farming practices, forestry management, and agricultural economics.`
        }
    ];
    





    return (
        <div className='lg:mt-28 sm:mt-16 mt-24'>
            <div className='pt-4 '>
                <h1 className='py-7 flex  gap-1 items-center md:container px-3'><Link className='hover:underline' to={'/'}>Home</Link> <RiArrowRightSLine className='text-2xl' /> Services</h1>
            </div>

            <div className="md:container mx-auto px-3">

                <h1 className='text-gray-700 text-3xl pb-2 mb-6'>Services</h1>


                <div className='grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mb-10'>
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
                </div>


            </div>

        </div>
    )
}

export default Service