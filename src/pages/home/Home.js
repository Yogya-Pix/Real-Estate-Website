import '../home/HomeStyle.css'
import navbg_image from '../../images/bgimage.png'
import Navbar from '../../components/Navbar';
import Display1 from '../../components/Display1';
import Features from '../../components/Features';
import Midnav from '../../components/Midnav';
import Footer from '../../components/footer/footer';
import FeaturesDiv from '../../components/featuresComponent/FeaturesDiv';
import Body from '../../components/body/body';
import HomeSlider from '../../components/HomeSlider'

function App() {
    return (
        <>
            <div className='backgroundeffect'>
                <Navbar mode="white" />
            </div>
            <div className='bg_image'>
                <img src={navbg_image} />
            </div>
            <Display1 />
            <Features />
            <Midnav/>
            <Body />
        </>
    );
}

export default App;
