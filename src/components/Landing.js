import React, { Component } from 'react';
//import Layout from './../Layout/Layout';
import Footer from './../Layout/Footer';
import Contact from './Contact';
import $ from "jquery";
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
                        <li><a href="/#browse-roadmap" className="nav-link">View ROADMAP</a></li>
                        <li><a href="/#contact" className="nav-link">contact startups</a></li>
                        <li><a href="/#who_we_are" className="nav-link">Who We ARE</a></li>
                            
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
                                    <p className="lead color-secondary">shielding the investor's funds from fraudulent acts and lack of project execution.</p>
                                    <ul className="btns">
                                       <li><a className="btn" href="/register">Sign up to Join</a></li>
                                       
                                    </ul>
                                 </div>
                              </div>
                              <ul className="social">
                                <li><a href="/"><em className="fa fa-linkedin"></em></a></li>
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
                                          <h2 className="section-title">
                                             What is Achieved<span>ACHIEVED</span>        
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
                                       <div>
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
                                    <h2 className="section-title">
                                       Why Achieved<span>Achieved</span>        
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
            <div className="ct-process">
                <div className="row">
                    <div className="display-table">
                        <div className="hidden-sm table-cell ct-process-icon">
                            <span className="ct-process-right"><i className="fa fa-hand-o-right"></i></span>
                        </div>
                        <div className="table-cell text-center animated activate bounceIn undefined registervisible" data-fx="bounceIn" data-time="50">
                            <a href="/"><img className="img-responsive" src="images/success3.png" alt="Research"/></a>
                            
                           
                        </div>
                        <div className="table-cell text-center animated activate bounceIn undefined registervisible" data-fx="bounceIn" data-time="150">
                            <a href="/"><img className="img-responsive" src="images/security2.png" alt="Idea"/></a>
                           
                            
                        </div>
                        <div className="table-cell text-center animated activate bounceIn undefined registervisible" data-fx="bounceIn" data-time="250">
                            <a href="/"><img className="img-responsive" src="images/communication3.png" alt="Solution" /></a>
                            
                           
                        </div>
                        <div className="hidden-sm table-cell ct-process-icon">
                            <span className="ct-process-left"><i className="fa fa-trophy"></i></span>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>
         
            <div data-animate="fadeInUp" data-delay="0.3" className="res-m-bttm-lg wpb_column vc_column_container vc_col-sm-6 vc_col-md-4 animated fadeInUp visiblty"><div className="vc_column-inner "><div className="wpb_wrapper">
              <div className="wpb_text_column wpb_content_element  text-center">
                <div className="wpb_wrapper">
                  <h5>Increase ROI by improving resource allocation to the successful projects</h5>
                  <p>Achieved uses blockchain technology to exchange investments and project shares only upon verified milestones and create a real incentive for execution.</p>
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
                    <h5>Protection from fraudulent acts and misconduct behavior</h5>
                    <p>Achieved mitigate the risk of being involved in a fraudulent project by making sure that your invested funds will not continue to be drained.</p>
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
                  <h5>Improve communication and influence over the project process</h5>
                  <p>Achieved gives you a real-time overview of your investments. You will get notified for updates, on-time tracking and milestone changes. </p>
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
                                      <h2 className="section-title">
                                         View ROADMAP          <span>Roadmap</span>        
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
                <div className="search-bar">
                  <button type="submit"><i className="fa fa-search"></i></button>
                  <input type="text" placeholder="Search.." name="search" />
                </div>
                <div className="map-list">
                  <ul>
                    <li><span><i className="fa fa-check-circle"></i></span><h6>Name 1</h6><div className="roadmap-box">
                    <span>Project 1</span>
                    <a href="/" className="features-action"><em className="ti ti-arrow-right road-arrow"></em></a>
                    </div></li>
                    <li><span><i className="fa fa-check-circle"></i></span><h6>Name 2</h6><div className="roadmap-box">
                    <span>Project 2</span>
                    <a href="/" className="features-action"><em className="ti ti-arrow-right road-arrow"></em></a>
                    </div></li>
                    <li><span><i className="fa fa-check-circle"></i></span><h6>Name 3</h6><div className="roadmap-box">
                    <span>Project 3</span>
                    <a href="/" className="features-action"><em className="ti ti-arrow-right road-arrow"></em></a>
                    </div></li>
                    <li><span><i className="fa fa-check-circle"></i></span><h6>Name 4</h6><div className="roadmap-box">
                    <span>Project 4</span>
                    <a href="/" className="features-action"><em className="ti ti-arrow-right road-arrow"></em></a>
                    </div> </li>
                  </ul>
              </div>
            </div>
          </div>
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
                                        <h2 className="section-title">Who We Are!<span>We</span></h2>
                                      </div>
                                      <div className="wpb_text_column wpb_content_element  vc_custom_1520850810932">
                                        <div className="wpb_wrapper">
                    
                                          <p className="center_we_are"><img className="left-q" src="images/left-quote.png" alt="left-q" />As a crypto and blockchain enthusiasts, working in the Israeli blockchain industry during 2017 and 2018, we watched closely at fundraising in the ecosystem. We met with hundreds of projects and investors, witnessed in real-time how the ICO hype is getting out of control and causing projects to manage their funds irresponsibly, fraudulent projects took advantage of the situation, investors lost their money and their trust in the blockchain space. Taking down legitimacy good projects in the downturn cleanup. Today, everybody knows that these problems could be significantly reduced, with the right solution for blockchain projects and investors as one. We made it our mission to address these problems in a way that will benefit investors and performing projects. <img className="right-q" src="images/right-q.png" alt="right-q" /></p>
                      
                     

                                        </div>
                                      </div>
                                    </div>
                                  </div>
                              </div>
                            </div>

                            <div className="vc_row wpb_row vc_inner vc_row-fluid">
                              <div data-animate="fadeInUp" data-delay="0.2" className="wpb_column vc_column_container vc_col-sm-6 vc_col-md-3 animated fadeInUp">
                                <div className="vc_column-inner ">
                                  <div className="wpb_wrapper">
                                    <div className="team-circle text-center">
                                        <div className="team-photo">
                                            <img src="images/1.png" alt="" />
                                            <span data-mfp-src="http://wpdemo.oceanthemes.net/icos/team/waylon-dalton/" className="expand-trigger content-popup"></span>
                                        </div>
                                        <div className="team-info">
                                            <h5 className="team-name">Nir Samocha</h5>
                                            <span className="team-title">Chief Executive Officer</span>
                                            
                                        </div>
                                    </div>

                                  </div>
                                </div>
                              </div>
                              <div data-animate="fadeInUp" data-delay="0.3" className="wpb_column vc_column_container vc_col-sm-6 vc_col-md-3 animated fadeInUp">
                                <div className="vc_column-inner ">
                                  <div className="wpb_wrapper">
                                    <div className="team-circle text-center">
                                        <div className="team-photo">
                                            <img src="images/3.png" alt="" />
                                            <span data-mfp-src="http://wpdemo.oceanthemes.net/icos/team/stefan-harary/" className="expand-trigger content-popup"></span>
                                        </div>
                                        <div className="team-info">
                                            <h5 className="team-name">Alex Perry</h5>
                                            <span className="team-title">Chief Technology Officer</span>
                                            
                                        </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div data-animate="fadeInUp" data-delay="0.4" className="wpb_column vc_column_container vc_col-sm-6 vc_col-md-3 animated fadeInUp"><div className="vc_column-inner ">
                                <div className="wpb_wrapper">
                                    <div className="team-circle text-center">
                                      <div className="team-photo">
                                          <img src="images/2.png" alt="" />
                                          <span data-mfp-src="http://wpdemo.oceanthemes.net/icos/team/moises-teare/" className="expand-trigger content-popup"></span>
                                      </div>
                                      <div className="team-info">
                                          <h5 className="team-name">Robi Dayan</h5>
                                          <span className="team-title">Chief Operating Officer</span>
                                          
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div data-animate="fadeInUp" data-delay="0.4" className="wpb_column vc_column_container vc_col-sm-6 vc_col-md-3 animated fadeInUp"><div className="vc_column-inner ">
                                <div className="wpb_wrapper">
                                    <div className="team-circle text-center">
                                      <div className="team-photo">
                                          <img src="images/4.png" alt="" />
                                          <span data-mfp-src="http://wpdemo.oceanthemes.net/icos/team/moises-teare/" className="expand-trigger content-popup"></span>
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
        <Contact />
         <Footer />
      </div>
      );
  }
}
export default Landing;