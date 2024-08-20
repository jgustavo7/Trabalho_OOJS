class VeiculoPadrao{
    constructor(){
        if(this.constructor===VeiculoPadrao){
            throw new TypeError("Esta classe não pode ser instanciada")
        }
        this.rodas=4
        this.portas=4
        this.ligado=false
    }
}

class Veiculo extends VeiculoPadrao{
    constructor(tipo,estagioTurbo){
        super()
        this.turbo=new Turbo(estagioTurbo)
        if(tipo==1){
            this.velocidadeMax=150
            this.nome="normal"
        }else if(tipo==2){
            this.velocidadeMax=200
            this.nome="sport"
        }else if(tipo==3){
            this.velocidadeMax=250
            this.nome="van"
        }
        this.velocidadeMax+=this.turbo.pot
    }
    info(){
        console.log(this.nome)
        console.log(this.velocidadeMax)
        console.log(this.turbo)
        console.log(this.rodas)
        console.log(this.portas)
        console.log(this.ligado)
    }
}

class Turbo{
    constructor(e){
        if(e==0){
            this.pot=0
        }else if(e==1){
            this.pot=50
        }else if(e==2){
            this.pot=75
        }else if(e==3){
            this.pot=100
        }
    }
}

class VeiculoEspecial extends Veiculo{
    constructor(estagioTurbo){
        super(4,estagioTurbo)
        this.tipoInfo=1
        this.velocidadeMax=300+this.turbo.pot
        this.nome="Veiculo especial"
    }
    info(){
        if(this.tipoInfo==1){
            super.info()
        }else{
            console.log('Nome...:${this.nome}')
            console.log('Velocidade.Max:${this.velocidadeMax}')
            console.log('Turbo...:${this.turbo.pot}')
            console.log("-------------")
        }
    }
}

const c1=new Veiculo(1,0)
const c2=new Veiculo(1,1)
const c3=new VeiculoEspecial(3)
// const c4=new VeiculoPadrao()

c1.info()
c2.info()
c3.info()