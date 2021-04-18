import React from 'react';
import { Route, Switch } from 'react-router';
import AddService from '../Admin/AddService/AddService';
import MakeAdmin from '../Admin/MakeAdmin/MakeAdmin';
import ManageService from '../Admin/ManageService/ManageService';
import OrderList from '../Admin/OrderList/OrderList';
import AddReview from '../Customar/AddReview/AddReview';
import BookingList from '../Customar/BookingList/BookingList';
import BookNow from '../Customar/BookNow/BookNow';

const SideBarRoute = (props) => {

  return (
    <div>
      <Switch>
        <Route path="/dashboard/book/:id">
          <BookNow />
        </Route>
        <Route path="/dashboard/booking-list">
          <BookingList />
        </Route>
        <Route path="/dashboard/review">
          <AddReview />
        </Route>
        <Route path="/dashboard/order-list">
          <OrderList />
        </Route>
        <Route path="/dashboard/add-service">
          <AddService />
        </Route>
        <Route path="/dashboard/make-admin">
          <MakeAdmin />
        </Route>
        <Route path="/dashboard/manage-services">
          <ManageService />
        </Route>
      </Switch>
    </div>
  )
}
export default SideBarRoute;
