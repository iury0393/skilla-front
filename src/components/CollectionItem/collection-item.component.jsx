import React from 'react';

import CustomButton from '../CustomButton/custom-button.component';
import './collection-item.styles.scss';

const CollectionItem = ({item, addItem}) => {

const {title, price, imageUrl} = item;

  return (  <div className = 'collection-item'>


  <div className='image' style={{backgroundImage: `url(${imageUrl})`}} />


    <div className='collection-footer'>

  <span className='name'>{title}</span>
  <span className='price'>{price}</span>


    </div>

    <CustomButton onClick={() => addItem(item)} inverted >Adicionar</CustomButton>

      
  

  </div>)


};

export default CollectionItem;