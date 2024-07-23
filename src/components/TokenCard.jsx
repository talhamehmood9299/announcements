const TokenRoomCard = ({ token, room }) => {
  return (
    <div className="bg-blue-900 text-white card w-64 shadow-xl rounded-lg p-8 hover:shadow-2xl transition-shadow duration-300"
     style={{ marginRight: '122px' }}
     >
    <div className="flex flex-col items-center">
      <div className="flex items-center space-x-2 mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 5a1 1 0 00-1 1v1H6a1 1 0 000 2h3v2H6a1 1 0 000 2h3v1a1 1 0 102 0v-1h3a1 1 0 000-2h-3v-2h3a1 1 0 000-2h-3V6a1 1 0 00-1-1z"
            clipRule="evenodd"
          />
        </svg>
        <span className="text-xl">Token NO</span>
      </div>
      <div className="text-3xl font-bold mb-4">{token}</div>
      <div className="flex items-center space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M12 2a1 1 0 00-1 1v4.586l-3.707-3.707a1 1 0 00-1.414 1.414L9.586 8H5a1 1 0 000 2h4.586l-3.707 3.707a1 1 0 001.414 1.414L11 11.414V16a1 1 0 102 0v-4.586l3.707 3.707a1 1 0 001.414-1.414L12.414 10H17a1 1 0 000-2h-4.586l3.707-3.707a1 1 0 00-1.414-1.414L12 7.414V3a1 1 0 00-1-1z"
            clipRule="evenodd"
          />
        </svg>
        <span className="text-xl">Room NO</span>
      </div>
      <div className="text-3xl font-bold">{room || 0}</div>
    </div>
  </div>
  
  );
};

export default TokenRoomCard;
