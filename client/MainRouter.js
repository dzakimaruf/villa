import React from 'react'
import { Switch, Route } from "react-router-dom";
import MainLayout from './views/MainLayout'
import Home from './views/Home';
import Villa from './views/Villa';
import Booking from './views/Booking';


const MainRouter = () => {
  return (<>
    <Switch>
      <MainLayout >

        <Route exact path="/hr/dashboard/" component={Home} />
        <Route exact path="/hr/villa" component={Villa}/>
        <Route exact path="/hr/booking" component={Booking}/>

      </MainLayout>
    </Switch>


  </>)
}

export default MainRouter