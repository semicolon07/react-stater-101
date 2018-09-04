import * as React from 'react';
import createHistory from 'history/createBrowserHistory';
import Logo from '../components/logo';
import Navbar from '../components/nav-bar';
import { Link, Router } from 'react-router-dom';
import { Route } from 'react-router';
import Home from './Home';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';

const history = createHistory({ basename: '/_m' });

class App extends React.Component {
    public render() {
        return (
            <Router history={history}>
                <div>
                    <Navbar>
                        <Link to="/">
                            <Logo/>
                        </Link>

                        <Link to="/page1">
                            <Navbar.Button>Page 1</Navbar.Button>
                        </Link>

                        <Link to="/page2">
                            <Navbar.Button>Page 2</Navbar.Button>
                        </Link>

                        <Link to="/page3">
                            <Navbar.Button>Page 3</Navbar.Button>
                        </Link>
                    </Navbar>

                    <Route exact={true} path="/" component={Home}/>
                    <Route path="/page1" component={Page1}/>
                    <Route path="/page2" component={Page2}/>
                    <Route path="/page3" component={Page3}/>
                </div>
            </Router>
        );
    }
}

export default App;
