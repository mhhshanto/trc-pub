import React from 'react'

function WeHire() {

    const data = [
        {
            title: 'Step 1: Online Application',
            des: `Your online application should take around 10 minutes to complete and should include a CV/résumé. Your CV should be no longer than two pages, and provide information about your skills, achievements, education, work history, and role responsibilities.
            Once we receive your application, you will be emailed an automated confirmation. Most of our roles are advertised for a period of two weeks. Our hiring managers continually review applications, so we encourage you to submit your application as soon as you can.`
        },
        {
            title: 'Step 2: Skills Test',
            des: `Skill tests allow us to get a better picture of your suitability for the role. They test areas relevant to the job such as proofreading, numerical comprehension, and verbal reasoning. Each skills test should take no more than 15 minutes, and you will be asked to complete them within 48 hours of receiving the invitation. If you are invited to take a skills test, you will receive an email including full instructions, as well as the opportunity to practice before starting each test.`
        },
        {
            title: 'Step 3: Video Interview',
            des: `Video interviews provide an opportunity for us to learn more about you, your background, and why you believe you’d be a good fit for our team. If selected for a video interview, you will receive an email with a link containing detailed instructions on how to set up, practice, and record your interview. The entire process typically takes around 30 minutes, and you can use either your laptop or smartphone, as long as you have an internet connection and a camera. Upon completion, your video interview will be forwarded to the hiring manager for review.`
        },
        {
            title: 'Step 4: Review',
            des: `At this stage in the process, if you have been successful, the hiring manager will send out invitations to face-to-face interviews. Our email invitations have a self-scheduling tool, so you can choose from a number of available dates. We aim to respond to all candidates one way or the other within two weeks after the vacancy closing date.`
        },
        {
            title: 'Step 5: Interview',
            des: `Your interview will last about an hour, and it will involve two recruiting managers. You will be asked about your work history, and any previous experience that you have included on your CV/résumé. Successful candidates usually provide real-life examples and often use the STAR (Situation, Task, Action, and Result) method to structure their answers, as it is a useful way to communicate important points clearly and concisely.

            During the interview you may also be asked to complete a test which we will let you know about in advance.
            
            We aim to get back to candidates within two weeks of an interview to let you know about the outcome.`
        },
        {
            title: 'Step 6: Offe',
            des: `Congratulations! If you are successful, the hiring manager or a member of our HR team will get in touch with you and offer you the role. All unsuccessful candidates will be notified once the offer has been made.`
        },
        {
            title: 'Step 7: Accept',
            des: `Welcome to the team! When you accept, we will confirm a start date and collect your references. We will also send you a contract of employment telling you all about your new role here with us.`
        },
    ]


    return (
        <div>
            <div className='flex flex-col md:flex-row items-center gap-8'>
                <img className='md:w-[50%] sm:w-[80%] rounded-[2rem]' src="https://taylorandfrancis.com/wp-content/uploads/2024/05/Application-process-image.jpg" alt="" />
                <div className='md:w-[50%]'>
                    <h1 className='text-3xl text-amber-700 font-semibold mb-5'>Our application process</h1>
                    <p>We are a global company, so our recruitment processes vary slightly from country to country. However, they generally follow the same pathway and timeline. Our online application system walks you through the process step-by-step. If you are unsuccessful at any stage, we will notify you by email. <br /> Find out more about our recruitment process: </p>
                </div>
            </div>
            <div className='md:w-[65%]  ml-auto  py-14 border-l-4 pl-10 border-amber-600'>

                {
                    data?.map((item, index) => {
                        return (
                            <div className='relative mt-10' key={index}>
                                <h1 className='md:absolute mb-3 text-xl font-medium top-0 md:-left-80 left-0'>{item?.title}</h1>
                                <p>{item?.des}</p>

                                <div className='w-5 h-5 rounded-full top-1 -left-[52px]  bg-amber-600 absolute flex justify-center items-center'>
                                    <div className='bg-white w-2 h-2 rounded-full'></div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className='bg-gray-100 text-amber-800 p-8 rounded-3xl'>
                <p>Please note that TRC Sapphire Publisher is unable to employ anyone who doesn’t have the right to work in the country in which the job is located.</p>
            </div>
        </div>
    )
}

export default WeHire