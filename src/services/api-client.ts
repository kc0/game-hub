import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'ded7c59c4d96483794419bd016eaa30f'
    }
})