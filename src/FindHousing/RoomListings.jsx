import React from 'react';
import Fire from '../FireDbConfig/Fire';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import ListTileCard from './ListTileCard';

 class RoomListings extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            roomsList: []
        }
    }
    
    componentDidMount(){
        var database = Fire.database();

        let rooms = [];

        var ref = database.ref('housePosts');
        // console.log(snapshot.child('firstName').val());
        // console.log(snapshot.child('lastName').val());
        // console.log(snapshot.child('email').val());
        // posterName = snapshot.child('firstName').val() + " " + snapshot.child('lastName').val();
        // email = snapshot.child('email').val();
        ref.on('value', (snapshot) => {
            let posts = snapshot.val();
            for (let post in posts) {
            // newState.push({
            //   id: item,
            //   title: items[item].title,
            //   user: items[item].user
            // });
            rooms.push({
                poster:posts[post].posterName,
                description: posts[post].description,
                mainImage: posts[post].imagesUrls[0],
                postCity: posts[post].city,
                rentCost:posts[post].reantCost,
                baths:posts[post].numberOfBaths,
                rooms:posts[post].numberOfRooms
            });

            console.log(posts[post].posterName)
            console.log(posts[post].imagesUrls[0])
            }

            this.setState({
            roomsList: rooms
            })

        });

    }
    render() {
        const classes = makeStyles(theme => ({
            root: {
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-around',
                overflow: 'hidden',
                backgroundColor: theme.palette.background.paper,
                padding: '5px',
                width: 'auto',
                height: 'auto',
            },
            gridList: {
            },
            icon: {
                color: 'rgba(255, 255, 255, 0.54)',
            },
            }));
            
      return(
            <div className={classes.root}>
            <GridList cellHeight={180} className={classes.gridList}>
                {this.state.roomsList.map((post) => {
                    return (
                        <ListTileCard name={post.poster} mainimageLink={post.mainImage}
                        postDescription={post.description} cityName={post.postCity} rentCost={post.rentCost} rooms={post.rooms} baths={post.baths} />
                    )}
                )}
            </GridList>
            </div>
        );
    };
}
export default RoomListings