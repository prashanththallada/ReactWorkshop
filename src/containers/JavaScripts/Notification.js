import React, { Component } from 'react';
import NotificationCSS from '../CSS/Notification.module.css';

class Notification extends Component {
    render() {
        return (
            <div className = {NotificationCSS.Notification}>
                <button>
                    <i class="fa fa-bar-chart"></i>
                    <span>View Course Stream</span>
                </button>
                <br/>
                <button>
                    <i class="fa fa-calendar"></i>
                    <span>View Course Calendar</span>
                </button>
                <br/>
                <p className = {NotificationCSS.paragraph}>To Do</p>
                <hr className = {NotificationCSS.horizontal}/>
                <div className = {NotificationCSS.todo}>
                    <div className = {NotificationCSS.subpart}> 
                        <div className = {NotificationCSS.middle}>
                            <i class="fa fa-location-arrow"></i>
                            <span className={NotificationCSS.hovering}>Project tasks</span>
                        </div>
                        <div className = {NotificationCSS.close}>
                            <i class="fa fa-close"></i>
                        </div>
                        <p className={NotificationCSS.nonhovering}>Jan 21 at 5:00 pm</p>
                    </div>
                    <div className = {NotificationCSS.subpart}> 
                        <div className = {NotificationCSS.middle}>
                            <i class="fa fa-location-arrow"></i>
                            <span className={NotificationCSS.hovering}>Project tasks</span>
                        </div>
                        <div className = {NotificationCSS.close}>
                            <i class="fa fa-close"></i>
                        </div>
                        <p className={NotificationCSS.nonhovering}>Jan 21 at 5:00 pm</p>
                    </div>
                </div>
                <p className = {NotificationCSS.paragraph}>Course Groups</p>
                <hr className = {NotificationCSS.horizontal}/>
                <div className = {NotificationCSS.coursegroup}>
                    Workshop 1
                </div>
                <p className = {NotificationCSS.paragraph}>Recent Feedback</p>
                <hr className = {NotificationCSS.horizontal}/>
                <div className = {NotificationCSS.p}>
                    Nothing for now
                </div>
            </div>
        );
    }
}

export default Notification;