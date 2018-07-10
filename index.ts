import {Observable, forkJoin, of} from 'rxjs'

let myObservable = of(1);
let otherObservable = of(2);

forkJoin(myObservable, otherObservable)
  .subscribe(
    val   => console.log(val),
    error    => console.error(error),
    () => console.log('completed')
  );