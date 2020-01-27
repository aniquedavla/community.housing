import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';


class HouseCard extends React.Component {
  render() {
    return (
      <div className="HouseCard">
        <Card>
          <CardImg top width="100%" src="/Images/roomimage.jpg" alt="Card image cap" />
          <CardBody>
            <CardTitle>San Jose</CardTitle>
            <CardSubtitle>Muslims Community</CardSubtitle>
            <CardText>Hello everyone, I am looking for a two roomates to occupy one bedroom in 2b/2bath apartment......</CardText>
            <Button color="secondary"> View </Button>{' '}
          </CardBody>
        </Card>
      </div>
    );
  }
}



export default HouseCard;
