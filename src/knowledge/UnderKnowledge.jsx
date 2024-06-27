import React from 'react'
import './knowledge.css'

function UnderKnowledge() {

    const data1 = [
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image28-150x150.png',
            title: 'Artificial Intelligence'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image28-150x150.png',
            title: 'Quantum Computing'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image28-150x150.png',
            title: 'Renewable Energy'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image28-150x150.png',
            title: 'Nanotechnology'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image28-150x150.png',
            title: 'Robotics'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image28-150x150.png',
            title: 'Biotechnology'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image28-150x150.png',
            title: 'Cybersecurity'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image28-150x150.png',
            title: 'Space Exploration'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image28-150x150.png',
            title: 'Climate Science'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image28-150x150.png',
            title: 'Medical Technology'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image28-150x150.png',
            title: 'Internet of Things (IoT)'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image28-150x150.png',
            title: '3D Printing'
        }
    ];
    

    const data3 = [
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image28-150x150.png',
            title: 'Cardiology'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image28-150x150.png',
            title: 'Neurology'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image28-150x150.png',
            title: 'Pediatrics'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image28-150x150.png',
            title: 'Oncology'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image28-150x150.png',
            title: 'Dermatology'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image28-150x150.png',
            title: 'Gastroenterology'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image28-150x150.png',
            title: 'Orthopedics'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image28-150x150.png',
            title: 'Psychiatry'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image28-150x150.png',
            title: 'Pulmonology'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image28-150x150.png',
            title: 'Endocrinology'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image28-150x150.png',
            title: 'Nephrology'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image28-150x150.png',
            title: 'Rheumatology'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image28-150x150.png',
            title: 'Hematology'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image28-150x150.png',
            title: 'Urology'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image28-150x150.png',
            title: 'Ophthalmology'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image28-150x150.png',
            title: 'Pathology'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image28-150x150.png',
            title: 'Radiology'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image28-150x150.png',
            title: 'Immunology'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image28-150x150.png',
            title: 'Anesthesiology'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image28-150x150.png',
            title: 'Emergency Medicine'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image28-150x150.png',
            title: 'General Practice'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image28-150x150.png',
            title: 'Internal Medicine'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image28-150x150.png',
            title: 'Family Medicine'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image28-150x150.png',
            title: 'Occupational Medicine'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image28-150x150.png',
            title: 'Sports Medicine'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image28-150x150.png',
            title: 'Geriatrics'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image28-150x150.png',
            title: 'Reproductive Medicine'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image28-150x150.png',
            title: 'Palliative Care'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image28-150x150.png',
            title: 'Infectious Disease'
        }
    ];
    

    const data2 = [
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image28-150x150.png',
            title: 'Anthropology'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image28-150x150.png',
            title: 'Archaeology'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image28-150x150.png',
            title: 'Economics'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image28-150x150.png',
            title: 'Education'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image28-150x150.png',
            title: 'Geography'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image28-150x150.png',
            title: 'History'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image28-150x150.png',
            title: 'Law'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image28-150x150.png',
            title: 'Linguistics'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image28-150x150.png',
            title: 'Literature'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image28-150x150.png',
            title: 'Philosophy'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image28-150x150.png',
            title: 'Political Science'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image28-150x150.png',
            title: 'Psychology'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image28-150x150.png',
            title: 'Sociology'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image28-150x150.png',
            title: 'Theology'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image28-150x150.png',
            title: 'Gender Studies'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image28-150x150.png',
            title: 'Cultural Studies'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image28-150x150.png',
            title: 'Ethnic Studies'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image28-150x150.png',
            title: 'International Relations'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image28-150x150.png',
            title: 'Media Studies'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image28-150x150.png',
            title: 'Public Administration'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image28-150x150.png',
            title: 'Social Work'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image28-150x150.png',
            title: 'Urban Studies'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image28-150x150.png',
            title: 'Criminology'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image28-150x150.png',
            title: 'Development Studies'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image28-150x150.png',
            title: 'Human Geography'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image28-150x150.png',
            title: 'Social Anthropology'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image28-150x150.png',
            title: 'Environmental Studies'
        }
    ];
    

    const data4 = [
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image28-150x150.png',
            title: 'Science & Technology'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image28-150x150.png',
            title: 'Science & Technology'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image28-150x150.png',
            title: 'Science & Technology'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image28-150x150.png',
            title: 'Science & Technology'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image28-150x150.png',
            title: 'Science & Technology'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image28-150x150.png',
            title: 'Science & Technology'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image28-150x150.png',
            title: 'Science & Technology'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image28-150x150.png',
            title: 'Science & Technology'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image28-150x150.png',
            title: 'Science & Technology'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image28-150x150.png',
            title: 'Science & Technology'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image28-150x150.png',
            title: 'Science & Technology'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image28-150x150.png',
            title: 'Science & Technology'
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