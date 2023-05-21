import { GiCircleSparks } from "react-icons/gi";
import { CiFacebook, CiTwitter } from "react-icons/ci";
import { BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-black text-base-content mt-10">
      <div className="text-white">
        <div className="flex items-center gap-2">
          <div>
            <Link to="/">
              <GiCircleSparks size="3em" />
            </Link>
          </div>
          <Link to="/" className="text-3xl">
            ToyGalaxy
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <a href="/">
            <CiFacebook size="2em" />
          </a>
          <a href="/">
            <BsInstagram size="1.5em" />
          </a>
          <a href="/">
            <CiTwitter size="2em" />
          </a>
        </div>
        <br />
        <p className="font-bold text-white">
          Our ToyGalaxy Store <br />
          123 ABC Street, <br /> 
          Cityville, State 12345, <br />
          Country Phone: 123-456-7890 <br />
          Email: info@ourkidsstore.com
        </p>
        

        <small>Copyright 2000 ToyGalaxy</small>
      </div>
      <div className="text-white">
        <span className="footer-title">SHOP</span>
        <a className="link link-hover">Toys</a>
        <a className="link link-hover">Books</a>
        <a className="link link-hover">The Playground</a>
      </div>
      <div className="text-white">
        <span className="footer-title">HELP</span>
        <a className="link link-hover">Store Location</a>
        <a className="link link-hover">Contact Us</a>
        <a className="link link-hover">Toy Submissions</a>
      </div>
      <div className="text-white">
        <span className="footer-title">Legal</span>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </div>
    </footer>
  );
};

export default Footer;
