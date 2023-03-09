import {CategoryBar, LeftSideBar} from '../Components/menuTemplate'
import './css/main.css'

const BlogMain = ()=> {
    return (
        <div className="container">
            <div className="topNav">
                <h3>KooKle Calllllllllllllllllllllllllllllendar</h3>
            </div>           
            <div className="ContentsBox">
                <LeftSideBar></LeftSideBar>

                <div class="BigCalendarBox">
                    <div className="dowBox">
                        <div className="dowblock">
                        <div className="timeFormat">GMT+09</div>
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
                        <div className ="dateBox">
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
                                <div className="timeLine"></div>                                
                            </div>
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
            </div>
        </div>
    );
};

export { BlogMain };