  const form = document.querySelector('#shelter');
  const input = document.querySelector('#student');
  const student = document.querySelector('#students');
  form.addEventListener('submit', (e)=>{
    e.preventDefault();

  
    const studname = input.value;

  const line = document.createElement("li")
  line.innerText = studname;
  student.append(line)
  input.value=("");
  
})