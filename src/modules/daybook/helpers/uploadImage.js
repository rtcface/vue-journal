import cloudinaryApi from "@/api/cloudinaryApi"

const uploadImage = async ( file ) => {
    
    if( !file ) return

    try {

        const formData = new FormData()

        formData.append('upload_preset','vue-rtc')
        formData.append('file', file) 

        const { data } = await cloudinaryApi.post("",formData)
        console.log(data)
        const { secure_url } = data
        return secure_url
        
    } catch (error) {
        console.error('Error al cargar la imagen, revisar logs')
        console.log(error)
        return null
    }
}

export default uploadImage