import React from 'react';
import { EXPERIENCE } from '../data/portfolio';

const Experience = () => {
  return (
    <section id="experience">
      <div className="container">
        <div className="sec-label" data-split>My Journey</div>
        <h2 className="exp-h2" data-split>Experience &amp; <em>Education.</em></h2>
        <div className="exp-cols">
          <div>
            <div className="exp-col-label">Work Experience</div>
            <div className="tl">
              {EXPERIENCE.work.map((job, idx) => (
                <div key={idx} className="tl-item" data-fade>
                  <div className="tl-dot"></div>
                  <div className="tl-period">{job.period}</div>
                  <div className="tl-title">{job.title}</div>
                  <div className="tl-org">{job.org}</div>
                  <div className="tl-desc">{job.description}</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="exp-col-label">Education</div>
            <div className="tl tl-mb">
              {EXPERIENCE.education.map((edu, idx) => (
                <div key={idx} className="tl-item" data-fade>
                  <div className="tl-dot"></div>
                  <div className="tl-period">{edu.period}</div>
                  <div className="tl-title">{edu.title}</div>
                  <div className="tl-org">{edu.org}</div>
                  <div className="tl-desc">{edu.description}</div>
                </div>
              ))}
            </div>
            <div className="exp-col-label">Certifications</div>
            {EXPERIENCE.certifications.map((cert, idx) => (
              <div key={idx} className="cert-item" data-fade>
                <div className="cert-icon">{cert.icon}</div>
                <div>
                  <div className="cert-name">{cert.name}</div>
                  <div className="cert-issuer">{cert.issuer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
