import React from "react";
import _ from "lodash";
import {useDispatch, useSelector} from "react-redux";
import {getAnimeList} from "../actions/animeListActions"
import {Link} from "react-router-dom"
import {useState} from "react"
import ReactPaginate from "react-paginate";


const PokemonList = (props) => {
    let pageid= props.match.params.page
    const dispatch = useDispatch(); 
    const animeList  = useSelector(state => state.animeList);
    const [search, setsearch] = useState("")
    const perpage =15;

    React.useEffect(() => {
        dispatch(getAnimeList())  
    },[dispatch])

    var dict = {}
    animeList.data.forEach(e=>{
        if(dict[e.name] === undefined)
            dict[e.name.toLowerCase()] = [e.id]    
    })
    const ShowData = () => {
        if(!_.isEmpty(animeList.data)){

            return(
                <div className ={"list-wrapper"}>
                    {animeList.data.slice((pageid-1)*perpage , pageid*perpage).map(e0 => {
                    // dict[e0.name]= e0.id;
                    return(
                    <div key={e0.id} className={"person-item"}>
                        <p>{e0.name}</p>
                        <Link  to={`/char/${e0.id}`}>Details</Link>
                    </div>
                    )
            })}
                </div>
            ) 
            
        }
        if(animeList.errorMsg !== ""){
            return <p>{animeList.errorMsg}</p>
        }
        if(animeList.loading){
            return <p>......loading......</p>
        }
        return <p>cant get the data from api</p>
    }
    return(
        <div>
            
            <div className="search-wrapper">
                <input type="text"  onChange={e => setsearch(e.target.value)}></input>
                <button onClick= {() => props.history.push(`/char/${dict[search.toLowerCase()]  }`)}>Search</button>
            </div>  
            {ShowData()} 
            {!_.isEmpty(animeList.data) && (
                <ReactPaginate 
                    pageCount={animeList.data.length/perpage} 
                    pageRangeDisplayed = {2}
                    marginPagesDisplayed = {1}
                        
                    onPageChange = {(pageIndex)=> {
                        pageid=pageIndex.selected+1
                        props.history.push(`/page/${pageid}`) 
                    }}

                    containerClassName = {"pagination"}    

                />
            )} 
        </div>
    )

    
};

export default PokemonList;