import React from 'react';

import Coverflow from 'react-coverflow';
import solidLogo from '../Images/solidblocks2.PNG';
import vchainLogo from '../Images/vchain.png';
import augmindLogo from '../Images/augmind.png';
import hydroLogo from '../Images/hydro.png';
import propyLogo from '../Images/propy.png';
import moreLogo from '../Images/moretocome.png';


export class Carusel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: 0,
      display: 0,
    };
  }

  fn()
  {

  }

  render() {


    return(
       <div>

        {/* <button onClick={this._handleClick.bind(this)}>Expand</button> */}
        <Coverflow
          width={1960}
          height={380}
          displayQuantityOfSide={3}
          navigation={false}
          enableHeading={true}
          enableScroll={false}
          active={this.state.active}
        >
          <div
            onClick={() => this.fn()}
            onKeyDown={() => this.fn()}
            role="menuitem"
            tabIndex="0"
          >
          <img src={moreLogo} alt='more to come'/> 
          
          </div>
          
          <img src={propyLogo} alt='Propy' data-action="http://www.bbc.co.uk"/> 
          <img src={vchainLogo} alt='Vchain' data-action="https://www.vchain.tech/"/>
          <img src= {solidLogo} alt='SolidBlocks' data-action="https://www.solidblock.co/"/>
          <img src={augmindLogo} alt='Augmind' data-action="https://www.augmind.me/"/>
          
          <img src={hydroLogo} alt='Hydro' data-action="http://www.bbc.co.uk"/>
        </Coverflow>
      </div>
    );
  }

  _handleClick() {
    var num = Math.floor((Math.random() * 10) + 1);
    this.setState({
      active: num,
      display: 1
    });

    
  }
};