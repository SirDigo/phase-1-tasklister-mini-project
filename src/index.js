document.addEventListener("DOMContentLoaded", () => {
  //Making submit eventlistener and calling function.
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    createEl(e.target['new-task-description'].value);
  })
});

function createEl(task){
  //Creating btn, <p> and edit.
  let p = document.createElement('p');

  let div = document.createElement('div')
  let btn = document.createElement('button');
  let edit = document.createElement('button');

  //Adding the user writen text and div <p>.

  p.textContent = `${task} `;
  p.appendChild(div);
  document.querySelector('#list').appendChild(p);
  
  //Giving btn adn edit Text.
  btn.textContent = 'X';
  edit.textContent = 'EDIT';
  
  //Adding buttons to div.
  div.appendChild(btn);
  div.appendChild(edit);
  
  //Adding edit event listener.
  //edit.addEventListener('click', (e) => {
  //p.textContent;
  //})

  //Removing btn when user clicks btn.
  btn.addEventListener('click', (e) =>{
    p.remove();
  });
}