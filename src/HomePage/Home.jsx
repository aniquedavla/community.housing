import React from 'react';
import { Button } from 'reactstrap';
import Search from './Search';
import Title from './Title';
import findHouse from '../FindHousing/findHouse';
import HomeNavBar from './HomeNavBar';


//home page component to let the user search a community or creat a community
class Home extends React.Component {
  render() {

    return (
      <div className="App">
        <HomeNavBar />
        <Title/>
          <form>
            <label>
                <input placeholder="  enter a community" style={{width: "500px", height: "35px", borderRadius: '100px', borderColor: 'black'}}
                  type="text" name="name" />
            </label>
          </form>
        <Search/>
      </div>

    );
  }
}

export default Home;
