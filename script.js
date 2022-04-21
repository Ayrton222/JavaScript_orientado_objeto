class ContaBancaria{
    constructor(agencia, numero, tipo){
        //this sempre se refere ao objeto (que no caso é ContaBancaria)
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }
//sempre q um valor for get e set colocamos _ para poder utilizar o valor no get e set
    get saldo(){
        return this._saldo;
    }

    set saldo(valor){
        this._saldo = valor;
    }

    sacar(valor){
        if(valor > this._saldo){
            return "Operação negada"
        }
        this._saldo = this._saldo - valor;

        return this._saldo
    }

    depositar(valor){
        this._saldo = this._saldo + valor;

        return this._saldo;
    }
}

//criando outra classe e mandando para a classe pai

class ContaCorrente extends ContaBancaria{
    constructor(agencia, numero, cartaoCredito){
        super(agencia, numero);
        this.tipo = 'corrente';
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito(){
        return this._cartaoCredito;
    }

    set cartaoCredito(valor){
        this._cartaoCredito = valor;
    }
}

//criando outra classe 

class ContaPoupanca extends ContaBancaria{
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'poupança';
    }

}

class ContaUniversitaria extends ContaBancaria{
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'Universitária';
    }

    sacar(valor) {
        if(valor > 500){
            return "Operação negada"
        }

        this._saldo = this._saldo - valor;
    }
}
