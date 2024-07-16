import "./App.css";
import CardSlider from "./components/CardSlider";
import Footer from "./components/Footer";
import Table from "./components/Table";
import { getTokens } from "./services/api";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <CardSlider />
      </div>
      <Footer />
    </>
  );
}

export default App;
