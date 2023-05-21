import { GiCircleSparks } from "react-icons/gi";
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
        <p>
          Providing reliable service since 1992
        </p>
      </div>
      <div className="text-white">
        <span className="footer-title">SHOP</span>
        <a className="link link-hover">Toys</a>
        <a className="link link-hover">Books</a>
        <a className="link link-hover">The Playground</a>
      </div >
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
