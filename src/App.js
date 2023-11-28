import Aside from './components/aside/Aside';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Profile from './components/profile/Profile'

import './css/App.css';

const App = () => {
    return (
        <div className="main-app-wrapper">
            <Header />
            <Aside />
            <Profile />
            <Footer />
        </div>
    );
}

export default App;
