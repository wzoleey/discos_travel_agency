import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="contact">
        <p>Phone Number: 0620/4567854</p>
        <p>Email: discos.travel@gmail.com</p>
        <p>Address: 6640 Eger, Dobó István tér 20/b </p>
      </div>
      <div className="social-media">
        <i class="fab fa-facebook fa-3x"></i>
        <i class="fab fa-linkedin fa-3x"></i>
        <i class="fab fa-instagram fa-3x"></i>
        <i class="fab fa-twitter fa-3x"></i>
      </div>
      <a href="http://localhost:3000/">
        <i class="fas fa-arrow-up fa-3x"></i>{" "}
      </a>
    </div>
  );
}

export default Footer;
