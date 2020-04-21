import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import AccessAlarmsIcon from '@material-ui/icons/AccessAlarms';
import RoomsList from './RoomsList';


const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: 1000,
    
  },
});

export default function FilterListTab(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
    if(newValue === 2)
    {
      sortByPrice();
    }

    if(newValue === 0)
    {
      sortRecent();
    }
  };

  const sortByPrice = () =>
  {
    
    props.sortFun();
  }

  const sortRecent = () =>
  {
    
    props.sortRecentFun();
  }

  return (
    <div className="tabs">
    <Paper square className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="standard"
        indicatorColor="secondary"
        textColor="secondary"
        aria-label="icon label tabs example"
        sm={6}
      >
        <Tab  icon={<AccessAlarmsIcon />} label="RECENTS" />        
        <Tab icon={<PersonPinIcon />} label="NEARBY" />
        <Tab icon={<AttachMoneyIcon />} label="PRICE" />
        <Tab icon={<FavoriteIcon />} label="FAVORITES" />
      </Tabs>
    </Paper>
    </div>
  );
}