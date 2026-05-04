import React from 'react';
import { useFormSpree } from '../hooks/useFormSpree';
import { CONTACT_DETAILS, SOCIAL_LINKS } from '../data/portfolio';

const Contact = () => {
  const { submit, isSubmitting, error, success } = useFormSpree();

  return (
    <section id="contact">
      <div className="container">
        <div className="sec-label" data-split>Get In Touch</div>
        <div className="contact-grid">
          <div>
            <h2 className="contact-h2" data-split>Let's Build Something <em>Amazing.</em></h2>
            <p className="contact-desc" data-fade>
              Whether you have a project in mind, need a tech partner, or just want to chat about Cybersecurity and software — my inbox is always open.
            </p>
            <div className="c-detail" data-fade>
              <div className="c-icon">📧</div>
              <div className="c-txt">
                <strong>{CONTACT_DETAILS.email}</strong>Email me anytime
              </div>
            </div>
            <div className="c-detail" data-fade>
              <div className="c-icon">📍</div>
              <div className="c-txt">
                <strong>{CONTACT_DETAILS.location}</strong>Available for remote work globally
              </div>
            </div>
            <div className="c-detail" data-fade>
              <div className="c-icon">⏱️</div>
              <div className="c-txt">
                <strong>{CONTACT_DETAILS.timezone}</strong>Usually responds within 24 hours
              </div>
            </div>
            <div className="social-row" data-fade>
              {SOCIAL_LINKS.map((link, idx) => (
                <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" className="soc-link">
                  {link.icon === 'github' && (
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                  )}
                  {link.icon === 'linkedin' && (
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  )}
                  {link.icon === 'twitter' && (
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  )}
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          <div className="cf-wrap" data-fade>
            {success && (
              <div className="f-success">
                <div className="fcheck">✅</div>
                <h3>Message Sent!</h3>
                <p>Thanks for reaching out — I'll get back to you within 24 hours.</p>
              </div>
            )}
            {error && (
              <div className="f-error">
                <div className="ferror-icon">⚠️</div>
                <h3>Oops, something went wrong</h3>
                <p>{error}</p>
              </div>
            )}
            {!success && !error && (
              <form id="cf" onSubmit={submit} noValidate>
                <div className="frow">
                  <div className="fg">
                    <label className="fl" htmlFor="fn">First Name</label>
                    <input className="fi" type="text" id="fn" name="firstName" placeholder="John" required />
                  </div>
                  <div className="fg">
                    <label className="fl" htmlFor="ln">Last Name</label>
                    <input className="fi" type="text" id="ln" name="lastName" placeholder="Doe" />
                  </div>
                </div>
                <div className="fg">
                  <label className="fl" htmlFor="em">Email</label>
                  <input className="fi" type="email" id="em" name="email" placeholder="john@example.com" required />
                </div>
                <div className="fg">
                  <label className="fl" htmlFor="sub">Subject</label>
                  <input className="fi" type="text" id="sub" name="subject" placeholder="Project Inquiry" />
                </div>
                <div className="fg">
                  <label className="fl" htmlFor="msg">Message</label>
                  <textarea className="fta" id="msg" name="message" placeholder="Tell me about your project..." required></textarea>
                </div>
                <div className="mag-wrap mag-full">
                  <button type="submit" className="btn btn-solid f-submit mag-btn" data-label="Send it!" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
