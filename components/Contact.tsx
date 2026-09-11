import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { SectionLabel } from "./SectionLabel";
import { Reveal } from "./Reveal";
export function Contact() {
  return (
    <section id="contact" className="contact-section">
      <Reveal className="container">
        <SectionLabel number="06">LET’S CONNECT</SectionLabel>
        <div className="contact-grid">
          <div>
            <h2>
              Have an opportunity
              <br />
              or a project in mind<span className="sage">?</span>
            </h2>
            <p>I’d love to hear about it. Let’s build something useful.</p>
            <a
              className="button button-primary"
              href={
                profile.email ? "mailto:" + profile.email : profile.linkedin
              }
              target={profile.email ? undefined : "_blank"}
              rel={profile.email ? undefined : "noopener noreferrer"}
            >
              Get In Touch <ArrowUpRight size={18} />
            </a>
          </div>
          <div className="contact-links">
            <span className="eyebrow">FIND ME ONLINE</span>
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              <span>
                <Github size={19} /> GitHub
              </span>
              <ArrowUpRight size={19} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                <Linkedin size={19} /> LinkedIn
              </span>
              <ArrowUpRight size={19} />
            </a>
            {profile.email ? (
              <a href={"mailto:" + profile.email}>
                <span>
                  <Mail size={19} />
                  {profile.email}
                </span>
                <ArrowUpRight size={19} />
              </a>
            ) : (
              <p className="email-pending">
                <Mail size={16} /> Email will be added soon.
                <br />
                For now, connect on LinkedIn.
              </p>
            )}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
