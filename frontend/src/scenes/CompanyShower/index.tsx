import { Company } from '../../types/Company';
import CompanyItem from './CompanyItem';

type Props = {}

const CompanyList = (props: Props) => {

  const currentCompanies: Company[] = JSON.parse(localStorage.getItem('companies') || '[]');

  console.log(currentCompanies[0])
  return (
    <div className='mt-10 w-[80%] m-auto flex justify-center flex-wrap gap-14'>
        {currentCompanies.length > 0 ? currentCompanies.map((company:Company, index :number) => {
          return <CompanyItem company={company} key={index}/>
        }) : <>Don't have any Company yet!</>}
    </div>
  )
}

export default CompanyList