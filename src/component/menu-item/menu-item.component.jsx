import React from 'react';
import { withRouter } from 'react-router-dom'; //will give access to history and match prop
import './menu-item.styles.scss';

function MenuItem({ title, image, size, linkUrl, match, history }) {
  return (
    <div
      className={`menu-item ${size}`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className='background-image'
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className='content'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
  );
}

export default withRouter(MenuItem);
