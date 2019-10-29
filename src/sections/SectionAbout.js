import React from "react";
export function SectionAbout({
  SuccessGif,
  SecurityGif,
  CommunicationGif
}) {
  return <section id="about" className="vc_row wpb_row vc_row-fluid section-pad section-bg-alt nopb about-achived">
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
            {
            /* <div className="ct-process"> */
          }
                <div className="row">
                    <div className="display-table">
                        
                        <div className="table-cell text-center animated activate bounceIn  registervisible">
                            <img data-aos="flip-left" className="img-responsive" src={SuccessGif} alt="Research" />
                            
                           
                        </div>
                        <div className="table-cell text-center animated activate bounceIn  registervisible">
                            <img data-aos="flip-up" className="img-responsive" src={SecurityGif} alt="Idea" />
                           
                            
                        </div>
                        <div className="table-cell text-center animated activate bounceIn  registervisible">
                            <img data-aos="flip-right" className="img-responsive" src={CommunicationGif} alt="Solution" />
                            
                           
                        </div>
                    
                    </div>
                    <div className="clearfix"></div>
                </div>
            {
            /* </div> */
          }
         
            <div data-animate="fadeInUp" data-delay="0.3" className="res-m-bttm-lg wpb_column vc_column_container vc_col-sm-6 vc_col-md-4 animated fadeInUp visiblty"><div className="vc_column-inner "><div className="wpb_wrapper">
              <div className="wpb_text_column wpb_content_element  text-center">
                <div className="wpb_wrapper">
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
        </section>;
}
  