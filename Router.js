import React from "react";
import Mobile from '../../components/Mobile';
import Homee from '../Homee';
import Cars from '../contain/Cars';






import {BrowserRouter as Router,Route,Link,Switch} from "react-router-dom";
import Houses from "../contain/Houses";
import Lands from "../contain/Lands";
import Motercycles from "../contain/Motercycles";
import Tablets from "../contain/Tablets";
import Tv from "../contain/Tv";
import Log from '../contain/Log';
import SignIN from '../SignIn';
import SignUp from "../SignUp";
import Chat from "../Chat";







class AppRouter extends React.Component{
    render(){
        return(
                <Switch>
                <Route exact path='/' component={Homee} />
                <Route exact path='/Mobile' component={Mobile} />
                <Route exact path='/Cars' component={Cars} />
                <Route exact path='/Houses' component={Houses} />
                <Route exact path='/Lands' component={Lands} />
                <Route exact path='/Motercycles' component={Motercycles} />
                <Route exact path='/Tablets' component={Tablets} />
                <Route exact path='/Tv' component={Tv} />
                <Route exact path='/Log' component={Log} />
                <Route exact path='/SignIn' component={SignIN} />
                <Route exact path='/SignUp' component={SignUp} />
                <Route exact path='/Mobile/Chat' component={Chat} />







                </Switch>
        );
    }
}

export default AppRouter