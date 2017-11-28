import { DecoratingIsWork } from './decorator'

class ExampleWithoutDecoration {
  doWork() {
    console.log('can\'t you see I\'m working here?')
  }
}

@DecoratingIsWork
class ExampleWithDecoration {
  doDecoratedWork() {
    console.log('can\'t you see I\'m working here?')
  }
}

const example = new ExampleWithoutDecoration()
example.doWork()

const decoratedExample = new ExampleWithDecoration()
decoratedExample.doDecoratedWork()
