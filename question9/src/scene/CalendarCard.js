import React, { Component } from 'react';
import { PropTypes } from 'prop-types'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';

/**
 * Calendar Card class
 */
class CalendarCard extends Component {
  state = {
    open: false,
    title: '',
    subtitle: '',
    description: ''
  };

  constructor(props) {
    super(props)
  }  

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});

    if (this.props.onClose !== undefined && this.props.onClose != null) {
      this.props.onClose();
    }

  };

  render() {
    var open  = this.props.open;
    var title = this.props.cardtitle;
    var subtitle = this.props.subtitle;    
    var description =this.props.description;
    var date = this.props.date;

    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleClose}
      />,
    ];

    return (
      <div>
        <Dialog
          title={title}
          actions={actions}
          modal={false}
          open={open}
          onRequestClose={this.handleClose}
        >
          <Card>
            <CardHeader
                title={date}
                subtitle={subtitle}
                actAsExpander={true}
                showExpandableButton={true}
            />
            <CardText expandable={true}>{description}
            </CardText>
          </Card>           
        </Dialog>
      </div>
    );
  }
}

CalendarCard.propTypes = {
  cardtitle: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  date: PropTypes.date,
  onClose: PropTypes.function
}

export default CalendarCard;