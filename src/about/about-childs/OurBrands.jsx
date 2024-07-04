import { Button } from '@chakra-ui/react'
import React from 'react'

function OurBrands() {

    const data = [
        {
            img: 'https://i.ibb.co/SdBsMc7/Picsart-24-06-29-15-18-39-711-removebg-preview.png',
            description: 'TRC Sapphire Publisher publishes research from the forefront of science, medicine, technology, and engineering. We partner with world-class authors and researchers to bring knowledge to life. Our journals program began in 1798 with the publication of Philosophical Magazine. Since then, the knowledge we’ve published has helped to shape human understanding and drive policy, discoveries, and change. Our publishing program also shares cutting-edge research via digital hubs, video, data publication, impact statements, open citations, and more. We also offer medical communications agencies a wide range of additional publishing solutions, including our market-leading Plain Language Summary service.'
        },
        {
            img: 'https://taylorandfrancis.com/wp-content/uploads/2021/03/Routledge_wg-blue.png',
            description: 'Routledge is the world’s leading academic publisher in the Humanities and Social Sciences. We publish thousands of books and journals each year, serving scholars, instructors, and professional communities worldwide. Our current publishing program encompasses ground-breaking textbooks and premier, peer-reviewed research in the social sciences, humanities, built environment, education and behavioural sciences.'
        },
        {
            img: 'https://taylorandfrancis.com/wp-content/uploads/2021/03/CRC_wg_blue.png',
            description: 'CRC Press is a premier global publisher of science, technology, and medical resources. We offer unique, trusted content by expert authors, spreading knowledge and promoting discovery worldwide. We aim to broaden thinking and advance understanding in the sciences, providing researchers, academics, professionals, and students with the tools they need to share ideas and realize their potential.'
        },
        {
            img: 'https://i.ibb.co/m0ZX3f4/images1.png',
            description: 'F5000 fosters a culture of innovation to accelerate the reach of knowledge and put it in the hands of those who will shape the future. We provide open research publishing solutions to an array of research organizations, learned societies, institutions, and funders, as well as directly to researchers through our own rapid, transparent publishing platforms, such as F1000Research.'
        },
        {
            img: 'https://taylorandfrancis.com/wp-content/uploads/2019/09/dovepress.png',
            description: 'Dove Medical Press Ltd specializes in the publication of Open Access peer-reviewed journals across the broad spectrum of science, technology and especially medicine. We have offices in Manchester and London in the United Kingdom, representatives in Princeton, New Jersey in the United States, and our editorial offices are in Auckland, New Zealand.'
        },
        {
            img: 'https://taylorandfrancis.com/wp-content/uploads/2024/05/PeerJ-logo.png',
            description: 'Launched in 2012, PeerJ is an award-winning Open Access science publisher, committed to transforming the way research is communicated. By embracing technology, transparency, and equity, we empower researchers to share their discoveries with the world. We have seven fully Open Access journals in biomedical, life, environmental, physical, and computer sciences.'
        },
    ]



    const data2 = [
        {
            img: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/screenshot-tfo.jpg',
            description: 'provides access to more than 2,700 high-quality, cross-disciplinary journals spanning Humanities and Social Sciences, Science and Technology, Engineering, Medicine and Healthcare.',
            link:'TRC Sapphire Publisher Online'
        },
        {
            img: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/screenshot-tfe.jpg',
            description: `is one of the world’s largest collections of eBooks in science, technology, engineering, medicine, humanities and social science.`,
            link:'TRC Sapphire Publisher e-books'
        },
        {
            img: 'https://taylorandfrancis.com/wp-content/uploads/2022/03/f1000-homepage-22.jpg',
            description: '’s open research publishing platforms include F1000Research, Open Research Europe, Wellcome Open Research, Materials Open Research, MedEdPublish, and many more.',
            link:'F1000'
        },
        
       
    ]


    return (
        <div className='lg:mt-48 sm:mt-28 mt-36'>
            <div className='md:container mx-auto px-3'>
                <p className='text-xl'>
                    TRC Sapphire Publisher is one of the world’s leading publishers of scholarly journals, books, eBooks and reference works. We’ve published over 145,000 book titles, publish 8,000 new books each year, actively publish over 2,700 journals, and partner with more than 700 scholarly societies.
                </p>
                <p className='mt-5'>
                    Our publishing spans humanities and social sciences, behavioral sciences, science and technology, engineering, and medicine and healthcare. Built on an academic publishing heritage of over 200 years, our expertise advances trusted knowledge that fosters human progress.</p>
                <p className='mt-5'>As well as TRC Sapphire Publisher, our brands include Routledge, CRC Press, F1000, Dove Medical Press and PeerJ. We’re also proud to be part of Informa PLC, a world leader in business intelligence, academic publishing, knowledge, and events.</p>


                {
                    data.map((item, index) => {
                        return (
                            <div key={index} className='flex flex-col md:flex-row gap-5 md:my-20 my-12'>
                                <div className="md:w-[30%] sm:w-[40%] w-[50%]">
                                    <img className='md:w-[60%]' src={item?.img} alt="" />
                                </div>
                                <div className="md:w-[70%]">
                                    <p>
                                        {item?.description}
                                    </p>
                                </div>
                            </div>
                        )
                    })
                }

                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 my-16'>
                    {
                        data2.map((item, index) => {
                            return (
                                <div key={index} className='flex flex-col gap-y-6 justify-between items-center'>
                                <img className='h-[60%]' src={item?.img} alt="" />
                                <p className='text-center'>
                                    <span className='text-yellow-600 hover:underline hover:cursor-pointer font-semibold text-lg'>{item?.link}</span> {item?.description}
                                </p>
                                <Button className='uppercase !font-normal !text-gray-400' variant={'outline'}>Learn More</Button>
                            </div>
                            )
                        })
                    }
                </div>

            </div>
        </div>
    )
}

export default OurBrands