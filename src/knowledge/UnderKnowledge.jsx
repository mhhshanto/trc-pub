import React from 'react'
import { Link } from 'react-router-dom';
import './knowledge.css'
import iconImg from '../../public/fromImgBB/images-1-removebg-preview.png'

function UnderKnowledge() {

    const data1 = [
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image24-150x150.png',
            title: 'Bioscience',
            link:'/knowledge/bioscience'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image25-150x150.png',
            title: 'Chemistry',
            link:'/knowledge/chemistry'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image26-150x150.png',
            title: 'Computer & Information Sciences',
            link:'/knowledge/Computer-Information-Sciences'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image27-150x150.png',
            title: 'Earth Sciences',
            link:'/knowledge/earth-sciences'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image28-150x150.png',
            title: 'Environment & Agriculture',
            link:'/knowledge/Environment-Agriculture'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image29-150x150.png',
            title: 'Environment & Sustainability',
            link:'/knowledge/Environment-Sustainability'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image30-150x150.png',
            title: 'Environmental Sciences',
            link:'/knowledge/Environmental-Sciences'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image31-150x150.png',
            title: 'Food Science & Technology',
            link:'/knowledge/Food-Science-Technology'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image32-150x150.png',
            title: 'Information Science',
            link:'/knowledge/Information-Science'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image33-150x150.png',
            title: 'Mathematics',
            link:'/knowledge/Mathematics'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image34-150x150.png',
            title: 'Physical Sciences',
            link:'/knowledge/Physical-Sciences'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image35-150x150.png',
            title: 'Statistics',
            link:'/knowledge/Statistics'
        },
    ];
    

    const data3 = [
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2023/10/Addiction-and-treatment-icon-150x150.png',
            title: 'Addiction & Treatment',
            link:'/knowledge/Addiction-Treatment'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image44-150x150.png',
            title: 'Allied Health',
            link:'/knowledge/Allied-Health'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2021/04/icon-anesthesiology.png',
            title: 'Anesthesiology',
            link:'/knowledge/Anesthesiology'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/noun_Left-Brain-Activity_281814-150x150.png',
            title: 'Behavioral Health and Medicine',
            link:'/knowledge/Behavioral-Health-Medicine'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2021/04/icon-cardiology.png',
            title: 'Cardiology',
            link:'/knowledge/Cardiology'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image47-150x150.png',
            title: 'Clinical Medicine',
            link:'/knowledge/Clinical-Medicine'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image45-150x150.png',
            title: 'Dentistry',
            link:'/knowledge/Dentistry'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/12/icon-dermatology-3349890-150x150.png',
            title: 'Dermatology',
            link:'/knowledge/Dermatology'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/11/icon-metabolism.png',
            title: 'Endocrinology',
            link:'/knowledge/Endocrinology'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/expert-icon-150x150.png',
            title: 'Expert Collection',
            link:'/knowledge/Expert-Collection'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/06/Hematology.png',
            title: 'Hematology',
            link:'/knowledge/Hematology'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/noun_Hospital_1658509-150x150.png',
            title: 'Hospitals and Health Systems',
            link:'/knowledge/Hospitals-Health-Systems'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/06/Immunology-icon.png',
            title: 'Immunology',
            link:'/knowledge/Immunology'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2021/04/icon-infectious-diseases-150x150.png',
            title: 'Infectious Diseases',
            link:'/knowledge/Infectious-Diseases'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2023/01/icon-Nephrology-150x150.png',
            title: 'Nephrology',
            link:'/knowledge/Nephrology'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2021/01/icpon-neurology-150x150.png',
            title: 'Neurology',
            link:'/knowledge/Neurology'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image48-150x150.png',
            title: 'Nursing',
            link:'/knowledge/Nursing'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/Oncology-150x150.png',
            title: 'Oncology',
            link:'/knowledge/Oncology'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2021/05/icon-pediatrics-2.png',
            title: 'Pediatrics',
            link:'/knowledge/Pediatrics'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image46-150x150.png',
            title: 'Pharmaceutical Sciences',
            link:'/knowledge/Pharmaceutical-Sciences'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2021/01/icon-psychiatry-150x150.png',
            title: 'Psychiatry',
            link:'/knowledge/Psychiatry'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/06/public-health-icon.png',
            title: 'Public Health',
            link:'/knowledge/Public-Health'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2021/01/icon-radiology-150x150.png',
            title: 'Radiology',
            link:'/knowledge/Radiology'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2023/10/Substance-Use-Misuse-icon.png',
            title: 'Substance Use & Misuse',
            link:'/knowledge/Substance-Use-Misuse'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/noun_Surgery_1827537-150x150.png',
            title: 'Surgery',
            link:'/knowledge/Surgery'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2023/02/icon-urology-150x150.png',
            title: 'Urology',
            link:'/knowledge/Urology'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/noun_Track_987393-150x150.png',
            title: 'Veterinary Medicine',
            link:'/knowledge/Veterinary-Medicine'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/womens_health-150x150.png',
            title: 'Women’s Health',
            link:'/knowledge/Women-Health'
        },
        
    ];
    

    const data2 = [
        {
            iconImg: iconImg,
            title: 'Area Studies',
            link:'/knowledge/Area-Studies'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image3-e1619457963424-150x150.png',
            title: 'Arts',
            link:'/knowledge/Arts'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image4-150x150.png',
            title: 'Behavioural Sciences',
            link:'/knowledge/Behavioural-Sciences'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image5-150x150.png',
            title: 'Built Environment',
            link:'/knowledge/Built-Environment'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image6-150x150.png',
            title: 'Business & Management',
            link:'/knowledge/Business-Management'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image7-150x150.png',
            title: 'Communication Studies',
            link:'/knowledge/Communication-Studies'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image9-150x150.png',
            title: 'Economics',
            link:'/knowledge/Economics'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image10.png',
            title: 'Education',
            link:'/knowledge/Education'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image11-150x150.png',
            title: 'Finance',
            link:'/knowledge/Finance'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image12-150x150.png',
            title: 'Geography',
            link:'/knowledge/Geography'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image8-150x150.png',
            title: 'Global Development',
            link:'/knowledge/Global-Development'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2021/01/icon-history-150x150.png',
            title: 'History',
            link:'/knowledge/History'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/10/humanity-150x150-1-150x150.png',
            title: 'Humanities and Social Sciences',
            link:'/knowledge/Humanities-Social-Sciences'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image14-150x150.png',
            title: 'International Relations',
            link:'/knowledge/International-Relations'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image15-150x150.png',
            title: 'Language',
            link:'/knowledge/Language'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image16-150x150.png',
            title: 'Law',
            link:'/knowledge/Law'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image17-150x150.png',
            title: 'Literature',
            link:'/knowledge/Literature'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image18-150x150.png',
            title: 'Museum and Heritage Studies',
            link:'/knowledge/Museum-Heritage'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/06/icon-Philosophy.png',
            title: 'Philosophy',
            link:'/knowledge/Philosophy'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image19-150x150.png',
            title: 'Politics',
            link:'/knowledge/Politics'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image20-150x150.png',
            title: 'Psychology',
            link:'/knowledge/Psychology'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image21-150x150.png',
            title: 'Religion',
            link:'/knowledge/Religion'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2021/04/icon-sociology-150x150.png',
            title: 'Sociology',
            link:'/knowledge/Sociology'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image22-150x150.png',
            title: 'Tourism, Hospitality and Events',
            link:'/knowledge/Tourism-Hospitality-Events'
        },
        {
            iconImg: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/image23-150x150.png',
            title: 'Urban Studies',
            link:'/knowledge/Urban-Studies'
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
                                        <Link to={item?.link} key={index} className='p-4 flex flex-col 2xl:w-[15.3%] xl:w-[22%] lg:w-[26%] md:w-[18%] sm:w-[23%] w-[47%] justify-center hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition duration-300 items-center gap-1 bg-slate-50 border border-gray-300 group'>
                                            <img className='aspect-square knowledgeImg w-12 transition duration-300' src={item?.iconImg} alt="" />
                                            <p className='font-medium text-sm text-center group-hover:text-black text-gray-500'>{item?.title}</p>
                                        </Link>
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
                                        <Link to={item?.link} key={index} className='p-4 flex 2xl:w-[15.3%] xl:w-[22%] lg:w-[26%] md:w-[18%] sm:w-[23%] w-[47%] flex-col justify-center hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition duration-300 items-center gap-1 bg-slate-50 border border-gray-300 group'>
                                            <img className='aspect-square knowledgeImg object-cover w-12 transition duration-300' src={item?.iconImg} alt="" />
                                            <p className='font-medium text-sm text-center group-hover:text-black text-gray-500'>{item?.title}</p>
                                        </Link>
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
                                        <Link to={item?.link} key={index} className='p-4 2xl:w-[15.3%] xl:w-[22%] lg:w-[26%] md:w-[18%] sm:w-[23%] w-[47%] flex flex-col justify-center hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition duration-300 items-center gap-1 bg-slate-50 border border-gray-300 group'>
                                            <img className='aspect-square knowledgeImg w-12 transition duration-300' src={item?.iconImg} alt="" />
                                            <p className='font-medium text-sm text-center group-hover:text-black text-gray-500'>{item?.title}</p>
                                        </Link>
                                    )
                                })
                            }
                        </div>
                    </div>

                    {/* <div className='bg-slate-200 h-fit  py-6'>
                        <h1 className='text-center border-gray-300 text-2xl border-b pb-5 text-amber-700'>Engineering</h1>

                        <div className='px-5  pt-5 flex flex-wrap justify-center  gap-3'>
                            {
                                data4?.map((item, index) => {
                                    return (
                                        <div key={index} className='p-4 flex 2xl:w-[15.3%] xl:w-[22%] lg:w-[26%] md:w-[18%] sm:w-[23%] w-[47%] flex-col justify-center hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition duration-300 items-center gap-1 bg-slate-50 border border-gray-300 group'>
                                            <img className='aspect-square knowledgeImg w-12 transition duration-300' src={item?.iconImg} alt="" />
                                            <p className='font-medium text-sm text-center group-hover:text-black text-gray-500'>{item?.title}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div> */}


                </div>
            </div>
        </div>
    )
}

export default UnderKnowledge