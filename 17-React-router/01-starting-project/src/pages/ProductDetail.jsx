import React from 'react'
import { Link, useParams } from 'react-router-dom'

const ProductDetail = () => {
    const param = useParams()
  return (
    <>
        <h1>The id is {param.id}</h1>
        {/* <p><Link to={'..'} relative='path'>Go back</Link></p> ---> 'path' indica que se quita un segmento de la url. Ej: /products/123 ----> /products   */}
        {/* <p><Link to={'..'} relative='route'>Go back</Link></p> ---> 'route' indica que se vuelve al path relativo. Ej: si el root es '/' , /products/123 vuelve a '/'*/}
    </>
  )
}

export default ProductDetail