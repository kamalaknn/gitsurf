export default function(){
  this.transition(
    this.toRoute('repo.index'),
    this.use('crossFade')
  );
  this.transition(
    this.toRoute('repo.commits'),
    this.use('toDown')
  );
  this.transition(
    this.toRoute('repo.pulls'),
    this.use('toDown')
  );
  this.transition(
    this.toRoute('repo.issues'),
    this.use('toDown')
  );
  this.transition(
    this.toRoute('repo.contributors'),
    this.use('toDown')
  );
}