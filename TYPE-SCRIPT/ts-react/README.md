# Why Should You Use TypeScript in React

1. TS will make your app safe from typed safety
because it is strongly typed language.
2. When making app with TypeScript, Run the following command

    ```
        npx create-react-app my-app --template typescript

    ```
3. If any object is null in array of JSON then typescript recognize it, on the other hand React just break your application if any of object found to be null. TypeScript add question mark to know (recognize) that Object is possibly 'null' or not.

```
    {name: "Ahmad", school: null}

    <h1>School: {user.school?.name}</h1>

```

-> It will help you prevent so many issues in future when getting null objects from JSON. 

4. When you are working with applications which has multiple components,
If someone will work in your code then no one will understand the props passing the data inside complex components.

Then it become hard for us to know that the props in passing the string or integer value.
So for this we use interface in typescript (like JAVA) which will describe how an object will look.
And props is object which is passing down the values to components.

So in interface we describe the props Types which is type of String, Integer or boolean. Also we can declare
functions. Interface will make sure your application type Safety.	


```

interface Props {
  title: string;
  description: string;
  getName: () => string;
}

```

We can also add ? mark to our Interface vars that it can be undefined. It will exist but it won't have anyting.


```

    
interface Props {
  title: string;
  description: string;
  getName?: () => string;
}

function ComponentB(props: Props) {

    const [name, setName] = React.useState<string>("");

    const onClick = () => {
        const name = props.getName?.();
        setName(name || "");
    }

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