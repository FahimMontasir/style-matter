import React, { useState } from 'react';
import { Button, Menu, MenuItem } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const ToggleStatus = ({ handleStatus }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <ExpandMoreIcon />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => { handleStatus("Pending"); handleClose() }}>Pending</MenuItem>
        <MenuItem onClick={() => { handleStatus("Ongoing"); handleClose() }}>Ongoing</MenuItem>
        <MenuItem onClick={() => { handleStatus("Done"); handleClose() }}>Done</MenuItem>
      </Menu>
    </div>
  )
}
export default ToggleStatus;
