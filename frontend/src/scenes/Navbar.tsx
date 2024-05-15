import {  useState } from "react"
import { NavLink } from "react-router-dom"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useWindowWidth } from "../hooks/useWindowWidth";


type Props = {}

const Navbar = (props: Props) => {
    const [isToggled, setIsToggled] = useState<boolean>(false)
    const windowWidth = useWindowWidth();
    const activeStyle = "border-b-4";

    const handleToggleClick = () =>{
        setIsToggled(!isToggled);
    }

    return (
        <nav className={`h-20 mb-5 z-50 text-primary-light w-full flex justify-around items-center`}>
            <div className={`${windowWidth <=1060 ? "text-xl" : "text-4xl" } flex items-center`}>
                <NavLink to="/">Company Form App</NavLink>
            </div>
            {windowWidth <=1060 ? (
                <div className=" w-40 flex justify-end">
                    <MenuIcon onClick={handleToggleClick} className="hover:cursor-pointer"/>
                    {isToggled && (
                    <div className={`fixed right-0 bottom-0 z-40 h-full ${windowWidth <= 1060 ? "w-[200px]" : "w-[300px]"} bg-primary drop-shadow-xl`}>
                        <div className="flex justify-end m-4">
                            <CloseIcon className="hover:cursor-pointer" onClick={handleToggleClick} />
                        </div>
                        <div className="mt-[50px] flex flex-col gap-10 mx-3">
                            <NavLink className={({isActive}) => isActive ? activeStyle : ""} to="/">Create</NavLink>
                            <NavLink className={({isActive}) => isActive ? activeStyle : ""} to="/company">Company's</NavLink>
                        </div>
                    </div>
                    )}
                </div>
            ) : 
            (
                <>
                    <div className="flex justify-around gap-10">
                        <NavLink className={({isActive}) => isActive ? activeStyle : ""} to="/">Create</NavLink>
                        <NavLink className={({isActive}) => isActive ? activeStyle : ""} to="/company">Company's</NavLink>
                    </div>
                </>
            )
            }
        </nav>
      )
}

export default Navbar