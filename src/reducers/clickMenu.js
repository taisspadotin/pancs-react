import { CLICK_UPDATE_VALUE } from '../actions/actionTypes';

const initialState = {
  pagina_ativa: ''
};

export const clickMenu = (state = initialState, action) => {
  switch (action.type) {
    case CLICK_UPDATE_VALUE:
      return {
        ...state,
        pagina_ativa: action.pagina_ativa
      };
    default:
      return state;
  }
};
