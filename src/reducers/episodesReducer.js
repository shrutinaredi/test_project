const default_state = {
    loading : false,
    data : [],
    errorMsg : ""
}
const episodesReducer = (state = default_state,action) =>{
    switch(action.type){
        case "EpisodeLoading":
            return(
                {
                    ...state,
                    loading: true
                }
            )

        case "EpisodeFailed":

            return(
                {
                    ...state,
                    loading: false,
                    errorMsg : "cant get the list data" 
                }
            )
        
        case "EpisodeLoaded":
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

export default episodesReducer;