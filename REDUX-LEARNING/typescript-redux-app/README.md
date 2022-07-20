# React Redux with TypeScript App

1.  Create React TypeScript app with `npx create-react-app my-app --template typescript`
2.  The `store` folder that contains files related to React Redux.
3.  The `type.d.ts` file that holds the TypeScript types, which can be used now in other files without importing.

4.  `npm install redux react-redux redux-thunk` or `yarn add redux react-redux redux-thunk`

5.  We also have to install their types as development dependencies to help TypeScript understand the libraries.

    ```
    yarn add -D @types/redux @types/react-redux @types/redux-thunk

    Or for npm:

    npm install -D @types/redux @types/react-redux @types/redux-thunk

    ```

6.  TypeScript types allows you to set types for your variables, function parameters, and so on 
    `type.d.ts`.

    ```

    interface IArticle {
        id: number
        title: string
        body: string
    }

    type ArticleState = {
        articles: IArticle[]
    }

    type ArticleAction = {
        type: string
        article: IArticle
    }

    type DispatchType = (args: ArticleAction) => ArticleAction

    ```

7.