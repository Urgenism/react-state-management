# react-state-management-solutions

## Internal State

- React local state.
- Provided by react hook useState.

### `Benefits`

- Easy to use and configure.
- Do not need to install extra libraries.

### `Drawback`

- Props drilling.
- Harder to manage state.
- Not reusable.
- Not Scalable.
- Need to lift state for sharing state among other components.
- Not suitable for large applications.

## Redux

- Predictable centralized state container for js applications.
- Can work with or without React.

### `Benefits`

- Large community.
- Remove the problems of props drilling.
- Comes with devtools to trace when, where, why and how application changes.

### `Drawback`

- Hard to understand.
- Needs lots of boilerplate code to perform even simpler task.
- Not suitable for small applications.
- doesnot provide cache options.

## Redux toolkit

- Toolkit developed by Redux developer for efficience redux development
- Works on top of redux.

### `Benefits`

- No need to write lots of boilerplate code to perform actions.
- Immer, redux thunk, react select, devtools automatically comes with this package.
- Simple to understand and use if one knows redux.

### `Drawbacks`

- Need to understand redux before using redux-toolkit.
- doesnot provide cache options.

## React Query

- Provide cache options.

### `Benefits`

- Easy and simple to use and configure.
- No need to maintain global store for server data.
- handles caching, background updates and stale data.
- Removes the need for useState and useEffect hooks.

### `Drawbacks`

- Doesnot provide global state manager.

## Zustand

- Small, fast and scalable state management solutions.
- can work with or without react.

### `Benefits`

- Doenot need provider or wrapper around react root node.
- Easier and simpler to use.

### `Drawbacks`

- Doesnot provide cache options.
- Small community

## Other state management Libraries

- React Context, Mobx, SWR, Apollo client, Recoil, Jotai,
