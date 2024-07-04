import axios from "axios"

const axiosPublic = axios.create({
    baseURL: 'https://hasib-vai-second-project.vercel.app'
})

function useAxios() {
    return axiosPublic
}

export default useAxios