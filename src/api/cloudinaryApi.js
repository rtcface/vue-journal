import axios from 'axios'

const cloudinaryApi = axios.create({
    baseURL: "https://api.cloudinary.com/v1_1/dbz75d41e/image/upload"
})

export default cloudinaryApi