import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="contact">
        <p>
          <span>Phone number:</span> 0665/376485
        </p>
        <p>
          <span>Mobile number:</span> 0620/4567854
        </p>
        <p>
          <span>Email:</span> discos.travel@gmail.com
        </p>
        <p>
          <span>Address:</span> 6640 Eger, Dobó István tér 20/b{" "}
        </p>
      </div>
      <div className="social-media">
        <i class="fab fa-facebook fa-3x"></i>
        <i class="fab fa-linkedin fa-3x"></i>
        <i class="fab fa-instagram fa-3x"></i>
        <i class="fab fa-twitter fa-3x"></i>
      </div>
      <a href="http://localhost:3000/">
        <i class="fas fa-home fa-3x"></i>{" "}
      </a>
    </div>
  );
}

export default Footer;
