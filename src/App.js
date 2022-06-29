import './App.css';

import About from './Components/About';
import Banner from './Components/Banner';
import Blog from './Components/Blog';
import Contact from './Components/Contact';
import { Counter } from './Components/Counter';
import Fourservices from './Components/Fourservices';
import Header from './Components/Header/Header';
import Services from './Components/Services';
import Testimonial from './Components/Testimonial';
import Footer from './Components/Footer/Footer';
import { Call_to_action } from './Components/Call_to_action';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { InnerBanner } from './Components/InnerBanner';
import { InnerAbout } from './Components/InnerAbout';
import WhyChooseUs from './WhyChooseUs';
import { OurSolutions } from './OurSolutions';
import { InnerContact } from './InnerContact';
import { Industries } from './Industries';
import { MainBlog } from './Components/MainBlog';
import { MainContact } from './Components/MainContact';
import { Map } from './Components/Map';
function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
        {/* Home page Started  */}
          <Route path="/" element={<><Banner /><About />
            <Counter />
            <Fourservices />
            <Services activeCard={6}/>
            <Contact />
            <Blog />
            <Testimonial />
            <Call_to_action />
            {/* <BlogCompo /> */}
            
            </>}>
          </Route>
        {/* About page Started  */}
          <Route path="/about" element={<>
             <InnerBanner heading={"About"}/> 
             <InnerAbout />
             <WhyChooseUs />
             <OurSolutions />
             <InnerContact/>
             
          </>}>
          </Route>
          {/* service page Started  */}
          <Route path="/service" element={<>
             <InnerBanner heading={"service"}/> 
             <Services activeCard={15}/>
          </>}>
          </Route>
            {/* industries page Started  */}
            <Route path="/industries" element={<>
             <Industries heading={"Industries"}/> 
           
          </>}>
          </Route>
           {/* service page Started  */}
           <Route path="/service" element={<>
             <InnerBanner heading={"service"}/> 
             <Services activeCard={15}/>
          </>}>
          </Route>
            {/* Main blog page Started  */}
            <Route path="/mainblog" element={<>
             <InnerBanner heading={"Blog"}/> 
             <MainBlog/>
           
          </>}>
          </Route>

           {/* Main contact page Started  */}
           <Route path="/maincontact" element={<>
             <InnerBanner heading={"Contact"}/> 
             <MainContact/>
             <InnerContact />
             <Map />
        
           
          </>}>
          </Route>
          
        </Routes>
        <Footer />
      </BrowserRouter>

      {/* <Banner />
       */}
    </>
  );
}

export default App;
