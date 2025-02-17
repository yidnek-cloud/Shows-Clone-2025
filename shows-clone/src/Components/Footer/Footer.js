import React from 'react'
import './footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';

function Footer() {
  return (
    <div className='footer_outer_container'>
      <div className='footer_inner_container'>
        <div className='footer_icons'>
            <FacebookIcon/>
            <InstagramIcon/>
            <YouTubeIcon/>
            <TwitterIcon />
        </div>
        <div className='footer_data'>
            <div>
                <ul>
                    <li>Audio Description</li><br/>
                    <li>Invester Relations</li><br/>
                    <li>Legal Notice</li>
                </ul>
            </div>
        </div>
        <div className='footer_data'>
            <div>
                <ul>
                    <li>Gift Card</li><br/>
                    <li>Terms of Use</li><br/>
                    <li>Corporate Information</li>
                </ul>
            </div>
        </div>
        <div className='footer_data'>
            <div>
                <ul>
                    <li>Media Center</li><br/>
                    <li>Privacy</li><br/>
                    <li>Contact Us</li>
                </ul>
            </div>
        </div>
        <div className='service_code'>
            <p>
                Service Code
            </p>
        </div>
        <div className='copy-write'>
            &Copy: 2012-2025 ShowMovie, Inc
        </div>
      </div>
    </div>
  )
}

export default Footer