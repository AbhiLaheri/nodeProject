import React, { Component } from "react";
import "./template/css/style.css";
import about from "./template/img/about.svg";
import team1 from "./template/img/team1.jpg";
import team2 from "./template/img/team2.jpg";
import team3 from "./template/img/team3.jpg";
import team4 from "./template/img/team4.jpg";
import Nav from "./navbar";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Nav userSession={localStorage.getItem("myCat")} />
        <section id="intro" className="clearfix">
          <div className="container">
            <div className="intro-img">
              <img src="img/intro-img.svg" alt="" class="img-fluid" />
            </div>

            <div className="intro-info">
              <h2>
                We provide
                <br />
                <span>solutions</span>
                <br />
                for your thoughts!
              </h2>
              <div>
                <a href="#about" className="btn-get-started scrollto">
                  Get Started
                </a>
                <a href="#services" className="btn-services scrollto">
                  Our Services
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id="about">
          <div class="container">
            <header className="section-header">
              <h3>About Us</h3>
              <p> We provide solutions for your all question!!!</p>
            </header>

            <div className="row about-container">
              <div className="col-lg-6 content order-lg-1 order-2">
                <p>
                  When you make a query, you are making a request for
                  information based on a selection of criteria. A query is
                  different from a common search operation in that the search
                  criteria of the query can be stored. Based on the stored
                  query, you will receive updated results at regular intervals
                  to an email inbox
                </p>
              </div>

              <div className="col-lg-6 background order-lg-2 order-1 wow fadeInUp">
                <img src={about} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="section-bg">
          <div className="container">
            <header className="section-header">
              <h3>Services</h3>
            </header>

            <div className="row">
              <div
                className="col-md-6 col-lg-5 offset-lg-1 wow bounceInUp"
                data-wow-duration="1.4s"
              >
                <div className="box">
                  <div className="icon">
                    <i
                      class="ion-ios-analytics-outline"
                      style={{ color: "#ff689b" }}
                    />
                  </div>
                  <h4 className="title">
                    <a href="https//s">Lorem Ipsum</a>
                  </h4>
                  <p className="description">
                    Voluptatum deleniti atque corrupti quos dolores et quas
                    molestias excepturi sint occaecati cupiditate non provident
                  </p>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-5 wow bounceInUp"
                data-wow-duration="1.4s"
              >
                <div className="box">
                  <div className="icon">
                    <i
                      className="ion-ios-bookmarks-outline"
                      style={{ color: "#e9bf06" }}
                    />
                  </div>
                  <h4 className="title">
                    <a href="https//">Dolor Sitema</a>
                  </h4>
                  <p className="description">
                    Minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat tarad limino ata
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="team">
          <div className="container">
            <div className="section-header">
              <h3>Team</h3>
              <p>
              Alone we can do so little, together we can do so much
              </p>
            </div>

            <div className="row">
              <div className="col-lg-3 col-md-6 wow fadeInUp">
                <div className="member">
                  <img src={team1} className="img-fluid" alt="" />
                  <div className="member-info">
                    <div className="member-info-content">
                      <h4>Abhishek Kumar</h4>
                      <span>Student</span>
                      <div class="social">
                        <a href="https//">
                          <i className="fa fa-twitter" />
                        </a>
                        <a href="https//">
                          <i className="fa fa-facebook" />
                        </a>
                        <a href="https//">
                          <i className="fa fa-google-plus" />
                        </a>
                        <a href="https//">
                          <i className="fa fa-linkedin" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-3 col-md-6 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="member">
                  <img src={team2} class="img-fluid" alt="" />
                  <div className="member-info">
                    <div className="member-info-content">
                      <h4>Rajbala Kumari</h4>
                      <span>Student</span>
                      <div className="social">
                        <a href="https//">
                          <i className="fa fa-twitter" />
                        </a>
                        <a href="v">
                          <i className="fa fa-facebook" />
                        </a>
                        <a href="https//">
                          <i className="fa fa-google-plus" />
                        </a>
                        <a href="https//">
                          <i className="fa fa-linkedin" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-3 col-md-6 wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <div className="member">
                  <img src={team3} className="img-fluid" alt="" />
                  <div className="member-info">
                    <div className="member-info-content">
                      <h4>Ankita Basak</h4>
                      <span>Student</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                <div class="member">
                  <img src={team4} class="img-fluid" alt="" />
                  <div class="member-info">
                    <div class="member-info-content">
                      <h4>Renuka Kumari</h4>
                      <span>Student</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer id="footer">
          <div className="footer-top">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-6 footer-info">
                  <h3>Query</h3>
                  <p>
                    A Query Management System <br /> is a system which enables{" "}
                    <br /> you to: Manage, Answer,
                    <br /> Search and Re-use.
                  </p>
                </div>

                <div className="col-lg-2 col-md-6 footer-links">
                  <h4>Useful Links</h4>
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">About us</a>
                    </li>
                    <li>
                      <a href="#">Services</a>
                    </li>
                    <li>
                      <a href="#">Terms of service</a>
                    </li>
                    <li>
                      <a href="#">Privacy policy</a>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-3 col-md-6 footer-contact">
                  <h4>Contact Us</h4>
                  <p>
                    kiit Street <br />
                    BBS, 751024
                    <br />
                    India <br />
                    <strong>Phone:</strong> +1 8888 9999 55
                    <br />
                    <strong>Email:</strong> info@example.com
                    <br />
                  </p>
                </div>

                <div className="col-lg-3 col-md-6 footer-newsletter">
                  <h4>Upcoming Service</h4>
                  <p>Comming Soon</p>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="copyright">
              &copy; Copyright <strong>ARAR</strong>. All Rights Reserved
            </div>
            <div className="credits">
              Designed by <a href="https://bootstrapmade.com/">Abhi</a>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
