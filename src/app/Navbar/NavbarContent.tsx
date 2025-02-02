import NavbarButton from "./NavbarButton";
import NavbarIcon from "./NavbarIcon";

const NavbarContent = () => {
    const content = ["home", "service", "our project", "about us"]
    return ( 
        <>
        <div className="md:flex hidden capitalize  text-[24px] space-x-5 items-center text-white py-8 px10">
            <a href="3" className="font-bold">{content[0]}</a>
            <a href="" className="">{content[1]}</a>
            <a href="">{content[2]}</a>
            <a href="">{content[3]}</a>
            <a href="">{content[4]}</a>
        </div>
        <NavbarButton />
        <NavbarIcon />
        </> 
    
            
           
           
    );
}
 
export default NavbarContent;