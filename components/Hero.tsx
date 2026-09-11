import {
  ArrowDown,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";
import { profile } from "@/data/profile";
export function Hero() {
  return (
    <section className="hero container" aria-labelledby="hero-heading">
      <div className="hero-copy">
        <div className="eyebrow hero-eyebrow">
          <span className="tiny-line" /> STATISTICS STUDENT · DEVELOPER · DATA
          ENTHUSIAST
        </div>
        <h1 id="hero-heading">
          Hi, I’m <span>BEST.</span>
        </h1>
        <p className="hero-subtitle">
          Statistics student <span>@ KMITL</span>
        </p>
        <p className="hero-statement">
          I turn data into insights and ideas
          <br className="desktop-break" /> into practical software.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">
            View Projects <ArrowUpRight size={18} />
          </a>
          <a className="button button-secondary" href="#contact">
            Let’s Connect <ArrowUpRight size={18} />
          </a>
        </div>
        <div className="social-links">
          <a href={profile.github} target="_blank" rel="noopener noreferrer">
            <Github size={17} /> GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            <Linkedin size={17} /> LinkedIn
          </a>
          {profile.email && (
            <a href={"mailto:" + profile.email}>
              <Mail size={17} /> Email
            </a>
          )}
        </div>
      </div>
      <div className="profile-wrap">
        <div className="profile-card">
          <div className="availability">
            <span /> OPEN TO OPPORTUNITIES
          </div>
          <div className="profile-art" aria-label="Abstract monogram B">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <span className="monogram">
              B<span>.</span>
            </span>
            <span className="art-coordinate coordinate-top">01 / BEST</span>
            <span className="art-coordinate coordinate-bottom">
              ALWAYS CURIOUS ↗
            </span>
            <span className="orbit-point" />
          </div>
          <div className="profile-details">
            <div>
              <span className="eyebrow">FOCUS</span>
              <p>
                Data <span className="sage">×</span> Software
              </p>
            </div>
            <div>
              <span className="eyebrow">BASED IN</span>
              <p>
                <MapPin size={14} /> Bangkok, Thailand
              </p>
            </div>
          </div>
        </div>
        <span className="profile-caption">
          A statistical mindset. A builder’s curiosity.
        </span>
      </div>
      <div className="hero-bottom">
        <a href="#about">
          <ArrowDown size={15} /> A little more about me
        </a>
        <span>DATA · BUSINESS · SOFTWARE</span>
      </div>
    </section>
  );
}
