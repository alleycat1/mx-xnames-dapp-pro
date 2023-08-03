
# Tech Stack

 - React
 - ReactRouter
 - Redux
 - Redux Toolkit
 - Reselect
 - Redux-Saga
 - Styled Components
 - Typescript
 - React-i18next

**Unit Testing**

 - Jestreact-testing-library

**Linting**

 - ESLintPrettierStylelint

## **Code/Folder Structure**

    /src

all our codes will be in `/src` folder
`/src/index.tsx` is the starting point of our app


    /src/app
this is where the core of our application will live and grow
`/src/app/index.tsx` is where we will define routes and here we will define all the necessary imports, and providers, rest of application should not contain any provider, unless we all agree in it
`/src/app` contains 2 main element types of our app
 1. components
 containing all the global components (they will be in root of `/src/app/components` ) and common components shared with some containers

 2. containers
   containing major parts, mainly pages, each page of app will be isolated in a container, we can use generators to generate seamless structure for all pages(containers)

# Generators

    yarn generate

Allows you to auto-generate boilerplate code for common parts of  application,`containers`s   `component`s . You can also run `yarn generate <part>` to skip the first selection
 (e.g., `yarn generate component`).

# Typescript

`yarn checkTs`

Checks for TypeScript errors.


# Chrome Extensions

For a better debugging and development experience we suggest [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en).  Redux is configured with this extension in mind so that you can debug and monitor your state changes very easily.

# Building Blocks

In this section, we will explain the **building blocks** of the app in detail.

First we have to look at what is happening when react starts its life with `index.tsx` file.

# `src/index.tsx`:

It is one of the most important files of the app. It contains all the global setup to make sure our app runs smoothly. Let's break its contents down:

-   `react-app-polyfill` is imported to enable compatibility with many browsers and cool stuff like generator functions, Promises, etc.
    
-   A Redux `store` is instantiated.
    
-   `ReactDOM.render()` not only renders the root React component, called `<App />`, of your application, but it renders it with `<Provider />`.
    
-   Hot module replacement via [Webpack HMR](https://webpack.js.org/guides/hot-module-replacement/) makes the i18n translations hot re-loadable.
    
-   i18next internationalization support setup.
    
-   `<Provider />` connects your app with the Redux `store`.
    

Again, `src/index.tsx` handles all the bootstrapping and setup of the features we are using in the app. Now, let's review a summary of the **building blocks**.

# Redux

Redux is likely to play a significant role in our application. If you're new to Redux, we'd strongly suggest that you complete this checklist and then come back:

-   Understand the motivation behind Redux.
    
-   Understand the three principles of Redux.
    
-   Implement Redux in a small React app of yours.
    

The Redux `store` is the heart of our application. Check out `src/store/configureStore.ts` to see how we have configured the store.

The `createStore()` factory creates the Redux store and accepts three parameters.

1.  
    **Root reducer:** A master reducer combining all your reducers.
    
2.      
    **Initial state:** The initial state of your app as determined by your reducers.
    
3.      
    **Middleware/enhancers:** Middlewares are third party libraries which intercept each Redux action dispatched to the Redux store and then... do stuff. For example, if we install the [`redux-logger`](https://github.com/evgenyrodionov/redux-logger) middleware, it will listen to all the actions being dispatched to the store and print the previous and next state in the browser console. It's helpful to track what happens in our app.
    

In our application, we are using a single middleware.

1.      
    **`redux-saga`****:** Used for managing _side-effects_ such as dispatching actions asynchronously.
    

# Redux-Toolkit

> The official, opinionated, batteries-included toolset for efficient Redux development.

This is the latest and best way of using Redux. It handles lots of the things you would need to do to get Redux working.

You are needed to read [documentation](https://redux-toolkit.js.org) at this point. This Skeleton uses Redux heavily, so you must understand it.

# Reselect

Reselect is a library used for slicing your Redux state and providing only the relevant sub-tree to a React component. It has three key features:

1.    
    Computational power.
    
2.      
    Memoization.
    
3.      
    Composability.
    

Imagine an application that shows a list of users. Its Redux state tree stores an array of usernames with signatures:

`{ id: number, username: string, gender: string, age: number }`.

This is how the three features of reselect help.

-   **Computation:** While performing a search operation, reselect will filter the original array and return only matching usernames. Redux state does not have to store a separate array of filtered usernames.
    
-   **Memoization:** A selector will not compute a new result unless one of its arguments change. That means, if you are repeating the same search once again, reselect will not filter the array over and over. It will just return the previously computed and, subsequently, cached result. Reselect compares the old and the new arguments and then decides whether to compute again or return the cached result.
    
-   **Composability:** You can combine multiple selectors. For example, one selector can filter usernames according to a search key, and another selector can filter the already filtered array according to gender. One more selector can further filter according to age. You combine these selectors by using `createSelector()`.
    Please read more on this tool here [reselect](https://codebrahma.com/reselect-tutorial-optimizing-react-redux-application-development-with-reselect/)

# Redux-Saga


Imagine that our application is fetching data in JSON format from a back-end. For every API call, ideally, you should define at least three kinds of [action creators](http://redux.js.org/docs/basics/Actions.html):

1.      
    `API_REQUEST`: Upon dispatching this, your application should show a spinner to let the user know that something's happening.
    
2.      
    `API_SUCCESS`: Upon dispatching this, your application should show the data to the user.
    
3.      
    `API_FAILURE`: Upon dispatching this, your application should show an error message to the user.
    

And this is only for _**one**_ API call. our application could be making tens of API calls. How do we manage all of them effectively? It essentially boils down to controlling the flow of our application. What if there was a background process that handled multiple actions simultaneously and communicated with the Redux store and React components at the same time? Here is where `redux-saga` enters the picture.

For a mental model, consider a saga like a separate thread in your application that's solely responsible for side-effects. Then `redux-saga` is a Redux middleware, which means this thread can be started, paused, and canceled from the main application with standard Redux actions. It has access to the full Redux application state, and it can dispatch Redux actions as well.

If you have read the redux-toolkit documentation you are familiar with the `slice` concept now. Here, we are taking it another step further by enriching it with `reselect` and `redux-saga`.

Slice manages, encapsulates, and operates a `portion` of your application's data. For example, if you have a page that displays a user list, then you can have a slice called 'UsersPageSlice' that contains all the users in its state, also the functions to read it from the store and the functions to update the users in the list. So, in short, a slice is a redux-toolkit slice also containing the relative `reselect` and `redux-saga` operations within its folder. After all, they are all related to managing the same portion of the data.
# Slice
A `slice` is independent of the UI component. It can contain any kind of logic and it can be located in any folder. To follow the `folder-by-feature` pattern it is recommended to keep your `slices` closer to your component using it. But, this doesn't mean that it only belongs to that component. You can import and use that slice in whichever component you want. (the auto generated `use"Container"Slice()` hook is for this goal )


# Redux Injectors

​[`redux-injectors`] library  allows you to dynamically load reducers and sagas as needed, instead of loading them all upfront. This has some nice benefits, such as avoiding having to manage a big global list of reducers and sagas. It also facilitates more effective use of [code-splitting](https://webpack.js.org/guides/code-splitting/).

**Note:** Importing `redux-injectors` from `utils/redux-injectors` will add extra type-safety.

# Async Components
To load a component asynchronously, create a `Loadable` file by hand or via component generator with the 'Do you want to load resources asynchronously?' option activated.

This is the content of the file by default:

    import React from 'react';
    import { lazyLoad } from 'utils/loadable';
    
    export const HomePage = lazyLoad( 
      () => import('./index'), module => module.HomePage,
      { fallback: <div>Loading...</div>, }// fallback acts like a loading component
     );
# Routing
#### Usage
To add a new route, simply import the `Route` component and use it standalone or inside the `Switch` component (all part of [RR5 API](https://reacttraining.com/react-router/web/api)):

    <Route exact path="/" component={HomePage} />
Top level routes are located in `src/app/index.tsx`.

If you want your route component (or any component for that matter) to be loaded asynchronously, use the component generator with 'Do you want to load resources asynchronously?' option activated.

## Child routes
For example, if you have a route called `about` at `/about`, and want to make a child route called `team` at `/about/our-team`, follow the example in `src/app/index.tsx` to create a `Switch` within the parent component. The `exact` property should also be removed from the `about` parent route.

    import { Switch, Route } from 'react-router-dom';
     export function AboutPage() {
      return ( <Switch> <Route exact path="/about/our-team" /> </Switch> ); 
     }
### Routing programmatically
You can use the [react-router hooks](https://reacttraining.com/react-router/web/api/Hooks) to change the route or get params, etc.

    import { useHistory } from 'react-router-dom';
    import {AppPages} from 'containers/constants';
    
     function HomeButton() {
      let history = useHistory();
       
       function handleClick() { 
       
       history.push(AppPages.Home); 
       }
       
        return (
        <button type="button" onClick={handleClick}> Go home </button>
         ); 
       }
# Styling (CSS)
This Skeleton uses [`styled-components`](https://github.com/styled-components/styled-components) for styling React components. `styled-components` allows you to write actual CSS inside your JavaScript, enabling you to use the [full power of CSS](https://github.com/styled-components/styled-components/blob/master/docs/css-we-support.md)  without mapping between styles and components. 

## `sanitize.css`

This Skeleton also uses [`sanitize.css`](https://github.com/jonathantneal/sanitize.css) to make browsers render all elements more consistently and in line with modern standards, it's a modern alternative to CSS resets.

# styled-components

The example below creates two styled React components (`<Title>` and `<Wrapper>`) and renders them as children of the `<Header>` component:

	 import * as React from 'react';
     import styled from 'styled-components/macro';
     
      // Create a <Title> React component that renders an <h1> which is
      // centered, palevioletred and sized at 1.5em 
       
       const Title = styled.h1` 
       font-size: 1.5em; text-align: center; color: palevioletred;
        `; 
        
        // Create a <Wrapper> React component that renders a <section> with 
        // some padding and a papayawhip background
        
        const Wrapper = styled.section`
        padding: 4em; background: papayawhip; 
         `;
          
        // Use them like any other React component – except they're styled! 
           
         function Button() { 
         return ( 
         <Wrapper> 
	           <Title>
		           Hello, here is your first styled component!
	           </Title>
		            ... 
            </Wrapper>
             ); 
          }

> _(The CSS rules are automatically vendor-prefixed, so you don't have to think about it!)_

**Tips:** Importing from `styled-components/macro` will enable some features you can [see here](https://styled-components.com/docs/tooling#babel-macro).

# Media queries

    import { media } from 'styles/media';
    
     const SomeDiv = styled.div`
      display: flex; .... ${media.md` display: block `}; 
    `;
# Matrial-UI v4
we will use Material ui for our common components, like inputs, dropdowns, search components and so on