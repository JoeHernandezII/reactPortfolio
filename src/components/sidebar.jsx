import React, { Component } from 'react'


export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/011.jpg)'}} />
              <h1 id="colorlib-logo"><a href="index.html">Joe Hernandez</a></h1>
              <span className="email"><i className="icon-mail"></i> yoshi.jhii@gmail.com</span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                  <li><a href="#about" data-nav-section="about">About</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li><a href="https://www.facebook.com/joe.hernandez.906" target="_blank" rel="noopener noreferrer"><i className="icon-facebook2" /></a></li>
                <li><a href="https://twitter.com/Joe_TheMexican" target="_blank" rel="noopener noreferrer"><i className="icon-twitter2" /></a></li>
                <li><a href="https://www.instagram.com/laparka_tajiri/" target="_blank" rel="noopener noreferrer"><i className="icon-instagram" /></a></li>
                <li><a href="https://www.linkedin.com/in/joehii/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
                <li><a href="https://github.com/JoeHernandezII" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>

              </ul>
            </nav>
            <div className="colorlib-footer">
              <p><small>
                  Copyright 2020<br></br>
                  Template provided by <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a>
              </small></p>
              
            </div>
          </aside>
        </div>
      </div>
    )
  }
}
