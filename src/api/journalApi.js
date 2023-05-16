import axios from 'axios'

const journalApi = axios.create({
    baseURL: "https://vue-demo-88dcc-default-rtdb.firebaseio.com"
})

export default journalApi