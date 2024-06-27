import React from 'react'

function AboutCareers() {

    const data = [
        {
            img: 'https://taylorandfrancis.com/wp-content/uploads/2024/05/WTW-Bridge-Image-1.jpg',
            title: '',
            des: 'We are looking for people with a variety of skills to help us grow and transform our internationally respected business. If you want to set the pace in the world of digital publishing, then join us. Read on to find out more about who we are, how we work and what we can offer you.',
            underDes: 'We are proud to be part of Informa PLC, a world leader in business intelligence, academic publishing, knowledge, and events.'
        },
        {
            img: 'https://taylorandfrancis.com/wp-content/uploads/2024/05/Books-Image.jpg',
            title: 'Our company',
            des: 'TRC Sapphire Publisher is one of the world’s leading academic publishers, with offices in 14 countries. We publish in a  wide range of disciplines across the humanities and social sciences, behavioural sciences, engineering, science and technology, medicine, and health. We partner with world-class authors and researchers to bring knowledge to life.',
            underDes: 'As well as TRC Sapphire Publisher, our brands include Routledge, CRC Press, F1000 and Dove Medical Press.'
        },
        {
            img: 'https://taylorandfrancis.com/wp-content/uploads/2024/05/Lamp_27401245-1024x680.jpeg',
            title: 'Our purpose and beliefs',
            des: 'Our purpose is to foster human progress through knowledge. That means that we encourage and respect different ideas, and we stand by four beliefs that guide everything we do: Truth, diversity of thought, individual potential, and human progress.',
            underDes: 'We believe in creating a supportive and inclusive working environment where you can succeed. Whoever you are, there is a place for you at TRC Sapphire Publisher. '
        },
        {
            img: 'https://taylorandfrancis.com/wp-content/uploads/2024/05/image11.png',
            title: 'Our environmental impact',
            des: 'We want our publishing to have a positive impact on society, so our goal is to be a sustainable business. As part of Informa Group:',
            underDesList: [
                'TRC Sapphire Publisher is a certified CarbonNeutral® Company',
                '97% of our offices are powered by renewable energy',
                '100% of our business travel is carbon offset',
                'We are making our journal supply chain plastic-free'
            ]
        },
        {
            img: 'https://taylorandfrancis.com/wp-content/uploads/2024/05/disability.png',
            title: 'Our commitment to diversity, equity and inclusion',
            des: 'As a global business, we are committed to promoting equality, diversity, and equal opportunities at all stages of employment and throughout the recruitment process.',

        },
    ]

    return (
        <div>
            {
                data.map((item, index) => {
                    return (
                        <div key={index} className={`flex lg:flex-row flex-col  mb-12 ${(index + 1) % 2 == 0 && 'lg:flex-row-reverse'} justify-between items-center gap-10`}>
                            <img className={`rounded-[2rem] ${index === 4 && 'rounded-none lg:w-[40%]'} w-full sm:w-[70%] lg:w-[50%]`} src={item?.img} alt="" />
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
                                    item?.underDesList?.map((item, index) => <li key={index}>{item}</li>)
                                }
                            </div>
                        </div>
                    )
                })
            }

            <div className='flex flex-col gap-10 lg:flex-row justify-between bg-gray-100 rounded-3xl p-7'>
                <h1 className='text-3xl w-[50%] text-amber-700'>Recruitment fraud</h1>
                <p className='lg:w-[50%] text-[15px]'>Online fraud is rising, and job seekers can become targets for fraudsters looking to extract personal information or money. We have received reports that members of the public have been contacted about Informa job vacancies by individuals fraudulently posing as Informa recruiters or managers. If a communication about a role seems out of the ordinary, unnecessarily urgent, or too good to be true, be wary. For information and guidance on what to do if you are unsure or have any concerns, please email recruitment@tandf.co.uk</p>
            </div>
        </div>
    )
}

export default AboutCareers;