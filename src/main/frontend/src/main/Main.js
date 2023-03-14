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
                            <div className = "date" onClick={ (event) => fn_clickTimeLine(event)}>
                                <div id='scheduleRegiBox' className='scheduleRegiBox' style={{top : '0px'}}>
                                    <div class="scheduleName scheduleData">(No Title)</div>
                                    <div class="scheduleTime scheduleData">00:00 ~ 01:00</div>
                                </div>
                            </div>
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
    if(document.getElementsByClassName('scheduleRegiBox').length >0){
        document.getElementById('scheduleRegiBox').remove();
    }
    //약 한칸에 60 30px씩
    // 326 ~ 1039  707
    //0 ~ 222 00:00 ~ 01:00  0
    //255 ~ 284 00:30 ~ 01:30  1
    //285 ~ 313 01:00 ~ 02:00  2   
    // hour : 몫, miniute : 나머지 >> 1일때 30분 0이면 정각 
    let createTop = (Math.trunc(e.nativeEvent.offsetY/30)* 30) ;              
    let createHour = Math.trunc((e.nativeEvent.offsetY/30)/2);
    let createMin = (Math.trunc(e.nativeEvent.offsetY/30)%2)==1?'30':'00';
    let createTime = createHour+ ":" + createMin + "~" + (createHour+1) + ":" + createMin;
    
    let scheduleInfo = "<div id='scheduleRegiBox' class='scheduleRegiBox' style='top : "+ createTop + "px'>";
        scheduleInfo += "<div class='scheduleName scheduleData'>(No Title)</div>";
        scheduleInfo += "<div class='scheduleTime scheduleData'>"+ createTime +"</div>";
        scheduleInfo += "</div>";
    e.target.innerHTML = scheduleInfo;
}

export { BlogMain };