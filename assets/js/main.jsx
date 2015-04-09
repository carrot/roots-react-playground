people = [
  { name: 'Jeff', img: 'http://api.bycarrot.com/media/svgs/16.svg' },
  { name: 'Kyle', img: 'http://api.bycarrot.com/media/svgs/6.svg' },
  { name: 'Josh', img: 'http://api.bycarrot.com/media/svgs/50.svg' },
  { name: 'NPC', img: 'http://api.bycarrot.com/media/svgs/103.svg' }
]

people.forEach(function(person){
  React.render(
    <List data={people}></List>,
    document.getElementById('people')
  );
});