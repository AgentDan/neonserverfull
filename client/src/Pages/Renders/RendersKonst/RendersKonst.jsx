import photo1 from './polka1.png'
import photo2 from './polka2.png'
import photo3 from './polka3.png'
import {Link} from "react-router-dom";

const RendersKonst = () => {
    return (
        <>
            <Link to={'/projects'}>
                <div className=" font-bold right-1 fixed flex backdrop-blur-sm bg-white/30 w-44 h-10 rounded-3xl pl-3 pt-2 mt-1">
                    PROJECTS
                </div>
            </Link>
            <img src={photo1} alt="ppp"/>
            <img src={photo2} alt="ppp"/>
            <img src={photo3} alt="ppp"/>
        </>
    );
};

export default RendersKonst;
