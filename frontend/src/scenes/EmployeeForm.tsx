import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { Employee } from '../types/Employee';
import { employeeSchema } from '../types/Employee';
import {toast} from 'react-toastify'
import { Select, MenuItem } from '@mui/material';
import { useWindowWidth } from '../hooks/useWindowWidth';

type Props = {
  numberOfEmployee: number
  employeeNumber: number,
  submitEmployee: (value: Employee) => void
}

const EmployeeForm = ({numberOfEmployee,employeeNumber, submitEmployee}: Props) => {
  
  const windowWidth = useWindowWidth();
  const [formData, setFormData] = useState<Employee>({
    name: '',
    email: '',
    job: 'manager',
    age: 18,
    cv: new File([], "default_cv.xyz")
  })

  const handleClick = () => {

    const errors = employeeSchema.safeParse(formData).error;

    if(errors?.errors) {
      errors.errors.forEach((err) =>{
        toast.dismiss();
        toast.error(err.message)
      })
    }else{
      toast.dismiss();
      toast.success("Employee created!")
      submitEmployee(formData);
      setFormData({
        name: '',
        email: '',
        job: 'manager',
        age: 18,
        cv: new File([], "default_cv.xyz")
      })
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.currentTarget;

    setFormData(prev => ({
      ...prev,
      [name]: name==="age" ? parseInt(value,10) : value
    }))
  }
  const handleFile = (event: React.ChangeEvent<HTMLInputElement>)=> {
      setFormData(prev => ({
        ...prev,
        cv: event.target.files && event.target.files[0]
      }))
  }

  const textfieldStyle = `bg-slate-100 ${windowWidth <= 400? "w-[300px]" : windowWidth <= 600 ? "w-[350px]" : "w-[400px]"}`;

  return (
    <Box className={`flex flex-col justify-center items-center gap-8`} component='form'>
    <div className={`${windowWidth <= 600 ? "text-xl" : "text-3xl"} text-slate-700 font-semibold`}>Employee #{employeeNumber} informations</div>
   <TextField className={textfieldStyle} name='name' value={formData.name} variant='outlined' InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PersonIcon className='text-primary'/>
            </InputAdornment>
          ),
      }} onChange={handleChange} label="Employee Name"/>
      <TextField type="email" className={textfieldStyle} name='email' value={formData.email} variant='outlined' InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <EmailIcon className='text-primary'/>
            </InputAdornment>
          ),
      }} onChange={handleChange} label="Email address"/>
      <Select
      className={textfieldStyle}
        value={formData.job}
        label="Job Name"
        onChange={(event) => setFormData(prev => ({...prev, job: event.target.value }))} // onChange eseménykezelő hozzáadva
      >
        <MenuItem value="accountant">Accountant</MenuItem>
        <MenuItem value="software developer">Software developer</MenuItem>
        <MenuItem value="software tester">Software tester</MenuItem>
        <MenuItem value="manager">Manager</MenuItem>
      </Select>
      <TextField type='number' className={textfieldStyle} name='age' value={formData.age} variant='outlined' InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <DirectionsWalkIcon className='text-primary'/>
            </InputAdornment>
          ),
      }} onChange={handleChange} label="Age"/>
      <TextField type='file' className={textfieldStyle} name='cv' variant='outlined' InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AttachFileIcon className='text-primary'/>
            </InputAdornment>
          ),
      }} onChange={handleFile} label="CV file"/>
      <Button onClick={handleClick} sx={{backgroundColor: "#806DD6" , borderRadius: "10px",height: "50px",":hover": {color: "white",backgroundColor: "#806DD6" }}} variant="contained">Continue to add employee [ {employeeNumber} / {numberOfEmployee} ]</Button>
   </Box>
  )
}

export default EmployeeForm;