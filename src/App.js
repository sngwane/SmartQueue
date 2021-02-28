import "./styles.css";
import { Header } from "./Header";
import { Welcome } from "./Welcome";
import { Footer } from "./Footer";
import { Services } from "./Services";
import { Queue } from "./Queue";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Header />

      <div className="container">
        <Router>
          <Switch>
            <Route path="/welcome" component={Welcome} />
            <Route path="/services" component={Services} />
            <Route path="/queue" component={Queue} />
            <Redirect from="*" to="/welcome" />
          </Switch>
        </Router>
      </div>
      <Footer />
    </div>
  );
}
