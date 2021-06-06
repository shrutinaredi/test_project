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
const animeMultipleReducer = (state = default_state, action) => {
    switch(action.type){
        case "animeMultipleLoading":
            return{
                ...state,
                loading: true,
                errorMsg: ""
            }
        case "animeMultipleFailed":
            return{
               ...state,
                loading: false,
                errorMsg: "No such charecter available"
            }    

        case "animeMultipleLoaded":
            return{
               ...state,
                loading: false,
                errorMsg: "",
                    data: {
                    ...state.data,
                    [action.Id]: action.payload 
                }
            }    
        default: 
            return state
    }
} 

export default animeMultipleReducer