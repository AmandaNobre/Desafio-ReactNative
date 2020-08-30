const RECEBER_DADOS = 'RECEBER_DADOS'
const FILTRAR = 'FILTRAR'

const list = [{
    resource: {
        created_at: "2016-03-03T20:50:17Z",
        updated_at: "2020-05-05T12:38:26Z",
        resource_id: "whatsnew",
        module_id: "GreenMileTrack",
        value: "What's New",
        language_id: "en"
    }
},
{
    resource: {
        created_at: "2020-05-05T14:33:14Z",
        updated_at: "2020-05-05T14:33:14Z",
        resource_id: "driver.loading.data",
        module_id: "GreenMileDriver",
        value: "Cargando datos...",
        language_id: "es"
    }
}]

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
