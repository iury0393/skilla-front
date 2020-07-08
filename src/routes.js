import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from "./components/Nav";
import Container from "./styles/Container";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Explore from "./pages/Explore";
import DetailedPost from "./pages/DetailedPost";
import EditProfile from "./pages/EditProfile";
import SuggestionsPage from "./pages/SuggestionsPage";
import Opportunities from "./pages/Opportunities";
import Shop from "./pages/ShopPage/shop.component.jsx";
import Checkout from "./pages/checkout/checkout.component"

const Routing = () => {
  return (
    <Router>
      <Nav />
      <Container>
        <Switch>
          <Route path="/explore" component={Explore} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/shop" component={Shop} />
          <Route path="/opportunities" component={Opportunities} />
          <Route path="/suggestions" component={SuggestionsPage} />
          <Route path="/p/:postId" component={DetailedPost} />
          <Route path="/accounts/edit" component={EditProfile} />
          <Route path="/:username" component={Profile} />
          <Route path="/" component={Home} />
        </Switch>
      </Container>
    </Router>
  );
};

export default Routing;
