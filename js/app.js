
class Building {
    constructor(name, baseCost, cps) {
        this.name = name;
        this.baseCost = baseCost;
        this.cps = cps;
        this.count = 0;
    }

    getCost() {
        return Math.floor(this.baseCost * Math.pow(1.15, this.count));
    }
}


class Game {
    constructor() {
        this.cookies = 0;
        this.cookiesPerSecond = 0;
        this.buildings = [
            new Building("Popcorn Chicken Clicker 0.5-cps ", 15, 0.5),
            new Building("Crispy Tender Clicker 1-cps", 50, 1),
            new Building("Hotwing Clicker 2-cps", 100, 2),
            new Building("Original Piece Clicker 5-cps", 500, 5)
        ];

        this.cookieButton = document.getElementById("cookieButton");
        this.cookieCounter = document.getElementById("cookieCounter");
        this.cookiePerSecondDisplay = document.getElementById("cookiePerSecond");
        this.shopItems = document.getElementById("shopItems");
        this.inventoryList = document.getElementById("inventoryList");

        this.init();
    }

    init() {
        // Klik op cookie
        this.cookieButton.addEventListener("click", () => {
            this.cookies++;
            this.updateDisplay();
        });

        // Winkel
        this.renderShop();

        // Start game loop
        setInterval(() => this.loop(), 1000);
    }

    renderShop() {
        this.shopItems.innerHTML = "";

        this.buildings.forEach((b, i) => {
            const item = document.createElement("div");
            item.className = "shop-item";
            item.innerHTML = `
        <span>${b.name} (x${b.count})</span>
        <span>${b.getCost()} 🍗</span>
      `;
            item.addEventListener("click", () => this.buyBuilding(i));
            this.shopItems.appendChild(item);
        });
    }

    buyBuilding(index) {
        const b = this.buildings[index];
        const cost = b.getCost();

        if (this.cookies >= cost) {
            this.cookies -= cost;
            b.count++;
            this.updateCPS();
            this.updateDisplay();
            this.renderShop();
            this.renderInventory();
        }
    }

    updateCPS() {
        this.cookiesPerSecond = this.buildings.reduce(
            (sum, b) => sum + b.cps * b.count,
            0
        );
    }

    updateDisplay() {
        this.cookieCounter.textContent = `${Math.floor(this.cookies)} koekjes`;
        this.cookiePerSecondDisplay.textContent = `${this.cookiesPerSecond.toFixed(1)} per seconde`;
    }

    renderInventory() {
        this.inventoryList.innerHTML = "";
        this.buildings.forEach(b => {
            if (b.count > 0) {
                const li = document.createElement("li");
                li.textContent = `${b.name}: ${b.count} gekocht`;
                this.inventoryList.appendChild(li);
            }
        });
    }

    loop() {
        this.cookies += this.cookiesPerSecond;
        this.updateDisplay();
    }
}


window.onload = () => {
    new Game();
};