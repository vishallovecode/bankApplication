import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Tab from './Tab';
import BankDetails from './BankDetails';
function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Tab />
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/bank-details/:pincode" component={BankDetails} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;

