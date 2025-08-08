import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="bg-dark text-secondary py-5 px-4">
      <div className="container">
        {/* Social Media Links */}
        <div className="mb-4">
          <i className="fab fa-facebook-f me-3 cursor-pointer"></i>
          <i className="fab fa-instagram me-3 cursor-pointer"></i>
          <i className="fab fa-twitter me-3 cursor-pointer"></i>
          <i className="fab fa-youtube cursor-pointer"></i>
        </div>

        {/* Footer Links */}
        <div className="row">
          <div className="col-6 col-md-3 mb-3">
            <ul className="list-unstyled">
              <li>Audio Description</li>
              <li>Investor Relations</li>
              <li>Legal Notices</li>
            </ul>
          </div>
          <div className="col-6 col-md-3 mb-3">
            <ul className="list-unstyled">
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Cookie Preferences</li>
            </ul>
          </div>
          <div className="col-6 col-md-3 mb-3">
            <ul className="list-unstyled">
              <li>Gift Cards</li>
              <li>Terms of Use</li>
              <li>Corporate Information</li>
            </ul>
          </div>
          <div className="col-6 col-md-3 mb-3">
            <ul className="list-unstyled">
              <li>Media Center</li>
              <li>Privacy</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-4">
          <button className="btn btn-outline-secondary btn-sm mb-3">
            Service Code
          </button>
          <p className="small mb-0">&copy; 1997-2025 Netflix, Inc.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
