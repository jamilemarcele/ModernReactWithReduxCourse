import React, {Component} from 'react';

class SearchBar extends Component {
    state = { term: '' };

    // one way to solve the "this" issue without adding a constructor and using
    // this.onFormSubmit = this.onFormSubmit.bind(this) is using the arrow function
    onFormSubmit = (event) => {
        event.preventDefault();

        // calling the onSearchSubmit function that was passed as a props onSubmit and
        // passing the argument
        this.props.onSubmit(this.state.term);
    };

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image search</label>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={(e) => this.setState({ term: e.target.value })}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
