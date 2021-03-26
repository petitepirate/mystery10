- In action creators, like `getFilmFromAPI`, we use a "regular expression" ---
  what is that regular expression, and what is its purpose?
  ```
   /\d+/   
   This matches any digit (0-9), which is then used to return an array of the ids for a particular data set which are API urls
   ```
  
- We're persisting the Redux store, so if you re-visit the app, it will remember
  the topics you've visited. Where is this stored? How is this done?
   ```
  Its stored in localStorage using the redux-persist library.  

- What does `combineReducers` do? Why are we using it? 
 ```
It combines all the reducers for redux. It allows you to abstract out the logic for reducers for different pieces of state to make it more manageable than having one giant reducer file for all state.  

- How does the "Reset to Fresh Exploration" feature work?
 ```
It dispatches a reset action to all reducers which returns the intial state, effectively clearing out all state.  

- Why are `FilmList.js`, `PlanetList.js`, and 
  `PersonList.js` all simple components that use an `ItemList`?
  Why is this a good design?
   ```
Its a very clean way to not repeat code to create different types of lists.  

- In the `HomePage` component we use the `useSelector` hook to save only a single fact---
  whether the first film is loaded, We could instead have selected all the
  films, and had the check for whether the first film is loaded in our
  `render` function. Why is this worse? What would the performance implications
  be?
   ```
  Because of the way the app functions, a user is forced to start exploration with the first film. It is therefore unnecessary to check all films to decide whether to show the reset button or the start with a new hope button. Checking all films would generate async requests that would slow load time.  


- What good ideas for designing and organizing React apps have you learned from
  studying this code?
   ```
  The reset-all funcionality that works throughout the whole app and also the redux-persist library use.  In general it was nice just to see how a larger app fully functioned.
  
- Which Star Wars character would make the best React developer, and why?
 ```
Not sure about react developer, but i've always liked Ewoks :) 
