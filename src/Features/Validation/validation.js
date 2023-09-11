export const Validation = (e, h, f, g) => {
const date = new Date();
console.log(e);
console.log(h);

const tomorrow = new Date(date)
tomorrow.setDate(tomorrow.getDate() - 1);

if(Date.parse(e) < Date.parse(tomorrow) || Date.parse(e) >= Date.parse(h)) {
    f(true)
    g(false)
}

else if (Date.parse(e) === Date.parse("2023-09-30") || Date.parse(e) === Date.parse("2023-10-01")) {
f(true)    
g(true)
}
else if (Date.parse(e) < Date.parse("2023-09-30") && Date.parse(h) > Date.parse("2023-10-01")) {
f(true)    
g(true)
}

else {
    f(false)
    g(false)
}

}