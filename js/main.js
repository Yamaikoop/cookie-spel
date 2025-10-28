class Game {
    chickenCount = 100;
    chickenPerSecond = 1;
    click_power = 1;

    constructor() {
        this.update_ui();
    }

    update_ui() {
        document.getElementById("Counter").innerText = "Chicken Count: " + this.chickenCount;
        document.getElementById("PerSecond").innerText = "Chicken per second: " + this.chickenPerSecond;
    }

    chicken_click() {
        this.chickenCount = this.chickenCount + this.click_power;
        this.update_ui();
    }


    upgrade_click_power(){
        if (this.chickenCount >= 10){
            this.click_power++;
            this.chickenCount= this.chickenCount -10;
            this.update_ui();
        }

    }
    upgrade_click_power2() {
        if(this.chickenCount >= 50) {
            this.click_power = this.click_power + 5;
            this.chickenCount = this.chickenCount -50;
        this.update_ui() }

    }

    //stap 1: schrijf een methode die de click power verhoogt met 1 af.
    //stap 2: zorg ervoor dat je dat alleen mag doen als je meer dan 10 chicken hebt
    //stap 3: zorg ervoor ALS je genoeg chicken hebt dat je de chicken kan kopen in stap 2. Dat ook het 'geld' chickens weggaat
    //Stap 4: Zorg ervoor dat het ergens zichtbaar is hoeveel click power je hebt
    //Stap 5: zorg ervoor dat het ergens zichtbaar is hoeveel de volgende upgrade kost
    //Stap 6: zorg ervoor dat elke upgrade weer een stukje duurder wordt.

}

let game = new Game();

