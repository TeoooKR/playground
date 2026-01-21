const func = () => { return "d" };
console.log(func());

const func2 = () => ( "d" );
console.log(func2());

let func3 = () => ( "1" );
let func4 = () => ( "2" );

func3 = func4;
console.log(`${func3()} | ${func4()}`);

func4 = () => ( "3" );
console.log(`${func3()} | ${func4()}`);

let func5 = ({a, b} : {a : number, b : string}) => { console.log(`${a} | ${b}`)}

func5({a : 1, b : "D"})

const object = {x : 2, y : 3}
object.x = 5


console.log(`${object.x} | ${object.y}`)

const object2 = {x : 2, y : 3} as const