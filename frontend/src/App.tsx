import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import DescriptionIcon from '@mui/icons-material/Description';
import Button from '@mui/material/Button';
import Company from "./assets/company.svg"
import { useState } from 'react';
import {z} from 'zod'

import { Company as CompanyType, companySchema } from './types/Company';
function App() {

  const [formData, setFormData] = useState<CompanyType>({
    name: '',
    email: '',
    numberOfEmployees: 0,
    description: ''
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const {name, value} = event.currentTarget;

      setFormData(prev => ({
        ...prev,
        [name]: name==="numberOfEmployees" ? parseInt(value,10) : value
      }))
  }

  const handleSubmit = () => {
    const errors = companySchema.safeParse(formData).error;
    
    
    console.log();
  }

  const textfieldStyle = "bg-slate-100 w-[400px]";
  return (
    <div className="flex pr-20  items-center h-[80vh] rounded-lg w-[80%] m-auto justify-between bg-white">
     {/* Picture */}
     <div className='flex w-full h-full justify-center items-center'>
      <img className='text-primary w-80' src={Company} alt="company" />
     </div>
     {/* Form logic */}
     <Box className='flex flex-col gap-8' component='form'>
      <span className='text-3xl text-slate-700 font-semibold'>Company informations</span>
     <TextField className={textfieldStyle} name='name' value={formData.name} variant='outlined' InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonIcon className='text-primary'/>
              </InputAdornment>
            ),
        }} onChange={handleChange} label="Company Name"/>
        <TextField type="email" className={textfieldStyle} name='email' value={formData.email} variant='outlined' InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon className='text-primary'/>
              </InputAdornment>
            ),
        }} onChange={handleChange} label="Email address"/>
        <TextField type='number' className={textfieldStyle} name='numberOfEmployees' value={formData.numberOfEmployees} variant='outlined' InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <GroupAddIcon className='text-primary'/>
              </InputAdornment>
            ),
        }} onChange={handleChange} label="Employees number"/>
        <TextField className={textfieldStyle} name='description' value={formData.description} variant='outlined' multiline maxRows={4} InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <DescriptionIcon className='text-primary'/>
              </InputAdornment>
            ),
        }} onChange={handleChange} label="Description"/>
        <Button  onClick={handleSubmit} sx={{backgroundColor: "#806DD6" , borderRadius: "10px",height: "50px",":hover": {color: "white",backgroundColor: "#806DD6" }}} variant="contained">Continue to add employee [ 1 / {formData.numberOfEmployees === 0 ? 1 : formData.numberOfEmployees} ]</Button>
     </Box>
    </div>
  );
}

export default App;
