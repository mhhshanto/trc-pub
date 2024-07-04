import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { ContextProvider } from '../auth/AuthProvider';

export default function Shop() {
    const { loading: authLoading } = useContext(ContextProvider);
    const [isLoading, setIsLoading] = useState(true);
    const [books, setBooks] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [result, setResult] = useState(15);
    const [perPage, setPerPage] = useState(8);
    const numberOfPages = Math.ceil(result / perPage);
    const [category, setCategory] = useState('all-books');
    const arrOFPages = [...Array(numberOfPages).keys()];

    useEffect(() => {
        setIsLoading(true);
        axios.get(`https://hasib-vai-backend.vercel.app/all-books-data?category=${category}&page=${currentPage}&size=${perPage}`)
            .then(res => {
                setBooks(res.data);
                setIsLoading(false);
            })
            .catch(() => setIsLoading(false));
    }, [currentPage, perPage, category]);

    useEffect(() => {
        fetch(`https://hasib-vai-backend.vercel.app/all-books-count?category=${category}`)
            .then(res => res.json())
            .then(data => setResult(data.result))
            .catch(() => setResult(0));
    }, [category]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentPage]);



    const BookCardPlaceholder = () => (
        <div>
            <div className="h-96 bg-gray-200 animate-pulse"></div>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <div className="h-6 bg-gray-200 animate-pulse w-3/4 mt-4"></div>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
                <div className="h-4 bg-gray-200 animate-pulse w-full mt-4"></div>
                <div className="h-4 bg-gray-200 animate-pulse w-3/4 mt-2"></div>
            </p>
            <button className="px-4 py-2 bg-blue-600 text-white rounded">
                <div className="h-5 bg-gray-200 animate-pulse w-24"></div>
            </button>
        </div>
    );

    if (authLoading) {
        return (
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 container mx-auto my-36">
                {
                    Array.from({ length: 8 }).map((_, index) => (
                        <BookCardPlaceholder key={index} />
                    ))
                }
            </div>
        );
    }

    const handleSelectCategory = value => {
        setCategory(value);
        setCurrentPage(0);
    };

    const handleSelectPage = e => {
        setPerPage(parseInt(e.target.value));
        setCurrentPage(0);
    };

    const handlePrevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < numberOfPages - 1) {
            setCurrentPage(currentPage + 1);
        }
    };

    const bookCategories = [
        "all-books",
        "Social-Development",
        "Economics Textbook",
        "Nursing Books",
        "Social Work and Social Behavior",
        "History of Social Science",
        "Climate Change",
        "Indigenous Australia",
        "Sustainable Development Goals",
        "Colonialism and Social Anthropology",
        "Gender Studies",
        "Psychology",
        "Medical Sciences"
    ];

    return (
        <div className="md:mt-36 mt-[115px] mb-16 px-3 md:container mx-auto">


            <div className="lg:container mx-auto flex justify-center items-center mb-10">
                <div
                    className="flex flex-wrap gap-3"   
                >

                    {bookCategories.map((item, index) => (
                        <div className={`px-3 md:text-base text-sm cursor-pointer py-1 ${item === category ? 'bg-amber-500 text-white' : 'bg-amber-100 text-black '} rounded`} onClick={()=> handleSelectCategory(item)} key={index}>{item}</div>
                    ))}
                </div>
            </div>
            {/* <div className="container mx-auto flex justify-center items-center mb-10">
        <select
          onChange={handleSelectCategory}
          className="text-center border-none shadow-[0_3px_10px_rgb(0,0,0,0.2)] py-2 rounded-md outline-none"
          value={category}
        >
          <option value="all-books">All Books</option>
          {bookCategories.map((item, index) => (
            <option key={index} value={item}>{item}</option>
          ))}
        </select>
      </div> */}

            <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
                {isLoading
                    ? Array.from({ length: 8 }).map((_, index) => (
                        <BookCardPlaceholder key={index} />
                    ))
                    : books.map((book) => (
                        <div key={book._id} className="p-5 rounded-md flex flex-col justify-between bg-gray-100">
                            <img src={book.imageURL} alt="" className="h-96 w-full" />
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                <p>{book.bookTitle}</p>
                            </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                <p className="line-clamp-3">
                                    {book.bookDescription}
                                </p>
                                <p className="font-semibold mt-2">Price: ${book.price}</p>
                            </p>
                            <Link to={`/book/${book._id}`}>
                                <button className="px-4 py-2 w-full bg-amber-600 text-white rounded">
                                    View
                                </button>
                            </Link>
                        </div>
                    ))}
            </div>

            <div className="flex justify-center gap-y-3 flex-wrap mt-10 items-center">
                <button className="btn-circle text-2xl" onClick={handlePrevPage}><IoIosArrowBack /></button>
                {arrOFPages.map(page => (
                    <button
                        className={`border px-3 py-2 rounded-md mx-2 ${page === currentPage ? 'bg-amber-600 text-gray-50' : ''}`}
                        onClick={() => setCurrentPage(page)}
                        key={page}
                    >
                        {page + 1}
                    </button>
                ))}
                <select
                    className="border border-gray-300 px-3 rounded-md ml-5"
                    value={perPage}
                    onChange={handleSelectPage}
                >
                    <option value="8">8</option>
                    <option value="12">12</option>
                </select>
                <button className="btn-circle mx-3 text-2xl" onClick={handleNextPage}><IoIosArrowForward /></button>
            </div>
        </div>
    );
}
