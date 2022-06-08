const input = document.querySelector(`.input-box`);
const btn = document.querySelector(`.btn`);

btn.addEventListener(`click`, () => {
    if(input.value == ``) {
        alert(`Please fill the input box !!`)
    }
})
