import React, { useState, useEffect } from 'react';
import { PROJECTS } from '../data/portfolio';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(PROJECTS);

  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredProjects(PROJECTS);
    } else {
      setFilteredProjects(PROJECTS.filter(p => p.categories.includes(activeFilter)));
    }
  }, [activeFilter]);

  return (
    <section id="projects">
      <div className="container">
        <div className="proj-header">
          <div className="sec-label" data-split>Selected Work</div>
          <h2 className="proj-h2" data-split>Things I've <em>Built.</em></h2>
        </div>
        <div className="filter-tabs" id="filterTabs">
          <button className={`ftab ${activeFilter === 'all' ? 'active' : ''}`} data-filter="all" onClick={() => setActiveFilter('all')}>All</button>
          <button className={`ftab ${activeFilter === 'web' ? 'active' : ''}`} data-filter="web" onClick={() => setActiveFilter('web')}>Web</button>
          <button className={`ftab ${activeFilter === 'iot' ? 'active' : ''}`} data-filter="iot" onClick={() => setActiveFilter('iot')}>IoT</button>
          <button className={`ftab ${activeFilter === 'backend' ? 'active' : ''}`} data-filter="backend" onClick={() => setActiveFilter('backend')}>Backend</button>
        </div>
      </div>

      {activeFilter === 'all' ? (
        <div id="projPin">
          <div className="container container-no-pr">
            <div className="proj-pin-track" id="projTrack">
              {PROJECTS.map(project => (
                <div key={project.id} className="proj-card" data-cat={project.categories.join(' ')} data-img={`images/${project.image}`}>
                  <div className="proj-num">{project.num}</div>
                  <div className="proj-img">
                    <div className="proj-img-inner"></div>
                    <div className="proj-overlay">
                      <a href="#" className="plbtn plive" onClick={(e) => e.preventDefault()}>Live Demo</a>
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="plbtn pgh">GitHub</a>
                    </div>
                  </div>
                  <div className="proj-body">
                    <div className="proj-tags">
                      {project.categories.map(cat => (
                        <span key={cat} className="ptag">{cat.toUpperCase()}</span>
                      ))}
                    </div>
                    <div className="proj-title">{project.title}</div>
                    <div className="proj-desc">{project.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="container container-no-pt">
          <div className="proj-grid-fallback" id="projGridFallback">
            {filteredProjects.map(project => (
              <div key={project.id} className="proj-card" data-cat={project.categories.join(' ')}>
                <div className="proj-num">{project.num}</div>
                <div className="proj-img">
                  <div className="proj-img-inner"></div>
                  <div className="proj-overlay">
                    <a href="#" className="plbtn plive" onClick={(e) => e.preventDefault()}>Live Demo</a>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="plbtn pgh">GitHub</a>
                  </div>
                </div>
                <div className="proj-body">
                  <div className="proj-tags">
                    {project.categories.map(cat => (
                      <span key={cat} className="ptag">{cat.toUpperCase()}</span>
                    ))}
                  </div>
                  <div className="proj-title">{project.title}</div>
                  <div className="proj-desc">{project.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
