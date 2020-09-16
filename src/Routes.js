import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Episodes from './components/EpisodiosPersonaje';
import Init from './components/index';

export default function Routes(){
  return(
    <Switch>
      <Route exact path = "/episodes/:id" component = {Episodes}/>
      <Route exact path = "/" component = {Init}/>
    </Switch>
  )
}
