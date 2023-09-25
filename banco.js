class Banco:
    def __init__(self, conta, saldo, tipo_conta, agencia):
        self.conta = conta 
        self.saldo = saldo
        self.tipo_conta = tipo_conta
        self.agencia = agencia 

    def buscar_saldo(self):
        return self.saldo 

    def deposito(self, valor):
        self.saldo += valor 

    def saque(self, valor):
        if valor <= self.saldo: 
            self.saldo -= valor 
        else:
            print("Saldo insuficiente")

    def numero_conta(self):
        return self.conta