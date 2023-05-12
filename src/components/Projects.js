import React from 'react';
import '../styles/Projects.css';
import Item from './Item';

const Projects = ({items}) => {

    const itemComponents = items.map((item) => {
      return <Item id='item' key={item.id} item={item} />
    });

    return (
        <div className='projects'>
            {itemComponents}
        </div>
    );
}
 
export default Projects;