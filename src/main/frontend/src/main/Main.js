import {CategoryBar, LeftSideBar} from '../Components/menuTemplate'
import ReactDOM from 'react-dom/client'
import './css/main.css'

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
                    <div className="scheduleLineBox">                    
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
                            <div className = "date" onClick={ (event) => fn_clickTimeLine(event)}></div>
                            <div className = "date" onClick={ (event) => fn_clickTimeLine(event)}></div>
                            <div className = "date" onClick={ (event) => fn_clickTimeLine(event)}></div>
                            <div className = "date" onClick={ (event) => fn_clickTimeLine(event)}></div>
                            <div className = "date" onClick={ (event) => fn_clickTimeLine(event)}></div>
                            <div className = "date" onClick={ (event) => fn_clickTimeLine(event)}></div>
                            <div className = "date" onClick={ (event) => fn_clickTimeLine(event)}></div>
                        </div>                
                    </div>
                </div>
            </div>
        </div>
    );
};

const fn_clickTimeLine=(e)=>{
    //약 한칸에 58 28px씩
    // 326 ~ 1039  707
    //326 ~ 385 00:00 ~ 01:00  0
    //255 ~ 284 00:30 ~ 01:30  1
    //285 ~ 313 01:00 ~ 02:00  2
    // Y - (클릭위치 - 225) / 29  >> 몫 : 시간 
    // Y = 225 + 29 *몫 부터 시작        
    console.log('Y :' + e.clientY);

    let createTop = 0 + (30 * parseInt((e.clientY-225) / 29));    
    let createStyle = {
        top : createTop +'px'
        };
    if(document.getElementsByClassName('scheduleRegiBox').length >0){
        console.log(document.getElementById('scheduleRegiBox').remove());
    }
    
    e.target.innerHTML = "<div id='scheduleRegiBox' class='scheduleRegiBox' style='top : "+ createTop + "px'></div>";
}

export { BlogMain };