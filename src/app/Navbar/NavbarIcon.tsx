import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompass } from '@fortawesome/duotone-light-svg-icons';
const NavbarIcon = () => {
    return ( 
     <div className="w-20 md:hidden block ">
         <FontAwesomeIcon icon={faCompass} className='text-green-400' />
         
     </div>
     );
}
 
export default NavbarIcon;