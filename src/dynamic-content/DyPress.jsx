import React from 'react'

function DyPress() {

    const data = [
        {
            img: 'https://asset.routledge.com/rt-files/AUTHOR/LMAMIXA2001-icon-1-r1.png',
            title: 'Submit Proposal',
            des: 'If you have not yet been in contact with T&F about your book, please get in touch with the relevant Commissioning Editor . They will likely provide you with a specific proposal form suitable for your subject area and book idea.'
        },
        {
            img: 'https://asset.routledge.com/rt-files/AUTHOR/LMAMIXA2001-icon-2-r1.png',
            title: 'Internal Editorial Assessment',
            des: 'The Editor will assess the strengths of your proposal and how well it ﬁts with the subject list.'
        },
        {
            img: 'https://asset.routledge.com/rt-files/AUTHOR/LMAMIXA2001-icon-3-r1.png',
            title: 'Initial peer review',
            des: 'When the Editor is prepared to proceed, your book proposal will be sent out for initial peer review (4-6 weeks). The Editor will assess the strengths of your proposal and how well it ﬁts with the subject list. If approved, the proposal will proposal will move to the next stage.'
        },
        {
            img: 'https://asset.routledge.com/rt-files/AUTHOR/LMAMIXA2001-icon-4-r1.png',
            title: 'Discuss Reviews',
            des: 'Discuss the reviewer feedback with your Editor, making revisions and resubmitting the proposal if necessary.'
        },
        {
            img: 'https://asset.routledge.com/rt-files/AUTHOR/LMAMIXA2001-icon-5-r1.png',
            title: 'Editorial Board Meeting',
            des: 'The internal Editorial Board makes the final decision on approving the book for publication, making recommendations for changes if appropriate, and determining contract terms.'
        },
        {
            img: 'https://asset.routledge.com/rt-files/AUTHOR/LMAMIXA2001-icon-6-r1.png',
            title: 'Sign Contract',
            des: 'Key parts of the contract include length, royalties, copyright, and the delivery date. Open access contracts are available and all of our standard contracts allow for Alt Text, and open access conversion at a later date if required.'
        },
        {
            img: 'https://asset.routledge.com/rt-files/AUTHOR/LMAMIXA2001-icon-7-r1.png',
            title: 'Writing Phase',
            des: 'May include peer reviews or work with a Development Editor. At this stage, your Editor will send you detailed guidelines on formatting, image specs, permissions etc. Talk to your Editor about content issues.'
        },
        {
            img: 'https://asset.routledge.com/rt-files/AUTHOR/LMAMIXA2001-icon-8-r1.png',
            title: 'Manuscript Delivery',
            des: 'Submit your final manuscript, working with an Editorial Assistant on formatting and permissions queries and payment of any open access book publishing charge (BPCs).'
        },
        {
            img: 'https://asset.routledge.com/rt-files/AUTHOR/LMAMIXA2001-icon-9-r1.png',
            title: 'Production',
            des: 'Production Editor assigned. Copyediting and typesetting, proofreading and indexing, collating and correction, and cover ﬁnalized. Production usually takes 5-6 months.'
        },
        {
            img: 'https://asset.routledge.com/rt-files/AUTHOR/LMAMIXA2001-icon-10-r1.png',
            title: 'Book Publishes',
            des: 'Our global sales & marketing team works with retailers, universities and other aggregators to ensure your book is promoted and sold to the appropriate target audience. Additionally, we have 30+ metadata feeds to platforms such as Google Scholar and Amazon where readers outside of academic institutions can access your work, benefiting independent researchers across the globe.'
        },


    ]



    return (
        <div className="flex md:flex-row flex-col gap-10">
            <div className="md:w-[66%]">
                <h1 className="text-4xl font-medium font-serif ">The Publishing Process</h1>
                <h2 className="sm:text-3xl text-2xl mt-5 font-semibold">The TRC Sapphires Publisher books publishing process consists of 10 key stages.</h2>

                <p className="my-4">Learn about the basic steps to our publishing process for transforming an idea to an authoritative book for academic study or professional development.</p>

                {
                    data?.map((item, index) => {
                        return (
                            <div key={index} className='flex sm:flex-row flex-col gap-3 md:mt-10 mt-7'>
                                <img className='w-[3.6rem] h-[3.6rem]' src={item?.img} alt="" />
                                <div>
                                    <h2 className="text-2xl mb-3 font-semibold">{item?.title}</h2>
                                    <p>{item?.des}</p>
                                </div>
                            </div>
                        )
                    })
                }

                <p className='mt-10'>
                    Open access content will be hosted on TaylorFrancis.com and a copy of your work will be deposited into the archives with CLOCKSS and Portico. We also send a record of your work to OAPEN and the Open Research Library, two of the biggest open access books repositories.
                </p>

                <p className='my-8 font-semibold font-sans'>
                    Ready to submit your proposal? <span className='underline'>View and download our publishing guidelines.</span>
                </p>

            </div>
            <div className="md:w-[34%] sm:w-[50%] sm:mx-auto mb-14">

                <div className="bg-gray-100 px-5 py-10 border-t-[6px]  border-t-amber-700 border-b">
                    <h1 className="text-2xl mb-5">Author FAQs</h1>
                    <p className='my-4'>Have a question? From proposals, production and royalties, we have the answers you're looking for.</p>

                    <button className="bg-amber-700 py-2 w-fit rounded-md px-3 text-lg font-sans uppercase text-white">
                        View our FAQs
                    </button>

                </div>

                <div className="bg-gray-100 px-5 mt-10 py-5 border-t-[6px] border-t-amber-700 border-b">
                    <h1 className="text-2xl">Helpful Resources</h1>
                    <img className="w-[75%] mx-auto mt-4" src="https://asset.routledge.com/img-default/8692/prlib1709-side-600x800-r1__large.jpg" alt="" />
                    <p className="text-center mt-4">For help and top tips on how to promote your book, explore our Author Directions series of <span className="font-semibold">free resource</span>which includes advice on social media, book launches, book reviews and more!</p>
                    <div className="w-full mt-4 mb-8 flex justify-center items-center">
                        <button className="bg-amber-700 py-2 w-fit rounded-md px-3 text-lg font-sans uppercase text-white">
                            Explore the Author Directions series
                        </button>
                    </div>
                </div>

                <div className="bg-gray-100 px-5 mt-10 py-5 border-t-[6px] border-t-amber-700 border-b">
                    
                    <img className="w-[75%] mx-auto mt-4" src="https://i.ibb.co/NpPrSdh/Whats-App-Image-2024-06-23-at-11-51-18-5bacf376.jpg" alt="" />
                    <p className="text-center mt-4">Are you interested to find out about our Open Access Books program? Then click the button below. </p>
                    <div className="w-full mt-4 mb-8 flex justify-center items-center">
                        <button className="bg-amber-700 py-2 w-fit rounded-md px-3 text-lg font-sans uppercase text-white">
                        Open Access Books 
                        </button>
                    </div>
                </div>

                <div className="bg-gray-100 px-5 py-10 border-t-[6px] mt-10 border-t-amber-700 border-b">
                    <img className="w-[70%] mx-auto" src="https://i.ibb.co/SdBsMc7/Picsart-24-06-29-15-18-39-711-removebg-preview.png" alt="" />
                    <h1 className="text-2xl my-5">Expert book editing support from cover to cover</h1>
                    <p>For authors who would like English language support, our  Book Editing service  offers you the opportunity to have your work reviewed by editing experts.</p>
                </div>
            </div>
        </div>
    )
}

export default DyPress