# Summarize API
### Building a custom AI from scratch

# Building a article summarizer
<ul>
<li>Summarize articles using Sumz (Chat GPT-4)</li>
<li>Connection to OpenAIs model (https://rapidapi.com/hub)</li>
<li>Copy to clipboard</li>
<li>Browser history storage using localstorage</li>
</ul>

## Packages
<ul>
<li>Vite</li>
<li>Redux Toolkit</li>
<li>TailwindCSS</li>
<li>React-redux</li>
</ul>

## Configuring Store Walthrough
https://redux-toolkit.js.org/api/configureStore
Configuring a store
Store is a global state that saves the entire info from the application
You don't need the entire state, so you can reduce is : in the case of this application we are just storing the articleApi

### Reducers
If this is a single function, it will be directly used as the root reducer for the store.
If it is an object of slice reducers, like {users : usersReducer, posts : postsReducer}, configureStore will automatically create the root reducer by passing this object to the Redux combineReducers utility.

### Middleware
An optional array of Redux middleware functions
If this option is provided, it should contain all the middleware functions you want added to the store. configureStore will automatically pass those to applyMiddleware.
If not provided, configureStore will call getDefaultMiddleware and use the array of middleware functions it returns.
Where you wish to add onto or customize the default middleware, you may pass a callback function that will receive getDefaultMiddleware as its argument, and should return a middleware array.

### Endpoints
This overload accepts a callback function that receives a builder object as its argument. That builder provides addCase, addMatcher and addDefaultCase functions that may be called to define what actions this reducer will handle.

The recommended way of using createReducer is the builder callback notation, as it works best with TypeScript and most IDEs.


