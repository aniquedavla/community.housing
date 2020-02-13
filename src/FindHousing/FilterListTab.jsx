import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';
import PopUpMenu from './PopUpMenu';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function FilterListTab() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper square className={classes.root}>
      <Tabs 
        fixed
        centered
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="secondary"
        textColor="secondary"
        aria-label="icon label tabs example"

      >
        <Tab icon={<AttachMoneyIcon />} label="Price" />
        <Tab icon={<DirectionsWalkIcon />} label="Distance" />
        <Tab icon={<PersonPinIcon />} label="Recent" />
        <PopUpMenu/>
      </Tabs>
    </Paper>
  );
}
