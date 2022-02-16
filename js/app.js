const h2Color = document.getElementsByTagName('h2');
for (const hheading2 of h2Color) {
    hheading2.style.color = 'lightblue';
}

document.getElementById('backpack').style.backgroundColor = 'tomato' 

const cardBorder = document.getElementsByClassName('card ');
for (const card of cardBorder) {
    card.style.borderRadius = '30px';
}

document.getElementById('buy-now-btn').addEventListener('click',function () {
    console.log("buy-now-btn")
})

document.getElementById('remove-btn').addEventListener('click', function (e) {
    if (e.target.innerText == 'Buy Now') {
        e.target.parentNode.removeChild(e.target);
    }
})

document.getElementById('submit-input').addEventListener('keyup', function (e) {
    const submitBtn = document.getElementById('submit-btn');

    if (e.target.value == "email") {
        submitBtn.removeAttribute('disabled')
    }
    else {
        submitBtn.setAttribute('disabled', true)
    }
})