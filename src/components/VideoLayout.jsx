import CardSlider from "./CardSlider";
import videoLogo from "/public/bg.mp4";
const VideoLayout = () => {
  return (
    <div class="h-screen w-full flex flex-col md:flex-row justify-between relative">
  <div class="bg-gray-300 w-full md:w-64 h-1/2 md:h-screen md:absolute md:left-0 md:top-0">
    left
  </div>
  <div class="flex-grow text-center">
    <CardSlider />
  </div>
  <div class="bg-gray-300 w-full md:w-64 h-1/2 md:h-screen md:absolute md:right-0 md:bottom-0">
    right
  </div>
</div>

  );
};

export default VideoLayout;
