import React, { Component } from 'react'
import NewItems from './NewItems'

export class New extends Component {
    render() {
        return (

            <div className="container">
                <h2 className="my-3">
                    NewsMonkey - Top Headlines
                </h2>
                <div className="row">
                    <div className="mx-2 col-md-3">
                        <NewItems title="my title" description="my description" />
                    </div>
                    <div className=" mx-2 col-md-3">
                        <NewItems title="my title" description="my description" />
                    </div>
                    <div className="mx-2 col-md-3">
                        <NewItems title="my title" description="my description" />
                    </div>
                </div>
            </div>

        )
    }
}

export default New
