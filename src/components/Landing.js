import React, { Component } from 'react';
//import Layout from './../Layout/Layout';
import Footer from './../Layout/Footer';
import $ from "jquery";
import {Carusel} from './Carusel';
import AOS from 'aos';
import 'aos/dist/aos.css';

class Landing extends Component {
constructor(props){
  super(props);
  this.state={
  email:'',
  firstname:'',
  lastname:'',
  message: '',
  mailchimpemail:'',
  setposition: false,
  }
  this.handleEmailChange = this.handleEmailChange.bind(this);
  this.handlenameChange = this.handlenameChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.handlemessageChange = this.handlemessageChange.bind(this);
  this.handleMailchimpEmail = this.handleMailchimpEmail.bind(this);
  this.handlemailchimpSubmit = this.handlemailchimpSubmit.bind(this);
  this.handleScroll = this.handleScroll.bind(this);
 }
//0xA4Cf0F68d8FBA18f59c42274d8a591bAAA02641a
//0xA4Cf0F68d8FBA18f59c42274d8a591bAAA02641a
//0x56aaae6d931868b101a899af57cdb348213fae1e2dc2c005612e56953b7ca4d7
//0x84A9f6D80eBAbaa0a3c7922c89025886825C315F
//0xd253992f6CFf44e064153b38F5D0244365076A72
componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
}

handleScroll(event) {
   if(window.scrollY > 50){
     this.setState({
        setposition: true
      })
  }else{
    this.setState({
        setposition: false
      })
  }
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

}
handlemailchimpSubmit(e){

}
componentDidMount() {
AOS.init({
    duration : 2000
  });
window.addEventListener('scroll', this.handleScroll);
  var $inputline=$('.input-line');
  if($inputline.length>0){ 
    $inputline.each(function(){ 
      var $this=$(this);
      var $thisval=$(this).val();
      if($thisval.length>0){
         $this.parents('.input-field').addClass('input-focused');
      }
    })
  }
(function() {
if (!window.mc4wp) {
   window.mc4wp = {
      listeners: [],
      forms    : {
         on: function (event, callback) {
            window.mc4wp.listeners.push({
               event   : event,
               callback: callback
            });
         }
      }
   }
}
})();
}
render() {
const { setposition } =this.state;
    return (
      <div className="landing_div">
       <header className={"site-header is-sticky " +(setposition? 'has-fixed': '')}>
            <div className="navbar navbar-expand-lg is-transparent" id="mainnav">
               <nav className="container">
                  <h1 className="navbar-brand">
                     <a href="/">
                     <img className="logo" src="/images/site-logo.png" alt="site-logo" />
                     <img className="logo-2" src="/images/site-logo.png" alt="site-logo" />
                     </a>
                  </h1>
                  <button className="navbar-toggler" type="button">
                  <span className="navbar-toggler-icon">
                  <span className="ti ti-align-justify"></span>
                  </span>
                  </button>
                  <div className="navbar-collapse justify-content-end">
                     <ul id="menu-onepage-menu" className="navbar-nav">
                        <li><a href="/#what_is_achieved" className="nav-link">What Is Achieved</a></li>
                        <li><a href="/#browse-roadmap" className="nav-link">Explore projects</a></li>
                        <li><a href="/#who_we_are" className="nav-link">Who We ARE</a></li>
                        <li><a href="/contact" className="nav-link">For projects</a></li>
                            
                     </ul>
                     <ul className="navbar-nav navbar-btns">
                       
                       <li className="nav-item"><a className="nav-link btn btn-sm btn-outline menu-link" href="/login">Login</a></li>
                     </ul>
                  </div>
               </nav>
            </div>
         </header>
        <section id="login" className="vc_rows wpb_row vc_row-fluid mobile-center banner-particle banner-curb banner-full vc_row-o-equal-height vc_row-o-content-middle vc_row-flex banner d-flex align-items-center">
            <div id="particles-js" className="particles-container particles-js">
            <canvas className="particles-js-canvas-el" width="1349" height="413"></canvas>
            </div>
            <div className="container">
               <div className="banner-content">
                  <div className="row">
                     <div data-animate="fadeInUp" data-delay="0.65" className="visiblty order-lg-first wpb_column vc_column_container vc_col-sm-12 vc_col-lg-6 vc_col-md-6 animated fadeInUp">
                        <div className="vc_column-inner ">
                           <div className="wpb_wrapper">
                              <div className="wpb_text_column wpb_content_element  vc_custom_1520825700169">
                                 <div className="wpb_wrapper">
                                    <h1 className="powerdata">Linking investments to verified milestones</h1>
                                    <p className="lead color-secondary">Shielding the investor's funds from fraudulent acts and lack of project execution.</p>
                                    <ul className="btns">
                                       <li><a className="btn" href="/register">Sign up to Join</a></li>
                                       
                                    </ul>
                                 </div>
                              </div>
                              <ul className="social">
                                <li><a href="https://www.linkedin.com/company/achieved-io/"><em className="fa fa-linkedin"></em></a></li>
                                <li><a href="/"><em className="fa fa-github"></em></a></li>
                              </ul>
                           </div>
                        </div>
                     </div>
             
                  </div>
               </div>
            </div>
            <div className="clearfix"></div>
         </section>

    <section id="what_is_achieved" className="wpb_row vc_row-fluid sectiosection section-pad section-bg section-light section-connect">
            <div className="container">
               <div className="row">
                  <div className="wpb_column vc_column_container col-sm-12">
                     <div className="vc_column-inner ">
                        <div className="wpb_wrapper">
                           <div className="vc_row wpb_row vc_inner vc_row-fluid vc_custom_1520830144361">
                              <div data-animate="fadeInUp" data-delay="0" className="wpb_column vc_column_container vc_col-sm-12 animated fadeInUp visiblty">
                                 <div className="vc_column-inner ">
                                    <div className="wpb_wrapper">
                                       <div className="section-head text-center">
                                          <h2 className="section-title" data-aos='fade-down'>
                                             What is Achieved      
                                          </h2>
                                       </div>
                                       <div className="vc_empty_space"><span className="vc_empty_space_inner"></span></div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="row wpb_row vc_inner vc_row-fluid">
                              <div data-animate="fadeInUp" data-delay="0" className="wpb_column vc_column_container col-sm-12 animated fadeInUp visiblty">
                                 <div className="vc_column-inner ">
                                    <div className="wpb_wrapper">
                                       <div data-aos='fade-up'>
                    Achieved &#8482; links investments and project shares to a blockchain technology platform.
The platform provides a real-time overview of the project's roadmap and an efficient communication channel between both parties. The invested funds will be exchanged for the project shares, protecting both funds and shares, thus incentivize the delivery of a successful project execution.
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



         <section id="about" className="vc_row wpb_row vc_row-fluid section-pad section-bg-alt nopb about-achived">
          <div className="container">
            <div className="row">
              <div className="wpb_column vc_column_container vc_col-sm-8 col-md-offset-3 vc_col-md-12 col-sm-offset-2">
                <div className="vc_column-inner ">
                  <div className="wpb_wrapper">
                    <div className="wpb_text_column wpb_content_element  text-center">
                      <div className="wpb_wrapper">
                        <div className="vc_row wpb_row vc_inner vc_row-fluid vc_custom_1520830144361">
                          <div data-animate="fadeInUp" data-delay="0" className="wpb_column vc_column_container vc_col-sm-12 animated fadeInUp visiblty">
                           <div className="vc_column-inner">
                              <div className="wpb_wrapper">
                                 <div className="section-head text-center">
                                    <h2 className="section-title" data-aos="fade-down">
                                       Why Achieved     
                                    </h2>
                                 </div>
                                 <div className="vc_empty_space">
                                  <span className="vc_empty_space_inner"></span></div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            {/* <div className="ct-process"> */}
                <div className="row">
                    <div className="display-table">
                        
                        <div  className="table-cell text-center animated activate bounceIn  registervisible">
                            <img data-aos="flip-left" className="img-responsive" src="images/1-GIf.gif" alt="Research"/>
                            
                           
                        </div>
                        <div  className="table-cell text-center animated activate bounceIn  registervisible" >
                            <img data-aos="flip-up" className="img-responsive" src="images/2-GIf.gif" alt="Idea"/>
                           
                            
                        </div>
                        <div className="table-cell text-center animated activate bounceIn  registervisible">
                            <img data-aos="flip-right" className="img-responsive" src="images/3-GIf.gif" alt="Solution" />
                            
                           
                        </div>
                    
                    </div>
                    <div className="clearfix"></div>
                </div>
            {/* </div> */}
         
            <div data-animate="fadeInUp" data-delay="0.3" className="res-m-bttm-lg wpb_column vc_column_container vc_col-sm-6 vc_col-md-4 animated fadeInUp visiblty"><div className="vc_column-inner "><div className="wpb_wrapper">
              <div className="wpb_text_column wpb_content_element  text-center">
                <div className="wpb_wrapper" >
                  <h5 data-aos="fade-down-right">Increase ROI by improving resource allocation to the successful projects</h5>
                  <p data-aos="fade-up-right">Achieved uses blockchain technology to swap investments and project shares only upon verified milestones and create a real incentive for execution.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-animate="fadeInUp" data-delay="0.4" className="res-m-bttm-lg wpb_column vc_column_container vc_col-sm-6 vc_col-md-4 animated fadeInUp visiblty">
          <div className="vc_column-inner ">
            <div className="wpb_wrapper">
              <div className="wpb_single_image wpb_content_element vc_align_center  vc_custom_1536822692817"></div>
                <div className="wpb_text_column wpb_content_element  text-center">
                  <div className="wpb_wrapper">
                    <h5 data-aos="fade-down">Protection from fraudulent acts and misconduct behavior</h5>
                    <p data-aos="fade-up">Achieved mitigate the risk of being involved in a fraudulent project by locking and securing your invested funds.</p>
                  </div>
                    </div>
                  </div>
                </div>
              </div>
              <div data-animate="fadeInUp" data-delay="0.5" className="wpb_column vc_column_container vc_col-sm-6 vc_col-lg-offset-0 vc_col-md-offset-0 vc_col-md-4 vc_col-sm-offset-3 animated fadeInUp visiblty"><div className="vc_column-inner ">
                <div className="wpb_wrapper"></div>
                <div className="wpb_single_image wpb_content_element vc_align_center  vc_custom_1536822725902"></div>
                <div className="wpb_text_column wpb_content_element  text-center">
                <div className="wpb_wrapper">
                  <h5 data-aos="fade-down-left">Improve communication and influence over the project process</h5>
                  <p data-aos="fade-up-left">Achieved gives you a real-time overview of your investments. You will get notified for updates, on-time tracking and milestone changes. </p>
                </div>
               </div>
            </div>
          </div>
          </div>
        </div>
        </div>
        </section>

        

        
        



         <section id="browse-roadmap"className="browse-roadmap">
            <div className="container">
              <div className="serch-heading">
                <div className="row">
                  <div className="wpb_column vc_column_container vc_col-sm-8 vc_col-md-offset-3 vc_col-md-6 vc_col-sm-offset-2">
                    <div className="vc_column-inner ">
                      <div className="wpb_wrapper">
                        <div className="wpb_text_column wpb_content_element  text-center">
                          <div className="wpb_wrapper">
                            <div className="vc_row wpb_row vc_inner vc_row-fluid vc_custom_1520830144361">
                              <div data-animate="fadeInUp" data-delay="0" className="wpb_column vc_column_container vc_col-sm-12 animated fadeInUp registervisible">
                                <div className="vc_column-inner ">
                                  <div className="wpb_wrapper">
                                    <div className="section-head text-center">
                                      <h2 data-aos="fade-down" className="section-title">
                                         Explore projects            
                                      </h2>
                                    </div>
                                    <div className="vc_empty_space"><span className="vc_empty_space_inner"></span></div>
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
                <div data-aos="fade-right" className="search-bar">
                  <button type="submit"><i className="fa fa-search"></i></button>
                  <input type="text" placeholder="Search.." name="search" />
                </div>
                <div data-aos="zoom-in">
              </div>
            </div>
          </div>
          <Carusel  />

        </section>
    
        <section id="who_we_are" className="vc_rows wpb_row vc_row-fluid section section-pad section-bg-alt section-fix">
            <div className="container">
                <div className="row">
                    <div className="wpb_column vc_column_container vc_col-sm-12">
                        <div className="vc_column-inner ">
                          <div className="wpb_wrapper">
                            <div className="vc_row wpb_row vc_inner vc_row-fluid">
                              <div data-animate="fadeInUp" data-delay="0" className="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-12 vc_col-md-8 animated fadeInUp">
                                <div className="vc_column-inner ">
                                  <div className="wpb_wrapper">
                                      <div className="section-head text-center">
                                        <h2 data-aos="fade-down" className="section-title">Who We Are!</h2>
                                      </div>
                                      <div className="wpb_text_column wpb_content_element  vc_custom_1520850810932">
                                        <div className="wpb_wrapper">
                    
                                          <p data-aos="fade-right" className="center_we_are"><img className="left-q" src="images/left-quote.png" alt="left-q" /><i>As a crypto and blockchain enthusiasts, working in the blockchain industry for few years, we watched closely at the fundraising process. We were witnessed in real-time to the ICO hype and how it causes projects to manage their funds irresponsibly, fraudulent projects took advantage of the situation, investors lost their money and their trust in the blockchain space. Taking down legitimacy good projects in the downturn cleanup. We made it our mission to address these problems in a way that will benefit investors and performing projects.</i> <img className="right-q" src="images/right-q.png" alt="right-q" /></p>
                      
                     

                                        </div>
                                      </div>
                                    </div>
                                  </div>
                              </div>
                            </div>

                            <div className="vc_row wpb_row vc_inner vc_row-fluid">
                              <div  className="wpb_column vc_column_container vc_col-sm-6 vc_col-md-3  ">
                                <div className="vc_column-inner ">
                                  <div className="wpb_wrapper">
                                    <div data-aos="zoom-in-right" className="team-circle text-center">
                                        <div className="team-photo">
                                            <img src="images/1.png" alt="" />
                                        </div>
                                        <div className="team-info">
                                            <h5 className="team-name">Nir Samocha</h5>
                                            <span className="team-title">Chief Executive Officer</span>
                                            
                                        </div>
                                    </div>

                                  </div>
                                </div>
                              </div>
                              

                              <div className="wpb_column vc_column_container vc_col-sm-6 vc_col-md-3  "><div className="vc_column-inner ">
                                <div className="wpb_wrapper">
                                    <div data-aos="zoom-in-up" className="team-circle text-center">
                                      <div className="team-photo">
                                          <img src="images/2.png" alt="" />
                                      </div>
                                      <div className="team-info">
                                          <h5 className="team-name">Robi Dayan</h5>
                                          <span className="team-title">Chief Operating Officer</span>
                                          
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div  className="wpb_column vc_column_container vc_col-sm-6 vc_col-md-3  ">
                                <div className="vc_column-inner ">
                                  <div className="wpb_wrapper">
                                    <div data-aos="zoom-in-down" className="team-circle text-center">
                                        <div className="team-photo">
                                            <img src="images/3.png" alt="" />
                                        </div>
                                        <div className="team-info">
                                            <h5 className="team-name">Alex Perry</h5>
                                            <span className="team-title">Chief Technology Officer</span>
                                            
                                        </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div  className="wpb_column vc_column_container vc_col-sm-6 vc_col-md-3 "><div className="vc_column-inner ">
                                <div className="wpb_wrapper">
                                    <div data-aos="zoom-in-left" className="team-circle text-center">
                                      <div className="team-photo">
                                          <img src="images/4.png" alt="" />
                                      </div>
                                      <div className="team-info">
                                          <h5 className="team-name">Robert Hitchens</h5>
                                          <span className="team-title">Blockchain Expert</span>
                                          
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
            </div>
            <div className="clearfix"></div>
        </section>
         <Footer />
      </div>
      );
  }
}
export default Landing;