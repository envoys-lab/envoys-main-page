import React from "react";
import {
  FooterContainer,
  FooterWrapper,
  FooterTop,
  JoinWrapper,
  JoinInput,
  FooterTopRight,
  FooterTopRightColumn,
  Copy,
} from "./FooterStyledComponents";
import facebook from "../../assets/images/footer_socials/facebook.svg";
import instagram from "../../assets/images/footer_socials/instagram.svg";
import linkedin from "../../assets/images/footer_socials/linkedin.svg";
import twitter from "../../assets/images/footer_socials/twitter.svg";
import watsapp from "../../assets/images/footer_socials/watsapp.svg";
import youtube from "../../assets/images/footer_socials/youtube.svg";

const Footer: React.FC = () => {
  const [email, setEmail] = React.useState<string>("");
  function handleInputChange(e: any) {
    setEmail(e.target.value);
  }
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterTop>
          <JoinWrapper>
            <h3 className="join_title">Join the community</h3>
            <p className="join_text">
              Join our active community of builders and partners
            </p>
            <div className="footer_socials-wrapper">
              <a href="#">
                <img src={facebook} alt="" />
              </a>
              <a href="#">
                <img src={instagram} alt="" />
              </a>
              <a href="#">
                <img src={linkedin} alt="" />
              </a>
              <a href="#">
                <img src={twitter} alt="" />
              </a>
              <a href="#">
                <img src={watsapp} alt="" />
              </a>
              <a href="#">
                <img src={youtube} alt="" />
              </a>
            </div>
            <JoinInput
              value={email}
              onChange={handleInputChange}
              type="email"
              placeholder="Email adress"
            />
          </JoinWrapper>
          <FooterTopRight>
            <FooterTopRightColumn>
              <h4 className="footer_right-title">Company</h4>
              <ul className="footer_right-list">
                <li className="footer_right-item">
                  <a href="#">Develop</a>
                </li>
                <li className="footer_right-item">
                  <a href="#">Economy</a>
                </li>
                <li className="footer_right-item">
                  <a href="#">Tech</a>
                </li>
                <li className="footer_right-item">
                  <a href="#">Community</a>
                </li>
                <li className="footer_right-item">
                  <a href="#">About</a>
                </li>
                <li className="footer_right-item">
                  <a href="#">Blog</a>
                </li>
              </ul>
            </FooterTopRightColumn>
            <FooterTopRightColumn>
              <h4 className="footer_right-title">Technology</h4>
              <ul className="footer_right-list">
                <li className="footer_right-item">
                  <a href="#">Documentation</a>
                </li>
                <li className="footer_right-item">
                  <a href="#">Testnet</a>
                </li>
                <li className="footer_right-item">
                  <a href="#">ERTP: Electronic Right Transfer Protocol</a>
                </li>
                <li className="footer_right-item">
                  <a href="#">Zoe: Offer-Safety Enforcement</a>
                </li>
                <li className="footer_right-item">
                  <a href="#">SES: Secure ECMAScript</a>
                </li>
                <li className="footer_right-item">
                  <a href="#">IBC</a>
                </li>
                <li className="footer_right-item">
                  <a href="#">Change Logs</a>
                </li>
              </ul>
            </FooterTopRightColumn>
            <FooterTopRightColumn>
              <h4 className="footer_right-title">Legal</h4>
              <ul className="footer_right-list">
                <li className="footer_right-item">
                  <a href="#">Terms and Conditions</a>
                </li>
                <li className="footer_right-item">
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </FooterTopRightColumn>
          </FooterTopRight>
        </FooterTop>
        <Copy>
          <span>
            © 2021 Envoys vision Systems Operating Company. All Rights Reserved.
          </span>
        </Copy>
      </FooterContainer>
    </FooterWrapper>
  );
};
export default Footer;
