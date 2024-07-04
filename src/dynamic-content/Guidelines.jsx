import React from 'react'

function Guidelines() {

    const data = [
        {
            title: 'Introductory information about publishing with TRC Sapphire Publisher',
            des: 'These guides give an overview of the audiences for our books, what we publish, and how we ensure our products are accessible and can be found by readers.',
            listItem:[
                'Overview of the book publishing process',
                'Overview of our products, customers, and readers',
                'Making your work discoverable',
                'Accessible Content and Alt Text'
            ]
        },
        {
            title: 'Essential publishing forms and checklists',
            des: 'These forms should be submitted along with your final manuscript. However, it is worth using them as you work to help guide putting the script and submission materials together correctly.',
            listItem:[
                'Submission checklist',
                'Artwork and third-party material permissions log',
                'Permissions declaration form',
                'Notes for the copyeditor'
            ]
        },
        {
            title: 'Publishing guides',
            des: 'These guides go through each key step of the publishing process, detailing what is required and what to expect at each stage.',
            listItem:[
                'Proposal guidelines',
                'Contract guide',
                'Important information on libel and defamation',
                'Manuscript preparation guide (writing, formatting, artwork, and permissions)',
                'Manuscript submission guide',
                'Production guidelines',
                'Indexing guide',
                'Editing a multi contributor book',
            ],
           subDes:'The video below will take you through the production process at TRC Sapphire Publisher, so you know exactly what to expect at each stage.',
           img:'https://i.ytimg.com/vi/USvC4pQ7l1Y/sddefault.jpg?sqp=-oaymwEmCIAFEOAD8quKqQMa8AEB-AH-DoACuAiKAgwIABABGGUgZShlMA8=&rs=AOn4CLAZzGEdsfOSz9lqnmyulUtpqaQqZQ' 
        },
        {
            title: 'Templates and examples',
            des: 'These documents support the preparation of your submission if needed and may prove helpful to adapt to your own work.',
            listItem:[
                'Sample chapter',
                'Data availability statement templates',
            ]
        },
        {
            title: 'Book cover design templates',
            des: 'We use a wide range of cover options depending on the imprint and type of book. Your Editorial contact will discuss your cover design with you in the run up to manuscript submission.',
            listItem:[
                'CRC Press monograph cover designs',
                'CRC Press template cover designs',
                'Routledge monograph cover designs',
                'Routledge template cover designs',
                'Routledge (International) Handbook/Companion cover designs',
                'Focus (short form) cover templates',
            ]
        },
        {
            title: 'Specialist book information',
            des: 'These guides offer further information for specific subject areas and product types where there are additional technical requirements.',
            listItem:[
                'Camera ready guide',
                'Chemical structures guide',
                'Companion websites and eResources guide',
                'Computer code guide',
                'eBook+ Guidelines for Authors',
                'Law books guide',
                'Routledge historical resources guide',
                'Creating and Submitting Alt Text',
                
            ]
        },

    ]



    return (
        <div className="flex md:flex-row flex-col gap-10">
            <div className="md:w-[66%] mb-10">
                <div className='pb-10 border-b'>
                    <h1 className="text-4xl font-medium font-serif ">Publishing Guidelines and Forms</h1>

                    <p className="my-4">Here you'll find everything you need to know about the TRC Sapphire Publisher book publishing process.</p>
                    <p className="my-4">This may look like a bit of a long list of publishing guidelines, checklists, and forms, but please don't worry. Your editor will help you at every step along your publishing journey by letting you know which documents you need to read or forms you need to complete and when.</p>
                </div>

                {
                    data?.map((item, index) => {
                        return (
                            <div key={index} className=' md:mt-10 mt-7'>
                                
                                    <h2 className="text-2xl mb-3 font-semibold">{item?.title}</h2>
                                    <p>{item?.des}</p>
                                    
                                    <div className='my-4 pl-4'>
                                        {
                                            item?.listItem?.map((liItem,liIndex)=> <li className='text-blue-900 underline cursor-pointer' key={liIndex}>{liItem}</li>)
                                        }
                                    </div>
                                    <p>{item?.subDes}</p>
                                    {
                                        item.img && <img className='mt-5 xl:w-[65%] h-[370px]' src={item?.img} alt="" />
                                    }
                            </div>
                        )
                    })
                }

               

            </div>
            <div className="md:w-[34%] sm:w-[50%] sm:mx-auto mb-14">

                <div className="bg-gray-100 px-5 py-10 border-t-[6px]  border-t-amber-700 border-b">
                    <h1 className="text-2xl mb-3">Author FAQs</h1>
                    <p className='my-3'>Click the links below to read the answers to frequently asked questions about various parts of the book publishing process at TRC Sapphire Publisher: </p>

                    <div className='text-blue-900 underline '>                        
                       <li>Electronic Publishing and Open Access</li>
                       <li>Proposals</li>
                       <li>Proposal Reviews</li>
                       <li>Contracts</li>
                       <li>Manuscripts</li>
                       <li>Production</li>
                       <li>After Publication</li>
                       <li>Marketing</li>
                       <li>Author Sales</li>
                       <li>Requesting a PDF of Your Own Work</li>
                       <li>Citation Indexes</li>
                       <li>Royalties</li>
                    </div>

                </div>

                <div className="bg-gray-100 px-5 mt-10 py-5 border-t-[6px] border-t-amber-700 border-b">
                    <h1 className="text-2xl">Helpful Resources</h1>
                    <img className="w-[75%] mx-auto mt-4" src="https://asset.routledge.com/img-default/8692/prlib1709-side-600x800-r1__large.jpg" alt="" />
                    <p className="text-center mt-4">For help and top tips on how to promote your book, explore our Author Directions series of <span className="font-semibold">free resource</span>which includes advice on social media, book launches, book reviews and more!</p>
                    <div className="w-full mt-4 mb-8 flex justify-center items-center">
                        <button className="bg-amber-700 py-2 w-fit rounded-md px-3 text-lg font-sans uppercase text-white">
                        Explore Resources 
                        </button>
                    </div>
                </div>

                

                <div className="bg-gray-100 px-5 py-10 border-t-[6px] mt-10 border-t-amber-700 border-b">
                    <img className="w-[70%] mx-auto" src="https://i.ibb.co/SdBsMc7/Picsart-24-06-29-15-18-39-711-removebg-preview.png" alt="" />
                    <h1 className="text-2xl my-5">Expert book editing support from cover to cover</h1>
                    <p>For authors who would like English language support, our  Book Editing service  offers you the opportunity to have your work reviewed by editing experts.</p>
                </div>

                <div className="bg-gray-100 px-5 py-5 border-t-[6px] mt-10 border-t-amber-700 border-b">
                    
                    <h1 className="text-2xl my-5">Books Data Sharing Policy</h1>
                    <p>From April 2021, all new TRC Sapphire Publisher publications entering the production process will be encouraged to adhere to the following Data Sharing Policy.</p>
                    <div className="w-full mt-4 mb-8 flex justify-center items-center">
                        <button className="bg-amber-700 py-2 w-fit rounded-md px-3 text-lg font-sans uppercase text-white">
                        Learn More 
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Guidelines