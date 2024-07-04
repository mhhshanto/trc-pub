import React from 'react'
import './knowledge.css'

function UnderKnowledge() {

    const data1 = [
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image24-150x150.png',
            title: 'Bioscience'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image25-150x150.png',
            title: 'Chemistry'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image26-150x150.png',
            title: 'Computer & Information Sciences'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image27-150x150.png',
            title: 'Earth Sciences'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image28-150x150.png',
            title: 'Environment & Agriculture'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image29-150x150.png',
            title: 'Environment & Sustainability'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image30-150x150.png',
            title: 'Environmental Sciences'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image31-150x150.png',
            title: 'Food Science & Technology'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image32-150x150.png',
            title: 'Information Science'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image33-150x150.png',
            title: 'Mathematics'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image34-150x150.png',
            title: 'Physical Sciences'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image35-150x150.png',
            title: 'Statistics'
        },
    ];
    

    const data3 = [
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2023/10/Addiction-and-treatment-icon-150x150.png',
            title: 'Addiction & Treatment'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image44-150x150.png',
            title: 'Allied Health'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2021/04/icon-anesthesiology.png',
            title: 'Anesthesiology'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/noun_Left-Brain-Activity_281814-150x150.png',
            title: 'Behavioral Health and Medicine'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2021/04/icon-cardiology.png',
            title: 'Cardiology'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image47-150x150.png',
            title: 'Clinical Medicine'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image45-150x150.png',
            title: 'Dentistry'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/12/icon-dermatology-3349890-150x150.png',
            title: 'Dermatology'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/11/icon-metabolism.png',
            title: 'Endocrinology'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/expert-icon-150x150.png',
            title: 'Expert Collection'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/06/Hematology.png',
            title: 'Hematology'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/noun_Hospital_1658509-150x150.png',
            title: 'Hospitals and Health Systems'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/06/Immunology-icon.png',
            title: 'Immunology'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2021/04/icon-infectious-diseases-150x150.png',
            title: 'Infectious Diseases'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2023/01/icon-Nephrology-150x150.png',
            title: 'Nephrology'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2021/01/icpon-neurology-150x150.png',
            title: 'Neurology'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image48-150x150.png',
            title: 'Nursing'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/Oncology-150x150.png',
            title: 'Oncology'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2021/05/icon-pediatrics-2.png',
            title: 'Pediatrics'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image46-150x150.png',
            title: 'Pharmaceutical Sciences'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2021/01/icon-psychiatry-150x150.png',
            title: 'Psychiatry'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/06/public-health-icon.png',
            title: 'Public Health'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2021/01/icon-radiology-150x150.png',
            title: 'Radiology'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2023/10/Substance-Use-Misuse-icon.png',
            title: 'Substance Use & Misuse'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/noun_Surgery_1827537-150x150.png',
            title: 'Surgery'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2023/02/icon-urology-150x150.png',
            title: 'Urology'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/noun_Track_987393-150x150.png',
            title: 'Veterinary Medicine'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/womens_health-150x150.png',
            title: 'Women’s Health'
        },
        
    ];
    

    const data2 = [
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image2-150x150.png',
            title: 'Area Studies'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image3-e1619457963424-150x150.png',
            title: 'Arts'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image4-150x150.png',
            title: 'Behavioural Sciences'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image5-150x150.png',
            title: 'Built Environment'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image6-150x150.png',
            title: 'Business & Management'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image7-150x150.png',
            title: 'Communication Studies'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image9-150x150.png',
            title: 'Economics'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image10.png',
            title: 'Education'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image11-150x150.png',
            title: 'Finance'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image12-150x150.png',
            title: 'Geography'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image8-150x150.png',
            title: 'Global Development'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2021/01/icon-history-150x150.png',
            title: 'History'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/10/humanity-150x150-1-150x150.png',
            title: 'Humanities and Social Sciences'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image14-150x150.png',
            title: 'International Relations'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image15-150x150.png',
            title: 'Language'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image16-150x150.png',
            title: 'Law'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image17-150x150.png',
            title: 'Literature'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image18-150x150.png',
            title: 'Museum and Heritage Studies'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/06/icon-Philosophy.png',
            title: 'Philosophy'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image19-150x150.png',
            title: 'Politics'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image20-150x150.png',
            title: 'Psychology'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image21-150x150.png',
            title: 'Religion'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2021/01/icon-routledge-encyclopedia-of-modernism-150x150.png',
            title: 'Routledge Encyclopedia of Modernism'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2021/01/icon-routledge-handbooks-online-150x150.png',
            title: 'Routledge Handbooks Online'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2021/04/icon-sociology-150x150.png',
            title: 'Sociology'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image22-150x150.png',
            title: 'Tourism, Hospitality and Events'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image23-150x150.png',
            title: 'Urban Studies'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2021/01/icon-world-whos-who-150x150.png',
            title: `World Who's Who`
        },
       
    ];
    

    const data4 = [
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/11/icon-automotive-engineering.png',
            title: 'Automotive Engineering'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2023/11/icon-Biomedical-Engineering-150x150.png',
            title: 'Biomedical Engineering'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image36-150x150.png',
            title: 'Chemical Engineering'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image37-150x150.png',
            title: 'Civil Engineering'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image38-150x150.png',
            title: 'Electrical Engineering'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/11/icon-energy-oil-150x150.png',
            title: 'Energy & Oil'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2024/01/icon-computing-150x150.png',
            title: 'Engineering, Computing & Technology'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image39-150x150.png',
            title: 'Environmental Engineering'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image40-150x150.png',
            title: 'General Engineering'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image41-150x150.png',
            title: 'Industrial & Manufacturing Engineering'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/11/icon-Material-Science-Engineering-150x150.png',
            title: 'Materials Science & Engineering'
        },
        
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image42-150x150.png',
            title: 'Mechanical Engineering'
        },
        
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image43-150x150.png',
            title: 'Mining Engineering'
        },
        
    ]

    return (
        <div className='md:px-10 px-5'>
            <p className='text-center text-amber-700 mb-12 mt-8'>Click on any of the categories below to explore available publications within a particular discipline:</p>

            <div className='grid lg:grid-cols-2 grid-cols-1 gap-8 mb-20'>
                <div className='flex flex-col gap-8'>
                    <div className='bg-slate-200 h-fit  py-6'>
                        <h1 className='text-center border-gray-300 text-2xl border-b pb-5 text-amber-700'>Science & Technology</h1>

                        <div className='px-5  pt-5 flex justify-center flex-wrap  gap-3'>
                            {
                                data1.map((item, index) => {
                                    return (
                                        <div key={index} className='p-4 flex flex-col 2xl:w-[15.3%] xl:w-[22%] lg:w-[26%] md:w-[18%] sm:w-[23%] w-[47%] justify-center hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition duration-300 items-center gap-1 bg-slate-50 border border-gray-300 group'>
                                            <img className='aspect-square knowledgeImg w-12 transition duration-300' src={item?.iconImg} alt="" />
                                            <p className='font-medium text-sm text-center group-hover:text-black text-gray-500'>{item?.title}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>

                    <div className='bg-slate-200 h-fit  py-6'>
                        <h1 className='text-center border-gray-300 text-2xl border-b pb-5 text-amber-700'>Humanities & Social Sciences</h1>

                        <div className='px-5  pt-5 flex flex-wrap justify-center  gap-3'>
                            {
                                data2.map((item, index) => {
                                    return (
                                        <div key={index} className='p-4 flex 2xl:w-[15.3%] xl:w-[22%] lg:w-[26%] md:w-[18%] sm:w-[23%] w-[47%] flex-col justify-center hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition duration-300 items-center gap-1 bg-slate-50 border border-gray-300 group'>
                                            <img className='aspect-square knowledgeImg w-12 transition duration-300' src={item?.iconImg} alt="" />
                                            <p className='font-medium text-sm text-center group-hover:text-black text-gray-500'>{item?.title}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>

                <div className='flex flex-col gap-8'>
                    <div className='bg-slate-200 h-fit  py-6'>
                        <h1 className='text-center border-gray-300 text-2xl border-b pb-5 text-amber-700'>Medicine & Healthcare </h1>

                        <div className='px-5 justify-center pt-5 flex flex-wrap gap-3'>
                            {
                                data3.map((item, index) => {
                                    return (
                                        <div key={index} className='p-4 2xl:w-[15.3%] xl:w-[22%] lg:w-[26%] md:w-[18%] sm:w-[23%] w-[47%] flex flex-col justify-center hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition duration-300 items-center gap-1 bg-slate-50 border border-gray-300 group'>
                                            <img className='aspect-square knowledgeImg w-12 transition duration-300' src={item?.iconImg} alt="" />
                                            <p className='font-medium text-sm text-center group-hover:text-black text-gray-500'>{item?.title}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>

                    <div className='bg-slate-200 h-fit  py-6'>
                        <h1 className='text-center border-gray-300 text-2xl border-b pb-5 text-amber-700'>Engineering</h1>

                        <div className='px-5  pt-5 flex flex-wrap justify-center  gap-3'>
                            {
                                data4.map((item, index) => {
                                    return (
                                        <div key={index} className='p-4 flex 2xl:w-[15.3%] xl:w-[22%] lg:w-[26%] md:w-[18%] sm:w-[23%] w-[47%] flex-col justify-center hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition duration-300 items-center gap-1 bg-slate-50 border border-gray-300 group'>
                                            <img className='aspect-square knowledgeImg w-12 transition duration-300' src={item?.iconImg} alt="" />
                                            <p className='font-medium text-sm text-center group-hover:text-black text-gray-500'>{item?.title}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UnderKnowledge