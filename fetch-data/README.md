# Fetching API Calls

All the methods of Calling API in Reactjs i.e

1. Fetch (Built-in)
2. Axios (npm install axios)
3. useSWR (npm install useSWR)
4.

### 1) Fetch

The Fetch API provides an interface for fetching resources in an asynchronous manner. <br/>
It returns a promise.<br/>
It is an object which contains a single value either a Response or an Error that occured.<br/>
.then() tells the program what to do once Promise is completed.

### 2) Axios

It is an open source library for making HTTP requests. <br/>
It works on both Browsers and Node js. <br/>
It can be included in an HTML file by using an external CDN. <br/>
It also returns promises like Fetch API

`npm install axios` <br/>
You can use get,put,post,delete methods which http supports. <br/>
It by default (internally) change the get methods of API to JSON but in Fetch we Use to convert to JSON

### 3) SWR (useSWR)

`npm install axios` <br/>
In this we don't need the useEffect hook because everything the data, the useEffect and state to data everything is builtin. <br/>
We don't need to build our State and Effect. <br />
It uses the Fetch API to call the data and the best part is that we don't need to use useState and useEffect hooks because it handles these two things. <br/>

<br/>

#### Note
It's also easy to make loading screen with useSWR.
<br/>
suspense:true -> in hook
<br/>
And now wrap your component like this <br/>

```
const { data, error } = useSWR("https://dog.ceo/api/breeds/image/random", fetcher, {
    suspense: true,
  });


<Suspense fallback={<h1>Loading ...</h1>}>
    <Swr />
</Suspense>

```

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
