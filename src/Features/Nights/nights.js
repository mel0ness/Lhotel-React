export const Nights =(e, f, g) => {
const total = (Date.parse(f) - Date.parse(e)) / (1000 * 3600 * 24);

if(e !== undefined && f !== undefined && total > 0){

return g(total)}
else {
    return g(0)
}
}