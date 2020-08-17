import React, {Component} from 'react';
import Header from "../../common/header/Header";

class Home extends Component {
    constructor(){
        super();
        this.state={

        }
    }

    onClickingLogout = () => {
        sessionStorage.clear();
        this.props.history.replace('/');
    }

    onCLickingMyAccount = () => {
        this.props.history.push('/profile');
    }

    onSearchEntered=()=>{

    }

    render() {
        return (
            <div>
                <Header screen={"home"}searchHandler={this.onSearchEntered}
                        onClickingLogout={this.onClickingLogout}
                        onCLickingMyAccount={this.onCLickingMyAccount}/>
            </div>
        );
    }
}

export default Home;