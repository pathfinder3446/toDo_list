const input = document.querySelector(`.input-box`);
const btn = document.querySelector(`.btn`);
const tasks = document.querySelector(`.tasks`)

window.onload = function() {
    document.getElementById("myText").focus();
  };

btn.addEventListener(`click`, () => {
    if(input.value == ``) {
        alert(`Please fill the input box !!`)
    } else {

        const todoDiv = document.createElement(`div`);
        todoDiv.classList.add(`tododiv`);

        const checkBox = document.createElement(`input`);
        checkBox.classList.add(`cbox`);
        checkBox.type = `checkbox`

        const todoText = document.createElement(`p`);
        todoText.classList.add(`todotext`);
        todoText.innerText = input.value;

        const delBtn = document.createElement(`button`);
        delBtn.classList.add(`delbtn`);
        delBtn.innerText = `Delete`;


        todoDiv.append(checkBox);
        todoDiv.append(todoText);
        todoDiv.append(delBtn);


        tasks.append(todoDiv);

        input.value = ``;

        delBtn.addEventListener(`click`, () => {
        tasks.removeChild(todoDiv);
        });

    };
});


input.addEventListener("keydown", (e) => {
    if (e.keyCode === 13) {
      btn.click();
    }
  });


