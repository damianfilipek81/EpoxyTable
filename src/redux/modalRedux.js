/* selectors */

export const getModalData = ({ modal }) => modal;

/* action name creator */
const reducerName = 'modal';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const MODAL_OPEN = createActionName('MODAL_OPEN');
const MODAL_CLOSE = createActionName('MODAL_CLOSE');


/* action creators */
export const modalOpen = payload => ({ payload, type: MODAL_OPEN });
export const modalClose = payload => ({ payload, type: MODAL_CLOSE });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case MODAL_OPEN:
      return action.payload

    case MODAL_CLOSE:
      return action.payload

    default:
      return statePart;
  }
}