import React from 'react';
import { SERVICES } from '../data/portfolio';

const Services = () => {
  return (
    <section id="services">
      <div className="container">
        <div className="sec-label" data-split>What I Offer</div>
        <h2 className="serv-h2" data-split>Services Tailored to<br /><em>Your Vision.</em></h2>
        <div className="serv-grid">
          {SERVICES.map((service, idx) => (
            <div key={idx} className="serv-card" data-fade>
              <div className="serv-icon">{service.icon}</div>
              <div className="serv-title">{service.title}</div>
              <div className="serv-desc">{service.description}</div>
              <ul className="serv-list">
                {service.list.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
