import Navbar from './Navbar/Navbar';
import FirstSection from './FirstSection/page';
import SecondSection from './SecondSection/page';
import ThirdSection from './ThirdSection/page';
import FourthSection from './FourthSection/page';
import FifthSection from './FifthSection/page';
import SixthSection from './SixthSection/page';
import SeventhSection from './SeventhSection/page';
import EightSection from './EightSection/page';
import Footer from './footer/page';


const LandingPage = () => {
    return (
        <div>
            <Navbar />
            <FirstSection />
            <SecondSection />
            <ThirdSection />
            <FourthSection />
            <FifthSection />
            <SixthSection />
            <SeventhSection />
            <EightSection />
            <Footer />
        </div>
    )
}

export default LandingPage
