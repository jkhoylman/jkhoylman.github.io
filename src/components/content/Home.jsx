import React from 'react';
import '../../css/components/home.scss';

const Home = () => {
  return (
    <div className='home'>
      <p>
          Hello and welcome! I'm Jacob Hoylman, a man of multitudes and an ever increasing number of pursuits.
      </p>
      <p>
        I am, among other things:
        <ul>
          <li>a professional software engineer</li>
          <li>an aspiring indie tabletop game designer</li>
          <li>an aggressively bad singer</li>
          <li>an amateur T-shirt designer</li>
          <li>an all-around dork</li>
        </ul>
      </p>
      <p>
        On this page, I've tried to compile my sprawl of projects and passions into a one-stop-shop for all things Jacob. 
        You can learn more about me and my myriad hobbies by clicking on the icons above, and clicking the icon for the active section again will navigate to its external webpage (if applicable).  
        I'm still in the process of finishing all these pages, but hope to get everything done soon.
      </p>
      <p>
        Thanks for stopping by!
      </p>
    </div>
  );
}

export default Home;