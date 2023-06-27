import './App.css';
import Topnav from './Components/NavBar/TopNav';
import MainNav from './Components/NavBar/MainNav';
import CareWhenYouNeedIt from './Components/CareWhenYouNeedIt/CareWhenYouNeedIt';
import DoctorWillSeeYou from './Components/DoctorWillSeeYou/DoctorWillSeeYou';
import PublixVsOthers from './Components/PublixVsOthers/PublixVsOthers';
import OurPatientsLoveUs from './Components/OurPatientsLoveUs/OurPatientsLoveUs';
import ConnectWith from './Components/ConnectWith/ConnectWith';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <div className="">
        <Topnav />
        <MainNav />
        <CareWhenYouNeedIt />
        <DoctorWillSeeYou />
        <PublixVsOthers />
        <OurPatientsLoveUs />
        <ConnectWith />
        <Footer />
    </div>
  );
}

export default App;
