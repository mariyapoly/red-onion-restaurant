import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './pages/Home/Home/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUp from './pages/SignUp/SignUp';
import LogIn from './pages/LogIn/LogIn';
import AuthProvider from './Context/AuthProvider';
import MenuDetails from './pages/MenuDetails/MenuDetails';



function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/signup">
            <SignUp></SignUp>
          </Route>
          <Route exact path="/login">
            <LogIn></LogIn>
          </Route>
          <Route exact path="/menu/:id">
            <MenuDetails></MenuDetails>
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
