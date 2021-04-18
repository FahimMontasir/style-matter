import React, { useContext, useEffect, useState } from 'react';
import { makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, IconButton } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { userContext } from '../../../../App';

const ManageService = (props) => {
  const classes = useStyle();
  const [userInfo, setUserInfo, isAdmin] = useContext(userContext);
  const [allServices, setAllServices] = useState([])
  const handleDelete = (id) => {
    setAllServices(allServices.filter(service => service._id !== id))
    fetch(`http://localhost:5000/delete/${id}`, {
      method: 'DELETE',
    })
      .then(result => console.log(result))
      .catch(res => console.log(res))
  }
  useEffect(() => {
    fetch('http://localhost:5000/all-services')
      .then(res => res.json())
      .then(data => setAllServices(data));
  }, [])
  return (
    <>
      {
        isAdmin &&
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Service Name</TableCell>
                <TableCell align="center">Service Descriptions</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                allServices.map(service => (
                  <TableRow key={service._id}>
                    <TableCell component="th" scope="row">{service.title}</TableCell>
                    <TableCell align="center">{service.description}</TableCell>
                    <TableCell align="center">
                      <IconButton aria-label="delete button" onClick={() => handleDelete(service._id)}>
                        <DeleteForeverIcon fontSize="large" color="primary" />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))
              }
            </TableBody>
          </Table>
        </TableContainer>
      }
    </>
  )
}
export default ManageService;

const useStyle = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
}));