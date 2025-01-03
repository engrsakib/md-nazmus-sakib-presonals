import React from 'react';

const Project = ({project}) => {
    return (
      <div
        key={project._id}
        className="card w-full bg-base-100 shadow-xl rounded-lg overflow-hidden"
      >
        <figure>
          {project.youtubeLink ? (
            <iframe
              width="100%"
              height="315"
              src={project.youtubeLink}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <img
              className="w-full h-56 object-cover"
              src={project.photoURL}
              alt={project.title}
            />
          )}
        </figure>
        <div className="card-body p-4">
          <h2 className="card-title text-xl font-semibold">{project.title}</h2>
          <p className="text-sm text-gray-500">
            {project.description.substring(0, 150)}...
          </p>
          <div className="flex justify-between items-center mt-4">
            <div className="space-x-2">
              {project.technologies.map((tech, index) => (
                <span key={index} className="badge badge-outline text-xs">
                  {tech}
                </span>
              ))}
            </div>
            <div className="space-x-2 space-y-2">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-primary"
              >
                Live
              </a>
              <a
                href={`${project.clientsSide}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-secondary"
              >
                Client
              </a>
              <a
                href={`${project.serverSide}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-accent"
              >
                Server
              </a>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Project;