class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        switch (this.tipo) {
            case 'mago':
                ataque = 'usou magia';
                break;
            case 'guerreiro':
                ataque = 'usou espada';
                break;
            case 'monge':
                ataque = 'usou artes marciais';
                break;
            case 'ninja':
                ataque = 'usou shuriken';
                break;
            default:
                ataque = 'usou um ataque genérico';
        }

        console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
    }
}


const heroi1 = new Heroi('Nican', 30, 'guerreiro');
heroi1.atacar();

const heroi2 = new Heroi('Mestre', 150, 'mago');
heroi2.atacar();

const heroi3 = new Heroi('Lee', 35, 'monge');
heroi3.atacar();

const heroi4 = new Heroi('Chan', 25, 'ninja');
heroi4.atacar();