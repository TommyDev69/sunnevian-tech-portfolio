// "use client";
import Image from "next/image";

interface dept {
  id: number;
  Image: string;
  heading: string;
  content: string;
}

interface Material {
  
  Tool: dept[];
  
}

const Strenght:React.FC<Material> = ({Tool}) => {
    return (  
        <div className="space-x-14 grid grid-cols-3 md:grid-cols-3">
                {Tool.map((subj) => (
                <div className="" key={subj.id}>
                    
                    <div className="md:w-[50%] mx-auto">

                       <Image src={subj.Image} alt={`Project ${subj.id}`} className="w-[40%] mx-auto" />
                    </div>
                
                    <h3 className="mt-4 text-3xl font-bold text-center  text-white">{subj.heading}</h3>
                    
                    <p className="mt-2 text-center text-md md:text-[16px] text-white font-thin">{subj.content}</p>
                </div>
            ))}
        </div>
    );
}
 
export default Strenght;