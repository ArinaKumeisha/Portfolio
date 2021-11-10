import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./skils/Skills";
import Projects from "./Works/Projects";
import Hire from "./Hire/Hire";
import {Contacts} from "./Contacts/Contacts";
import Footer from "./Footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Projects />
            <Hire/>
            <Contacts/>
            <Footer/>

        </div>
    );
}

export default App;
