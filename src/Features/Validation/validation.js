export const Validation = (e, h, f) => {
const date = new Date();
console.log(e);
console.log(h);

const tomorrow = new Date(date)
tomorrow.setDate(tomorrow.getDate() - 1);

if(Date.parse(e) < Date.parse(tomorrow) || Date.parse(e) >= Date.parse(h)) {
    f(true)
}

else {
    f(false)
}

}