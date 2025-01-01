import { useNavigate } from 'react-router-dom';

import image from "/404.avif";

const Fourzero = () => {
  const navigate = useNavigate();
    return (
      <>
        
        <div className="flex flex-col items-center my-6">
          <img
            className="mx-auto rounded-md shadow-lg w-[350px] md:w-[650px]"
            src={image}
            alt="404"
          />
          <button
            onClick={() => navigate("/")}
            className="btn w-[250px] md:w-[650px] btn-accent mt-9"
          >
            GO Home
          </button>
        </div>
        
      </>
    );
};

export default Fourzero;