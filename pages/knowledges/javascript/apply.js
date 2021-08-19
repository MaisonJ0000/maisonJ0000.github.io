class Calc {
  constructor() {
    this.a = 6;
    this.b = 2;
  }

  divide() {
    return this.a / this.b;
  }
}

function patchToCalc(calc) {
  const divideOrig = calc.divide;
  calc.divide = () => {
    console.info('I interupped');
    // return divideOrig.apply(calc);
    return divideOrig.apply(calc);
  };

  return calc;
}

const calc = new Calc();
// const result = calc.divide();
// result;

const patchCalc = patchToCalc(calc);
const result2 = patchCalc.divide();
result2;

// Quiz.
function convertArgsToArray() {
  // arguments 에 대해 알아야 한다.
  // return Object.values(arguments); // 이걸로도 되겠다.

  // const sliceResult = arguments.slice(); 이런 것이 안된다. 배열스럽긴 한데 Array는 아닌 경우이다.
  const arr = Array.prototype.slice.call(arguments); // slice 내부에서 this를 iterate한다.

  // silce();
  return arr;
}
const result3 = convertArgsToArray(1, 2, 3);
result3;

const person = {
  name: 'Seo',
  foo(cb) {
    setTimeout(cb, 100);
  },
};

person.foo(function () {
  console.log('[JONGMAN_LOG] this.name', this.name, new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().split('T')[1].slice(0, -1));
  // 이 this는 전역 this이다.
});
