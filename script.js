const content = document.querySelector('.content');
const post = document.querySelector('.post');
const rateMsg = document.querySelector('.post h4');
const input = document.getElementsByTagName('input');
const label = document.getElementsByTagName('label');

let rateValue = '';

for(let i = 0; i < input.length; i++) {
    if(input[i].checked) {
        rateValue = input[i].parentElement.lastElementChild.innerHTML;
        rateMsg.innerHTML = `You selected ${rateValue} out of 5`;
    }
}

function rate() {
    content.style.display = 'none';
    post.style.display = 'block';
}