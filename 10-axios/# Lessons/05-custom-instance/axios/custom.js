import axios from 'axios'

// 1. 5-custom-instance
export const authFetch = axios.create({
  baseURL: 'https://www.course-api.com',
  headers: {
    Accept: 'application/json',
  },
})
