var Ticker = React.createClass({
    getInitialState: function(){
        return ({});
    },

    handleClick: function(){
        this.props.removeTicker(this.props.name);
        socket.emit("remove",ticker);
    },

    render: function(){
        return (
            <div className="ticker">
                {this.props.name}
                <button onClick={this.handleClick}>X</button>
            </div>
        )
    }
});

module.exports = Ticker;