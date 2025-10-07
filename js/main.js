class Game{
    chickenCount = 1;
    chickenPerSecond = 1;
    click_power = 1;

    constructor() {
        this.update_ui();
    }

    update_ui(){
        document.getElementById("cookieCounter").innerText = "Chicken Count: " + this.chickenCount;
        document.getElementById("cookiePerSecond").innerText = "Chicken per second: " + this.chickenPerSecond;
    }

    chicken_click(){
        this.chickenCount = this.chickenCount + this.click_power;
        this.update_ui();
    }

    //stap 1: schrijf een methode die de click power verhoogt met 1
    //stap 2: zorg ervoor dat je dat alleen mag doen als je meer dan 10 chicken hebt
    //stap 3: zorg ervoor ALS je genoeg chicken hebt dat je de chicken kan kopen in stap 2. Dat ook het 'geld' chickens weggaat
    //Stap 4: Zorg ervoor dat het ergens zichtbaar is hoeveel click power je hebt
    //Stap 5: zorg ervoor dat het ergens zichtbaar is hoeveel de volgende upgrade kost
    //Stap 6: zorg ervoor dat elke upgrade weer een stukje duurder wordt.

}

let game = new Game();

