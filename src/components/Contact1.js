import React, { Component } from 'react';
class Contact extends Component {
constructor(props){
  super(props);
  this.state={
  email:'',
  firstname:'',
  lastname:'',
  message: '',
  }
  this.handleEmailChange = this.handleEmailChange.bind(this);
  this.handlenameChange = this.handlenameChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.handlemessageChange = this.handlemessageChange.bind(this);
  this.handleMailchimpEmail = this.handleMailchimpEmail.bind(this);
 }
 handleEmailChange(e) {
   this.setState({email: e.target.value});
}
handlenameChange(e) {
   this.setState({name: e.target.value});
}
handlemessageChange(e) {
   this.setState({message: e.target.value});
}
handleMailchimpEmail(e) {
   this.setState({email: e.target.value});
}
handleSubmit(event) {
 //
}

componentDidMount() {

}
render() {
    return (
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
                                             Drop us a note            <span>Drop us a note</span>        
                                          </h2>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="wpb_text_column wpb_content_element  vc_custom_1520932193361 text-center">
                              <div className="wpb_wrapper">
                                 <p>We'd like tio hear from you.</p>
                                 <p>Fill in the contact form and a Achieved team rep will get back to to you ASAP by <br/> email or phone, whatever you prefer, to better understand you needs.</p>
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
                                                <div className="input-field">
                                                   <input type="text" name="your-name" size="40" className="form-control form-inputs" value={this.state.firstname} onChange={this.handlenameChange} placeholder="First Name" />
                                                </div>
                                              </div>
                                              <div className="col-md-6 comment-form text-center">
                                                <div className="input-field">
                                                   <input type="text" name="your-name" size="40" className="form-control form-inputs" value={this.state.lastname} onChange={this.handlenameChange} placeholder="Last Name"/>
                                                </div>
                                              </div>
                                           </div>
                                                <div className="input-field">
                                                   <input type="email" name="your-email" size="40" className="form-control form-inputs" value={this.state.email} onChange={this.handleEmailChange} placeholder="Your Business Email" />
                                                </div>
                                                <div className="input-field">
                                                   <input type="email" name="your-email" size="40" className="form-control form-inputs" value={this.state.email} onChange={this.handleEmailChange} placeholder="Your Company" />
                                                   
                                                </div>
                                                <div className="input-field">
                                                   <input type="email" name="your-email" size="40" className="form-control form-inputs" value={this.state.email} onChange={this.handleEmailChange} placeholder="Phone number" />
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
      );
  }
}
export default Contact;