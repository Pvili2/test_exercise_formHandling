import CompanyForm from "../scenes/CompanyForm";
import Company from "../assets/company.svg"
import { ToastContainer } from "react-toastify";
import { Outlet } from "react-router";
type Props = {}

const MainLayout = (props: Props) => {
  
    
      return (
        <div className='main_container w-full h-[100vh] flex justify-center items-center'>
    
        <div className="flex pr-20  items-center h-[80vh] rounded-lg w-[80%] m-auto justify-between bg-white">
         {/* Picture */}
         <div className='flex w-full h-full justify-center items-center'>
          <img className='text-primary w-80' src={Company} alt="company" />
         </div>
         <Outlet/>
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
        </div>
      );
}

export default MainLayout