import { ToastContainer } from "react-toastify";
import { Outlet } from "react-router";
import Navbar from "../scenes/Navbar";
type Props = {}

const MainLayout = (props: Props) => {
  
      return (
        /* Navbar */
        <div>
          <Navbar />
          <div className="">
            <Outlet/>
          </div>
         <ToastContainer 
            position="top-right"
            autoClose={10000}
            closeOnClick
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
        />
        </div>
        /* Footer */
      );
}

export default MainLayout