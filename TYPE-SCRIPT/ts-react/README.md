# Using TypeScript in React

1. TS will make your app safe from typed safety
because it is strongly typed language.
2. When making app with TypeScript, Run the following command

    ```
        npx create-react-app my-app --template typescript

    ```
- [x] If any object is null in array of JSON then typescript recognize it, on the other hand React just break your application if any of object found to be null. TypeScript add question mark to know (recognize) that Object is possibly 'null' or not.

```
    {name: "Ahmad", school: null}

    <h1>School: {user.school?.name}</h1>

```

It will help you prevent so many issues in future when getting null objects from JSON. 



## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.