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
            console.log("case")

            if (this.state.resultadoFiltro == null) {
                filtro = this.state.list
                console.log("if")
            } else {
                filtro = this.state.resultadoFiltro
                console.log("else")
            }

            console.log("filtro", filtro)
            let resultadoModule = filtro.filter((dados) => {
                return dados.resource.module_id === action.payload
            })
            return {
                ...state,
                resultadoFiltro: resultadoModule
            }
        case 'Language_id':
            this.state.resultadoFiltro == null ? filtro = this.state.list : filtro = this.state.resultadoFiltro
            let resultadoLanguage = filtro.filter((dados) => {
                return dados.resource.language_id === action.payload

            })
            return {
                ...state,
                resultadoFiltro: resultadoLanguage
            }
        case 'Value':

            let resultadoValue = state.list.filter((dados) => {
                return dados.resource.value === action.payload

            })
            return {
                ...state,
                resultadoFiltro: resultadoValue
            }
        default:
            return state
    }
}

export default dados