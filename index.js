import { DecoratingIsFun, DecoratingMakesSense } from './decorator'

class ExampleWithoutDecoration {
  doWork() {
    console.log('can\'t you see I\'m working here?')
  }
}

class ExampleWithDecoration {
  @DecoratingIsFun
  doWork() {
    console.log('can\'t you see I\'m working here?')
  }
}

// const example = new ExampleWithoutDecoration()
// example.doWork()

// const decoratedExample = new ExampleWithDecoration()
// decoratedExample.doWork()

class ExampleWithDetailedDecoration {
  @DecoratingMakesSense
  doWork() {
    console.log('can\'t you see I\'m working here?')
  }
}

const makesSense = new ExampleWithDetailedDecoration()
makesSense.doWork()
makesSense.doWork = () => console.log('some other function')
