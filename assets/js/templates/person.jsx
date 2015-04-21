var Person = React.createClass({
  render: function(){
    return (
      <div>
        <img className='avatar' src={this.props.img} />
        <p>{this.props.name}</p>
      </div>
    );
  }
});