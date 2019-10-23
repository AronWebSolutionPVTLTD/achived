import React, { Component } from 'react';
class Layout extends Component {
constructor(props){
  super(props);
  this.state={
  username:String,
  password:String,
  setposition: false
  };
  this.handleScroll = this.handleScroll.bind(this);
 }
componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
}

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
render() {
	const { setposition } =this.state;
    return (
    	<header className={"site-header is-sticky " +(setposition? 'has-fixed': '')} id="other_header">
	      	<div className="navbar navbar-expand-lg is-transparent" id="mainnav1">
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
                        <li><a href="/#browse-roadmap" className="nav-link">Browse Roadmaps</a></li>
                        <li><a href="/#contact" className="nav-link">contact startups</a></li>
                        <li><a href="/#who_we_are" className="nav-link">Who We ARE</a></li>
                        
                     </ul>
                     <ul className="navbar-nav navbar-btns">
                                            <li className="nav-item"><a className="nav-link btn btn-sm btn-outline menu-link" href="/login">Login</a></li>
                     </ul>
                  </div>
               </nav>
            </div>
            <section className="inner-banner vc_rows wpb_row vc_row-fluid mobile-center banner-particle banner-curb banner-full vc_row-o-equal-height vc_row-o-content-middle vc_row-flex banner d-flex align-items-center">
            <div id="particles-js" className="particles-container particles-js"><canvas className="particles-js-canvas-el" width="1423" height="200"></canvas></div>
            
            <div className="clearfix"></div>
         </section>
     </header>
      );
  }
}
export default Layout;