import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  Home,
  Dashboard,
  Register,
  Edit,
  Error,
  PrivateRoute,
  About,
  Contact,
  Privacy,
  Policy
} from "./pages";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <PrivateRoute path="/dashboard" exact>
          <Dashboard />
        </PrivateRoute>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/edit/:id">
          <Edit />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/Privacy">
          <Privacy />
        </Route>
        <Route path="/Policy">
          <Policy />
        </Route>

        <Route path="*">
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
