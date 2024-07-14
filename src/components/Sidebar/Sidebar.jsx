import React, { useContext, useState } from 'react'
import './sidebar.css'
import {assets} from '../../assets/assets'
import { Context } from '../../context/Context'
const Sidebar = () => {

    const [extended, setExtended] = useState(false)
    const {onSent,prevPrompt,setPrevPrompt} = useContext(Context)

    const handleClick = () => {
        setExtended(prevState => !prevState);
      }

  return (
    <div className='sidebar'>
        <div className="top">
            <img className='menu' src={assets.menu_icon} alt="" onClick={handleClick}/>
            <div className="new-chat">
                <img src={assets.plus_icon} alt="" />
                {extended?<p>New Chat</p>:null}
            </div>
            {extended?
            <>
            <div className="recent">
                <p className="recent-title">Recent</p>
                {prevPrompt.map((item,index)=>{
                    return(
                        <div className="recent-entry">
                            <img src={assets.message_icon} alt="" />
                            <p>{item.slice(0,18)}...</p>
                        </div> 
                    )
                })
                 }
                {/* <div className="recent-entry">
                    <img src={assets.message_icon} alt="" />
                    <p>What is React ...</p>
                </div> */}
            </div>
            </>
            :null}
        </div>
        <div className="bottom">
            <div className="bottom-item recent-entry">
                <img src={assets.question_icon} alt="" />
                {extended?<p>Help</p>:null}   
            </div>
            <div className="bottom-item recent-entry">
                <img src={assets.history_icon} alt="" />
                {extended?<p>Activity</p>:null}
            </div>
            <div className="bottom-item recent-entry">
                <img src={assets.setting_icon} alt="" />
                {extended?<p>Settings</p>:null}  
            </div>
        </div>
      
    </div>
  )
}

export default Sidebar
