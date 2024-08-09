

#### Post Request

- send data to the server
- axios.post(url, { data })
- more options (auth header) - axios.post(url, { data },{})

```js
try {
  const resp = await axios.post(url, { data });
} catch (error) {
  console.log(error.response.data);
}
```

#### Global Defaults

```js
// In latest axios version common property returns "undefined"
// axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.headers['Accept'] = 'application/json';

axios.defaults.baseURL = 'https://api.example.com';

// In latest axios version common property returns "undefined"
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers['Authorization'] = AUTH_TOKEN;

axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded';
```

#### Custom Instance

```js
const authFetch = axios.create({
  baseURL: 'https://course-api.com',
  headers: {
    Accept: 'application/json',
  },
});
```

#### Interceptors

- global and custom

```js
authFetch.interceptors.request.use(
  (request) => {
    // request.headers.common['Accept'] = `application/json`;
    request.headers['Accept'] = `application/json`;

    console.log('request sent');
    // must return request
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

authFetch.interceptors.response.use(
  (response) => {
    console.log('got response');
    return response;
  },
  (error) => {
    console.log(error.response);
    if (error.response.status === 404) {
      // do something
      console.log('NOT FOUND');
    }
    return Promise.reject(error);
  }
);
```

##### Update

In the latest version there is no common property

```js
// In latest axios version common property returns "undefined"
// axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.headers['Accept'] = 'application/json';

// In latest axios version common property returns "undefined"
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers['Authorization'] = AUTH_TOKEN;
```

```js
// request.headers.common['Accept'] = `application/json`;
request.headers['Accept'] = `application/json`;
```
