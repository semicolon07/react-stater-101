import * as React from 'react';
import { Link } from 'react-router-dom';
import Page4 from './Page4';
import { Route } from 'react-router';
import Page5 from './Page5';

class Page3 extends React.Component {
    public render() {
        const {match} = this.props as any;

        return (
            <div>
                Page3 ja
                <br/>

                <ul>
                    <li><Link to={match.url + "/page4"}>Page 4</Link></li>
                    <li><Link to={match.url + "/page5"}>Page 5</Link></li>
                </ul>

                <Route path={match.url + "/page4"} component={Page4}/>
                <Route path={match.url + "/page5"} component={Page5}/>
            </div>
        );
    }
}

export default Page3;