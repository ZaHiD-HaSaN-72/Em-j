import Shop from '../Shop/Shop';
import Navbar from '../shared/Navbar' 
const Home = () => {
    return (
        <div className='relative'>
            <div className='fixed z-50 w-full '>
                <Navbar />
            </div>
            <div className='pt-20'>
                 <Shop />
            </div>

        </div>
    );
};

export default Home;