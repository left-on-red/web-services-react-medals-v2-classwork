import './../css/MedalList.css';
import MedalListItem from './MedalListItem';
import { Component, Fragment } from 'react';
import { Badge } from '@material-ui/core';

let countries = [
    'United States',
    'China',
    'Russia',
    'Germany',
    'Brazil',
    'Japan'
]

export default class MedalList extends Component {
    constructor(props) {
        super(props);
        this.state = { total: 0 };
    }

    render() {
        return (
            <Fragment>
                <h1>Medals <Badge badgeContent={this.state.total} color="secondary" /></h1>
                <div>
                    {countries.map((c, i) => <MedalListItem name={c} key={i} increment={this.increment.bind(this)} decrement={this.decrement.bind(this)} />)}
                </div>
            </Fragment>
        );
    }

    increment() { this.setState({ total: this.state.total + 1 }) }
    decrement() { this.setState({ total: this.state.total - 1 }) }
}
