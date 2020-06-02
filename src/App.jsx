import React from 'react'
import './App.css'
import StyleComponent from './StyleComponent/StyleComponent'

class App extends React.Component {
  constructor(props) {
    super(props)
    let defaultComponent = [
      {
        id: 'drag1',
        type: 'div',
        x: 465,
        y: 21,
      },
      {
        id: 'drag2',
        type: 'Button',
        x: 195,
        y: -86,
      },
      {
        id: 'drag3',
        type: 'div',
        x: 15,
        y: -105,
      },
      {
        id: 'drag4',
        type: 'image',
        x: 464,
        y: -34,
      },
    ]

    this.state = { defaultComponent }
  }

  render() {
    const { defaultComponent } = this.state
    return (
      <div className="DragDrop-Container">
        <div className="header-container">Drag and Drop UI Component</div>
        <div className="main-container">
          {defaultComponent.map((Element, index) => {
            return <StyleComponent childProp={Element} />
          })}
        </div>
      </div>
    )
  }
}

export default App
