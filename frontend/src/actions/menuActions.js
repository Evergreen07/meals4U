import axios from 'axios'

export const getMenuItems = (recipe) => async (dispatch) => {
    try {
        dispatch({
            type : 'MENU_LIST_REQUEST'
        })

        const api_id = process.env.REACT_APP_API_ID;
        const api_key = process.env.REACT_APP_API_KEY;

        const res = await axios.get(
            `https://api.edamam.com/api/recipes/v2?type=public&q=${recipe}&app_id=${api_id}&app_key=${api_key}`, {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET',
                    'Content-Type': 'application/json',
                  },
            }
        )

        dispatch({
            type : 'MENU_LIST_SUCCESS',
            payload : res.data
        })
    } catch (error) {
        dispatch({
            type : 'MENU_LIST_FAIL',
            payload : error.message
        })
    }
}


export const getMenuDetails = (id) => async (dispatch) => {
    try {
        dispatch({
            type : 'MENU_DETAILS_REQUEST'
        })

        const { data } = await axios.get(`https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=628e9197&app_key=56b0197e0156574d4836f13d450d5227`,{
            headers: {"Access-Control-Allow-Origin": "*"}
        })
        console.log(data);
        dispatch({
            type : 'MENU_DETAILS_SUCCESS',
            payload : data
        })
    } catch (error) {
        dispatch({
            type : 'MENU_DETAILS_FAIL',
            payload : error.message
        })
    }
}