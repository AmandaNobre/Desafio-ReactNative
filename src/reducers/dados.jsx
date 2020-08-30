export const INITIAL = {
    list: [],
    resultadoFiltro: null
}

const dados = (state = INITIAL, action) => {
    let filtro = null

    switch (action.type) {
        case 'RECEBER_DADOS':
            return {
                ...state,
                list: action.payload
            }
        case 'Module_id':
            state.resultadoFiltro == null ? filtro = state.list : filtro = state.resultadoFiltro
            let resultadoModule = filtro.filter((dados) => {
                return dados.resource.module_id === action.payload
            })
            resultadoModule.length == 0 ? resultadoModule = null : false
            return {
                ...state,
                resultadoFiltro: resultadoModule
            }
        case 'Language_id':
            state.resultadoFiltro == null ? filtro = state.list : filtro = state.resultadoFiltro
            let resultadoLanguage = filtro.filter((dados) => {
                return dados.resource.language_id === action.payload
            })
            resultadoLanguage.length == 0 ? resultadoLanguage = null : false
            return {
                ...state,
                resultadoFiltro: resultadoLanguage
            }
        case 'Value':
            state.resultadoFiltro == null ? filtro = state.list : filtro = state.resultadoFiltro
            let resultadoValue = state.list.filter((dados) => {
                return dados.resource.value === action.payload

            })
            resultadoValue.length == 0 ? resultadoValue = null : false
            return {
                ...state,
                resultadoFiltro: resultadoValue
            }
        case 'LIMPAR_FILTRO':
            return {
                ...state,
                resultadoFiltro: null
            }
        default:
            return state
    }
}

export default dados