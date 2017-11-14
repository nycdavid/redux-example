## Creating & using the store
1. Take all reducers and create a master reducer with the `combineReducers`
1. Create a store from this master reducer by passing it into `createStore`
1. Pass it in as a `store` prop to the `Provider` component in `react-redux`

## Find where the points of User interaction are
* These are the components most likely to induce changes in state and, thus, will
require things added to them.
* These components will likely have interactions like `onClick` or `onChange`

## connect, mapStateToProps, mapDispatchToProps
* `connect`: this function connects your component to the Redux ecosystem
  * Simply doing `connect()(COMPONENT)` will provide you with `dispatch` sent
    in as a prop.
* `mapStateToProps(state)`: this function (which receives state as an argument)
  is the state that's given to the component that it's connected to. It's worth
  noting that this state object is __closely tied to the object that was passed to
  `combineReducers` earlier on__.
* `mapDispatchToProps(dispatch)`: this function (which receives the dispatch
  function as an argument) will return an object of functions that each call
  `dispatch`. Typically, these functions will call an action creator to get the
  action and then dispatch it to be picked up by the reducer.
    - These functions are eventually invoked in the click, change, etc. handlers
      of the components, where needed.

## Recipients of State Changes
* The `mapStateToProps` function, when connected to the component, will allow
  state to be viewed from the props. Just make sure that you're accessing it
  correctly.
