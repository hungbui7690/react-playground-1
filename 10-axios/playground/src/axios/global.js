import axios from 'axios'

// 1. Headers -> In latest axios version common property returns "undefined"
// axios.defaults.headers.common['Accept'] = 'application/json'
axios.defaults.headers['Accept'] = 'application/json'

// 2. Base URL
// axios.defaults.baseURL = 'https://api.example.com'

// 3. In latest axios version common property returns "undefined"
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN
// axios.defaults.headers['Authorization'] = AUTH_TOKEN

// 4.
// axios.defaults.headers.post['Content-Type'] = ;('application/x-www-form-urlencoded')
