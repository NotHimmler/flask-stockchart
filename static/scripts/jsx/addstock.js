var AddStock = React.createClass({
    getInitialState: function(){
        return ({ticker: ""});
    },

    addStock: function(){
        var context = this;
        if(this.state.ticker != "" && names.indexOf(this.state.ticker) < 0){
            names[names.length] = this.state.ticker;
            socket.emit('add', this.state.ticker);
            this.props.addTicker(this.state.ticker);
            redrawChart();
        }
    },

    handleChange(event) {
        this.setState({ticker: (ReactDOM.findDOMNode(this.refs.ticker).value)});
    },

    render: function(){
        return (
            <div>
                <input type="text" onChange={this.handleChange.bind(this)} ref="ticker" name="input"></input>
                <button onClick={this.addStock}>Add</button>
            </div>
        )
    }
});

module.exports = AddStock;