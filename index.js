let div = document.createElement('div');
div.classList.add('goose');


let sometext = document.createTextNode("текст");
document.body.append(div);
div.append(sometext);

let goose = document.querySelector('.goose');
console.log(goose)
goose.style.margin = "55px";

let arr = document.createElement('ul');
arr.classList.add("li__st");
let firstjoke = document.createTextNode('Парень спрашивает девушку: - Дорогая, ты что, меня стесняешься? - С чего ты взял? - А зачем ты когда в туалет ходишь, кран включаешь? - А я не включаю');
let secondjoke = document.createTextNode('Зоофил Алексей решил начать курить, потому что курильщики кончают от рака');
let thirdjoke = document.createTextNode('— Сэр, это Ваш ягуар стоит у входа? — Да, мой — Я поглажу?');
let firstli = document.createElement('li');
let secondli = document.createElement('li');
let thirdli = document.createElement('li');
firstli.append(firstjoke);
secondli.append(secondjoke);
thirdli.append(thirdjoke);

arr.append(firstli, secondli, thirdli);
document.body.append(arr);

let li__st = document.querySelector('.li__st');

li__st.style.color = 'red';

let lb = document.createElement('label');
document.body.append(lb);
let inpinp = document.getElementById("inp_2");


let gr = document.querySelectorAll('.grid-inputs')[0];
console.log(gr)
gr.style.display = "grid";
gr.style.gridTemplateColumns = "50px 50px 50px";

function getval(e) {
    inpinp.value = inpinp.value + e.value;
}

function multi() {
    lb.textContent = eval(inpinp.value);
}