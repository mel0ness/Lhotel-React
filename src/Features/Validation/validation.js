export const Validation = (e, h, f) => {
const date = new Date();
const parsedDate = Date.parse(date);

if(Date.parse(e) < parsedDate || Date.parse(e) > Date.parse(h)) {
    f(true)
}

else {
    f(false)
}

}