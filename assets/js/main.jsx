self.staff.forEach(function(person){
  React.render(
    <List data={self.staff}></List>,
    document.getElementById('lists')
  );
});