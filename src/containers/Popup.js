import React from  "react"
import './Popup.css'
import { getLocation } from '../actions/animeListActions';
import {useSelector,useDispatch} from "react-redux"
import _ from "lodash";


function Popup(props){
    const loc_link = props.loc_link;
    const dispatch = useDispatch()
    const locstate = useSelector( state => state.location)
    React.useEffect(()=>{
        dispatch(getLocation(loc_link))
    },[loc_link,dispatch])

    const ShowData = ()=> {
        if(locstate.loading){
            return <p>.....loading.....</p>
        }

        console.log(locstate.data[loc_link])
        if(!_.isEmpty(locstate.data[loc_link])){
            return (
                    <div className={"results"}>
                       <p>location name - {locstate.data[loc_link].name}</p>
                       <p>location type - {locstate.data[loc_link].type}</p>
                       <p>location dimension - {locstate.data[loc_link].dimension}</p> 
                       <p>no of residents - {locstate.data[loc_link].residents.length}</p>
                    </div>
            )
        }
        if(locstate.errorMsg !== ""){
            return <p>{locstate.errorMsg}</p>
        }
        
        return <p>error getting charecter </p>
        
    } 

    return(props.trigger)?(
        <div className={"popup"}>
            <div className={"popup-inner"}>
                    {ShowData(loc_link)}

                <button  className={"close_btn"} onClick={()=>props.setTrigger(false)}>
                    X
                </button>
                {props.children}
            </div>

        </div>
    ):"" 
}
 
export default Popup