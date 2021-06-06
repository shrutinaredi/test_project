import React from 'react';
import _ from "lodash";
import {useDispatch, useSelector} from "react-redux";
import {getEpisodes} from "../actions/animeListActions"

const Episodes = () => {
    const dispatch = useDispatch(); 
    const Episodes  = useSelector(state => state.episodes);
    React.useEffect(() => {
        dispatch(getEpisodes())  
    },[dispatch])

    const ShowData = () => {
        if(!_.isEmpty(Episodes.data)){
            return(
                <div className="episodeswrapper">
                    {
                        Episodes.data.map(e => {
                            return(
                                <div key={e.episode} className = {"eachepisode"}>
                                    
                                    {/* <ul> */}
                                        <p>{e.episode}</p>
                                        <p>Name: {e.name}</p>
                                        <p>Air-Date : {e.air_date}</p>
                                        <p>characters count: {e.characters.length} </p>    
                                    {/* </ul> */}
                                                                       </div>

                            )
                        })
                    }
                </div>
            ) 
            
        }
        if(Episodes.errorMsg !== ""){
            return <p>{Episodes.error}</p>
        }
        if(Episodes.loading){
            return <p>......loading......</p>
        }
        return <p>cant get the data from api</p>
    }

    return(
        <div >
            {ShowData()}
        </div>
    )
}

export default Episodes