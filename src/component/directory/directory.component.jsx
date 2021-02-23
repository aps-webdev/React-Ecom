import React, { Component } from 'react';
import './directory.styles.scss';

import { sections } from './directory.data.js';
import MenuItem from '../menu-item/menu-item.component';

class Directory extends Component {
  constructor() {
    super();
    this.state = {
      section: sections,
    };
  }
  render() {
    const { section } = this.state;
    return (
      <div className='directory-menu'>
        {section.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} image={imageUrl} size={size}/>
        ))}
      </div>
    );
  }
}

export default Directory;
