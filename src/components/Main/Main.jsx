import React, { useContext } from 'react'
import './main.css'
import {assets} from '../../assets/assets'
import { Context } from '../../context/Context'
const Main = () => {

  const {onSent, recentPrompt, showResult, loading, resultData, setInput, input} = useContext(Context)

  return (
    <div>
      <div className="main">
        <div className="nav">
            <p>Condescending  Gemini</p>
            <img src={assets.user_icon} alt=""/>
        </div>

        {
          !showResult ? 
          <>
          <div className="main-container">
          <div className="greet">
            <p><span>Oh..Its you again..</span></p>
            <p><span>Very well, tell me what do you need</span></p>
          </div>
          <div className="cards">
            <div className="card">
              <p>Suggest nice resturants that are close to me</p>
              <img src={assets.compass_icon} alt="" />
            </div>
            <div className="card">
              <p>Show me the list of top Netflix Series</p>
              <img src={assets.message_icon} alt="" />
            </div>
            <div className="card">
              <p>How can I get into Python programing </p>
              <img src={assets.code_icon} alt="" />
            </div>
            <div className="card">
              <p>Which crypto currency should I invest in?</p>
              <img src={assets.bulb_icon} alt="" />
            </div>
          </div>
        </div>
          </>
          : <div className="result">
              <div className="result-title">
                <img src={assets.user_icon} alt="" />
                <p>{recentPrompt}</p>
              </div>
              <div className="result-data">
                <img src={assets.gemini_icon} alt="" />
                {loading ?
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
                :
                <p dangerouslySetInnerHTML={{__html:resultData}}></p> 
                }
                
              </div>
            </div>
        }

        
        <div className="main-bottom">
          <div className="search-box">
            <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Just ask already..'/>
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img onClick={() => onSent()} src={assets.send_icon} alt="" />
            </div>
          </div>
          <p className="bottom-info">
          Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps
          </p>
        </div>
      </div>
    </div>
  )
}

export default Main
