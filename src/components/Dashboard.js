import React from "react";
import { BrowserRouter as Router,Route,Switch,Link } from "react-router-dom";
import addbook from "./addbook";
import bookList from "./BookList";
function dashboard(){
    return(
        <Router>
        <div className="container">
            <nav className="btn btn-warning navbar navbar-expand-lg navheader">
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to={'/addbook'} className="nav-link">Add New Book</Link>
                        </li>
                        <li>
                            <Link to={'/bookList'} className="nav-link">Book List</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <br/>
            <Switch>
                <Route exact path="/addbook" Component={addbook}/>
                <Route path="/bookList" Component={bookList}/>
            </Switch>
        </div>
    </Router>
    )
}

export default dashboard;