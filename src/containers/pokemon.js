import React from 'react';
import {useSelector,useDispatch} from "react-redux"
import { getAnime } from '../actions/animeListActions';
import _ from "lodash"
import Popup from "./Popup"
import {useState} from "react"

const Pokemon = (props) => {
    const charid = props.match.params.id
    const dispatch = useDispatch();
    const [buttonPopup, setbuttonPopup] = useState(false)
    const  animestate = useSelector(state => state.anime)
    React.useEffect(()=>{
        dispatch(getAnime(charid))
    },[charid,dispatch])

    
    const ShowData = () => {
        if(animestate.loading){
            return <p>.....loading.....</p>
        }
        
        if(animestate.errorMsg !== ""){
            return <div className="nochar">{animestate.errorMsg}</div>
        }
        
        if(!_.isEmpty(animestate.data[charid])){
            const char_data = animestate.data[charid]
            return(
                <div className = "char_wrapper">
                    
                    
                    <div className="base1"><h1>{char_data.name}</h1></div>
                    

                    <div className = "item1">
                        <img src={char_data.image} alt=""></img>
                    </div>
                    <br></br>
                    <br></br>
                    <div className="item2">
                        <h1>Information</h1>
                            <p>Gender   - {char_data.gender}</p>
                            {/* <p>Location : {char_data.origin.name}</p> */}
                            <div>
                                <p>Location</p>
                                <button className="locbutton" onClick={()=> setbuttonPopup(!buttonPopup)} >
                                {char_data.origin.name}</button>
                            </div>
                            
                                
                            <Popup trigger={buttonPopup} setTrigger={setbuttonPopup} loc_link={char_data.origin.url}>

                            </Popup>
                            <p>Species - {char_data.species}</p>
                            <p>Status - {char_data.status}</p>    
                    </div>
                    <br></br>
                    <div className= "item3">
                        <p> Number of episodes in which charecter appeared:  {char_data.episode.length}</p> 
                    </div>
                </div>
            )
        }
        return <div className="nochar"> error getting character </div>

    }
    return(
            
           <div className= {"full"}>
                <div className={"base"}>            
                    {ShowData()}
                </div>
           </div> 
           
    )
} ;

export default Pokemon
