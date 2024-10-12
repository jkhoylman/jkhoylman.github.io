import React from 'react';

const Info = () => {

  return (
    <div>
        <p>
          This website is written in React and hosted through the <a href="https://pages.github.com">GitHub Pages project</a>. With few exceptions, the entire page is programmed and designed by yours truly.
        </p>

        <p>
          I would briefly like to recognize the service the GitHub Pages project does to me and those like me that enjoying doing it for themselves.  
          It allows me to freely host my own little place on the internet that I have complete control over, without worrrying about actually hosting anything.  
          That means I can hold down this circus tent for perople to stumble upon without any ongoing work (at least until support reaches EOL or my github account reaches EOL).
        </p>
        <p>
          If you are interested in creating your own page, I recommend checking out GitHub Pages.  
          GitHub even provides their own static site generation framework, Jekyll, that is very easy to use once you get the hang of it 
          (though my fingers could never get the hang of typing "jekyll").  The first iteration of this site was itself written in Jekyll,
          back in 2019 when I had not frontend development experience.
        </p>
    </div>
  );
}

export default Info;