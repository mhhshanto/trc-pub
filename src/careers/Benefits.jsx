import React from 'react'

function Benefits() {

    const data = [
        {
            img: 'https://taylorandfrancis.com/wp-content/uploads/2024/05/Annual-leave-image.jpg',
            imgDes: 'TRC Sapphire Publisher colleague on holiday in Spain',
            title: 'Paid Annual Leave',
            des: 'We provide all of our colleagues with generous paid leave to spend time away from work. The amount given will be based on where you are in the world and will be confirmed in the advertisement for the role you apply for. All colleagues also get an extra day of leave to celebrate their birthday each year.',
            underDes: 'In many of our locations around the globe, we offer other types of leave to support colleagues with different situations, such as their health, and family and life-related events.'
        },
        {
            img: 'https://taylorandfrancis.com/wp-content/uploads/2024/05/Health-Wellbeing-image.jpg',
            imgDes:'Raising money for our communities at the annual All Informa Walk the World events',
            title: 'Health and wellbeing benefits',
            des: 'In many countries, benefit selections include health related benefits, insurances, and gym and sports memberships. All colleagues, globally, have access to:',
            underDesList: [
                'The Employee Assistance Programme, which offers you free and confidential wellbeing support, counselling services and personal advice',
                'Our online Wellbeing Resources hub includes resources and free access to some well-known wellbeing apps',
                '100% of our business travel is carbon offset',
                'Our Informa Anywhere policy, which gives you the option to work from nearly anywhere in the world for up to four weeks per year'
            ]
        },
        {
            img: 'https://taylorandfrancis.com/wp-content/uploads/2024/05/WTW-Bridge-Image-1.jpg',
            imgDes: 'Baby’s first visit to the office',
            title: 'Balanced Working',
            des: 'We understand the importance of work/life balance. Depending on your role at TRC Sapphire Publisher, we work with you to find the right balance of working types. ',
            underDes: 'Colleagues will mainly be balanced workers. This means you share your time between an office base and working from home. Some people may be predominantly based at home, and others at the office. The balance and requirements for travel and office working will be discussed with you as part of the recruitment process. '
        },
        {
            img: 'https://taylorandfrancis.com/wp-content/uploads/2024/05/Volunteering-image-formatted.jpeg',
            imgDes: 'TRC Sapphire Publisher colleagues on a volunteering day, there was cake…',
            title: 'Balanced Working',
            des: 'All colleagues receive four paid volunteer days a year, to actively support the communities we live in. It is a great way to develop your skills, work with other colleagues, and have a lasting impact on your community at the same time. Colleagues often say they feel re-energized when they return to work and have learned new things.',
            underDes: ''
        },
        {
            img: 'https://taylorandfrancis.com/wp-content/uploads/2024/05/Sharematch-image.jpg',
            imgDes: '',
            title: 'Share Match',
            des: 'In most of our global locations, colleagues have the opportunity to participate in Informa’s future success by investing in the company. Aspects of the scheme do vary by location, but in general, shares purchased by colleagues (Partnership Shares) are owned by them immediately. Informa adds to the investment, at the time of purchase, by giving any colleague who buys shares free (Matching) shares. The matching shares are held in a trust, and owned after a period of time.',
            underDes: ''
        },
        {
            img: 'https://taylorandfrancis.com/wp-content/uploads/2024/05/Country-specific-benefits-image-formatted.jpg',
            imgDes: 'Walk the World, India',
            title: 'Country-specific benefits',
            des: 'In addition to the benefits described here, each country has local benefits, discounts, and support for colleagues.',
            underDes: 'Country specific benefits are designed to be relevant to that location. For example, in the UK, all colleagues are automatically entitled to Life Assurance from the day they join. They also enjoy favorable rates on financial advice, season ticket loans to help with train fares, and discounts at coffee shops, restaurants, cinemas, and other brands via our employee portal.  '
        },
        
    ]


    return (
        <div>
            {
                data.map((item, index) => {
                    return (
                        <div key={index} className={`flex lg:flex-row flex-col  mb-12 ${(index + 1) % 2 == 0 && 'lg:flex-row-reverse'} justify-between items-center gap-10`}>
                            <div className={`rounded-[2rem] ${index === 4 && 'rounded-none lg:w-[40%]'} w-full sm:w-[70%] lg:w-[50%]`}>
                                <img className='w-full rounded-[2rem]' src={item?.img} alt="" />
                                <p className='text-blue-950 ml-5'>{item?.imgDes}</p>
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
                                    item?.underDesList?.map((item, index) => <li key={index}>{item}</li>)
                                }
                            </div>
                        </div>
                    )
                })
            }


        </div>
    )
}

export default Benefits