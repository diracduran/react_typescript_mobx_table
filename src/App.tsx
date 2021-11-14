import React from "react";
import { appStore } from "./stores/AppStore";
import {Props} from './types'
import { Provider } from "mobx-react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Worker from "./pages/Worker";
import './App.css';
import { configure } from "mobx";
import Table from "./components/Table";
import Controls from "./components/Controls";

configure({ enforceActions: 'observed' });


const stores = {
    appStore
}



const App = (props:Props) => {
    return (
        <Provider {...stores}>
            <Router>
                <Switch>
                    <Route path="/" exact>
                        <div>
                            <Table store={appStore} />
                            <Controls store={appStore} />
                        </div>
                    </Route>
                    <Route path="/:id">
                        <Worker store={appStore} />
                    </Route>
                </Switch>
            </Router>
        </Provider>
    );
  
}

export default App;