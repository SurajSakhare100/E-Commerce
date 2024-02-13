const form1 = document.getElementById("form1");
const First_name = document.getElementById("First_name");
const Last_name = document.getElementById("Last_name");
const Country = document.getElementById("Country");
const Street_address = document.getElementById("Street_address");
const city = document.getElementById("city");
const state = document.getElementById("state");
const pincode = document.getElementById("pincode");
const phone_no = document.getElementById("phone_no");
const email = document.getElementById("email");
const Order_notes = document.getElementById("Order_notes");
const check_payment = document.getElementById("check_payment");
const cash_on_delivery = document.getElementById("cash_on_delivery");
const submit_form = document.getElementById("submit_form");
const input = document.querySelectorAll("input");
const label = document.querySelectorAll("label");
const required = document.querySelectorAll(".required");
const form_error = document.getElementById("form_error");
const note = document.getElementById("note");
const primary=document.getElementById('primary');
const payment_status=document.getElementById('payment_status');
const tbd=document.getElementById('tbd');
const p_status=document.getElementById('p_status');
const checkout_form_box = document.querySelector(".checkout_form_box");
const pt = document.querySelectorAll(".pt");
const pp = document.querySelectorAll(".pp");
let submited=true;
const label_name = [
    "First Name",
  "Last Name",
  "Street address",
  "city",
  "State",
  "pincode",
  "phone number",
  "email address",
];

submit_form.addEventListener("click", (e) => {
  form_error.innerHTML = "";
  submit(e);
});
function submit(e) {
  if (isRequiredFill()) {
    e.preventDefault();
    checkout_form_box.style.display = "none";
    primary.classList.remove('hide');
    formdetail();
    let time=new Date();
    date.innerText=time.toLocaleDateString();
    // console.log(First_name.value);
    // console.log(Last_name.value);
    // console.log(Country.value);
    // console.log(Street_address.value);
    // console.log(city.value);
    // console.log(state.value);
    // console.log(pincode.value);
    // console.log(phone_no.value);
    // console.log(email.value);
    // console.log(Order_notes.value);
    // console.log(check_payment.checked);
    // console.log(cash_on_delivery.checked);
    submited=true;
    localStorage.clear();
    localStorage.setItem('value',0)
    localStorage.setItem('counter',0)

  } else {
    console.log("some error occurs");
  }
}
function isRequiredFill() {
  let count = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i].value == "") {
      let p = document.createElement("p");
      p.textContent = "Billing" + " " + label_name[i];
      let span = document.createElement("span");
      span.textContent = " is a required field.";
      form_error.appendChild(p);
      p.appendChild(span);
      input[i].style.borderColor = "red";
    } else {
      input[i].style.borderColor = "green";
      count++;
    }
  }
  if (count == 10 ) {

    return true;
  } else {
    return false;
  }
}
function isvaild() {
  for (let i = 0; i < input.length; i++) {
    if ((input[i].type = "text")) {
      typeof input.value;
    }
  }
}

const formdetail=()=>{
    if(check_payment.checked){
        payment_status.innerText='Cash on delivery';
        p_status.innerText='Cash on delivery';
    }
    else{
        payment_status.innerText='Cash on delivery';
        p_status.innerText='Cash on delivery';
    }
    note.innerText=Order_notes.value;
    
    ts.innerText=ptotal.innerText;
    tt.innerText=ptotal.innerText;
    ttt.innerText=ptotal.innerText;
  //  localStorage.clear()
}
ptotal.innerText=localStorage.getItem('total')
    pto.innerText=localStorage.getItem('total')
pt.forEach((e,i)=>{
  pt[i].innerText=localStorage.getItem(`title${i}`)
})
pp.forEach((e,i)=>{
  pp[i].innerText=`£${localStorage.getItem(`price${i}`)}`
})
let n=localStorage.getItem('value');
for (let i = 0; i < n; i++) {
  let tr=document.createElement('tr');
  tr.innerHTML= `<td class="pt">${localStorage.getItem(`title${i}`)} x ${localStorage.getItem(`quantity_num${i}`)}</td>
  <td class="pp">£${localStorage.getItem(`price${i}`)}</td>`
  tbd.prepend(tr)
}
for (let i = 0; i < n; i++) {
  let tr=document.createElement('tr');
  tr.innerHTML= `<td class="pt">${localStorage.getItem(`title${i}`)} x ${localStorage.getItem(`quantity_num${i}`)}</td>
  <td class="pp">£${localStorage.getItem(`price${i}`)}</td>`
  tbdt.prepend(tr)
}
// localStorage.clear()