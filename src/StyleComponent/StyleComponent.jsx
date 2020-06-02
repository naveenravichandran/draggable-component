import React from 'react'
import DragComponent from './DragComponent'
import DragImage from './DragImage'
import DragButton from './DrapButton'

const StyleComponent = ({ childProp }) => {
  let { x, y, type, id } = childProp
  let ChildComponent

  switch (type) {
    case 'div':
      ChildComponent = <DragComponent id={id} x={x} y={y} />
      break
    case 'Button':
      ChildComponent = <DragButton id={id} x={x} y={y} />
      break
    case 'image':
      ChildComponent = <DragImage id={id} x={x} y={y} />
  }

  return <>{ChildComponent}</>
}

export default StyleComponent
