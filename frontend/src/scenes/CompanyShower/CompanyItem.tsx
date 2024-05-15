import React from 'react'
import { Company } from '../../types/Company'
import EmailIcon from '@mui/icons-material/Email';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import DescriptionIcon from '@mui/icons-material/Description';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import EmployeeShower from '../EmployeeShower';
import { useWindowWidth } from '../../hooks/useWindowWidth';

type Props = {
    company: Company
}

const CompanyItem = ({company}: Props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const windowWidth = useWindowWidth();
  
  const modalStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: windowWidth>= 1060 ? 400 : 300,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    overflow: 'auto', 
    height: "80%",
  };

  
  return (
    <div>

    <div onClick={handleOpen} className=' hover:cursor-pointer hover:bg-slate-100 rounded-xl p-3 flex flex-col gap-2 h-[300px] w-[300px] bg-white'>
        {/* Company name */}
        <div className='flex flex-row gap-10 h-14 items-center border-slate-800 border-b-2'>
          <div className='rounded-full flex items-center justify-center bg-primary w-10 h-10'>
            <span className='text-white'>{company.name[0]}</span>
          </div>
          <span className='line-clamp-1'>{company.name}</span>
        </div>
        {/* Email and Employee counts */}
        <div className='flex flex-col gap-3'>
          <div className='flex px-2 flex-row gap-5 items-center'>
            <div>
              <EmailIcon className='text-primary'/>
            </div>
            <span className='line-clamp-1'>{company.email}</span>
          </div>
          <div className='flex px-2 flex-row gap-5 items-center'>
            <div>
              <GroupAddIcon className='text-primary'/>
            </div>
            <span className='line-clamp-1'>{company.numberOfEmployees}</span>
          </div>
          <div className='flex px-2 flex-row gap-5 items-center'>
            <div>
              <DescriptionIcon className='text-primary'/>
            </div>
            <span className='line-clamp-1'>Description: </span>
          </div>
          <div className='px-2'>
            <span className='break-words line-clamp-4'>{company.description ? company.description : "This Company doesn't have a description!"}</span>          
          </div>
        </div> 
      </div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={modalStyle}>
            <span className='text-xl pb-3 font-semibold'>Employee(s):</span>
            <div className='flex flex-col gap-4 items-center'>
                  {company.employees.map(employee => {
                    
                    return <EmployeeShower name={employee.name} email={employee.email} age={employee.age} job={employee.job} cv={employee.cv}/>
                  })}
            </div>
          </Box>
        </Modal>
      </div>

  )
}

export default CompanyItem