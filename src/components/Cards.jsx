import TokenRoomCard from "./TokenCard";

const Card = ({ roomNo, tokenNo, isActive }) => {
  const baseClass = "px-20 py-6 transition-transform duration-400";
  const activeClass = "w-1/4 h-full scale-105";
  const inactiveClass = "w-1/4 h-1/2 scale-95";

  const sizeClass = isActive ? activeClass : inactiveClass;

  return (
    <div className={`${baseClass} ${sizeClass}`}>
      <TokenRoomCard token={tokenNo} room={roomNo} />
    </div>
  );
};

export default Card;
