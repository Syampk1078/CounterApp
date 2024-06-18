const decreaseBtn = document.getElementById('dec');
const increaseBtn = document.getElementById('inc');
const resetBtn = document.getElementById('rst');

const countLabel = document.getElementById('count');

let count = 0;
increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;

}

decreaseBtn.onclick = function() {
    count--;
    countLabel.textContent = count;
};

resetBtn.onclick = function() {
    count = 0;
    countLabel.textContent = count;
};