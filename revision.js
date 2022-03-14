//1.Templete String
const str1 = "Mr";
const str2 ="Bean";
console.log(`Our${str1} ${str2}Here`)

//2.Spread oparator
const num1 =[2, 3, 8, 99, 12];
const num2 =[5, 6, 1, 55];
//...diye arrayer vitorer all elements gulo access korte pari 
console.log(...num1, ...num2);

//3.Destrucharing

let animal ={
    name:"cat",
    age:22,
    color:"white"
};
console.log(animal)
//destructuring ...rest perameter eta nile obj er vitorer all property paoa jai rest er nam change korle no kno problems nai. || {} error theke bachte onek somoy use korte hoi

const { name, ...rest} =animal || {};
console.log(rest)

//destrucchuring in function
const sum = ({name,age}) => {
    console.log(name)
    console.log(age)
}
sum(animal);
//4. Nested Object

const dreamGirl = [

    {dream1: "tusy"},
    {dname:"bby"},
    {heaight:"5.7"},
    {family:[{father:"putin", mother: "khaleda", sister: "tony" }]},
    {dage : 18},
    {phone:["013034556", "015544789"]},
    {friendList:[
            {name1:"sali"},{fage:22},
            {name1:"rudy"},{fage:22},
            {name1:"buby"},{fage:22}
    ]},

];
console.log(dreamGirl[0].friendList);
//loop: for , forEach , for in.
const nayoks = [
    "manna",
    "sharukh",
    "salman",
    "Amir",
    "kanchon",
    "dev"
]
//for
for (let nayok = 0; nayok < nayoks.length; nayok++) {
    const element = nayoks[nayok];
    console.log(element);
    
}
//for of array er janno use kora hoi 
for (const nayok of nayoks) {
    console.log(nayok)
    
}

//forEach array er janno use kora hoi

nayoks.forEach(nayok => {
    console.log(nayok)
    
});

const heroins = {
    name:"pori",
    hobby:"danch",
    color:"purple",
    movies:["sathi","songi","bondhu","bandhobi"]
}
//for in object er jono use kora hoi
for (const heroin in heroins) {
    if (heroins.hasOwnProperty.call(heroins, heroin)) {
        const myheroin = heroins[heroin];
        console.log(myheroin)
        
    }
}
//5. map, filter, find. array te use korahoi not obj!!!!

//map() all element niye new array te return kore

const numbers = [1, 2, 3, 4, 5, 6];
 
const result = numbers.map((y) => y * y);
console.log(result);

//filter() condition true hole sudhu matro sei gulo k near janno filter kora hoi

const products = [
    {id: 01, name: "mobile", price: 500, color:"black"},
    {id: 02, name: "Watch", price: 200, color:"golden"},
    {id: 03, name: "Headphone", price: 100, color:"white"},
    {id: 04, name: "laptop", price: 10000, color:"black"},
    {id: 05, name: "sunglass", price: 150, color:"yellow"},
];

const needed = products.filter((pd) => pd.color ==="black");
console.log(needed);

//find() find er condition mile gele only first item ta object hisebe return korbe

const mobiles = [
    {id: 01, name: "vivo", price: 50000, color:"black"},
    {id: 02, name: "oppo", price: 15000, color:"golden"},
    {id: 03, name: "samsung", price: 20000, color:"white"},
    {id: 04, name: "realme", price: 10000, color:"black"},
    {id: 05, name: "apple", price: 150000, color:"golden"},
];

const mymobile = mobiles.find((pd) => pd.color === "golden")
console.log(mymobile);

//Api --fetch ,then and ect.....ja amra jani:)


//index of .. eta index of array 

const foods = [
    {id: 01, name: "rice", price: 300, color:"white"},
    {id: 02, name: "beef", price: 500, color:"red"},
    {id: 03, name: "matun", price: 200, color:"light"},
    {id: 04, name: "chicken", price: 400, color:"darkred"},
    {id: 05, name: "fish", price: 220, color:"whitelight"},
];
const food = foods.map((fd, index) =>{
    console.log(index*3);
})

//Conditional (ternary) operator--- eta like condition er moto .

const ternarry = 222;
console.log(ternarry ? "bro eita true" : "bro eita false");





