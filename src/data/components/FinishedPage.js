import React, { Component } from 'react';



class FinishedPage extends Component {
    constructor(props) {
      super(props);
      this.state = {
      };
    }

  
    render() {
  
      return (
        <React.Fragment>
          <h1>Good choice, your pizza is below!</h1>
          <iframe src="https://giphy.com/embed/10kxE34bJPaUO4" width="200" height="200" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/pizza-space-cowboy-10kxE34bJPaUO4"></a></p>
          
        </React.Fragment>
      );
    }
  }
  
  export default FinishedPage;
  