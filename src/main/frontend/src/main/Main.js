import {CategoryBar, LeftSideBar} from '../Components/menuTemplate'
import ReactDOM from 'react-dom/client'
import './css/main.css'

let regiBoxTop = "222";
let regiBxoHeight = "59";
let startHour = "";
let startMin = "";
let mouseDown = false;
const BlogMain = ()=> {

    return (
        <div className="container">
            <div className="topNav">
                <h3>KooKle Calllllllllllllllllllllllllllllendar</h3>
            </div>           
            <div className="ContentsBox">
                <LeftSideBar></LeftSideBar>

                <div className="BigCalendarBox">
                    <div className="dowBox">
                        <div className="dowblock">
                            <div className="timeFormat">
                               <div className="timeFormatName">GMT+9</div>
                            </div>
                        </div>
                        <div className="dow">
                            <div className="dowLine"></div>
                            <div className="dowName">월</div>
                            <div className="dateTitle">6</div>
                        </div>
                        <div className="dow">
                            <div className="dowLine"></div>
                            <div className="dowName">화</div>
                            <div className="dateTitle">7</div>
                        </div>
                        <div className="dow">
                            <div className="dowLine"></div>
                            <div className="dowName">수</div>
                            <div className="dateTitle">8</div>
                        </div>
                        <div className="dow">
                            <div className="dowLine"></div>
                            <div className="dowName">목</div>
                            <div className="dateTitle">9</div>
                        </div>
                        <div className="dow">
                            <div className="dowLine"></div>
                            <div className="dowName">금</div>
                            <div className="dateTitle">10</div>
                        </div>
                        <div className="dow">
                            <div className="dowLine"></div>
                            <div className="dowName">토</div>
                            <div className="dateTitle">11</div>
                        </div>
                        <div className="dow">
                            <div className="dowLine"></div>
                            <div className="dowName">일</div>
                            <div className="dateTitle">12</div>
                        </div>
                        <div className="dowblockEnd"></div>                  
                    </div>
                    <div id="scheduleLineBox" className="scheduleLineBox">                    
                        <div className ="timeBox">                           
                            <div className="timeHour">
                                <span className="timeDtl">am 1</span>
                            </div>
                            <div className="timeHour">
                                <span className="timeDtl">am 2</span>
                            </div>
                            <div className="timeHour">
                                <span className="timeDtl">am 3</span>
                            </div>
                            <div className="timeHour">
                                <span className="timeDtl">am 4</span>
                            </div>
                            <div className="timeHour">
                                <span className="timeDtl">am 5</span>
                            </div>
                            <div className="timeHour">
                                <span className="timeDtl">am 6</span>
                            </div>
                            <div className="timeHour">
                                <span className="timeDtl">am 7</span>
                            </div>
                            <div className="timeHour">
                                <span className="timeDtl">am 8</span>
                            </div>
                            <div className="timeHour">
                                <span className="timeDtl">am 9</span>
                            </div>
                            <div className="timeHour">
                                <span className="timeDtl">am 10</span>
                            </div>
                            <div className="timeHour">
                                <span className="timeDtl">am 11</span>
                            </div>
                            <div className="timeHour">
                                <span className="timeDtl">am 12</span>
                            </div>
                            <div className="timeHour">
                                <span className="timeDtl">pm 1</span>
                            </div>
                            <div className="timeHour">
                                <span className="timeDtl">pm 2</span>
                            </div>
                            <div className="timeHour">
                                <span className="timeDtl">pm 3</span>
                            </div>
                            <div className="timeHour">
                                <span className="timeDtl">pm 4</span>
                            </div>
                            <div className="timeHour">
                                <span className="timeDtl">pm 5</span>
                            </div>
                            <div className="timeHour">
                                <span className="timeDtl">pm 6</span>
                            </div>
                            <div className="timeHour">
                                <span className="timeDtl">pm 7</span>
                            </div>
                            <div className="timeHour">
                                <span className="timeDtl">pm 8</span>
                            </div>
                            <div className="timeHour">
                                <span className="timeDtl">pm 9</span>
                            </div>
                            <div className="timeHour">
                                <span className="timeDtl">pm 10</span>
                            </div>
                            <div className="timeHour">
                                <span className="timeDtl">pm 11</span>
                            </div>
                            <div className="timeHour">
                                <span className="timeDtl"></span>
                            </div>
                            
                        </div>
                        <div className ="timeBlock"></div>
                        <div id="dateBox" className ="dateBox">
                            <div className="timeLineBlock"></div>
                            <div className="timeLineBox">
                                <div className="timeLine"></div>
                                <div className="timeLine"></div>
                                <div className="timeLine"></div>
                                <div className="timeLine"></div>
                                <div className="timeLine"></div>
                                <div className="timeLine"></div>
                                <div className="timeLine"></div>
                                <div className="timeLine"></div>
                                <div className="timeLine"></div>
                                <div className="timeLine"></div>
                                <div className="timeLine"></div>
                                <div className="timeLine"></div>                              
                                <div className="timeLine"></div>
                                <div className="timeLine"></div>
                                <div className="timeLine"></div>
                                <div className="timeLine"></div>
                                <div className="timeLine"></div>                 
                                <div className="timeLine"></div>              
                                <div className="timeLine"></div>             
                                <div className="timeLine"></div>           
                                <div className="timeLine"></div>
                                <div className="timeLine"></div>
                                <div className="timeLine"></div>                                                   
                                <div className="timeLine"></div>                                                  
                            </div>
                            <div className = "date" onMouseDown={ (event) => fn_mouseDownTimeLine(event)}
                                                    onMouseUp = { (event)=> fn_mouseUpTimeLine(event)}>
                                {/* <div id='scheduleRegiBox' className='scheduleRegiBox' style={{top : '0px'}}>
                                    <div className="scheduleName scheduleData">(No Title)</div>
                                    <div className="scheduleTime scheduleData">00:00 ~ 01:00</div>
                                </div> */}
                            </div>
                            <div className = "date" onMouseDown={ (event) => fn_mouseDownTimeLine(event)}
                                                    onMouseMove={ (event) => fn_mouseMoveTimeLine(event)}
                                                    onMouseUp = { (event)=> fn_mouseUpTimeLine(event)}></div>
                            <div className = "date" onMouseDown={ (event) => fn_mouseDownTimeLine(event)}
                                                    onMouseUp = { (event)=> fn_mouseUpTimeLine(event)}></div>
                            <div className = "date" onMouseDown={ (event) => fn_mouseDownTimeLine(event)}
                                                    onMouseUp = { (event)=> fn_mouseUpTimeLine(event)}></div>
                            <div className = "date" onMouseDown={ (event) => fn_mouseDownTimeLine(event)}
                                                    onMouseUp = { (event)=> fn_mouseUpTimeLine(event)}></div>
                            <div className = "date" onMouseDown={ (event) => fn_mouseDownTimeLine(event)}
                                                    onMouseUp = { (event)=> fn_mouseUpTimeLine(event)}></div>
                            <div className = "date" onMouseDown={ (event) => fn_mouseDownTimeLine(event)}
                                                    onMouseUp = { (event)=> fn_mouseUpTimeLine(event)}></div>
                        </div>                
                    </div>
                </div>
            </div>
        </div>
    );
};

const fn_mouseDownTimeLine = (e) =>{      
    if(document.getElementsByClassName('scheduleRegiBox').length >0){
        document.getElementById('scheduleRegiBox').remove();
    }
    regiBoxTop = (Math.trunc(e.nativeEvent.offsetY/30)* 30) ;            
    startHour = Math.trunc((e.nativeEvent.offsetY/30)/2);
    startMin = (Math.trunc(e.nativeEvent.offsetY/30)%2)==1?'30':'00';    
    let createStartTime = startHour+ ":" + startMin;

    let scheduleInfo = "<div id='scheduleRegiBox' class='scheduleRegiBox' style='top : "+ regiBoxTop + "px; height : 59px;'>";
    scheduleInfo += "<div class='scheduleName scheduleData'>(No Title)</div>";
    scheduleInfo += "<div class='scheduleTime scheduleData'><span id='scheduleStartTime'>"+ createStartTime +"</span>~<span id='scheduleEndTime'></span></div>";
    scheduleInfo += "</div>";
    e.target.innerHTML = scheduleInfo;
    mouseDown = true;
}

const fn_mouseMoveTimeLine = (e) =>{    
    if(mouseDown){        
        let regiBoxEnd = (Math.trunc(e.nativeEvent.offsetY/30)* 30);
        regiBxoHeight= (regiBoxEnd-regiBoxTop)==0?59:(regiBoxEnd-regiBoxTop);              
            console.log(e.target.firstChild.style.height=regiBxoHeight+'px');        
        //e.target.firstChild.style.height=regiBxoHeight+'px';       
    }
}

const fn_mouseUpTimeLine = (e) => {    
    let endHour = Math.trunc((e.nativeEvent.offsetY/30)/2);   
    // console.log(Math.trunc(e.nativeEvent.offsetY)); 
    // console.log((Math.trunc(e.nativeEvent.offsetY/15)%4));
    console.log(e.target.firstChild.style.height);
    let endMin = (Math.trunc(e.nativeEvent.offsetY/30)%2)==1?'30':'00';   
    if(endHour == startHour){
        endHour = parseInt(startHour) + 1;
        endMin = startMin; 
    }
    
    let createEndTime = endHour + ":" + endMin;;
    document.getElementById("scheduleEndTime").innerText = createEndTime;
    mouseDown = false;
}

export { BlogMain };