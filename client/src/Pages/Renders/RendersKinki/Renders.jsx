import photo1 from './1.jpg'
import {Link} from "react-router-dom";

const Renders = () => {
    return (
        <>
            <Link to={'/projects'}>
                <div className=" font-bold right-1 fixed flex backdrop-blur-sm bg-white/30 w-44 h-10 rounded-3xl pl-3 pt-2 mt-1">
                    PROJECTS
                </div>
            </Link>
            <img src={photo1} alt="ppp"/>
        </>
    );
};

export default Renders;
