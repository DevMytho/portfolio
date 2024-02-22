const app = document.querySelector("#app");
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

app.addEventListener("keypress", async function (event) {
  if (event.key === "Enter") {
    await delay(150);
    getInputValue();

    removeInput();
    await delay(150);
    new_line();
  }
});

app.addEventListener("click", function (event) {
  const input = document.querySelector("input");
  input.focus();
});

async function open_terminal() {
  createText("Welcome");
  await delay(300);
  createText("Run `help` to know more");

  await delay(500);
  new_line();
}

function new_line() {
  const p = document.createElement("p");
  const span1 = document.createElement("span");
  const span2 = document.createElement("span");
  const span3 = document.createElement("span");
  p.setAttribute("class", "path");
  p.textContent = "user";
  span1.textContent = "@device";
  span2.textContent = " ~/devvv";
  span3.textContent = "$";
  p.appendChild(span1);
  p.appendChild(span2);
  p.appendChild(span3);
  app.appendChild(p);
  const div = document.createElement("div");
  div.setAttribute("class", "type");
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone");
  const input = document.createElement("input");
  div.appendChild(i);
  div.appendChild(input);
  app.appendChild(div);
  input.focus();
}

function removeInput() {
  const div = document.querySelector(".type");
  app.removeChild(div);
}

async function getInputValue() {
  const value = document.querySelector("input").value;
  if (value === "help") {
    trueValue(value);
    createCode("about", "Who am i and what do i do.");
    createCode(
      "projects",
      "My github page with my projects. Follow me there ;)"
    );
    createCode("social", "All my social networks.");
    createCode("clear", "Clean the terminal.");
  } else if (value === "projects") {
    trueValue(value);
    createText(
      "<a href='https://github.com/devmytho' target='_blank'><i class='fab fa-github white'></i> github.com/devmytho</a>"
    );
  } else if (value === "about") {
    trueValue(value);
    createText("Hey there , I'm Debasish also Dev");
    createText(
      "I am a regular procrastinator interested in web development & Python . I also make discord bots. I am currently pursuing my bachelors in mathematics. I play games sometimes to relax"
    );
  } else if (value === "social") {
    trueValue(value);
    createText(
      "<a href='https://github.com/devmytho' target='_blank'><i class='fab fa-github white'></i> github.com/devmytho</a>"
    );
    createText(
      "<a href='https://www.linkedin.com/in/devvv1804/' target='_blank'><i class='fab fa-linkedin-in white'></i> linkedin.com/in/devvv1804</a>"
    );
    createText(
      "<a href='https://www.instagram.com/devvv1804/' target='_blank'><i class='fab fa-instagram white'></i> instagram.com/devvv1804</a>"
    );
  } else if (value === "social") {
    trueValue(value);
    createText("Didn't you mean: social ?");
  } else if (value === "clear") {
    document.querySelectorAll("p").forEach((e) => e.parentNode.removeChild(e));
    document
      .querySelectorAll("section")
      .forEach((e) => e.parentNode.removeChild(e));
  } else {
    falseValue(value);
    createText(`command not found: ${value}`);
  }
}

function trueValue(value) {
  const div = document.createElement("section");
  div.setAttribute("class", "type2");
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone");
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "sucess");
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function falseValue(value) {
  const div = document.createElement("section");
  div.setAttribute("class", "type2");
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone error");
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "error");
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function createText(text, classname) {
  const p = document.createElement("p");

  p.innerHTML = text;
  app.appendChild(p);
}

function createCode(code, text) {
  const p = document.createElement("p");
  p.setAttribute("class", "code");
  p.innerHTML = `${code} <br/><span class='text'> ${text} </span>`;
  app.appendChild(p);
}

open_terminal();
