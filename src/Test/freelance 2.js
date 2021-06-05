import React, { Component } from "react"
import {
    List,
    AppBar,
    Toolbar,
    Paper,
    Tabs,
    Tab,
    Link,
    Popper,
    MenuList,
    MenuItem,
    InputBase,
    withStyles
} from "@material-ui/core";

const styles = theme => { };

const items = [
    { pathName: "/test", label: "My Projects" },

    { pathName: "/test", label: "Dashboard" },
    { pathName: "/test", label: "Inbox" },
    { pathName: "/test", label: "Feedback" }
];

const subItems = ["Delete", "Undo", "Read Message"];

 class AppBarTop extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            value: 0,
            open: false,
            anchorEl: null

        }

    }
    handleMenuClick = index => { };
    handleMenuOpen = (index, event) => {
        const { currentTarget } = event;
        this.setState({
            open: true,
            anchorEl: currentTarget,
            value: index
        });
    };

    handleMenuClose = () => {
        this.setState({
            open: false,
            anchorEl: null
        });
    };

    handleInputSearch = () => { };

    render = () => {

        const { classes } = this.props;
        const { anchorEl, open } = this.state;

        return (

            <div
                className={classes.root}
                onMouseLeave={this.handleMenuClose.bind(this)}
            >
                <AppBar position="static">
                    <Paper className={classes.grow}>
                        <Tabs
                            value={this.state.value}
                            indicatorColor="primary"
                            textColor="primary"
                            centered
                        >
                            {items.map((item, index) => (
                                <Tab
                                    key={index}
                                    onMouseEnter={this.handleMenuOpen.bind(this, index)}
                                    data-key={index}
                                    classes={{ root: classes.tabItem }}
                                    label={item.label}
                                    aria-owns={open ? "menu-list-grow" : undefined}
                                    aria-haspopup={"true"}
                                />
                            ))}
                        </Tabs>
                        <Popper open={open} anchorEl={anchorEl} id="menu-list-grow">
                            <Paper>
                                <MenuList>
                                    {subItems.map((item, index) => (
                                        <MenuItem key={index} onClick={this.handleMenuClose}>
                                            {item}
                                        </MenuItem>
                                    ))}
                                </MenuList>
                            </Paper>
                        </Popper>
                    </Paper>
                </AppBar>
            </div>




        )
    }
}

export default withStyles(styles)(AppBarTop);