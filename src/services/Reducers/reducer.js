export default function cardItemts(state=[],action){

    switch(action.type){

        case "ADD_TO_CART":
            console.log("reducer",action.type)
            return[
                ...state,
                {cardData:action.data}
            ]
            default:
                return state
    }

}