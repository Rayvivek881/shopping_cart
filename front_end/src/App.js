import './App.css';
import {GlobalProvider} from "./Components/GlobalStorages/GlobalStorage1";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainNavBar from "./Components/NavComponents/NavBar";
import SignIn from "./Components/Athuntication/SignIn";
import SignUp from "./Components/Athuntication/SignUp";

function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <Router>
          <MainNavBar/>
          <Routes>
            <Route exact path="/signIn" element={<SignIn />}/>
            <Route exact path="/signUp" element={<SignUp />}/>
          </Routes>
        </Router>
      </GlobalProvider>
    </div>
  );
}

export default App;
