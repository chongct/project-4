import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { findDOMNode } from 'react-dom'
import { DragSource, DropTarget } from 'react-dnd'

const style = {
  border: '1px dashed gray',
  padding: '0.5rem 1rem',
  marginBottom: '.5rem',
  backgroundColor: 'white',
  cursor: 'move',
}

const cardSource = {
  beginDrag(props) {
    return {
      id: props.id,
      index: props.index
    }
  }
}

const cardTarget = {
  hover(props, monitor, component) {
    const dragIndex = monitor.getItem().index
    const hoverIndex = props.index

    // Do not replace self
    if (dragIndex === hoverIndex) {
      return
    }

    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect()

    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

    const clientOffset = monitor.getClientOffset()

    const hoverClientY = clientOffset.y - hoverBoundingRect.top

    if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
      return
    }

    if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
      return
    }

    props.moveCard(dragIndex, hoverIndex)

    monitor.getItem().index = hoverIndex
  }
}

class Location extends Component {
  static propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    connectDropTarget: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
    isDragging: PropTypes.bool.isRequired,
    id: PropTypes.any.isRequired,
    moveCard: PropTypes.func.isRequired
  }

  render() {
    let { locationName, locationAddress, latitude, longitude } = this.props

    const {
      isDragging,
      connectDragSource,
      connectDropTarget
    } = this.props

    const opacity = isDragging ? 0 : 1

    return connectDragSource(
      connectDropTarget(<div style={{...style, opacity}}>
        {locationName}, {locationAddress} at {latitude}, {longitude}
      </div>)
    );
  }

}

export default DragSource('locationList', cardSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
})) (
  DropTarget('locationList', cardTarget, connect => ({
    connectDropTarget: connect.dropTarget()
  }))(Location)
)
