import './App.css';
import { projects, profile } from './data/portfolio';

function App() {
  return (
    <div className="portfolio-shell">
      <a className="contact-button contact-fixed" href={`mailto:${profile.email}`}>Contact Me <span aria-hidden="true">↗</span></a>

      <main id="home">
        <section className="intro" aria-labelledby="page-title">
          <h1 id="page-title">{profile.name}</h1>
          <p>{profile.role}</p>
        </section>

        <section className="projects" aria-labelledby="projects-title">
          <div className="projects-heading">
            <h2 id="projects-title">Projects</h2>
            <span>{String(projects.length).padStart(2, '0')}</span>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title}>
                {(project.liveUrl || project.githubUrl) && (
                  <a
                    className="project-card-link"
                    href={project.liveUrl || project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${project.title} ${project.liveUrl ? 'live project' : 'GitHub repository'}`}
                  />
                )}
                <div className={`project-art art-${project.art}${project.image ? ' project-art-has-image' : ''}`}>
                  {project.image && <img className="project-art-image" src={project.image} alt="" style={{ objectPosition: project.imagePosition || 'center' }} />}
                  {!project.image && <span className="art-index">{String(index + 1).padStart(2, '0')}</span>}
                  {!project.image && <span className="art-title">{project.artTitle || project.title}</span>}
                  {!project.image && <span className="art-decoration" aria-hidden="true">{project.artGlyph || '+'}</span>}
                  {!project.image && (project.liveUrl || project.githubUrl) && <span className="art-open" aria-hidden="true">&#8599;</span>}
                </div>
                <div className="project-info">
                  <span className="project-category">{project.category}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-bottom">
                    <ul className="tag-list" aria-label={`${project.title} technologies`}>
                      {project.stack.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                    <div className="project-links">
                      {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer">Live <span aria-hidden="true">↗</span></a>}
                      {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section className="about-section" aria-labelledby="about-title">
          <h2 id="about-title">About Me</h2>
          <p>{profile.personalAbout}</p>
          <a className="contact-button contact-bottom" href={`mailto:${profile.email}`}>Contact Me <span aria-hidden="true">↗</span></a>
        </section>
      </main>
    </div>
  );
}

export default App;
