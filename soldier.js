const soldier = {
    soldierName: 'Price',
    health: 10,
    weapon: {
       gun: 'Ak-47',
       cartridges: 30, 
    },
    supplies: 3,
   
    getStatus (){
        return `Имя: ${this.soldierName}, Здоровье: ${this.health}, Оружие: ${this.weapon.gun}, Кол-во патронов: ${this.weapon.cartridges}, Боеприпасы: ${this.supplies}`
    },

    shoot () {
        this.weapon.cartridges --
        console.log(`Бах-Бах ${this.weapon.cartridges}/30`)
        if(this.weapon.cartridges === 0) {
            return `Обойма пуста. Перезарядитесь! ${this.weapon.cartridges}/30`
        }
    },
    recharge () {
        this.weapon.cartridges = 30;
        this.supplies --;
        console.log('Перезарядка...')
        if (this.supplies === 0) {
            console.log('Не осталось припасов')
        }
    },
    toHart() {
        this.health --;
        if(this.health === 0){
            console.log('Ты умер, СЛАБАК!')
        }
    },
    
};
console.log(soldier.getStatus())