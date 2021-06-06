const default_state = {
    loading : false,
    data : [],
    errorMsg : ""
}

const animeListReducer = (state = default_state,action) =>{
    switch(action.type){
        case "animeListLoading":
            return(
                {
                    ...state,
                    loading: true
                }
            )

        case "animeListFailed":
            return(
                {
                    ...state,
                    loading: false,
                    errorMsg : "cant get the list data" 
                }
            )
        
        case "animeListLoaded":
            return(
                {
                    ...state,
                    loading: false,
                    data: action.payload,
                    errorMsg : "" ,
                }
            )
        default : 
                return {...state}
    }
}

export default animeListReducer;