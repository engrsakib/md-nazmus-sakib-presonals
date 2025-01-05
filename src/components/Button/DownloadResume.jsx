import React from 'react';
import { Link } from 'react-router-dom';

const DownloadResume = () => {
    return (
      <div>
        <Link
          to={`https://drive.google.com/file/d/18oRoGdKpI6tktip5uIvsD7d8mnsOosQE/view?usp=drive_link`} target='_blank'
          className="btn text-info btn-outline max-sm:text-[10px] btn-info p-4 mx-5"
        >
          Download Resume
        </Link>
      </div>
    );
};

export default DownloadResume;