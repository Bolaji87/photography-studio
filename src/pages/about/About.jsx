import React from "react";
import "./about.css";
function About() {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>
        Welcome to <strong>SLACRANE SHOT IT</strong>! At
        <strong>Slacrane Shot It</strong>, we believe that photography is more
        than just taking pictures. it's about capturing the essence of a moment
        and creating lasting memories. Our passion for photography drives us to
        deliver beautiful, meaningful images that tell your unique story.
      </p>

      <h2>Our Philosophy</h2>
      <p>
        We are dedicated to providing a personalized experience for each of our
        clients. We understand that every person and occasion is unique, and we
        strive to capture that individuality through our lens. Whether it's a
        family portrait, a wedding, or a professional headshot, we take the time
        to get to know you and your vision.
      </p>

      <h2>Meet Our Team</h2>
      <div className="team-member">
        <img src="photographer.jpg" alt="Lead Photographer" />
        <div>
          <h3>[Photographer's Name]</h3>
          <p>
            <strong>Lead Photographer & Founder</strong>
            <br />
            [Slacrane] has over 2 years of experience in the photography
            industry. With a background in [related field or experience], she
            brings a creative and professional touch to every session.She is
            passionate about [mention specific photography style or approach]
            and are dedicated to making your experience memorable and enjoyable.
          </p>
        </div>
      </div>

      <div className="team-member">
        <img src="assistant.jpg" alt="Assistant Photographer" />
        <div>
          <h3>[Assistant's Name]</h3>
          <p>
            <strong>Assistant Photographer</strong>
            <br />
            [Assistant's Name] is an integral part of our team, assisting with
            shoots and ensuring everything runs smoothly. [He/She/They] is
            committed to helping capture the perfect shot every time.
          </p>
        </div>
      </div>

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

      <h2>Our Studio</h2>
      <p>
        Our studio is located in the heart of [City or Area], providing a
        comfortable and professional environment for your photo sessions. We
        also offer on-location shoots to capture the perfect backdrop for your
        photographs.
      </p>

      <h2>Testimonials</h2>
      <div className="testimonial">
        "Working with <strong>[Studio Name]</strong> was an amazing experience.
        They captured every moment of our wedding beautifully." — [Client Name]
      </div>
      <div className="testimonial">
        "The portraits they took of our family are stunning. We'll cherish them
        forever." — [Client Name]
      </div>

      <h2>Get in Touch</h2>
      <p>
        We would love to hear from you! Whether you're ready to book a session
        or just have some questions, feel free to reach out to us. Contact us at{" "}
        <a href="mailto:email@example.com">email@example.com</a> or call us at{" "}
        <a href="tel:+1234567890">[Phone Number]</a>. You can also follow us on{" "}
        <a href="#">[social media links]</a> to see our latest work and updates.
      </p>
    </div>
  );
}

export default About;
