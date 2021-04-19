import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Jumbotron from 'react-bootstrap/Jumbotron';


const Youtube =() =>{
return (
   <Jumbotron className="bg-info" >
      <container >
        <h1>YouTube viewers app </h1>
        <p>
          Number of People online watching 
        </p>
      </container>
    </Jumbotron>
  );
}


export default Youtube;