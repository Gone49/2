import { connect } from 'react-redux'
import React, { Component } from 'react'

type Props = {}

type State = {}

export class page extends Component<Props, State> {
  state = {}

  render() {
    return (
      <div>page</div>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(page)