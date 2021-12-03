function add(a,b){
    if(typeof a!=="number"||typeof b!=="number"){
        return "Invalid Inputs";
    }
    c=a+b;
    return c;
}
add(4,16);
console.log("addtion is:",c);

function fib(numFib){
    let n1=0,n2=1,nextTerm;
    console.log("Finonacci Series;");
    for(let i=0;i<=numFib;i++){
        console.log(n1);
        nextTerm=n1+n2;
        n1=n2;
        n2=nextTerm;
    }
}
fib(10);