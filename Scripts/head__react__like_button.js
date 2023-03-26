'use strict';

const e = React.createElement;

class DanceSquare extends React.Component {

  constructor(props) {
    super(props);
    this.state = { stepped: false };
  }

  toggle() {
    this.setState({ addClass: !this.state.addClass });
  }

  render() {

    if (this.state.stepped) {

      return e(
        'button',
        {
          className: 'stepped',
          onClick: () => this.setState({ stepped: false })
        },
        '0'
      );
    }

    return e(
      'button',
      {
        className: 'unstepped',
        onClick: () => this.setState({ stepped: true })
      },
      this.props.floorsquareID
    );
  }
}