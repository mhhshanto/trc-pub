import React from 'react'
import { BiSolidQuoteAltRight } from "react-icons/bi";
import { BiSolidQuoteAltLeft } from "react-icons/bi";

function LearnAndDev() {

    const data = [
        {
            img: 'https://taylorandfrancis.com/wp-content/uploads/2024/05/LD-Image-1.jpg',
            imgDes: 'Apprentice Day, London, UK',
            title: '',
            des: 'We have a real passion for development, because talented people drive our success.  This means that learning opportunities can be found, not just through training courses, but also through the variety of different projects you will be involved in day-to-day.',
            underDes: 'TRC Sapphire Publisher is a great place for you to learn and develop your career. We have an excellent track record of supporting personal and professional growth.  For us, development is a two-way partnership, and we are committed to helping you take ownership of your career development.'
        },
        {
            img: 'https://taylorandfrancis.com/wp-content/uploads/2024/05/LD-Image-2.jpg',
            imgDes: 'Speed Networking event, Oxford, UK',
            title: 'Our career development resources and opportunities:',
            des: '',
            underDesList: [
                'Online resource hubs – such as our ‘Career Development at T&F’ intranet page ',
                'Live workshops – including ‘Career Pathways at T&F’, and our ‘Early Career Success: Building Your Future’ learning pathway',
                'Global Mentoring Program',
                'Internal Coaching Team'
            ]
        },
        {
            img: 'https://taylorandfrancis.com/wp-content/uploads/2024/05/LD-Image-3.jpg',
            imgDes: 'TRC Sapphire Publisher Apprentice Day, UK',
            title: 'Our management training',
            des: 'Our management training is tailored to the needs of new, middle and senior managers.',
            underDes: 'Our ‘New Management Development Journey’ is a comprehensive, fully digital development program for current and aspiring managers. Colleagues can access self-paced content from live sessions and share learning experiences with peers.  There is an emphasis on ‘blended learning’ to enhance the experience.'
        },
        {
            img: '',
            imgTitle: 'Amazing, one of the best sessions ever!',
            imgDes: '',
            title: 'What colleagues say about our courses: ',
            des: '“The best experience of my professional life. I learned so much, met amazing people… Not a week goes by when something I learned through the experience doesn’t pop into my head to help me solve a difficult challenge or simply be more effective in my role.”',
            underDes: '“I found the day really fun, interesting, and helpful. Thank you for the encouragement.”'
        },
        {
            img: '',
            imgDes: '',
            imgTitle: 'The steps were fantastic and immediately useful.',
            underDesList: [
                '“I found the course really beneficial – it was pitched at the right level and at the right pace.”',
                '“I really enjoyed it. Already identifying projects I am running next year that can use it.”',
                '“I got a lot out of the course and fully intend to put the principles into practice.”'
            ]

        },
    ]



    return (
        <div>
            {
                data.map((item, index) => {
                    return (
                        <div key={index} className={`flex lg:flex-row flex-col  mb-12 ${(index + 1) % 2 == 0 && 'lg:flex-row-reverse'} justify-between items-center gap-10`}>
                            <div className={`rounded-[2rem] ${index === 4 && 'rounded-none lg:w-[40%]'} w-full sm:w-[70%] lg:w-[50%]`}>
                                {
                                    item.img ?
                                        <div className='w-full'>
                                            <img className='w-full rounded-[2rem]' src={item?.img} alt="" />
                                            <p className='text-blue-950 ml-5'>{item?.imgDes}</p>
                                        </div> :
                                        <div className='w-full flex gap-y-2 justify-self-center items-center flex-col md:px-20 px-3'>
                                            <BiSolidQuoteAltLeft className='md:text-5xl text-3xl text-amber-700' />
                                            <h1 className='md:text-[2.55rem] text-3xl font-semibold text-center text-amber-700'>{item?.imgTitle}</h1>
                                            <BiSolidQuoteAltRight className='md:text-5xl text-3xl text-amber-700' />
                                        </div>
                                }
                            </div>
                            <div className='lg:w-[50%] sm:w-[80%] w-full'>
                                <h1 className='text-3xl font-medium text-amber-600'>
                                    {item?.title}
                                </h1>
                                <p className='mb-3 mt-5'>
                                    {item?.des}
                                </p>
                                <p>
                                    {item?.underDes}
                                </p>
                                {
                                    item?.underDesList?.map((listItem, listIndex) => <li className={`${index == 4 && 'list-none my-3'}`} key={listIndex}>{listItem}</li>)
                                }
                            </div>
                        </div>
                    )
                })
            }


        </div>
    )
}

export default LearnAndDev