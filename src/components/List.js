import React from 'react'
import Item from './Item'

export default function List({ items, getDetails }) {
  // console.log(items)
  return (
    <ul>
      {items.map(item => <Item key={item.id} {...item} getDetails={getDetails} />)}
    </ul>
  )
}