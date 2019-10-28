import React from 'react';
import { Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export class ContactForm extends React.Component{
    constructor(props)
    {
        super(props);

        this.state = { 
            allocation : 0,
            time: 77777777
        };

        this.Click = this.Click.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSelect = this.handleSelect.bind(this);

    }

    useStyles()
    {
        return makeStyles(theme => ({
             textField: {
              marginLeft: theme.spacing(10),
              marginRight: theme.spacing(10),
              width: 200,
              marginTop: 19,
            },
            multiline: {
                marginLeft: theme.spacing(10),
                marginRight: theme.spacing(10),
                width: 800,
                marginTop: 19,
              },
          }));
          
    }

    Click()
    {
        this.props.refresh();
                    
    }

    handleChange(e)
    {
        this.setState( {allocation: e.target.value});
    }

    handleSelect(event) {
        this.setState({time: event.target.value})
  
      }

    render()
    {
        const classes = this.useStyles();
       
        return (
            <div spacing={3} style={{
                //display: "block",
                marginLeft: "135px",
                //position: "relative",
                backgroundColor: "white"
                
              }}>
            <TextField
                id="standard-dense"
                label="First Name*"
                className={classes.textField}
                margin="dense"
            />
            <br/>
            <TextField
                id="standard-dense"
                label="Last Name*"
                className={classes.textField}
                margin="dense"
            />
            <br/>
            <TextField
                id="standard-dense"
                label="Valid Email Address*"
                className={classes.textField}
                margin="dense"
            />
            <br/>

            <TextField
                id="standard-dense"
                label="Phone number"
                className={classes.textField}
                margin="dense"
            />
            <br/>

            <TextField
                id="standard-multiline-flexible"
                label="Comments"
                multiline
                rowsMax="5"
                //value={values.multiline}
                //onChange={handleChange('multiline')}
                className={classes.multiline}
                margin="normal"
            />
            <br/>
            <small style={{color: "black"}}>(*) required</small>
            <br/>
            
            <Button variant="contained" color="primary" onClick={this.Click} >
                  Submit
                </Button>
          
          </div>
        )
    }
}