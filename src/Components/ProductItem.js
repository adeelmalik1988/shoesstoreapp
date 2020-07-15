import React from 'react';
import {useParams} from 'react-router-dom';
import shoes from './../shoes.json';

function ProductItem() {
const {slug} = useParams()
const shoe = shoes[slug]

if(!shoe)
{
  return(<h2>
    Product Not Found
  </h2>)
}


const {name, img} = shoe;

  return (
    <div className='productItem'>

      {<h2>{name}</h2>}
      <img src={img} alt={name} height={500} ></img>

    </div>
  );
}

export default ProductItem;
