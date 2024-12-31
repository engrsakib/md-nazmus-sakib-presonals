import React from 'react';

const WorkingInterest = () => {
    const working = [
      {
        interst: "✓ Web Application Development",
      },
      {
        interst: "✓ Custom Software Development",
      },
      {
        interst: "✓ Embedded Systems",
      },
      {
        interst: "✓ Mobile Application Development",
      },
      {
        interst: "✓ Machine Learning",
      },
      {
        interst: "✓ DevOps Engineering",
      },
      {
        interst: "✓ Cybersecurity",
      },
      {
        interst: "✓ Computer Networking",
      },
      {
        interst: "✓ Big Data Analytics",
      },
      {
        interst: "✓ Internet of Things(IoT)",
      },
      
    ];
    return (
        <div className='flex flex-col items-start justify-start'>
            {
                working.map((work, index) => (
                    <div key={index} className='flex items-center justify-start gap-2'>
                        <p className='text-left'>{work.interst}</p>
                    </div>
                ))
            }
        </div>
    );
};

export default WorkingInterest;