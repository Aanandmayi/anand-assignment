import React from 'react'

class BookList extends React.Component {
    state = {
        Count: 0
    }

    fetchBooks = (event) => {
        fetch('http://localhost:3000/getCount')
            .then((response) => response.json())
            .then(Count => {
                var c = Count.count;
                this.setState({ Count: c });
            });
    }

    render() {
        return (
            <div>
                <button onClick={this.fetchBooks}>Count</button>
                <div>
                    API HIT COUNT : {this.state.Count}
                </div>
            </div>
        )
    }
}

export default BookList;