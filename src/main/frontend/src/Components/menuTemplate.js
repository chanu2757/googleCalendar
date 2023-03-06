import './css/menuTemplate.css'

const LeftSideBar =()=> {
    return (
        <div className = "leftSide relativeP">
            <h4>SideBar</h4>  
            <SideMenu></SideMenu>     
        </div>  
    );
}

const SideMenu =()=>{
    return(
    <div className="calendarBox">
        <div className="calendar">
            달력 3월
        </div>
    </div>
    );
}

export const CategoryBar =()=>{
    return (
        <div className="categoryBar"></div> 
    );
}

export { LeftSideBar };