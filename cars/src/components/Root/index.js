import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { store } from "../../redux/store/storeConfig";
import Home from "../Home";
import Login from "../Login";
import AddCar from "../AddCar";
import Cart from "../Cart";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "../../redux/store/storeConfig";

const Root = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/add-car" component={AddCar} />
            <Route exact path="/cart" component={Cart} />
            <Route path="/edit-car/:id" component={AddCar} />
          </Switch>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};

export default Root;
