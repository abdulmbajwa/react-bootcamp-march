import React, { Component } from 'react';

class NewComponent extends Component {
    render() {
        return (
            <div>
                Hello World
                {this.props.children}
            </div>
        );
    }
}

export default NewComponent;