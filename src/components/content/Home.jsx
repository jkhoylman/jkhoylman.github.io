import React, {useEffect} from 'react';
import '../../css/components/home.scss';

import portrait from '../../assets/images/home/portrait.jpg'

const Home = () => {
  let isSmall = window.matchMedia("(max-width: 600px)").matches;
  let portraitCls = 'portrait';
  portraitCls += isSmall ? ' small' : ' large';

  const port = (<img className={portraitCls} src={portrait}/>);
  const para1 = (
    <p>
          Hello and welcome! I'm Jacob Hoylman, a man of multitudes and an ever increasing number of pursuits.
    </p>);
  const para2 = (
    <p>
      I am, among other things:
        <ul>
          <li>a professional software engineer</li>
          <li>an aspiring indie tabletop game designer</li>
          <li>an aggressively bad singer</li>
          <li>an amateur T-shirt designer</li>
          <li>an all-around dork</li>
        </ul>
    </p>);

  return (
    <div className='home'>
      <div className="section-one">
        <div>
          {!isSmall && port}
          {para1}
          {para2}
        </div>
      </div>
      <div className="section-two">
        <p>
          On this page, I've tried to compile my sprawl of projects and passions into a one-stop-shop for all things Jacob. 
          You can learn more about me and my myriad hobbies by clicking on the icons above, and clicking icon for the active section again will navigate to its external webpage (if applicable).  
          I'm still in the process of finishing all these pages, but hope to get everything done soon.
        </p>
        <p>
          Thanks for stopping by!
        </p>
      </div>
      <div className="section-three">
        {isSmall && port}
      </div>
    </div>
  );
}

export default Home;