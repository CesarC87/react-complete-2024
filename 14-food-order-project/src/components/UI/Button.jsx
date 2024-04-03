import React from 'react'

const Button = ({children, textOnly, cssClassname, ...props}) => {
    let cssClass = textOnly ? 'text-button' : 'button'
    cssClass += ' ' + cssClassname
  return (
    <button className={cssClass} {...props}>{children}</button>
  )
}

export default Button