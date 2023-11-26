const wrapperE1 = document.getElementById('wrapper') 
const leftE1 = document.getElementById('left')
const rightE1 = document.getElementById('right')
const userEmailE1 = document.getElementById('user-email')
const invalidEmailE1 = document.getElementById('invalid-email')
const emailInput = document.getElementById('email')
const submitBtnE1 = document.getElementById('submit-button')
const successFormE1 = document.getElementById('success-form')
const dismissMessageE1 = document.getElementById('dismiss-message')

function formSuccess(){
    successFormE1.classList.add('active')
    wrapperE1.classList.add('success')
    leftE1.style.display='none'
    rightE1.style.display='none'
}
function validateEmail(email){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email);
}   

submitBtnE1.addEventListener('click', (e)=>{
    e.preventDefault()
    const email = emailInput.value.trim();
    if(validateEmail(email)){
        formSuccess()
        userEmailE1.innerText = email
        emailInput.value= ""

        invalidEmailE1.classList.remove('active')
        emailInput.classList.remove('active')
    }
})

dismissMessageE1.addEventListener('click', ()=>{
    leftE1.style.display ='block';
    rightE1.style.display = 'block';
    wrapperE1.classList.remove('success')
    successFormE1.classList.remove('active');
})