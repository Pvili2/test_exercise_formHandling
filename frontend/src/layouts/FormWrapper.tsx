import { useState } from "react"
import CompanyIcon from "../assets/company.svg"
import User from '../assets/user.svg'
import Success from '../assets/success.svg'
import { Button } from "@mui/material"
import CompanyForm from "../scenes/CompanyForm"
import EmployeeForm from "../scenes/EmployeeForm"
import { Employee } from "../types/Employee"
import { Company } from "../types/Company"
import { NavLink } from "react-router-dom"
import { useWindowWidth } from "../hooks/useWindowWidth"
type Props = {}

const FormWrapper = (props: Props) => {

    const windowWidth = useWindowWidth();
    const [pageSelector, setPageSelector] = useState<"companyForm" | "employeeForm" | "success">("companyForm");
    const [company, setCompany] = useState<Company>({
        name: '',
        email: '',
        numberOfEmployees: 0,
        description: '',
        employees: [],
    }); 
    const [currentEmployeeForm, setCurrentEmployeeForm] = useState<number>(1);
    const submitCompany = (value: Company) =>{
        setPageSelector("employeeForm");
        setCompany(value);
    }

    const submitEmployee = async (value: Employee)=>{
        let currentEmployees = company.employees;
        currentEmployees.push(value);
        setCompany(prev => ({
          ...prev,
          employees: currentEmployees
        }));
        if (company.numberOfEmployees > currentEmployeeForm) {
            setCurrentEmployeeForm(currentEmployeeForm+1);
        }else{
            setPageSelector("success");
            let currentCompanies = JSON.parse(localStorage.getItem('companies') || '[]');
            currentCompanies.push(company);
        
            localStorage.setItem('companies', JSON.stringify(currentCompanies));
            //send to a fictional endpoint

            try {
                const response = await fetch('https://your-fake-endpoint.com/companies', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(currentCompanies),
                });
                if (!response.ok) {
                    throw new Error(`HTTP error status: ${response.status}`);
                }
                console.log('Data sent successfully');
            } catch (error) {
                console.error('There was a problem with the fetch operation:', error);
            }
        }
    }

    return (
    <div className='w-full h-[80vh] flex justify-center items-center'>
    
    <div className={`flex items-center rounded-lg m-auto ${windowWidth >= 1060 ? "pr-20 justify-between w-[80%] h-[80vh]" : "justify-center w-[90%] h-[90vh]"} bg-white`}>
     {/* Picture */}
     {windowWidth >= 1060 && (
        <div className='flex w-full h-full justify-center items-center'>
        <img className='text-primary w-80' src={ pageSelector === "companyForm" ? CompanyIcon : pageSelector === "employeeForm" ? User : Success} alt="main-logo" />
       </div>
     )}
     
     {pageSelector === "companyForm" ? <CompanyForm submitCompany={submitCompany}/> : pageSelector === "employeeForm" ? <EmployeeForm numberOfEmployee={company.numberOfEmployees} submitEmployee={submitEmployee} employeeNumber={currentEmployeeForm} /> : (
       <div className="flex p-10 flex-col gap-16 items-center">
          <div className={`${windowWidth <= 600 ? "text-xl" : "text-3xl"} text-slate-700 font-semibold`}>            The forms have been successfully filled out.
</div>
         <NavLink to="/company">
          <Button sx={{backgroundColor: "#806DD6" , borderRadius: "10px",height: "50px",":hover": {color: "white",backgroundColor: "#806DD6" }}} variant="contained">Check out the submitted forms</Button>
         </NavLink>  
      </div>
     ) }
     </div>
     </div>
  )
}

export default FormWrapper