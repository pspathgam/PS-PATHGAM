async function signup(){
  const role = role.value;
  const name = document.getElementById("name").value;
  const id = document.getElementById("id").value;
  const password = document.getElementById("password").value;

  if(!name || !id || !password){
    alert("All fields required");
    return;
  }

  const req = {
    role, name, id, password,
    status:"pending"
  };

  let data = [];
  try{
    const r = await fetch("../data/pending.json");
    data = await r.json();
  }catch{}

  data.push(req);

  alert("Request submitted. Await Admin approval.");
}
