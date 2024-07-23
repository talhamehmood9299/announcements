import "./App.css";
import CardSlider from "./components/CardSlider";
import PusherFunction from "./components/pusher";
import { PatientIdProvider } from "./context/usePatient";
import ProtectedRoute from "./components/Protected";
import { Footer, Header, Login, Unauthorized, NotFound } from "./pages";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import VideoLayout from "./components/VideoLayout";

const Root = () => (
  <>
    <Header />
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Outlet />
    </div>
    <PusherFunction />
    <Footer />
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/cards",
        element: (
          <ProtectedRoute>
            <VideoLayout>
            
            </VideoLayout>
          </ProtectedRoute>
        ),
      },
      {
        path: "/unauthorized",
        element: <Unauthorized />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

function App() {
  return (
    <PatientIdProvider>
      <RouterProvider router={router} />
    </PatientIdProvider>
  );
}

export default App;
