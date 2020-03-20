import { CLICK_UPDATE_VALUE} from './actionTypes';

export const cabecalhoAcao = value =>({
	type: CLICK_UPDATE_VALUE,
	pagina_ativa: value
})