## Notes
We use createContext & useContext to avoid props drilling inside child components.

Always wrap your code to use Context

` <AppContext.Provider value={{userName, setUserName}}>
      <div>
        {userName}
        <Child setUserName={setUserName} />
      </div>
</AppContext.Provider>
`

Then wrap it around your parent component passing the value prop with your data you want to prop to other components.

Now in your child component just use useContext.

Now we don't need to do drilling of Components

`const {setUserName} = useContext(AppContext);`

Pass the value to useContext of createContext variable.

Now you can use your values in your child components.

If we have alot of components and is using same Context then by changing one variable or value in context then it will re-render all the components which are wrap in Context Provider.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.