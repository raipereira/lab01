class BankAccount{
    static accountInfoList = [];
    constructor(name, initialAmount){
        this._name = name;
        this._balance = initialAmount;
    }

    get name(){
        return this._name;
    }

    get balance(){
        return this._balance;
    }

    deposit(amount) {
        this._balance += amount;
    }

    debit(amount) {
        if (this._balance - amount >= 0) {
          this._balance -= amount;
        } else {
          alert('Insufficient funds');
        }
      }

      static renderAccounts(){
        document.getElementById("account-list").value ='';
        this.accountInfoList.forEach((account) =>{
            document.getElementById('account-list').value += `Account name: ${account.name}\nBalance: ${account.balance}\n\n`;
        })
      }

    static createAccount(){
        const name = document.getElementById("name").value;
        const inicialDesposit = parseFloat(document.getElementById("deposit").value);
        const account = new BankAccount(name, inicialDesposit);
        this.accountInfoList.push(account);
        this.renderAccounts()
        this.updateAccountDropdownDeposit();
        this.updateAccountDropdownDepit();
    }

    static updateAccountDropdownDeposit() {
        const dropdown = document.getElementById('list-account');
        dropdown.innerHTML = '';
        const option = document.createElement('option');
        option.value='';
        option.textContent = 'Select Account';
        dropdown.appendChild(option);
        this.accountInfoList.forEach((account) => {
          const option = document.createElement('option');
          option.value = account.balance;
          option.textContent = account.name;
          dropdown.appendChild(option);
        });
      }

      static updateAccountDropdownDepit() {
        const dropdown = document.getElementById('list-account-depit');
        dropdown.innerHTML = '';
        const option = document.createElement('option');
        option.value='';
        option.textContent = 'Select Account';
        dropdown.appendChild(option);
        this.accountInfoList.forEach((account) => {
          const option = document.createElement('option');
          option.value = account.balance;
          option.textContent = account.name;
          dropdown.appendChild(option);
        });
      }

      static operation_depit() {
        const optionAmount = parseFloat(document.getElementById('amount-depit').value);
        const optionElement = document.getElementById('list-account-depit');
        const optionName = optionElement.options[optionElement.selectedIndex];
        const acc = BankAccount.accountInfoList.filter((acc) => {
            if(acc._name == optionName.innerHTML){
                return acc;
            }
        });
        acc[0].debit(optionAmount);
        this.renderAccounts()
      }

      static operation_deposit() {
        const optionAmount = parseFloat(document.getElementById('amount').value);
        const optionElement = document.getElementById('list-account');
        const optionName = optionElement.options[optionElement.selectedIndex];
        const acc = BankAccount.accountInfoList.filter((acc) => {
            if(acc._name == optionName.innerHTML){
                return acc;
            }
        });
        acc[0].deposit(optionAmount);
        this.renderAccounts()
      }

     static debit(amount) {
        if (this._balance - amount >= 0) {
          this._balance -= amount;
        } else {
          alert('Insufficient funds');
        }
      }
}
function desabledBtn(elem){
  if(elem !== '') 
  document.getElementById('btn-sumit').disabled = false;
  document.getElementById('btn-submit-depit').disabled = false;
}

//document.getElementById('btn-sumit').disabled = true;

document.getElementById('btn-account').addEventListener('click', () => {
    BankAccount.createAccount();
  });

  document.getElementById('btn-sumit').addEventListener('click', () => {
    BankAccount.operation_deposit();
    toggleView("mainView")
    // Hide the div
  });

  document.getElementById('btn-submit-depit').addEventListener('click', () => {
    BankAccount.operation_depit();
    toggleView("mainView")
    // Hide the div
  });

  document.getElementById('btn-display').addEventListener('click', () => {
    toggleView("depositView")
    //BankAccount.operation_deposit();
    // Display the div
  });

  document.getElementById('btn-debit').addEventListener('click', () => {
    console.log("here");
    toggleView("depitView")
  });

  function toggleView(viewName){
    const mainView = document.querySelector("#mainView");
    const depositView = document.querySelector("#depositView");
    const depitView = document.querySelector("#depitView");
    switch(viewName){
        case "mainView":{
            mainView.classList.remove("hidden")
            depositView.classList.add("hidden")
            depitView.classList.add("hidden")
            break;
        }
        case "depositView":{
            mainView.classList.add("hidden")
            depitView.classList.add("hidden")
            depositView.classList.remove("hidden")
            break
        }
        case "depitView":{
            mainView.classList.add("hidden")
            depitView.classList.remove("hidden")
            depositView.classList.add("hidden")
            break;
        }
    }
  }