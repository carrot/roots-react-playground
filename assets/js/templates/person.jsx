var Person = React.createClass({
  render: function(){
    return (
      <div>
        <img src={this.props.img} />
        <p>{this.props.name}</p>
      </div>
    );
  }
});