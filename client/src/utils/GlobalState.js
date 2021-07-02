import React, { createContext, useReducer, useContext } from 'react';
import { SET_CURRENT_LISTITEM, 
    REMOVE_LISTITEM,
    UPDATE_LISTITEMS,
    ADD_LISTITEM,
    LOADING
} from './actions';

const StoreContext = createContext([{}]);

const { Provider } = StoreContext;

function reducer(state, action) {
    switch (action.type) {
    case SET_CURRENT_LISTITEM:
      return {
        ...state,
        currentListItem: action.listItem,
        loading: false
      };
  
    case UPDATE_LISTITEMS:
      return {
        ...state,
        listItems: [...action.listItems],
        loading: false
      };
  
    case ADD_LISTITEM:
      return {
        ...state,
        listItems: [action.listItem, ...state.listItems],
        loading: false
      };
  
    case REMOVE_LISTITEM:
      return {
        ...state,
        listItems: state.listItems.filter((listItem) => {
          return listItem._id !== action._id; 
        })
      };

    case LOADING:
        return {
        ...state,
        loading: true
        };

  default:
    return state;
  }
};

function StoreProvider({ value = [], ...props }) {
    const [state, dispatch] = useReducer(reducer, {
        listItems: [],
        currentListItem: {
            _id: 0,
            title: "",
            url: "",
            image: ""
        },
        loading: false
    });
  
    return <Provider value={[state, dispatch]} {...props} />;
  };
  
function useStoreContext() {
    return useContext(StoreContext);
  };
  
export { StoreProvider, useStoreContext };