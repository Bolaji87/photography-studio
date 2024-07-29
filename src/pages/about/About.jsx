import React from "react";
import "./about.css";

function About() {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About Us</h1>
        <p>
          Welcome to <strong>SLACRANE SHOT IT</strong>! At
          <em> Slacrane Shot It</em> , we believe that photography is more than
          just taking pictures. It's about capturing the essence of a moment and
          creating lasting memories. Our passion for photography drives us to
          deliver beautiful, meaningful images that tell your unique story.
        </p>
      </header>

      <section className="about-philosophy">
        <h2>Our Philosophy</h2>
        <p>
          We are dedicated to providing a personalized experience for each of
          our clients. We understand that every person and occasion is unique,
          and we strive to capture that individuality through our lens. Whether
          it's a family portrait, a wedding, or a professional headshot, we take
          the time to get to know you and your vision.
        </p>
      </section>
      <h2 id="team">Meet Our Team</h2>
      <div className="team-member">
        <img
          className="lead-photographer-img"
          src="./slacrane/slacrane-1.jpg"
          alt="Lead Photographer"
        />
        <div>
          <h3>Islamiyah</h3>
          <p>
            <strong>Lead Photographer & Founder</strong>
            <br />
            Islamiyah has over 2 years of experience in the photography
            industry. With a background in [related field or experience], she
            brings a creative and professional touch to every session.She is
            passionate about [mention specific photography style or approach]
            and she is dedicated to making your experience memorable and
            enjoyable.
          </p>
        </div>
      </div>

      <div className="team1-member">
        <img src="./slacrane/slacrane-2.jpg" alt="Assistant Photographer" />
        <div>
          <h3> Assistant's Name</h3>
          <p>
            <strong>Assistant Photographer</strong>
            <br />
            [Assistant's Name] is an integral part of our team, assisting with
            shoots and ensuring everything runs smoothly. [He/She/They] is
            committed to helping capture the perfect shot every time.
          </p>
        </div>
      </div>

      <div className="our-services">
        <h2>Our Services</h2>
        <ul>
          <li>
            <strong>Portrait Photography:</strong> Capturing the personality and
            essence of individuals and families.
          </li>
          <li>
            <strong>Wedding Photography:</strong> Documenting your special day
            with elegance and creativity.
          </li>
          <li>
            <strong>Commercial Photography:</strong> Professional images for
            businesses, products, and branding.
          </li>
          <li>
            <strong>Event Photography:</strong> Preserving the excitement and
            emotion of your events.
          </li>
        </ul>
      </div>
      <div className="our-studio">
        <h2>Our Studio</h2>
        <p>
          Our studio is located in the heart of Ilorin, providing a comfortable
          and professional environment for your photo sessions. We also offer
          on-location shoots to capture the perfect backdrop for your
          photographs.
        </p>
      </div>

      <div className="testimony">
        <h2>Testimonials</h2>
        <div className="testimonial">
          Working with <strong>Slacrane Shot It</strong> was an amazing
          experience. They captured every moment of our <br /> wedding
          beautifully.
          <strong>Mr & Mrs Mohammed</strong>
        </div>
        <div className="testimonial">
          The portraits they took of our family are stunning. We'll cherish them
          forever. <strong> Abubakar Family </strong>
        </div>
      </div>

      <div className="get-in-touch">
        <h2>Get in Touch</h2>
        <p>
          We would love to hear from you! Whether you're ready to book a session
          or just have some questions, feel free to reach out to us. Contact us
          at <span> {""}</span>
          <a href="mailto:email@example.com">email@example.com</a> or call us at
          <a href="tel:+1234567890"> [Phone Number]</a>. You can also follow us
          on {""}
          <a
            href="https://www.instagram.com/slacrane_shotit/"
            id="contact-on-ig"
          >
            instagram
          </a>{" "}
          to see our latest work and updates.
        </p>
      </div>
    </div>
  );
}

export default About;
