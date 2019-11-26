import React from 'react';
import { Button } from 'reactstrap';
import Search from './Search';
import Title from './Title';



class Home extends React.Component {
  render() {

    return (
      <div className="App">

        <Title/>

          <form>
          <label>
              <input placeholder="  enter a community" style={{width: "450px", height: "35px", borderRadius: '100px', borderColor: 'black'}}
                type="text" name="name" />
          </label>
        </form>

        <Search/>
      </div>

    );
  }
}

export default Home;
