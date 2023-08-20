import React from "react";

const HeaderSocials = () => {
  return (
    <div className='home__socials'>
      <a
        href='https://www.instagram.com/rolan__99'
        className='home__social-link'
        target='_blank'
        rel='noreferrer'
      >
        <i className='fa-brands fa-instagram'></i>
      </a>
      <a
        href='https://www.twitter.com/rolan__99'
        className='home__social-link'
        target='_blank'
        rel='noreferrer'
      >
        <i className='fa-brands fa-twitter'></i>
      </a>
      <a
        href='https://www.facebook.com/rolan.abdo/'
        className='home__social-link'
        target='_blank'
        rel='noreferrer'
      >
        <i className='fa-brands fa-facebook'></i>
      </a>
      <a
        href='https://github.com/Rolan99'
        className='home__social-link'
        target='_blank'
        rel='noreferrer'
      >
        <i className='fa-brands fa-github'></i>
      </a>
    </div>
  );
};

export default HeaderSocials;
