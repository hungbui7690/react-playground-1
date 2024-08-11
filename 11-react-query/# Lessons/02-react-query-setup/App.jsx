/*
  Why data is handled on server, but not client
  - because handle data on client (react) can make our app slow 
  - server is designed to do something like that (handle + manipulate data)
    -> handle data on server will make our front-end app fast and performant


********************************

  Axios Custom Instance
  - we have a lot of /api/tasks routes in server
    -> http://localhost:5000/api/tasks
    -> get, create, update, delete


********************************

  HTTP Methods
  - HTTP (Hypertext Transfer Protocol) methods define the types of actions that can be performed on a web server to retrieve, modify or delete information. 
  - The most commonly used HTTP methods are GET, POST, PATCH and DELETE. 
  - GET retrieves data, POST sends data to be processed, PATCH update or replace existing data, DELETE removes data.

  -> GET: This HTTP method is used to retrieve data from a server. 
    + When a client sends a GET request to a server, the server will return a response that includes the requested data. 
    + This method is typically used to retrieve information from a database, to read a web page, or to download a file. 
    + The HTTP GET method is the default method used by web browsers to retrieve data from a server, as it is a safe and efficient way to request resources.
      axios.get('/api/data')
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        })

  -> POST: The POST method is used to send data to a server to create or update a resource. 
    + When a client sends a POST request to a server, the server will process the request and create a new resource or update an existing one. 
    + This method is commonly used in web forms, where users enter information that is then sent to a server for processing.
        try {
          const response = await axios.post('/api/data', { name: 'John', age: 30 });
          console.log(response.data);
        } catch (error) { 
          console.error(error);
        }

  -> PATCH: This method is similar to the POST method, but it is used to update only a part of a resource. 
    + When a client sends a PATCH request to a server, the server will update the resource with the new data provided in the request. 
    + This method is commonly used in REST APIs to update specific properties of a resource.
        try {
          const response = await axios.patch('/api/data/1', { age: 31 });
          console.log(response.data);
        } catch (error) {
          console.error(error);
        }

  -> DELETE: The DELETE method is used to remove a resource from a server. 
    + When a client sends a DELETE request to a server, the server will delete the resource if it exists. 
    + This method is commonly used in REST APIs to remove a resource that is no longer needed or to undo a previous action.
        try {
          const response = await axios.delete('/api/data/1');
          console.log(response.data);
        } catch (error) {
          console.error(error);
        }


********************************

  - CRUD stands for Create, Read, Update, and Delete, which are the basic operations that can be performed on a database or web application. 
    > These operations allow users to create new data, read existing data, update data, and delete data when necessary.

  - Task API Docs: https://documenter.getpostman.com/view/18152321/2s93RTSDLn


********************************

  UseEffect Approach
  - we can use useEffect + Axios to fetch data 
    -> this is ok -> but it's hard to keep our app in sync with our server data

      const fetchTasks = async () => {
        try {
          const response = await customFetch.get('/');
          console.log(response.data);
        } catch (error) {
          +console.error(error);
        }
      };

      useEffect(() => {
        fetchTasks();
      }, []);


********************************

  React Query Setup
  - React Query is a state management library that simplifies the process of fetching, caching, and updating data in React applications. 
  - Its major benefits include automatic background refetching, caching and stale data management, error handling, and easy pagination and infinite scrolling. 
  - Compared to setting up requests with useEffect, React Query provides a more declarative and centralized approach to managing data in React, which results in cleaner and more efficient code. 
  - It also reduces boilerplate code and improves performance by minimizing unnecessary re-renders and network requests.
  - tons of features
  - versions: react query has new versions frequently 

  - React Query: https://tanstack.com/query/v4/docs/react/overview

********************************

  - we are using react query version: 4.28.0 in this lesson

    ~~ npm i @tanstack/react-query

  - In the latest version of React Query (V5)
    -> the 'isLoading' property has been replaced with 'isPending'. 
    -> this change is purely in naming
    -> the functionality remains the same, where the property is true if the query has not yet received data. 
    -> if you are using a different version of React Query than the one provided in the starter package, remember to use 'isPending' instead of 'isLoading'.


********************************

  cd playground/server -> npm install -> npm run start
  cd playground/client -> npm install -> npm run start


********************************

  1. create utils.js
  2. main.js


*/

import { ToastContainer } from 'react-toastify'
import { nanoid } from 'nanoid'
import Form from './Form'
import Items from './Items'
import { useState } from 'react'

const defaultItems = [
  { id: nanoid(), title: 'walk the dog', isDone: false },
  { id: nanoid(), title: 'wash dishes', isDone: false },
  { id: nanoid(), title: 'drink coffee', isDone: true },
  { id: nanoid(), title: 'take a nap', isDone: false },
]

const App = () => {
  const [items, setItems] = useState(defaultItems)
  return (
    <section className='section-center'>
      <ToastContainer position='top-center' />
      <Form />
      <Items items={items} />
    </section>
  )
}
export default App
