import React, {Component, Fragment} from 'react';
import {Route, Switch} from "react-router-dom";
import Toolbar from "./components/UI/Toolbar/Toolbar";
import Items from "./containers/Items/Items";
import NewItem from "./containers/NewItem/NewItem";
import './App.css'
import fullInfo from "./components/fullInfo/fullInfo";
import EditItem from "./containers/EditItem/EditItem";
import EditFields from "./containers/EditItem/EditFields";
import AddFields from "./containers/EditItem/AddFields";

class App extends Component {
  render() {
    return (
      <Fragment>
        <header>
            <Toolbar/>
        </header>
        <div style={{marginTop: '20px'}}>
            <Switch>
                <Route path="/" exact component={Items} />
                <Route path="/fields/edit" exact component={EditFields} />
                <Route path="/fields/add" exact component={AddFields} />
                <Route path="/items/new" exact component={NewItem} />
                <Route path="/items/:id" exact component={fullInfo} />
                <Route path="/items/:id/edit" exact component={EditItem} />
            </Switch>
        </div>
      </Fragment>
    );
  }
}

export default App;