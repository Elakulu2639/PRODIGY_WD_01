import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <section id="home" className="section">
          <h1>Welcome to Our Creative Studio</h1>
          <p>
            We create amazing digital experiences that inspire and innovate.
          </p>
          <div className="cta-buttons">
            <button className="primary-btn">Get Started</button>
            <button className="secondary-btn">Learn More</button>
          </div>
        </section>

        <section id="about" className="section">
          <h2>About Us</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                We are a team of passionate designers and developers dedicated
                to creating exceptional digital experiences. With over 5 years
                of experience, we've helped numerous businesses transform their
                digital presence.
              </p>
              <div className="stats">
                <div className="stat-item">
                  <h3>100+</h3>
                  <h5>Projects Completed</h5>
                </div>
                <div className="stat-item">
                  <h3>50+</h3>
                  <h5>Happy Clients</h5>
                </div>
                <div className="stat-item">
                  <h3>10+</h3>
                  <h5>Team Members</h5>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="section">
          <h2>Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <i className="service-icon">🎨</i>
              <h3>Web Design</h3>
              <p>Creative and responsive designs that engage your audience.</p>
            </div>
            <div className="service-card">
              <i className="service-icon">💻</i>
              <h3>Development</h3>
              <p>Custom web applications built with modern technologies.</p>
            </div>
            <div className="service-card">
              <i className="service-icon">📱</i>
              <h3>Mobile Apps</h3>
              <p>Native and cross-platform mobile applications.</p>
            </div>
            <div className="service-card">
              <i className="service-icon">📊</i>
              <h3>Digital Marketing</h3>
              <p>Strategic marketing solutions to grow your business.</p>
            </div>
          </div>
        </section>

        <section id="portfolio" className="section">
          <h2>Our Portfolio</h2>
          <div className="portfolio-grid">
            <div className="portfolio-item">
              <div className="portfolio-image">Project 1</div>
              <h3>E-commerce Platform</h3>
              <p>A modern online shopping experience</p>
            </div>
            <div className="portfolio-item">
              <div className="portfolio-image">Project 2</div>
              <h3>Mobile App Design</h3>
              <p>Fitness tracking application</p>
            </div>
            <div className="portfolio-item">
              <div className="portfolio-image">Project 3</div>
              <h3>Corporate Website</h3>
              <p>Business website redesign</p>
            </div>
            <div className="portfolio-item">
              <div className="portfolio-image">Project 4</div>
              <h3>Brand Identity</h3>
              <p>Complete brand makeover</p>
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <h2>Contact Us</h2>
          <div className="contact-container">
            <div className="contact-info">
              <h3>Get in Touch</h3>
              <p>
                We'd love to hear from you. Send us a message and we'll respond
                as soon as possible.
              </p>
              <div className="contact-details">
                <p>📧 info@pixelcraft.com</p>
                <p>📞 +1 234 567 890</p>
                <p>📍 123 Business Street, City, Country</p>
              </div>
            </div>
            <form className="contact-form">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" required></textarea>
              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>PixelCraft</h3>
            <p>Creating digital experiences that inspire and innovate.</p>
            <div class="social-links">
              <a href="#">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li>Web Design</li>
              <li>Development</li>
              <li>Mobile Apps</li>
              <li>Digital Marketing</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <ul className="contact-info">
              <li>📧 info@pixelcraft.com</li>
              <li>📞 +1 234 567 890</li>
              <li>📍 123 Business Street, City, Country</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 PixelCraft. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
