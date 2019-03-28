import React, {Component, Fragment} from 'react';
import {Container} from "reactstrap";
import {Route, Switch} from "react-router-dom";

import Toolbar from "./components/UI/Toolbar/Toolbar";
import Products from "./containers/Products/Products";
import NewProduct from "./containers/NewProduct/NewProduct";

class App extends Component {
  render() {
    return (
      <Fragment>
        <header>
            <Toolbar/>
        </header>
        <Container style={{marginTop: '20px'}}>
            <Switch>
                <Route path="/" exact component={Products} />
                <Route path="/products/new" exact component={NewProduct} />
            </Switch>
        </Container>
      </Fragment>
    );
  }
}

export default App;