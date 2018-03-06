import React, {Component} from 'react'
import {GridList, GridTile} from 'material-ui/GridList'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import Dialog from 'material-ui/Dialog'
import IconButton from 'material-ui/IconButton'
import Subheader from 'material-ui/Subheader'
import StarBorder from 'material-ui/svg-icons/toggle/star-border'

export default class EmployeeDialog extends Component {
  state = {
    open: false
  }

  render() {
    return(
      <Dialog
        modal={false}
        open={this.state.open}
        onRequestClose={this.handleClose}
      >
        { this.renderEmployeeCard(this.state.selectedEmployee)}
      </Dialog>
    )
  }
}
