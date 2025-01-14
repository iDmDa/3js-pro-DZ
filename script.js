/*
1. Необходимо вывести сообщение в консоль "все теги прогрузились", когда все теги будут созданы браузером.

2. Необходимо вывести сообщение в консоль "страница загрузилась", когда все ресурсы страницы будут загружены.

3. При клике на какой-либо тег на странице в консоль должно выводиться сообщение наподобие:
- Класс "super_element" присутствует в элементе "div".
- сообщение должно определять присутствует или отсутствует класс "super_element"
- у элемента, а также выводить в нижнем регистре верный тег в данной строке, по
- которому был совершен клик.
- Необходимо использовать делегирование.

4. Сделайте, чтобы при наведении на textarea в консоли появлялось сообщение: "Вы навели на textarea."

5. Необходимо повесить событие клика на тег ul. В обработчике события в консоль необходимо выводить текст, который записан внутри элемента кнопки, по которой был произведен клик. Если клик был не по кнопке, то ничего выводить не нужно. Необходимо использовать делегирование.

6. Вопрос: Почему в console.log пишется сначала текст из 5 задания и только потом выводится текст из 3 задания, если мы кликаем по кнопкам в ul? Ответ необходимо написать здесь же, под этим комментарием, своими словами.

7. С помощью JS необходимо изменить цвет заднего фона каждого второго тега li.
*/

//1
document.addEventListener("DOMContentLoaded", () => {console.log("все теги прогрузились")});

//2
window.onload = () => console.log("страница загрузилась");

//3
document.body.addEventListener("click", (e) => {
    console.log(`Выделен тег '${e.target.tagName.toLowerCase()}', класс 'super_element' в теге ${e.target.classList.contains("super_element") ? "присутствует" : "отсутствует"}`);
})

//4
document.body.addEventListener("mouseover", (e) => {
    if(e.target.tagName.toLowerCase() === "textarea") console.log("Вы навели на textarea.");
})

//5
const ul = document.querySelector("ul");
ul.addEventListener("click", (e) => {
    if(e.target.tagName.toLowerCase() === "button") console.log(e.target.textContent)
})

//6
//Происходит эффект всплытия событий. Вначале обрабатывается событие на элементе, а потом на родительских элементах. body является родительским для ul, по этому вначале срабатывает событие на ul потом на body.

//7
const li = ul.querySelectorAll("li");
for(let i = 0; i < li.length; i+=2) {
    li[i+1].style.backgroundColor = "blue";
}