import React from "react";
export default class profile extends React.Component {
    render() {
        return (
            <div>
                <div><img src={this.props.img} alt={this.props.fullName} /></div>
                <div>
                    <span>fullName: {this.props.fullName}</span>
                </div>
                <div>
                    <span>bio: {this.props.bio}</span>
                </div>
                <div>
                    <span>profession: {this.props.profession}</span>
                </div>
                <a href="/" onClick={e => this.props.handleClick(e)}>Click me !</a>
            </div>

        );
    };
}