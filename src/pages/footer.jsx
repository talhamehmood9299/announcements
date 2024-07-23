import { useSelector } from "react-redux";
import { IoLocationOutline } from "react-icons/io5";
import { FaPhoneVolume } from "react-icons/fa6";
import qrCode from "/qrCode.png";

const Footer = () => {
  const selectedAddress = useSelector((state) => state.auth.selectedAddress);
  console.log("selected", selectedAddress);
  return (
    <div className="relative w-full">
      <div className="absolute bottom-0 w-full py-3 bg-blue-900 text-white px-24 flex justify-between items-center">
        <div className="flex items-center w-72 space-x-2">
          <IoLocationOutline size={32} />

          <p>{selectedAddress}</p>
        </div>
        <div className="flex items-center space-x-4">
          <FaPhoneVolume size={32} />
          <p>609-890-1050</p>
        </div>
      </div>
      <div className="absolute top-[-140px] left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <p className="text-md font-serif font-bold text-blue-900">
          Scan To Visit
        </p>
        <img src={qrCode} alt="QR Code" className="w-20 h-20" />
      </div>
    </div>
  );
};

export default Footer;
