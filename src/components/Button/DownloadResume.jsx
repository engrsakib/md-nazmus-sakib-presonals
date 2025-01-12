import React from "react";

const DownloadResume = () => {
  return (
    <div>
      <a
        href="/Md._Nazmus_Sakib_web_Designer.pdf" // এখানে পিডিএফ ফাইলের সঠিক পথ দিন
        download="Md._Nazmus_Sakib_web_Designer.pdf" // ডাউনলোড করার সময় পিডিএফ ফাইলের নাম নির্ধারণ করুন
      >
        <button className="btn text-info btn-outline max-sm:text-[10px] btn-info p-4 mx-5">
          Download Resume
        </button>
      </a>
    </div>
  );
};

export default DownloadResume;
