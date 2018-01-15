import React from 'react';
import BuysItem from './BuysItem'

class BuysTodo extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        console.log('11',this.props.data)
        return (
            <ul>

                {
                    this.props.data.map( (todo)=> {
                        return (
                            <BuysItem
                                key={todo.id}
                                todo={todo}
                                deleteTodo={this.props.actions}
                            />
                        )
                    })
                }

            </ul>
        )
    }
}
export default BuysTodo;

