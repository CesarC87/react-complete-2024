import React from 'react'
import { Link } from 'react-router-dom'

const Products = () => {

    const PRODUCTS = [
        { id: 'p1', title: 'Producto 1'},
        { id: 'p2', title: 'Producto 2'},
        { id: 'p3', title: 'Producto 3'},
    ]
  return (
    <>
        <div>Products page</div>
        {
            PRODUCTS.map( prod => {
                return (
                    <Link to={`/products/${prod.id}`}>{prod.title}</Link>
                )
            })
        }
    </>

  )
}

export default Products