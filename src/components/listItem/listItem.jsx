import React, { useState } from 'react'
import './listItem.scss'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';

export default function ListItem({index}) {
  const [isHovered, setIsHovered] = useState(false)
  //const trailer = "https://www.youtube.com/embed/nPkr9HmglG0"
  //<video src='https://youtu.be/nPkr9HmglG0' autoPlay={true} loop />
  return (
    <div className='listItem' style={ {left: isHovered && index * 225 - 50 + index * 2.5} } onMouseEnter={ () => setIsHovered(true) } onMouseLeave={ () => setIsHovered(false)}>
        <img src="https://occ-0-38-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbV7JVUwUluMU7p9w6LY8WRwmvo-S_IqOZwXJI5ZOlGwiJTPcTY0VFke9vw52rNbd_0QLa4kNzm_8-NFtXfJP-3Ze69nRgvcBsW6sO9oqdV4mL_K9McT3XKib72yFVgu8qllbQ.jpg?r=ead" alt="" />
        
        {isHovered && (
        <>
          <iframe src="https://www.youtube.com/embed/nPkr9HmglG0?autoplay=1" title="YouTube video player" autoPlay={true} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <div className="itemInfo">
            <div className="icons">
              <PlayCircleIcon className="icon" />
              <AddIcon className="icon" />
              <ThumbUpAltOutlinedIcon className="icon" />
              <ThumbDownAltOutlinedIcon className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>1 hour 14 mins</span>
              <span className="limit">+16</span>
              <span>1999</span>
            </div>
            <div className="desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Praesentium hic rem eveniet error possimus, neque ex doloribus.
            </div>
            <div className="genre">Action</div>
          </div>
        </>
      )}
    </div>
  );
}
