const default_state = {
    loading: false,
    data: {},
    errorMsg: "",
}
// test = {
//     data ={
//         id1 = {}
//         id2 = {}
//     }
// }
const locationReducer = (state = default_state, action) => {
    switch(action.type){
        case "locationLoading":
            return{
                ...state,
                loading: true,
                errorMsg: ""
            }
        case "locationFailed":
            return{
               ...state,
                loading: false,
                errorMsg: "Its an unknown location"
            }    

            case "locationLoaded":
                return{
                   ...state,
                    loading: false,
                    errorMsg: "",
                    data: {
                        ...state.data,
                        [action.Link]: action.payload 
                    }
                }    
        default: 
            return state
    }
} 

export default locationReducer