import './../css/MedalListItem.css';
import MedalCount from './MedalCount';
import { Component } from 'react';
import { Badge } from '@material-ui/core';

let types = [
    {
        color: '#ffd900',
        count: 0,
        identifier: 'Gold Medals'
    },

    {
        color: '#c5cad9',
        count: 0,
        identifier: 'Silver Medals'
    },

    {
        color: '#d9a36a',
        count: 0,
        identifier: 'Bronze Medals'
    }
]

export default class MedalListItem extends Component {
    constructor(props) {
        super(props);
        this.state = { count: [ 0, 0, 0 ], name: props.name, total: 0 }
    }

    //store(num) { localStorage.setItem(this.state.name.split(' ').join('-'), num) }
    //set(num) { this.setState({ count: num }); this.store(num) }

    _set_count_by_index(i, c) {
        let counts = this.state.count;
        counts[i] = c;
        this.setState({ count: counts, total: counts.reduce((a, b) => a + b, 0) });
    }

    _get_count_by_index(i) {
        let counts = this.state.count;
        return counts[i];
    }

    increment(i) { this._set_count_by_index(i, this._get_count_by_index(i) + 1); this.props.increment(); }
    decrement(i) {
        if (this._get_count_by_index(i) === 0) { return }
        this._set_count_by_index(i, this._get_count_by_index(i) - 1);
        this.props.decrement();
    }

    render() {
        return (
            <div>
                <p className="medal-header">{this.state.name}<Badge badgeContent={this.state.total} color="primary" /></p>
                {
                    types.map((t, i) =>
                        <MedalCount
                            color={t.color}
                            count={this.state.count[i]}
                            key={i}

                            // .bind allows me pass the index of the medal into the functions arguments when it's called from this scope, rather from within MedalCount
                            // MedalCount won't ever need to know what it's index is
                            increment={this.increment.bind(this, i)}
                            decrement={this.decrement.bind(this, i)}
                        />
                    )
                }
            </div>
        );
    }
}
