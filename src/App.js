import './App.css';
import React from 'react';
import {Switch, Route , NavLink , Redirect} from "react-router-dom";
import PokemonList from './containers/pokemonlist';
import Pokemon from './containers/pokemon'
import Episodes from './containers/Episodes'

//react-redux
function App() {
  return (
    <div className ="App">
      <nav>
        <NavLink to={"/page/1"}>
          <div className="home">
              Home
          </div>
        </NavLink>
        <NavLink to = {"/episodes"}>
          <div className="home">
            Episodes
          </div>
        </NavLink>
      </nav>
      
      <Switch>  
        <Route path={"/page/:page"} exact component={PokemonList}></Route>
        <Route path={"/char/:id"} exact component={Pokemon}/>
        <Route path={"/episodes"} exact component={Episodes}/>
        <Redirect to ={"/page/1"} />
      </Switch>
    </div>
  );
}

export default App;
