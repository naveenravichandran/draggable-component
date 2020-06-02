import React from 'react'
import Draggable from 'react-draggable'

class DragButton extends React.Component {
  constructor(props) {
    super(props)
    this.localId = props.id
    this.localStorage = window.localStorage
    let { x, y } = this.localStorage.getItem(props.id)
      ? JSON.parse(this.localStorage.getItem(props.id))
      : { x: 0, y: 0 }
    this.state = {
      activeDrags: 0,
      deltaPosition: {
        x,
        y,
      },
    }
  }

  handleDrag = (e, ui) => {
    const { x, y } = this.state.deltaPosition

    this.localStorage.setItem(this.localId, JSON.stringify({ x, y }))
    this.setState({
      deltaPosition: {
        x: x + ui.deltaX,
        y: y + ui.deltaY,
      },
    })
  }

  onStart = () => {
    let { activeDrags } = this.state
    activeDrags++
    this.setState({ activeDrags })
  }

  onStop = () => {
    let { activeDrags } = this.state
    --activeDrags
    this.setState({ activeDrags })
  }

  render() {
    const dragHandlers = { onStart: this.onStart, onStop: this.onStop }
    const { deltaPosition } = this.state
    return (
      <div>
        <Draggable
          defaultPosition={{ x: deltaPosition.x, y: deltaPosition.y }}
          onDrag={this.handleDrag}
          {...dragHandlers}
        >
          <button className="ButtonDrag">Draggable Button</button>
        </Draggable>
      </div>
    )
  }
}

export default DragButton
