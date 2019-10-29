import { Header } from '../Layout/Header';
import { SectionHome } from '../sections/SectionHome';
import { SectionRoadmaps } from '../sections/SectionRoadmaps';
import { SectionAbout } from '../sections/SectionAbout';
import { SectionWhatIs } from '../sections/SectionWhatIs';
import React, { Component } from 'react';
//import Layout from './../Layout/Layout';
import Footer from './../Layout/Footer';
import $ from "jquery";
import AOS from 'aos';
import SuccessGif from '.././Images/1-GIF.gif';
import SecurityGif from '.././Images/2-GIF.gif';
import CommunicationGif from '.././Images/3-GIF.gif';

import 'aos/dist/aos.css';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      firstname: '',
      lastname: '',
      message: '',
      mailchimpemail: '',
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
    if (window.scrollY > 50) {
      this.setState({
        setposition: true
      })
    } else {
      this.setState({
        setposition: false
      })
    }
  }

  handleEmailChange(e) {
    this.setState({ email: e.target.value });
  }
  handlenameChange(e) {
    this.setState({ name: e.target.value });
  }
  handlemessageChange(e) {
    this.setState({ message: e.target.value });
  }
  handleMailchimpEmail(e) {
    this.setState({ email: e.target.value });
  }
  handleSubmit(event) {

  }
  handlemailchimpSubmit(e) {

  }
  componentDidMount() {
    AOS.init({
      duration: 2000
    });
    window.addEventListener('scroll', this.handleScroll);
    var $inputline = $('.input-line');
    if ($inputline.length > 0) {
      $inputline.each(function () {
        var $this = $(this);
        var $thisval = $(this).val();
        if ($thisval.length > 0) {
          $this.parents('.input-field').addClass('input-focused');
        }
      })
    }
    (function () {
      if (!window.mc4wp) {
        window.mc4wp = {
          listeners: [],
          forms: {
            on: function (event, callback) {
              window.mc4wp.listeners.push({
                event: event,
                callback: callback
              });
            }
          }
        }
      }
    })();
  }
  render() {
    const { setposition } = this.state;
    return (
      <div className="landing_div">
        <Header setposition={setposition} />
        <SectionHome />
        <SectionWhatIs />


        <SectionAbout SuccessGif={SuccessGif} SecurityGif={SecurityGif} CommunicationGif={CommunicationGif} />








        <SectionRoadmaps />
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

                                <p data-aos="fade-right" className="center_we_are"><img className="left-q" src="images/left-quote.png" alt="left-q" /><i>As a crypto and blockchain enthusiasts, working in the blockchain industry in the last few years, we watched closely at the fundraising process. We were witnessed in real-time to the ICO hype and how it causes projects to manage their funds irresponsibly, fraudulent projects took advantage of the situation, investors lost their money and their trust in the blockchain space. Taking down legitimacy good projects in the downturn cleanup. We made it our mission to address these problems in a way that will benefit investors and performing projects.</i> <img className="right-q" src="images/right-q.png" alt="right-q" /></p>



                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="vc_row wpb_row vc_inner vc_row-fluid">
                      <div className="wpb_column vc_column_container vc_col-sm-6 vc_col-md-3  ">
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
                      <div className="wpb_column vc_column_container vc_col-sm-6 vc_col-md-3  ">
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
                      <div className="wpb_column vc_column_container vc_col-sm-6 vc_col-md-3 "><div className="vc_column-inner ">
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

function undefined({ }) {
  return (<section id="login" className="vc_rows wpb_row vc_row-fluid mobile-center banner-particle banner-curb banner-full vc_row-o-equal-height vc_row-o-content-middle vc_row-flex banner d-flex align-items-center">
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
  </section>);
}
export default Landing;