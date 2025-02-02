import MainFeatures from "./feature_section/MainFeatures";
import MainHero from "./Hero_Section/MainHero";
import Navbar from "./Navbar/Navbar";
import Main from "./Project_work/Main";
import Department from "./Service_project/Department";


export default function Home() {
  return (
    <div className="container-fluid bg-blueBlack">
      <Navbar />
      <MainHero />
      <MainFeatures />
      <Main />
     <Department />
    </div>
  );
}
