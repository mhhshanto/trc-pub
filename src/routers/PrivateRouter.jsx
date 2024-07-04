import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ContextProvider } from "../auth/AuthProvider";



function PrivateRouter({ children }) {
    const { user, loading } = useContext(ContextProvider);
    const navigate = useNavigate()
    

    if (loading) {
        return (
            <div className='min-h-screen w-full flex justify-center items-center bg-gray-50'>
                <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-300 h-20 w-20"></div>
                <p className="ml-4 text-xl">Please wait...</p>
            </div>
        )
    }

    if (user) {
        return children
    }

    return navigate('/');
}

export default PrivateRouter