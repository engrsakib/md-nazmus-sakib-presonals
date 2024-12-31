import React from 'react';
import SocilLink from './SocilLink';
import Swal from "sweetalert2";

const ContactNumber = () => {
    const handleCopyToClipboard = () => {
      const email = "info@engrsakib.com";
      navigator.clipboard
        .writeText(email)
        .then(() => {
          Swal.fire("Mail is copy in clipboard", "", "success");
        })
        .catch((err) => {
          Swal.fire("Mail ic copy field", "", "error");
        });
    };
    return (
      <div className="space-y-4 w-full">
        <div>
          <p className="font-bold">Give me a call</p>
          <p>+880-1992547202</p>
          {/* <p>+880-1577147931</p> */}
        </div>
        <div>
          <p className="font-bold">Send me an email</p>
          <p
            className="cursor-pointer text-blue-500 underline"
            onClick={handleCopyToClipboard}
          >
            info@engrsakib.com
          </p>
        </div>
        <div>
          <p className="font-bold">Location</p>
          <p>Notun bazar, Vhatara, Dhaka</p>
        </div>
        <div className="flex justify-center items-center gap-y-4 md:justify-start space-x-4 flex-wrap mb-6">
          <SocilLink></SocilLink>
        </div>
        <p>
          The best way to contact me is via mail. I try to respond to every
          message.
        </p>
      </div>
    );
};

export default ContactNumber;