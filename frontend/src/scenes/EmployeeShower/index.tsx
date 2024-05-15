import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import EmailIcon from '@mui/icons-material/Email';
import { useWindowWidth } from '../../hooks/useWindowWidth';

type Props = {
    name : string,
    email: string,
    age: number,
    job: string,
    cv: File
}

const EmployeeShower = ({name,email,age, job, cv}: Props) => {
  const windowWidth = useWindowWidth();
  return (
    <div className={`p-3 border-slate-800 border-b-2 flex flex-col gap-2 h-[200px] ${windowWidth <= 1060 ? "w-[250px]" : "w-[300px]"} bg-white`}>
        <div className='flex flex-row gap-10 h-14 items-center border-slate-800 border-b-2'>
          <div className='rounded-full flex items-center justify-center bg-primary w-10 h-10'>
            <span className='text-white'>{name[0]}</span>
          </div>
          <span className='line-clamp-1'>{name}</span>
        </div>
        <div className='flex flex-col gap-3'>
          <div className='flex px-2 flex-row gap-5 items-center'>
            <div>
              <EmailIcon className='text-primary'/>
            </div>
            <span className='line-clamp-1'>{email}</span>
          </div>
          <div className='flex px-2 flex-row gap-5 items-center'>
            <div>
              <PersonIcon className='text-primary'/>
            </div>
            <span className='line-clamp-1'>{age}</span>
          </div>
          <div className='flex px-2 flex-row gap-5 items-center'>
            <div>
              <DirectionsWalkIcon className='text-primary'/>
            </div>
            <span className='line-clamp-1'>{job}</span>
          </div>
        </div> 
    </div>
  )
}

export default EmployeeShower