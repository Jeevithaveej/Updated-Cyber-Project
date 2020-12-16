import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PersonalDetails from './PersonalDetails';
import AdditionalDetails from './AdditionalDetails';
import SecurityIncidents from './SecurityIncidents';

const ProvideMyDetails = () => {



  
    return  (
      <Router>
              <div>
             
                <nav>
                  <ul >
                    <li>
                      <Link to="/c1">Personal Details</Link>
                    </li>
                    <li>
                      <Link to="/c2">Additional Details</Link>
                    </li>
                    <li>
                      <Link to="/c3">Security Incidents & Loss History</Link>
                      
                    </li>
                  </ul>
                </nav>
                

                 <Route path="/c1" exact component={PersonalDetails} />
                 <Route path="/c2" component={AdditionalDetails} />
                 <Route path="/c3" component={SecurityIncidents} />
              </div>
        </Router>
      // <div className="form-content-right">
      // <form className="providemydetails">
      // <div><button className='form-input-btn' type='submit'>
      // Personal Details
      // </button><br/>
      // <button className='form-input-btn' type='submit' >
      // Additional Details
      // </button><br/>
      // <button className='form-input-btn' type='submit' >
      // Security Incidents
      // </button>
      // </div>
      // </form>
      // </div>
      )
    
}
export default ProvideMyDetails
