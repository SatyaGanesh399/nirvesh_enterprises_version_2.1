import React from 'react';
import '../FooterComp/Footer.css';
import AppTitle from '../../ReusableComponents/AppTitle'

function JoinOurNewsletter() {
  return (
    <div className='newsletter-comp'>
        <div className="newsletter">
        <AppTitle title="Join Our Newsletter" />
        <p className="newsletter-subheading">
          Please subscribe to newsletter to know more about our research...
        </p>
        <div className="newsletter-subscription">
          <input
            type="text"
            className="newsletter-input"
            placeholder="Please enter your email id"
          />
          <button className="newsletter-button">Subscribe</button>
        </div>
        {/* <div className="newsletter-divider"></div> */}
      </div>
    </div>
  )
}

export default JoinOurNewsletter