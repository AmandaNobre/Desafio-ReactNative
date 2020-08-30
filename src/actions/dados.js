import dados from '/home/amanda/Documentos/projetos/native/SrMilo/src/dados/get_resources_since.json'


const RECEBER_DADOS = 'RECEBER_DADOS'
const LIMPAR_FILTRO = 'LIMPAR_FILTRO'

const list = dados

export const receberDados = () => async dispatch => {
    return dispatch({
        type: RECEBER_DADOS,
        payload: list
    })
}

export const filtrarDados = (value) => async dispatch => {
    return dispatch({
        type: value.type,
        payload: value.value
    })
}

export const limparFiltro = () => async dispatch => {
    return dispatch({
        type: LIMPAR_FILTRO,
        ṕayload: list
    })
}
