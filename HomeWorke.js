// находим форму и ставим на нее слушателя
const form = document.querySelector("#form");
form.addEventListener("submit", formAdit);

// функция по написанию задачи()
function formAdit(event) {
  event.preventDefault();
  const { target } = event;
  const {
    target: {
      firstElementChild: { value: valInt },
      lastElementChild,
    },
  } = event;

  if (valInt === "" || valInt === " ") {
    alert("Строка не может быть пустой >=(");
    return;
  }

  // прикрипление задачи к странице
  document.body.append(addString(valInt.trim()));
  target.reset();
}
// создание задачи
function addString(text) {
  const art = document.createElement("article");
  art.classList.add("zapis");

  const inpCheck = document.createElement("input");
  inpCheck.setAttribute("type", "checkbox");
  inpCheck.classList.add("inp-check");

  const span = document.createElement("span");
  span.textContent = text;
  span.classList.add("spanN");

  const btnDel = document.createElement("button");
  btnDel.classList.add("deleteBtn");
  btnDel.textContent = "delete";

  const btnChange = document.createElement("button");
  btnChange.textContent = "change";

  art.append(inpCheck, span, btnDel, btnChange);
  // слушатель для инпута-чекбокс
  inpCheck.addEventListener("change", resolve);
  // слушатель для кнопки удалить
  btnDel.addEventListener("click", deleteFnc);
  // слушатель для кнопки изменить
  btnChange.addEventListener("click", changeFcn);

  return art;
  // document.body.append(inpCheck);
  // console.dir(inpCheck);
}

// функция по определинию выолнина задача/не выполнина
function resolve(event) {
  const {
    target: { checked: check, nextElementSibling: spanStl },
  } = event;
  if (check === true) {
    spanStl.classList.toggle("wipol");
  } else {
    spanStl.classList.toggle("wipol");
  }
}

// фукнция удаления задачи
function deleteFnc({ target: { parentElement } }) {
  // console.log(event.target.parentElement);
  parentElement.remove();
}

// функция изменения сущ. задачи
function changeFcn(event) {
  const inpCha = document.createElement("input");
  inpCha.classList.add("second");
  inpCha.setAttribute("type", "text");

  const bntCha = document.createElement("button");
  bntCha.textContent = "Change =)";
  bntCha.classList.add("second");
  const { target } = event;

  target.style.display = "none";
  const {
    target: { parentElement: article, style },
  } = event;
  article.append(inpCha);
  article.append(bntCha);

  bntCha.addEventListener("click", changeLast);
}

function changeLast(event) {
  const {
    target: { previousElementSibling: inp },
  } = event;
  const {
    target: {
      previousElementSibling: {
        previousElementSibling: {
          previousElementSibling: { previousElementSibling: span },
        },
      },
    },
  } = event;

  span.textContent = inp.value;
  const {
    target: {
      previousElementSibling: { previousElementSibling: btnOn },
    },
  } = event;
  btnOn.style.display = "inline";
  const deleteSec = document.querySelector(".second");
  deleteSec.remove();
  const deleteSec1 = document.querySelector(".second");
  deleteSec1.remove();
}

addString();
