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
       alert(this.balance);
    }

    debit(amount) {
        if (this._balance - amount >= 0) {
          this._balance -= amount;
        } else {
          alert('Insufficient funds');
        }
      }

    static createAccount(){
        const name = document.getElementById("name").value;
        const inicialDesposit = parseFloat(document.getElementById("deposit").value);
        const account = new BankAccount(name, inicialDesposit);
        this.accountInfoList.push(account);
        document.getElementById("account-list").value ='';
        this.accountInfoList.forEach((account) =>{
            document.getElementById('account-list').value += `Account name: ${account.name}\nBalance: ${account.balance}\n\n`;
        })
        this.updateAccountDropdown();
    }

    static updateAccountDropdown() {
        const dropdown = document.getElementById('list-account');
        dropdown.innerHTML = '';
        const option = document.createElement('option');
        option.value='Select Account';
        option.textContent = 'Select Account';
        dropdown.appendChild(option);
        this.accountInfoList.forEach((account) => {
          const option = document.createElement('option');
          option.value = account.balance;
          option.textContent = account.name;
          dropdown.appendChild(option);
        });
      }

      static operation_deposit() {
       
       // const amount_deposit = parseFloat(document.getElementById('amount').value);
        const optionAmount = parseFloat(document.getElementById('list-account').value);
        const optionElement = document.getElementById('list-account');
        const optionName = optionElement.options[optionElement.selectedIndex];
        const acc = new BankAccount(optionName, optionAmount);
        acc.deposit(optionAmount);
        
       // this.deposit(amount_deposit);

      }

     static debit(amount) {
        if (this._balance - amount >= 0) {
          this._balance -= amount;
        } else {
          alert('Insufficient funds');
        }
      }

}

document.getElementById('btn-account').addEventListener('click', () => {
    BankAccount.createAccount();
  });

  document.getElementById('btn-deposit').addEventListener('click', () => {
    BankAccount.operation_deposit();
  });

  document.getElementById('btn-debit').addEventListener('click', () => {
    BankAccount.debit();
  });