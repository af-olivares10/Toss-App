import React,  { Component }  from "react";
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

/**
 * This className contains all needed to display the nav bar on top.
 */
export default class NavbarIndex extends Component{

    render(){
        const background={
            backgroundColor: '#00171F'
        };
        const titleStyle={
          textAlign: "center"
        };
        return(
            <MuiThemeProvider>
                <AppBar
                    title={<img className="col-4 col-sm-2 col-md-1" src="name.png"/>}
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    style={background}
                    titleStyle={titleStyle}
                    showMenuIconButton={false}
                />
            </MuiThemeProvider>
        );
    }
}
