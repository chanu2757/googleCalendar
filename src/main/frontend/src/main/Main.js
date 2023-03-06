import {CategoryBar, LeftSideBar} from '../Components/menuTemplate'
import './css/main.css'

const BlogMain = ()=> {
    return (
        <div className="container relativeP">
            <div className="topNav">
                <h3>KooKle Calllllllllllllllllllllllllllllendar</h3>
            </div>           
            <div className="ContentsBox">
                <LeftSideBar></LeftSideBar>

                <div className="dowBox"></div>
                <div className="scheduleLineBox">
                    <div className ="timeBox">시간</div>
                    <div className ="dateBox">
                        <div className = "date"></div>
                        <div className = "date"></div>
                        <div className = "date"></div>
                        <div className = "date"></div>
                        <div className = "date"></div>
                        <div className = "date"></div>
                        <div className = "date"></div>
                    </div>                
                </div>
            </div>
            <div className="clear"></div>
        </div>
    );
};

export { BlogMain };