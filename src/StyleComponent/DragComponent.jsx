import React from 'react'
import Draggable from 'react-draggable'

class DragComponent extends React.Component {
  constructor(props) {
    super(props)
    this.localStorage = window.localStorage
    this.localId = props.id
    let { x, y } = this.localStorage.getItem(props.id)
      ? JSON.parse(this.localStorage.getItem(props.id))
      : { x: props.x, y: props.y }
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
          <div className="child">Draggable Content</div>
        </Draggable>
      </div>
    )
  }
}

export default DragComponent
