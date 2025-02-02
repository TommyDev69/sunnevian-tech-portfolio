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
        <div className="space-x-6 space-y-14 grid grid-cols-3 md:grid-cols-3 w-full">
                {Tool.map((subj) => (
                <div className=" px-8  py-10" key={subj.id}>
                    
                    <div className="md:w-[50%] mx-0 md:mx-auto">

                       <Image src={subj.Image} alt={`Project ${subj.id}`} className=" mx-2 md:mx-auto" />
                    </div>
                    <div className=" md:w-full bg-black">
                    <h3 className="mt-4 text-lg md:text-3xl  font-bold text-center  text-white">{subj.heading}</h3>
                    
                    <p className="mt-2 text-center text-md md:text-left md:text-[14px] text-white font-thin">{subj.content}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
 
export default Strenght;