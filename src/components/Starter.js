import React, { Component } from 'react';
import Layout from './../Layout/Layout';
import Footer from './../Layout/Footer';
import axios from 'axios'; 
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
      return (
      <div>
        <Layout />
        <section className="vc_rows wpb_row padding-section vc_row-fluid section section-pad section-bg section-light">
      <div className="row padding-section">
          <div className="wpb_column vc_column_container col-sm-12">
             <div className="vc_column-inner ">
                <div className="wpb_wrapper">
                   <div className="vc_row wpb_row vc_inner vc_row-fluid">
                      <div data-animate="fadeInUp" data-delay="0" className="wpb_column vc_column_container vc_col-sm-12 animated fadeInUp registervisible">
                         <div className="vc_column-inner ">
                            <div className="wpb_wrapper">
                               <div className="section-head text-center">
                                  <h2 className="section-title">
                                     Starter                 
                                  </h2>
                               </div>
                            </div>
                         </div>
                      </div>
                   </div>
                   <div className="wpb_text_column wpb_content_element  vc_custom_1520932193361 text-center">
                      <div className="wpb_wrapper">
                         <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                      </div>
                   </div>
                   <div className="row wpb_row vc_inner vc_row-fluid">
                      <div data-animate="fadeInUp" data-delay="0.5" className="wpb_column vc_column_container col-sm-12 vc_col-md-offset-2 col-md-8 animated fadeInUp visiblty">
                         <div className="vc_column-inner ">
                            <div className="wpb_wrapper">
                               
                               <div role="form" className="wpcf7" id="wpcf7-f301-p476-o1" lang="en-US" dir="ltr">
								<h2>What is Lorem Ipsum?</h2><p>
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

<h2>Why do we use it?</h2><p>
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>


<h2>Where does it come from?</h2><p>
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
<p>
The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
</p>
<h2>Where can I get some?</h2>
<p>
There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                               
                               </div>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
       </div>
       </section>
       <Footer />
      </div>
      );
}
}
export default Register;