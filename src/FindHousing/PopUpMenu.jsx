import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import WcIcon from '@material-ui/icons/Wc';

export default function PopupMenu() {
  return (
    <PopupState variant="popover" popupId="gender-popup-menu">
      {popupState => (
        <React.Fragment>
          <Tab icon={<WcIcon></WcIcon>} label="Gender" variant="contained" color="inherit" {...bindTrigger(popupState)}></Tab>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}>Male</MenuItem>
            <MenuItem onClick={popupState.close}>Female</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}
