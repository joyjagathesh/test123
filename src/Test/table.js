import React, { Component } from 'react'
import MaterialTable from 'material-table'
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
  
  import SearchIcon from "@material-ui/icons/Search";
  




const styles = theme => {};

const items = [
  { pathName: "/test", label: "Test 1" },
  { pathName: "/test", label: "Test 2" },
  { pathName: "/test", label: "Test 3" }
];

const subItems = ["Item 1", "Item 2", "Item 3"];

export default class Table extends Component {


    constructor(props) {
        super(props)
        this.state = {
            isLoaded: false,
            value: 0,
            open: false,
            anchorEl: null,
            Data: [
                //    {
                //        name: 'Jaga',
                //        age: 34,
                //        customername: 'Med',

                //    },
                //    {
                //     name: 'Mohan',
                //     age: 31,
                //     customername: 'Med',
                // }

            ],
            newData: [],
            rowData: [
                { title: 'ID', field: '_id' },
                { title: 'Technician Name', field: "TechnicianName" },
                { title: 'Customer Name', field: 'CustomerName' },
                { title: 'Phone', field: "Phone" },
                { title: 'Address', field: 'Address' },
                { title: 'LockModel', field: 'LockModel' },
                { title: "Installation_Date", field: "Installation_Date" },
                { title: "Installation_Time", field: "Installation_Time" },

            ]
        }
    }

    componentWillMount() {
        fetch("http://13.235.50.21:8182/api/getdata", {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Basic YWRtaW46aGVybw=='
            },
        })
            .then(res => res.json())
            .then(
                (result) => {
                    console.log('result', result)
                    this.setState({
                        isLoaded: true,
                        Data: result.data
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }
    handleMenuClick = index => {};

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
  
    handleInputSearch = () => {};

    //       componentDidMount(){
    //     setTimeout(()=>{
    //         this.state.Data.map(this.state.newData)

    //     },50000)

    // }
    //<DataGrid columns={[{ field: 'name', editable: true }]} />

    render = () => {
        const { classes } = this.props;
        const { anchorEl, open } = this.state;

        console.log('thid', this.state.Data)

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