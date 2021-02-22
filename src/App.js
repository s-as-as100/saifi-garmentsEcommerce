import "./App.css";
import { connect } from "react-redux";
import * as React from "react";

import { Route, Switch, Redirect } from "react-router-dom";
import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/homepage/shop/shop.component";

import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/homepage/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { SetCurrentUser } from "./redux/user/user.actions";

import { selectCurrentUser } from "./redux/user/user.selectors";
import { createStructuredSelector } from "reselect";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { SetCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          SetCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }

      SetCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
const mapDispatchToProps = (dispatch) => ({
  SetCurrentUser: (user) => dispatch(SetCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
