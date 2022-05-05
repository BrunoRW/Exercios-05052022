function next(){
    console.log();
    console.log("-------------------")
    console.log();
}

// EX 1

for(let i = 0; i <= 100; i++){
    console.log(i)
}

next()

// EX 2

for(let i = 0; i <= 100; i++){
    if(i % 2 == 0){
        console.log(i)
    }
}

next()

// EX 3

let md = 0;
let nv = 5;
for(let i = 0; i < nv; i++){
    let sl = Math.floor(Math.random() * 10000 + 1000);
    md += sl;
}
console.log("Média: ", md / nv)

next()

// EX 4

let s = Math.floor(Math.random() * 10000 + 10000);
console.log("De: ", s)
for(let i = 0; i < 5; i++){
    s /= 2;
}
console.log("Para: ", s)

next()

// EX 5

// create names
let alph = "abcdefghijklmnopqrstuvwxyz";
let nomes = [];
for(let i = 0; i < 10; i++){
    let n = "";
    let nm = Math.floor(Math.random() * 10 + 3);
    for(let u = 0; u < nm; u++){
        let r = Math.floor(Math.random() * 26);
        n += alph[r];
    }
    nomes.push(n);
}

// check length and display names
for(let i in nomes){
    console.log(`${nomes[i]}, ${nomes[i].length}`)
}