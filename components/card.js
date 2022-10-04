import Image from "next/image";
import css from "styled-jsx/css";

const Card = ({ card }) => {
  return (
    <div
      className={`flex flex-col p-10 ${card.css} my-16 items-center justify-between rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]  md:flex-row md:px-24 md:py-20 `}
    >
      <div className="relative w-52 h-52 md:w-80 md:h-80">
        <Image src={card.imgSrc} layout="fill" alt={card.title} />
      </div>

      <div className="mt-6 text-center md:text-left md:mt-0 md:w-[420px]">
        <p className="text-xl font-bold my-4">{card.title}</p>
        <p className="font-thin text-gray-400 text-sm">{card.body}</p>
      </div>
    </div>
  );
};

export default Card;
