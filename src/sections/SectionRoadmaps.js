import React from "react";
import { Carusel } from '../components/Carusel';

export function SectionRoadmaps({}) {
  return <section id="browse-roadmap" className="browse-roadmap">
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
          <Carusel />

        </section>;
}
  

  