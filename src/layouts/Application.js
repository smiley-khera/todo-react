import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Wrapper from "../components/Wrapper";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import EditTodoItem from "../components/EditTodoItem";

const Application = () => (
    <div>
        <MuiThemeProvider>
            <Router>
                <Switch>
                    <Route path="/" exact={true} component={Wrapper}/>
                    <Route path="/todo_items/:id/edit" exact={true} component={EditTodoItem}/>
                </Switch>
            </Router>
        </MuiThemeProvider>
    </div>
);

export default Application;
