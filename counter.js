//--------------------------------------------------------> Assginment -2 <---------------------------------------------------------

let count = 0;

function updateCount() {
    count = count + 1;
    document.getElementById('count').textContent = count;
}
document.getElementById('counterButton').onclick = updateCount;

function reset() {
    count = 0;
    document.getElementById('count').textContent = count;
}
document.getElementById('resetButton').onclick = reset;