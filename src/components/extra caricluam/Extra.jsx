import React from 'react';

const Extra = () => {
    const working = [
      {
        interst: "✓ Columnist",
      },
      {
        interst: "✓ Researcher",
      },
      {
        interst: "✓ Content Creator",
      },
      {
        interst: "✓ Leadership",
      },
      {
        interst: "✓ Public Speaking",
      },
        {
            interst: "✓ Community Service",
        },
        {
            interst: "✓ Event Management",
        },
        {
            interst: "✓ Social Media Marketing",
        },
        {
            interst: "✓ Graphic Design",
        },
        {
            interst: "✓ Video Editing",
        },
    ];
    return (
      <div className="flex flex-col items-start justify-start">
        {working.map((work, index) => (
          <div key={index} className="flex items-center justify-start gap-2">
            <p className="text-left">{work.interst}</p>
          </div>
        ))}
      </div>
    );
};

export default Extra;