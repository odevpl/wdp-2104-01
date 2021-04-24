/* selectors */
export const getWindowWidth = state => state.options.size;

//action name creator
const reducerName = 'options';
const createActionName = name => `app/${reducerName}/${name}`;

//action types
const CHANGE_WIDTH = createActionName('CHANGE_WIDTH');

//action creators
export const changeWidth = payload => ({ payload, type: CHANGE_WIDTH });

/* reducer */
export default function reducer(statePart = {}, action = {}) {
  switch (action.type) {
    case CHANGE_WIDTH: {
      return {
        size: action.payload,
      };
    }
    default:
      return statePart;
  }
}
