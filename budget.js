// Budget class
class Budget{
  constructor(budget, expenses, expensesamt){
    this.budget = budget;
    this.expenses = expenses;
    this.expensesamt = expensesamt;
  }
}

// UI class
class UI{

  showDetails(budget){
    const tbody = document.querySelector('#details');
    const trwo = document.createElement('tr');
    trwo.innerHTML=`
      <td>${budget.expenses}</td>
      <td>${budget.expensesamt}</td>
    `;
    tbody.appendChild(trwo);
  }

  showMessage(msg, color){
    //creating div element
    const div = document.createElement('div');
    div.className = 'alert';
    div.style.background =color;
    div.style.color='white';
    div.style.textAlign = 'center';
    div.appendChild(document.createTextNode(msg));

    //diplaying the div element position
    const container = document.querySelector('#content');
    const form  = document.querySelector('form');
    container.insertBefore(div, form);

    setTimeout(function(){
      document.querySelector('.alert').remove();
    },2000);
    document.querySelector('#table-content').style.display ='none';
  }

  calculateBud(budget){
    const tbody = document.querySelector('#calculate');
    const trwo = document.createElement('tr');
    trwo.innerHTML=`
      <td>${budget.budget}</td>
      <td>${budget.expensesamt}</td>
      <td># ${budget.budget- budget.expensesamt}</td>
    `;
    tbody.appendChild(trwo);
    document.querySelector('#table-content').style.display ='block';
    
  }
  
  //clearinput fiels
  clearInput(){
    document.querySelector('#budget').value='';
    document.querySelector('#expenses').value='';
    document.querySelector('#expensesamt').value='';
  }

}

// Form event listener
document.querySelector('form').addEventListener('submit', function(e){

  //UI values
  const UIbudget = document.querySelector('#budget').value,
        UIexpenses = document.querySelector('#expenses').value,
        UIexpensesamt = document.querySelector('#expensesamt').value;
  
  // instantiate budget
  const budget = new Budget(UIbudget, UIexpenses, UIexpensesamt);

  // instantiate UI
  const ui = new UI();

  if(UIbudget === ''|| UIexpenses === ''|| UIexpensesamt === ''){
   // show error message
   ui.showMessage('THIS FILEDS CANT BE EMPTY !','red');
  }else{

    //display details
    ui.showDetails(budget);
    // calculate budget
    ui.calculateBud(budget);
    // clear inputs
    ui.clearInput();
  }
  e.preventDefault();
});