import { useState } from "react"
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";

function Slider() {
    const [index, setIndex] = useState(0);
    const [isOpen, setisOpen] = useState(true);

    const slidData = [
        {
            img: 'https://taylorandfrancis.com/wp-content/uploads/2024/05/Getting-savvy-about-media-literacy.jpg',
            title: 'Getting savvy about media literacy',
            subTitle: 'Navigating a shifting media landscape in the digital age'

        },
        {
            img: 'https://taylorandfrancis.com/wp-content/uploads/2024/04/Homepage-slide-Accelerating-the-transition-to-open-access.jpg',
            title: 'Accelerating the transition to open access',
            subTitle: 'How our partnership with Jisc is boosting UK research impact'

        },
        {
            img: 'https://taylorandfrancis.com/wp-content/uploads/2024/05/Getting-savvy-about-media-literacy.jpg',
            title: 'Getting savvy about media literacy',
            subTitle: 'Navigating a shifting media landscape in the digital age'

        },
        {
            img: 'https://taylorandfrancis.com/wp-content/uploads/2024/04/Homepage-slide-Accelerating-the-transition-to-open-access.jpg',
            title: 'Accelerating the transition to open access',
            subTitle: 'How our partnership with Jisc is boosting UK research impact'

        },

    ]

    const handleNext = () => {
        if (index < (slidData.length - 1)) {
            setisOpen(false)
            setTimeout(() => {
                setIndex(index + 1)
                setisOpen(true)
            }, 500);

        }
    }

    const handlePrev = () => {
        if (index > 0) {
            setisOpen(false)
            setTimeout(() => {

                setIndex(index - 1)
                setisOpen(true)

            }, 500);
        }
    }





    return (
        <div className='lg:mt-28 mt-16 text-white xl:gap-24 gap-10 md:px-24 sm:px-12 px-10 py-10 mx-auto relative flex flex-col-reverse lg:flex-row  items-center justify-between bg-gradient-to-r from-[#050740] to-[#10147e]'>
            <div className={`lg:w-[50%] xl:pl-5 ${isOpen? 'opacity-100': 'opacity-0'}`}>
                <h1 className="xl:text-6xl sm:text-5xl text-3xl">{slidData[index]?.title}</h1>
                <p className="xl:text-4xl sm:text-3xl text-xl mt-10 ">{slidData[index]?.subTitle}</p>
                <div className="xl:mt-14 mt-10 flex justify-end"><button className="px-5 py-1 bg-blue-300 rounded-full hover:bg-blue-400 transition duration-300 text-black font-semibold">Read more</button></div>
            </div>
            <button onClick={handleNext} className="text-2xl font-bold absolute lg:right-3 right-1 top-[45%] bg-blue-300 p-1 rounded-full text-black hover:bg-blue-400  transition-all duration-300"><GrFormNext /></button>
            <button onClick={handlePrev} className="text-2xl font-bold absolute lg:left-3 left-1 top-[45%]  bg-blue-300 p-1 rounded-full text-black hover:bg-blue-400 transition-all duration-300"><GrFormPrevious /></button>
            <img className={`rounded-xl ${isOpen ? 'opacity-100' : 'opacity-0'} transition duration-500 ease-in-out lg:w-[50%]`} src={slidData[index]?.img} alt="" />

        </div>
    )
}

export default Slider