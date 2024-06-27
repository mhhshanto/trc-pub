import React from 'react'

function Diversity() {

    const data = [
        {
            img: 'https://taylorandfrancis.com/wp-content/uploads/2024/05/Stacy-Scott-image-quote-formatted-1024x745.jpg',
            title: '',
            underDesList: [
                'At TRC Sapphire Publisher, we know that diversity is a strength that drives our purpose and our success. We work hard to make sure that TRC Sapphire Publisher is a place where we welcome everyone and value difference.',

                'This means we are committed to the provision of equal access to opportunity throughout the recruitment process, and at all stages of your career.',

            ]
        },
        {
            img: 'https://i.ytimg.com/vi/usiKJsoSqxM/sddefault.jpg',
            title: 'How we hire the best talent.',
            underDesList: [
                'At TRC Sapphire Publisher we want to hire, support, and develop the best talent across all communities. We are working hard to identify and remove barriers to inclusion, and we know there is still more to do.',

                'We want candidates from all backgrounds to consider applying for jobs at TRC Sapphire Publisher To achieve this we know our recruitment process must reflect this intention and be free of any barriers. We welcome any feedback on our approach. (Please contact dei@taylorandfrancis.com)',

                'Watch the video to find out about the steps we take to attract and hire diverse candidates, and why DE&I is important to us.',

            ]
        },
        {
            img: 'https://taylorandfrancis.com/wp-content/uploads/2024/05/disability.png',
            title: 'How we support our people',
            underDesList: [
                'Our Diversity and Inclusion Policy is set out by Informa (our parent company). T&F policies and guidance also bring clarity to important issues in the workplace.',

                'For example, if our work environment is not accessible, we work to provide a clear process for adaptations. Our balanced working guidance also helps colleagues to understand how we support a fair and flexible work life.',

                'Every year Informa publishes a UK Pay Report. This is in accordance with UK Government gender pay reporting.',

            ]
        },
        {
            img: 'https://taylorandfrancis.com/wp-content/uploads/2024/05/DE-I-Umbrellas-image-1-1024x638.jpeg',
            title: 'How we promote inclusion in the workplace',
            underDesList: [
                'We know that every colleague has a role to play in making our community thrive through being more diverse and inclusive. There are many change initiatives underway at TRC Sapphire Publisher. We organize this work in 3 ways:',

                'Our DE&I Council aligns goals across the different business areas and regions. The Council is sponsored by two members of our Executive Leadership Team.',

                'Our DE&I and Accessibility teams are in place to partner with the business in pursuit of our DE&I strategic goals.',

                'Our Colleague Resource Groups (or CRGs) offer support, a place to share experiences and the chance to raise awareness of important issues.',

            ]
        },

    ]

    return (
        <div>
            {
                data.map((item, index) => {
                    return (
                        <div key={index} className={`flex lg:flex-row flex-col  mb-12 ${(index + 1) % 2 == 0 && 'lg:flex-row-reverse'} justify-between items-center gap-10`}>

                            <img className={` ${index === 2 ? 'rounded-none lg:w-[40%]' : 'rounded-[2rem] lg:w-[50%]'} w-full sm:w-[70%] `} src={item?.img} alt="" />


                            <div className='lg:w-[50%] sm:w-[80%] w-full'>
                                <h1 className='text-3xl mb-5 font-medium text-amber-600'>
                                    {item?.title}
                                </h1>
                                {
                                    item?.underDesList?.map((itemList, indexList) => <p className='my-3' key={indexList}>{itemList}</p>)
                                }
                            </div>
                        </div>
                    )
                })
            }

            <div>
                <div className='lg:w-[50%] sm:w-[80%] w-full'>
                    <h1 className='text-3xl mb-5 font-medium text-amber-600'>
                        Our colleague resource groups
                    </h1>
                    <p className='my-3'>We have a wide range of resource groups. Colleagues can be part of any depending on their interest.</p>

                </div>

                <div className='flex justify-between lg:flex-row flex-col gap-10  mt-5'>
                    <div className='lg:w-[50%] sm:w-[80%] w-full'>
                        <h1 className='mb-2 font-medium text-amber-600'>
                            Our colleague resource groups
                        </h1>
                        <li>AllInforma Balance – gender balance.</li>
                        <li>AllInforma iCan – growing and developing careers.</li>
                        <li>AllInforma Illuminate – colleagues with disabilities and conditions.</li>
                        <li>AllInforma Nations – ethnic minorities and multi culturalism.</li>
                        <li>AllInforma Rainbow – supports members of the LGBTQIA+ community.</li>
                        <li>AllInforma Serve – supports colleagues with connection to military service.</li>

                    </div>
                    <div className='lg:w-[50%] sm:w-[80%] w-full'>
                        <h1 className='mb-2 font-medium text-amber-600'>
                            TRC Sapphire Publisher DE&I Network Groups
                        </h1>
                        <li>Accessibility, Disability & Neurodiversity</li>
                        <li>Community Impact Committees and Champions network</li>
                        <li>Cross-Cultural Inclusion & Global Working</li>
                        <li>Gender Equity</li>
                        <li>Mental Health and Well-Being</li>
                        <li>Parents and Caregivers in the Workplace</li>
                        <li>Race and Ethnicity</li>
                        <li>Women in Publishing</li>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Diversity