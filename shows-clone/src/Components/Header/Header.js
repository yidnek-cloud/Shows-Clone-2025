import React from 'react'
import './header.css'
import SearchIcon from '@mui/icons-material/Search';
import Notifications from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';

function Header() {
  return (
    <div className='header_outer_container'>
      <div className='header_container'>
        <div className='header_left'>
            <ul>
                {/* <li><img src={Show} alt='' width='100'/></li> */}
                <li className='show_movie'>ShowMovie</li>
                <li>Home</li>
                <li>TvShow</li>
                <li>Movies</li>
                <li>Lastest</li>
                <li>MyList</li>
                <li>Brouse by Languages</li>
            </ul>
        </div>
        <div className='header_right'>
            <ul>
              <li><SearchIcon /></li>
              <li><Notifications /></li>
              <li><AccountBoxIcon /></li>
              <li><ArrowDropDownCircleIcon /></li>
            </ul>
        </div>
    </div>
</div>
  )
}

export default Header