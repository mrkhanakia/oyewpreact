import React, { Component } from 'react'
import classnames from 'classnames'

class LandingPage extends Component {
    constructor(props) {
        super(props)     
    }

    static defaultProps = {
        id: null,
        cssClass: null
    }

    render() {
        const cssClass = classnames('layoutDefafult', this.props.cssClass)
        return (
            <div className={cssClass} id={this.props.id}>
                <div className="inner">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default LandingPage;