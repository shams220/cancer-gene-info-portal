import "./about.css";
import Navbar from "./navbar";
import Footer from "./footer";
export default function About() {
  return (
    <div>
      <Navbar />
      <div className="about-container">
        <h1 className="about-title">About Cancer Gene Information Portal</h1>

        <p className="about-text">
          The Cancer Gene Information Portal is designed to help researchers,
          students, and medical professionals easily explore cancer types and
          their associated genetic mutations. Our goal is to simplify cancer
          genomics research by providing structured, clean, and
          easy-to-understand information.
        </p>

        <div className="about-cards">
          <div className="about-card">
            <h3>Our Mission</h3>
            <p>
              To make cancer gene and mutation data accessible to everyone
              through a modern, user-friendly interface.
            </p>
          </div>

          <div className="about-card">
            <h3>What We Provide</h3>
            <p>
              A large collection of cancer categories, gene associations, and
              mutation insights powered by publicly available biomedical
              datasets.
            </p>
          </div>

          <div className="about-card">
            <h3>Who Can Use This Portal?</h3>
            <p>
              Students, researchers, biotech professionals, and anyone curious
              about cancer genomics.
            </p>
          </div>
        </div>

        <div className="team-section">
          <h2 className="team-title">Our Team</h2>

          <div className="team-grid">
            <div className="team-card">
              <h3 className="team-name">Gulnaz Parvin</h3>
              <p className="team-role">Biotech Engineer</p>
            </div>

            <div className="team-card">
              <h3 className="team-name">Alam Zia</h3>
              <p className="team-role">Collaborator (ECE)</p>
            </div>

            <div className="team-card">
              <h3 className="team-name">Shams Alam</h3>
              <p className="team-role">Collaborator (ECE)</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
