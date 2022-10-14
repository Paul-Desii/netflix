import React from 'react'
import './watch.scss'
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';

function Watch() {
  return (
    <div className='watch'>
        <div className="back">
            <ArrowBackOutlinedIcon />
            Home
        </div>
        <iframe width="100%" height="700px" src="https://www.youtube.com/embed/fCZt9QpDXuU?autoplay=1 " title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  )
}

export default Watch