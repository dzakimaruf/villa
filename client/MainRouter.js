import React from 'react'
import { Switch, Route } from "react-router-dom";
import MainLayout from './views/MainLayout';
import Home from './views/Home';
import Villa from './views/villas/Villa';
import User from './views/users/User';



const MainRouter = () => {
  return (<>
    <Switch>
      <MainLayout >

        <Route exact path="/hr/user" component={User}/>
        <Route exact path="/hr/dashboard/" component={Home} />
        <Route exact path="/hr/villas" component={Villa}/>

      </MainLayout>
    </Switch>


  </>)
}

export default MainRouter