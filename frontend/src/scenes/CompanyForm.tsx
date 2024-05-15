import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import DescriptionIcon from '@mui/icons-material/Description';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { toast} from 'react-toastify'

import { Company as CompanyType, companySchema } from '../types/Company';
import { useWindowWidth } from '../hooks/useWindowWidth';

type Props = {
  submitCompany: (value: CompanyType) => void;
}

const CompanyForm = ({submitCompany}: Props) => {
  
    const [formData, setFormData] = useState<CompanyType>({
        name: '',
        email: '',
        numberOfEmployees: 0,
        description: '',
        employees: [],
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
        
        if(!errors){
          toast.dismiss();
          toast.success('Company created!')
          submitCompany(formData);
        }else{
          toast.dismiss();
          errors.errors.forEach(error => {
            toast.dismiss();
            toast(error.message, {type: "error"})
          })
        }
      }

      const windowWidth = useWindowWidth();
      const textfieldStyle = `bg-slate-100 ${windowWidth <= 400? "w-[300px]" : windowWidth <= 600 ? "w-[350px]" : "w-[400px]"}`;
      return (
          
        <Box className={`flex flex-col justify-center items-center gap-8`} component='form'>
          <div className={`${windowWidth <= 600 ? "text-xl" : "text-3xl"} text-slate-700 font-semibold`}>Company informations</div>
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
      );
}

export default CompanyForm