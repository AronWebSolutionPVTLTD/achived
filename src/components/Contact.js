import React, { Component } from 'react';
import Layout from './../Layout/Layout';
import Footer from './../Layout/Footer';
import axios from 'axios'; 
import Input from '@material-ui/core/Input';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  input: {
    margin: theme.spacing(1),
  },
})); 
class Register extends Component {
constructor(props){
  super(props);
  this.state={
  firstname:'',
  lastname:'',
  email:'',
  password:'',
  confirmpassword:'',
  phoneno: '',
  error:'',
  confirmpassword_err:'',
  };
  this.handleEmailChange = this.handleEmailChange.bind(this);
  this.handlePasswordChange = this.handlePasswordChange.bind(this);
  this.handlefirstnameChange = this.handlefirstnameChange.bind(this);
  this.handlelastnameChange = this.handlelastnameChange.bind(this);
  this.handlephonenumberChange = this.handlephonenumberChange.bind(this);
  this.handleconfirmpasswordChange = this.handleconfirmpasswordChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleChange = this.handleChange.bind(this);
 }
handleEmailChange(e) {
   this.setState({email: e.target.value});
}
handlePasswordChange(e) {
   this.setState({password: e.target.value});
}
 handlefirstnameChange(e) {
  this.setState({firstname: e.target.value});
}
 handlelastnameChange(e) {
   this.setState({lastname: e.target.value});
}
handlephonenumberChange(e) {
   this.setState({phoneno: e.target.value});
}
 handleconfirmpasswordChange(e) {
  this.setState({confirmpassword: e.target.value});
  if(e.target.value !== this.state.password){
    this.setState({confirmpassword_err: 'Password Not Matching'});
  }else{
    this.setState({confirmpassword: e.target.value});
    this.setState({confirmpassword_err: ''});
  }
}
handleChange(e) {
   this.setState({password: e.target.value});
}
 handleSubmit(event) {
  event.preventDefault();
  if(this.state.password === this.state.confirmpassword){
    const user = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      password: this.state.password,
      mobileNumber: this.state.phoneno
    };
   axios.post('/api/register', { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
        if(res.data.data !== 'Record has been Inserted')
        {
          this.setState({error: res.data.data});
          setTimeout(() => {
            this.setState({error: ''});
          }, 5000);
        }
      })
  }else{
    this.setState({confirmpassword_err: 'Password Not Matching'});
  } 
}
render() { 
  const classes = useStyles();

      return (
      <div>
        <Layout />
        <section id="contact" className="vc_rows wpb_row vc_row-fluid section section-pad section-bg section-light">
            <div className="container">
               <div className="row">
                  <div className="wpb_column vc_column_container col-sm-12">
                     <div className="vc_column-inner ">
                        <div className="wpb_wrapper">
                           <div className="vc_row wpb_row vc_inner vc_row-fluid">
                              <div data-animate="fadeInUp" data-delay="0" className="wpb_column vc_column_container col-sm-12 animated fadeInUp visiblty">
                                 <div className="vc_column-inner ">
                                    <div className="wpb_wrapper">
                                       <div className="section-head text-center">
                                          <h2 className="section-title">
                                             Drop us a note                
                                          </h2>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="wpb_text_column wpb_content_element  vc_custom_1520932193361 text-center">
                              <div className="wpb_wrapper">
                                 <p>We'd like to hear from you.</p>
                              </div>
                           </div>
                           <div className="vc_row wpb_row vc_inner row">
                             
                              <div data-animate="fadeInUp" data-delay="0.5" className="visiblty wpb_column vc_column_container col-sm-12 col-md-offset-2 col-md-12 animated fadeInUp">
                                 <div className="vc_column-inner ">
                                    <div className="wpb_wrapper">
                                       <div role="form" onSubmit={this.handleSubmit} className="wpcf7" id="wpcf7-f301-p476-o1" lang="en-US" dir="ltr">
                                          <div className="screen-reader-response"></div>
                                          <form  className="wpcf7-form" noValidate="noValidate">
                                             <div className="comment-form text-center">
                                             <div className="row">
                                              <div className="col-md-6 comment-form text-center">
                                              <Input
                                                placeholder="First Name*"
                                               className={classes.input}
                                                inputProps={{
                                                  'aria-label': 'description',
                                                  }}
                                                  />
                                               
                                              </div>
                                              <div className="col-md-6 comment-form text-center">
                                                <div className="input-field">
                                                   <input type="text" name="your-name" size="40" className="form-control form-inputs" value={this.state.lastname} onChange={this.handlenameChange} placeholder="Last Name*"/>
                                                </div>
                                              </div>
                                           </div>
                                                <div className="input-field">
                                                   <input type="email" name="your-email" size="40" className="form-control form-inputs" value={this.state.email} onChange={this.handleEmailChange} placeholder="Valid Email Adress*" />
                                                </div>
                                                <div className="input-field">
                                                   <input type="email" name="your-email" size="40" className="form-control form-inputs" value={this.state.email} onChange={this.handleEmailChange} placeholder="Phone number" />
                                                   
                                                </div>
                                                <div className="input-field">
                                                   <input type="email" name="your-email" size="40" className="form-control form-inputs" value={this.state.email} onChange={this.handleEmailChange} placeholder="Comments" />
                                                </div>
                                                <div className="input-field">
                                                   <textarea name="your-message" cols="40" rows="4" className="form-control form-inputs" aria-invalid="false" onChange={this.handlemessageChange} defaultValue={this.state.message} placeholder="Comments" ></textarea>
                                                </div>
                                                <div className="input-field">
                                                   <button type="submit" className="btn">Submit</button>
                                                </div>
                                             </div>
                                             <div className="wpcf7-response-output wpcf7-display-none"></div>
                                          </form>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="clearfix"></div>
         </section>
       <Footer />
      </div>
      );
}
}
export default Register;