import "../Css/Footer.css";
import PayImages from "../Images/payment-companies0-logo.png";
import FooterLogo from "../Images/white-logo.png";
import { FiTwitter, FiInstagram, FiFacebook } from "react-icons/fi";

const Footer = () => {
  return (
    <div>
      <div className="tooter">
        <div className="allcontain_foot">
          <div className="container1">
            <div>
              <img src={FooterLogo} className="footerpic" />
            </div>
            <div className="wod1hold" style={{ fontSize: "1.2rem" }}>
              <p>Holiday Planners sit amet consectetur adipisicing elit.</p>
              <p>
                Perferendis sapiente tenetur officiis explicabo fugit, sit
                mollitia
              </p>
              <p>eum atque excepturi quaerat autem.</p>
            </div>
            <div>
              <input
                type="text"
                placeholder="Enter your Email"
                className="placee"
              />
              <span>
                <button type="submit" className="sbbutto" value="submit">
                  SUBMIT
                </button>
              </span>
            </div>
            <div>
              <img src={PayImages} className="pic" />
            </div>
          </div>
          <div className="container2">
            <div>
              <div className="hlinecontainer">
                <h1 className="textt">Navigation</h1>
              </div>
              <div className="hline"></div>
            </div>
            <div className="textt2">
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Destination</li>
                <li>Tour</li>
                <li>Blog</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
          <div className="container3">
            <div className="linetext">
              <div className="hline2">
                <div className="hlinecontainer">
                  <h3 style={{ color: "white" }}>Need Help ?</h3>
                </div>
                <div className="line_t"></div>
              </div>
              <div className="contohold">
                <div className="conto1">
                  <p>Call Us</p>
                  <h3>+123 456 7890</h3>
                </div>
                <div className="conto2">
                  <p>Email for Us</p>
                  <h3>holidayplanners@gmail.com</h3>
                </div>
                <div className="conto3">
                  <p>Location</p>
                  <h3>Main Street, Victoria 8007.</h3>
                </div>
                <div className="conto4">
                  <p>Flow Us</p>
                  <p className="footsocial">
                    <FiFacebook /> &nbsp;
                    <FiInstagram />
                    &nbsp;
                    <FiTwitter />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div>
          <hr className="hol" />
        </div>
        <br></br>
        <div className="endfoot">
          <div>
            <h6>Copyright © 2021 Geek Code Lab. All Rights Reserved.</h6>
          </div>
          <div>
            <h6>Privacy Policy |Terms of Use |Cookie Policy</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
