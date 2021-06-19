//createContext: instantiate new Context object; create container to hold our global state data and functionality so we can provide it throughout our app
//useContext: another React Hook that allows us to use the state created from the createContext function
import React, { createContext, useContext } from 'react';
import { useProductReducer } from './reducers';

//instantiate global state object
//every Context object comes with 2 components: Provider and Consumer
//Provider: special type of React component that we wrap our application in so it can make the state data that's passed into it as a prop available to other components
//Consumer: our means of grabbing and using the data that the Provider holds for us
const StoreContext = createContext();
const { Provider } = StoreContext;

//custom provider function used to manage and update state using the reducer
//state: most up-to-date version of our global state object
//dispatch: method we execute to update our state; sepcifically looking for action object passed in as its argument
const StoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useProductReducer({
        products: [],
        categories: [],
        currentCategory: '',
        cartOpen: false,
        cart: []
    });
    console.log(state);
    return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
    return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };

