export default class UI{
    static LoginInput = 'input-login-email';
    static PassInput = 'input-login-pass';
    static CheckButton = 'input-login-check';
    static CheckButton2 = 'input-login-check-2';
    static ErrorInfo = 'info-error';
    static myDiv1 = 'my-div-1';
    static myDiv2 = 'my-div-2';
    static ErrorInfo2 = 'info-error-2';

    static generateScreen = () => {
        const docElementDiv1 = document.createElement('div');
        docElementDiv1.classList.add(this.myDiv1);
        
        const docElementLoginA = document.createElement('a');
        docElementLoginA.classList.add('a-'+this.LoginInput);
        docElementLoginA.id = 'a-'+this.LoginInput;
        docElementLoginA.text = 'Login email';
        
        const docElementLogin = document.createElement('input');
        docElementLogin.classList.add(this.LoginInput);
        docElementLogin.id = this.LoginInput;
        docElementLogin.value = 'aaa.bbb@gmail.com';
        
        const docElementPassA = document.createElement('a');
        docElementPassA.classList.add('a-'+this.LoginInput);
        docElementPassA.id = 'a-'+this.LoginInput;
        docElementPassA.text = 'Password';
        
        const docElementPass = document.createElement('input');
        docElementPass.classList.add(this.PassInput);
        docElementPass.id = this.PassInput;
        docElementPass.value = 'QazWsx_!123';
        docElementPass.type='password';
        
        const docElementCheck = document.createElement('button');
        docElementCheck.classList.add(this.CheckButton);
        docElementCheck.id = this.CheckButton;
        docElementCheck.innerHTML = 'Check';
        
        const docElementError = document.createElement('div');
        docElementError.classList.add(this.ErrorInfo);
        docElementError.id = this.ErrorInfo;
        
        const docElementLine = document.createElement('br');    

        docElementDiv1.appendChild(docElementLoginA);
        docElementDiv1.appendChild(docElementLogin);
        docElementDiv1.appendChild(docElementPassA);
        docElementDiv1.appendChild(docElementPass);
        docElementDiv1.appendChild(docElementLine);
        docElementDiv1.appendChild(docElementCheck);
        docElementDiv1.appendChild(docElementError);
        document.body.appendChild(docElementDiv1);

        const docElementDiv2 = document.createElement('div');
        docElementDiv2.classList.add(this.myDiv2);
        docElementDiv2.id = this.myDiv2;

        const docElementCheck2 = document.createElement('button');
        docElementCheck2.classList.add(this.CheckButton2);
        docElementCheck2.id = this.CheckButton2;
        docElementCheck2.innerHTML = 'Check';

        const docElementError2 = document.createElement('div');
        docElementError2.classList.add(this.ErrorInfo2);
        docElementError2.id = this.ErrorInfo2;

        docElementDiv2.appendChild(docElementCheck2);
        docElementDiv2.appendChild(docElementError2);

        document.body.appendChild(docElementDiv2);
    }

    static setReactonToCheckButton(objname, callback){
        const docElement = document.getElementById(objname);
        docElement.addEventListener('click', callback);
    }

    static get loginEmail(){
        return document.getElementById(this.LoginInput).value;
    }

    static get password(){
        return document.getElementById(this.PassInput).value;
    }

    static setErrorLog1(message){
        const docElement = document.getElementById(this.ErrorInfo);
        docElement.innerHTML = message;
    }
    
    static setErrorLog2(message){
        const docElement = document.getElementById(this.ErrorInfo2);
        if (message.result){
            docElement.innerHTML += `Issue array ${message.obj}<br>Result = ${message.newObj}<br>`;
        }else{
            docElement.innerHTML += `Issue array ${message.obj}<br>Error: ${message.errorMessage} in ${message.index}<br>`;
        }
        
    }

}