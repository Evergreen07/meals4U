
export const menuItemsReducers = (state = { foodItems : [] }, action) => {
    switch (action.type) {
        case 'MENU_LIST_REQUEST':
            return {
                loading : true,
                foodItems : []
            }

        case 'MENU_LIST_SUCCESS':
            return {
                loading : false,
                foodItems : action.payload
            }

        case 'MENU_LIST_FAIL':
            return {
                loading : false,
                error : action.payload
            }
            
        default:
            return state
    }
}

export const menuDetailsReducers = (state = { recipeItems : [] }, action) => {
    switch (action.type) {
        case 'MENU_DETAILS_REQUEST':
            return {
                loading : true, 
                recipeItems : []
            }

        case 'MENU_DETAILS_SUCCESS':
            return {
                loading : false,
                recipeItems : action.payload
            }

        case 'MENU_DETAILS_FAIL':
            return {
                loading : false,
                error : action.payload
            }
            
        default:
            return state
    }
}