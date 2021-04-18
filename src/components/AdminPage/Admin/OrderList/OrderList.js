import React, { useContext, useEffect, useState } from 'react';
import { makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@material-ui/core';
import ToggleStatus from './ToggleStatus';
import { userContext } from '../../../../App';

const OrderList = (props) => {
  const [userInfo, setUserInfo, isAdmin] = useContext(userContext);
  const classes = useStyle();
  const [status, setStatus] = useState({});
  const handleStatus = (name) => {
    setStatus({ status: name })
  }
  const [orders, setOrders] = useState([])
  useEffect(() => {
    fetch('https://enigmatic-waters-35472.herokuapp.com/checkout')
      .then(res => res.json())
      .then(data => setOrders(data));
  }, [])
  const handleUpdate = (id) => {
    fetch(`https://enigmatic-waters-35472.herokuapp.com/update/${id}`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(status)
    })
      .then(result => console.log(result))
      .catch(res => console.log(res))
    setStatus(null)
  }
  return (
    <TableContainer component={Paper}>
      {isAdmin &&
        <>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="center">Email ID</TableCell>
                <TableCell align="center">Service</TableCell>
                <TableCell align="center">Status</TableCell>
                <TableCell align="center">Change status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map(order => (
                <TableRow key={order._id}>
                  <TableCell component="th" scope="row">{order.name}</TableCell>
                  <TableCell align="center">{order.email}</TableCell>
                  <TableCell align="center"> {order.title}</TableCell>
                  <TableCell align="center">{order.status}</TableCell>
                  <TableCell align="center">
                    <ToggleStatus handleStatus={handleStatus} menuStatus="done" />
                    {status ? <Button
                      onClick={() => handleUpdate(order._id)}
                      variant="contained" color="secondary"> Update </Button> :
                      <Button
                        disabled
                        variant="contained" color="secondary"> Click on Arrow </Button>}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </>
      }
    </TableContainer>
  )
}
export default OrderList;

const useStyle = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
}));