import React, {Component} from 'react';
import './Header.css';
import Avatar from '@material-ui/core/Avatar';
import UserAvatar from "../../assets/alok.jpg";
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from "@material-ui/core/Menu";
import Input from "@material-ui/core/Input/Input";
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from "@material-ui/core/InputAdornment";


class Header extends Component{
    searchChangeHandler = () => {

    };


    constructor(props) {
        super(props);
        this.state = {
            search:"",
        };
    }
    handleClick = (event) => {
        this.setState({anchorEl:event.currentTarget});
    };

     handleClose = () => {
         this.setState({anchorEl:null});
    };




    render(){
    return(
        <div className="app-header">
          <div className="header-logo"> Image Viewer</div>
          <div className="header-right">
            <div className="search">
                <Input  className="search-input" type="text" placeholder={'Search...'} username={this.state.search} onChange={this.searchChangeHandler}
                    startAdornment={
                    <InputAdornment position="start">
                      <SearchIcon/>
                    </InputAdornment>
                }>
                </Input>
            </div>
            <div className="profile-button">
                <IconButton variant="contained"
                            aria-controls="simple-menu" aria-haspopup="true" onClick={this.handleClick}>
                    <Avatar alt="Profile" src={UserAvatar} />
                </IconButton>
                <Menu className="menu-container"
                    id="simple-menu"
                    anchorEl={this.state.anchorEl}
                    keepMounted
                    open={Boolean(this.state.anchorEl)}
                    onClose={this.handleClose}
                    >
                    <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                    <MenuItem onClick={this.handleClose}>Logout</MenuItem>
                </Menu>
            </div>
          </div>
        </div>
    )
  }
}
export default Header;