import React, { Component } from 'react'

export class Spinner extends Component {
    render() {
        return (
            <div className="container text-center">
                <div className="spinner-border dark m-4" style={{ width: "60px", height: "60px" }} role="status">
                    <span className="sr-only"></span>
                </div>
            </div>
        )
    }
}

export default Spinner