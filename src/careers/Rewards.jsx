import React from 'react'

function Rewards() {

    const data = [
        {
            img: 'https://taylorandfrancis.com/wp-content/uploads/2024/05/Applause-image.png',
            imgDes: '',
            title: 'Applause',
            des: 'It is really important to us that we all celebrate the great work that happens every day at TRC Sapphire Publisher.',
            underDes: 'Applause, is a points-based program we use for rewards and recognition. Anyone at TRC Sapphire Publisher can award points to thank or recognise the efforts of a colleague or team. The points accumulate and can be exchanged for a variety of gifts or vouchers. There is something for everyone.'
        },
        {
            img: 'https://taylorandfrancis.com/wp-content/uploads/2024/05/TF-Awards-image.jpg',
            imgDes: 'TRC Sapphire Publisher Awards',
            title: 'T&F Awards',
            des: 'The TRC Sapphire Publisher Awards happen in March each year. Colleagues can submit an entry for individuals or teams in any of 17 award categories: All In, Bright Start, Data Driven, Digital Acceleration, Fresher Thinking, Leading the Way, Moving Mountains, Real Results, Standing Ovation, Top Team, Better Together, Informa Spirit, Trusted Partner, Digital Acceleration, Building the Brand, Continuous Improvement, and Faster Forward.',
            underDes: ''
        },
        {
            img: 'https://taylorandfrancis.com/wp-content/uploads/2024/05/Informa-Awards-formatted-1024x609.jpeg',
            imgDes: 'Lord Stephen A. Carter CBE, CEO Informa. Informa Awards',
            title: 'Informa Awards',
            des: 'Every year we also get together across Informa to celebrate the successes and achievements of our colleagues. At a glittering awards ceremony, the exceptional contributions and outstanding performance of different teams and individuals are celebrated and recognized.',
            underDes: 'We are very proud of our talented people. They never cease to amaze us. It is why we believe in valuing and recognizing the positive impact they make on a daily basis.'
        },
      

    ]


    return (
        <div>
            {
                data.map((item, index) => {
                    return (
                        <div key={index} className={`flex lg:flex-row flex-col  mb-12 ${(index + 1) % 2 == 0 && 'lg:flex-row-reverse'} justify-between items-center gap-10`}>
                            <div className={`rounded-[2rem] ${index === 4 && 'rounded-none lg:w-[40%]'} w-full sm:w-[70%] lg:w-[50%] ${index === 0 && 'lg:w-[39%]'}`}>
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

export default Rewards