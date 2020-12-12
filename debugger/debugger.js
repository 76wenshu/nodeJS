class Deomo{
    static getFoo(){
        return "Foo"
    }
    static getBoo(){
        return "Boo"
    }
    static getCoo(){
        return "Voo"
    }
}

const info = Deomo.getFoo() + Deomo.getBoo() + Deomo.getCoo()

console.log(info)