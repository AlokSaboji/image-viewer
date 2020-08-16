import React, {Component} from 'react';
import './Header.css';
import Avatar from '@material-ui/core/Avatar';
import UserAvatar from "../../assets/alok.jpg";

class Header extends Component{
  render(){
    return(
        <div className="app-header">
          <div className="header-logo"> Image Viewer</div>
          <div className="header-right">
            <div className="search">
              <Avatar alt="Profile" src={UserAvatar} />
            </div>
            <div className="profile-button">

            </div>
          </div>
        </div>
    )
  }
}
export default Header;