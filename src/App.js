import Aside from './components/aside/Aside';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Profile from './components/profile/Profile'
import './css/App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dialog from "./components/dialog/Dialog";




const App = (props) => {
    return (
        <BrowserRouter>
            <div className="main-app-wrapper">
                <Header />
                <Aside />
                <Routes>
                    <Route path='/profile' element={<Profile state={props.state.profilePage}/>}/>
                    <Route path='/dialog' element={<Dialog state={props.state.dialogsPage}/>}/>
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
