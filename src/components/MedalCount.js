import './../css/MedalCount.css';
import { Component } from 'react';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';

export default class MedalCount extends Component {
    render() {
        return (
            <div className="medal-count-outer">
                <RemoveCircleIcon onClick={this.props.decrement} />
                <div className="medal-count-inner" style={{ backgroundColor: this.props.color }}><p>{this.props.count}</p></div>
                <AddCircleIcon onClick={this.props.increment} />
            </div>
        )
    }
}