import { createStore } from 'redux';

// TODO: WHY?
// this might be overkill
// i did on redux to avoid event emitter, since redux footprint
// isn't too whopping
const storeBuilder = (current) => {
  const initialState = {
    current,
    displayer: null,
    opened: false
  }

  const actions = {
    setValue(data) {
      return {
        type: 'SET_VALUE',
        data
      }
    },
    open() {
      return {
        type: 'OPEN'
      }
    },
    close() {
      return {
        type: 'CLOSE'
      }
    },
    nextMonth() {
      return {
        type: 'NEXT_MONTH'
      }
    },
    prevMonth() {
      return {
        type: 'PREV_MONTH'
      }
    }
  }

  const reducer = (state = initialState, action) => {
    const {type, data} = action;


    switch (type) {
      case 'OPEN':
        return {
          ...state,
          opened: true
        }
      case 'CLOSE':
        return {
          ...state,
          opened: false
        }
      case 'PREV_MONTH':
        return {
          ...state,
          current: state.current.clone().subtract(1, 'month')
        }
      case 'NEXT_MONTH':
        return {
          ...state,
          current: state.current.clone().add(1, 'month')
        }
      case 'SET_VALUE':
        return {
          ...state,
          value: data
        }
      default:
        return state;
    }
  }

  const store = createStore(reducer);

  return {
    store,
    dispatch: store.dispatch.bind(store),
    subscribe: store.subscribe.bind(store),
    getState: store.getState.bind(store),
    actions
  };
}

export default storeBuilder;