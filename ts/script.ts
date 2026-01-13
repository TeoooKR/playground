let hello : string[] = ["hello", "o"];
let anExampleVariable : any = "Hello World";
anExampleVariable = true;

function o(a : any) {
    console.log(a.includes("o"));
    return a.includes("o");
}
console.log(anExampleVariable + hello.filter(o));

let arona : {name : string, kii : number, isnamsung : boolean} = {name: "arona", kii : 138, isnamsung : false};
console.log(`이름 ${arona.name} 키 ${arona.kii} 성별 ${arona.isnamsung ? "남성" : "여성"}`);

const input : string = "heeef";
const answer : string = "hello";
let result : string = "";

for(let i = 0; i < 5; i++) {
    console.log("ABCDEFG".substring(i, i + 1))    
}

let a = [1, 2]
let b = [1, 2]
console.log(JSON.stringify(a) === JSON.stringify(b))

for (let i = 0; i < input.length; i++) {
    if (input[i] == answer[i]) result += "🟩"
    else answer.includes(input[i]) ? result += "🟨" : result += "🟥"
}

console.log(result)

let sorttt : number[] = [99, 2, 1, 10];

console.log(sorttt);
console.log(sorttt.sort());
console.log(sorttt);

const c = (df : string) => { console.log(df)}

console.log(typeof c)
c("D")

sorttt.forEach((item, index, array) => { 
  console.log(array)
  console.log(`${index}. ${item}`);
});

let [x, y, z] : number[] = [1, 2, 3];

console.log(x.toString()+y.toString()+z.toString());
x = y = z;
console.log(x.toString()+y.toString()+z.toString());

(() => { console.log("asdf") })();

let functionArray : ((a : number, b? : string) => void)[] = [(a, b) => {console.log(a.toString() + b)}, (a, b) => {console.log(a - Number(b))}] //똥

functionArray[0](1)


const numbers = [1, 2, 3, 4, 5]

numbers.forEach((n) => {
    if (n % 2 === 1) console.log(n)
})

let nully = null;
let undefinedy = undefined;
console.log("ㅇ")
console.log(nully == undefinedy);
console.log(nully === undefinedy);

console.log(nully == ""); // false
console.log(nully == 0);
console.log(undefinedy == 0);
console.log("" == undefinedy);

const scores = [40, 65, 30, 80, 95];

const scoreResult = scores.filter(p => p >= 50).map((p) => p + 10) // 중괄호 return 생략
console.log(scoreResult);

[1, 2, 3].reduce((acc, cur) => { // return -> 다음 acc
    console.log(acc.toString() + cur.toString() + " " + acc * cur);
    return acc * cur; }, 1);



function cook() {
    return new Promise((done) => {
        setTimeout(() => {
            done("피자"); 
        }, 2000);
    });
}

async function wait() {
    console.log("주문완료");
    const food = await cook();
    console.log(food + "도착");
    
}

wait();

let arrrr : number[] = [1, 2]
let arrrr2 : number[] = arrrr // 주소 복사
arrrr2[0] = 3;

console.log(`${arrrr} ${arrrr2}`)
console.log(arrrr == arrrr2)