var List = React.createClass({
  render: function(){
    var people = this.props.data.map(function(person){
      return <li><Person name={person.name} img={person.img}></Person></li>
    });
    return <ul>{people}</ul>
  }
});