import { Link, useNavigate, useLocation } from 'react-router-dom'
import { RxCross2 } from "react-icons/rx";
import { RiArrowRightSFill } from "react-icons/ri";
import Swal from "sweetalert2";
import { useContext } from 'react';
import { ContextProvider } from '../auth/AuthProvider';
import auth from '../firebase.config';
import useGetRole from '../hooks/useGetRole';

function DNavbar({ isTrue, setIsTrue }) {

    const navigate = useNavigate()
    const route = useLocation()
    const { logOutUser } = useContext(ContextProvider);
    const [userRole] = useGetRole();
    const role = userRole?.role;

    const routes = []

    if(role === 'user'){
        routes.push( {
            name: 'Profile',
            link: '/dashboard'
        })
    }



    if (role === 'admin') {
        routes.push({
            name: 'Post Blog',
            link: '/dashboard/post-blog'
        });

        routes.push({
            name: 'Manage Blog',
            link: '/dashboard/manage-blog'
        });
    }

    const handleLogOut = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, logout"
        }).then((result) => {
            if (result.isConfirmed) {
                logOutUser(auth)
                    .then(() => {
                        Swal.fire({
                            title: "LogOuted!",
                            text: "Your file has been logouted.",
                            icon: "success"
                        });
                        navigate('/')
                    })
                    .catch(err => {
                        Swal.fire({
                            title: "Error",
                            icon: "error"
                        });
                        navigate('/')
                    })
            }
        });
    }




    return (
        <div className="flex relative w-full">

            <div className={`bg-amber-50 transition duration-300 w-full  ${isTrue ? 'translate-x-0 md:min-h-screen' : '-translate-x-96'}`}>
                <div className="p-3 h-20 shadow-md flex gap-x-4 justify-between items-center">
                    <Link className='md:w-full sm:w-[25%] w-[40%] md:h-full' to={'/'}>
                        <img className='h-full w-full' src='../../public/fromImgBB/logoImg.png' alt='image' />
                    </Link>
                    <button onClick={() => setIsTrue(!isTrue)} className="hover:scale-105 transition duration-200 h-fit p-2 bg-amber-600 text-white rounded-full"><RxCross2 /></button>
                </div>

                <div className="mt-10 flex flex-col gap-y-1">
                    {
                        routes.map((item, index) => {
                            return (
                                <Link className={`px-3 text-lg py-2  ${route.pathname === item.link ? 'bg-amber-600 text-white' : 'bg-amber-200 hover:text-white hover:bg-amber-600 transition duration-300'}`} key={index} to={item.link}>
                                    <p>{item.name}</p>
                                </Link>
                            )
                        })
                    }
                    <button onClick={handleLogOut} className="px-3 text-black hover:text-white text-lg py-2 bg-amber-200 hover:bg-amber-600 text-start transition duration-300">Log Out</button>
                </div>

            </div>
            <div className={`${isTrue ? 'hidden' : 'block absolute top-[50%] left-0'}  flex justify-center items-center`}>
                <button onClick={() => setIsTrue(!isTrue)} className="py-5 bg-amber-600 text-white text-2xl rounded-r"><RiArrowRightSFill /></button>
            </div>
        </div>
    )
}

export default DNavbar