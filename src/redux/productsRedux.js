/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

export const compareProducts = ({ products }) =>
  products.filter(product => product.compare === true);

//action name creator
const reducerName = 'products';
const createActionName = name => `app/${reducerName}/${name}`;

//action types
export const COMPARING_ADD_REMOVE = createActionName('COMPARING_ADD_REMOVE');

//action creators
export const comparingAddRemove = productId => ({
  payload: { productId },
  type: COMPARING_ADD_REMOVE,
});

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case COMPARING_ADD_REMOVE: {
      const maxQuantity = 4;
      const productIndex = statePart.findIndex(
        ({ id }) => id === action.payload.productId
      );
      const compareLenght = statePart.filter(product => product.compare).length;

      if (compareLenght === maxQuantity && !statePart[productIndex].compare) {
        return statePart;
      }

      statePart[productIndex] = {
        ...statePart[productIndex],
        compare: !statePart[productIndex].compare,
      };
      return [...statePart];
    }
    default:
      return statePart;
  }
}
