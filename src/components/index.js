import React from "react";
// react router
import { BrowserRouter as Router, Route,Routes} from "react-router-dom";

//pages
import Home from './Home'
import Navbar from "./Navbar";
import AdminPage from "./admin/AdminPage";
import UserPage from "./user/UserPage";

const index = () => {
  return (

      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" component={Home} />
           
          <Route path="/UserPage" component={AdminPage} />
            
          <Route path="/AdminPage" component={UserPage} />
            
        </Routes>
      </Router>

  );
};

export default index;
