import React from 'react'
import { MdOutlineArrowCircleRight } from 'react-icons/md'
import { Link } from 'react-router-dom'

function SubjectArea() {

  const data = [
    {
      title: 'MEDICINE & HEALTHCARE',
      links: [
        "Bioscience Journal",
        "Hospital Software Solutions",
        "Biomedical Innovations",
        "Health Analytics Platforms",
        "Clinical Trials",
        "Medical Device Manufacturers",
        "Biotech Incubators",
        "Hospital Quality Improvement",
        "Genomics Research",
        "Telemedicine Platforms",
        "Pharmaceutical Companies",
        "Health Informatics",
        "Biopharma Research",
        "Hospital Accreditation",
        "Bioinformatics Tools",
        "Health Supply Chain Management",
        "Molecular Diagnostics Labs",
        "Hospitality in Healthcare",
        "Stem Cell Research",
        "Hospital Benchmarking Reports"
      ]
    },

    {
      title: 'MEDICINE & HEALTHCARE',
      links: [
        "Bioscience Journal",
        "Hospital Software Solutions",
        "Biomedical Innovations",
        "Health Analytics Platforms",
        "Clinical Trials",
        "Medical Device Manufacturers",
        "Biotech Incubators",
        "Hospital Quality Improvement",
        "Genomics Research",
        "Telemedicine Platforms",
        "Pharmaceutical Companies",
        "Health Informatics",
        "Biopharma Research",
        "Hospital Accreditation",
        "Bioinformatics Tools",
        "Health Supply Chain Management",
        "Molecular Diagnostics Labs",
        "Hospitality in Healthcare",
        "Stem Cell Research",
        "Hospital Benchmarking Reports"
      ]
    },

    {
      title: 'HUMANITIES & SOCIAL SCIENCES',
      links: [
        "Bioscience Journal",
        "Hospital Software Solutions",
        "Biomedical Innovations",
        "Health Analytics Platforms",
        "Clinical Trials",
        "Medical Device Manufacturers",
        "Biotech Incubators",
        "Hospital Quality Improvement",
        "Genomics Research",
        "Telemedicine Platforms",
        "Pharmaceutical Companies",
        "Health Informatics",
        "Biopharma Research",
        "Hospital Accreditation",
        "Bioinformatics Tools",
        "Health Supply Chain Management",
        "Molecular Diagnostics Labs",
        "Hospitality in Healthcare",
        "Stem Cell Research",
        "Hospital Benchmarking Reports"
      ]
    },
  ]



  return (
    <div className='container mx-auto px-5 my-16'>
      <h1 className='xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-medium font-sans my-16 text-[#a57c00]'>Subject Areas & Disciplines</h1>

      <div className='flex xl:flex-row flex-col gap-16'>
        <div className='xl:w-[30%] md:w-[60%] sm:w-[80%] w-full'>
          <div className='overflow-hidden'>
            <img className='w-full  hover:scale-[1.03] transition-all duration-500' src="https://taylorandfrancis.com/wp-content/uploads/2021/01/national-cancer-institute-Cx0LsYrM_Ns-unsplash-768x512.jpg" alt="" />
          </div>
          <div className='flex justify-center mt-10'><div className='flex justify-center'><button><MdOutlineArrowCircleRight className=' text-[#a57c00] text-4xl font-semibold' /></button></div></div>
        </div>


        <div className='md:w-[70%]  grid md:grid-cols-3 grid-cols-1 gap-5'>
          {
            data.map((item, index) => <div key={index}>
              <h1 className='text-xl mb-4'>{item.title}</h1>
              {
                item.links.map((item, index) => <p key={index} className='my-[2px] text-[0.95rem] hover:underline'><Link>{item}</Link></p>)
              }

            </div>)
          }
        </div>
      </div>
    </div>
  )
}

export default SubjectArea