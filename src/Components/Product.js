import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import shoes from './../shoes.json';



export function Product() {

  return (
    <div >

      <h1>PRODUCT PAGE</h1> 
      <Outlet />
  
    </div>
  );
}


console.log(Object.entries(shoes))

export function ProductList(){

return(
<div>
  <h1>ITEM LIST</h1>
  <hr/>

<div className='productContainer'>
 
{
  Object.entries(shoes).map(([slug, {name,img}])=>{return(
    <div key={slug} >
      <Link to={`/product/${slug}`} >
      <h4>{name}</h4>
      <img src={img} alt={name} height={200} />
      </Link> 
      </div>
    )
  }

  )
}



</div>
</div>

)


}