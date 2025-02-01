const INIT_STATE = {
    cart: []
}

const cartReducer = (state = INIT_STATE, action) =>{
    switch(action.type){
        case 'PUSH NEW PRODUCT':
            //validar stock
            return {
                ...state, cart: [...state.cart, action.payload]
            };
        default:
            return state;
    }
}

export default cartReducer