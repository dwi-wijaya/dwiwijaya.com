import axios from 'axios'

export const fetcher = (url) => axios.get(url).then(response => response.data)
