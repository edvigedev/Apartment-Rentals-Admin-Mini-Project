import React from "react";
import Edvige from "../assets/images/edi.png";
import Baptiste from "../assets/images/bat.jpg";

function AboutUs() {
  return (
    <div className="about-us">
      <header className="about-header">
        <h1>About Us</h1>
      </header>

      <section className="about-content">
        <p>
          We are Edvige and Baptiste, currently in the same Ironhack bootcamp,
          where we’re learning to build practical, user-centered web
          applications. As part of our training, we are creating a website
          dedicated to managing apartment rentals.
        </p>

        <p>
          Our goal is to design a platform that simplifies the rental process,
          connecting property owners and renters seamlessly while making the
          experience both enjoyable and efficient.
        </p>
      </section>
      <div className="founders">
        <div className="founder">
          <img src={Baptiste} alt="Baptiste" />
          <a
            href="https://www.linkedin.com/in/baptiste-desharbes-bourdin-5637921a1/"
            target="_blank"
          >
            LinkedIn
          </a>
          <a href="https://github.com/BaptisteDSH?tab=repositories">GithHub</a>
        </div>
        <div className="founder">
          <img src={Edvige} alt="Edvige" />
          <a href="https://www.linkedin.com/in/edvige-disalvo/" target="_blank">
            LinkedIn
          </a>
          <a href="https://github.com/edvigedev">GithHub</a>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
