const pirat = {
  team: 4,
  gold: 20,
  map: 0,
  seizureOfTheShip: {
    food: 0,
    weapon: 0,
  },
  water: 0,
  pricePerHead: 0,

  capturedShips() {
    if (this.pricePerHead >= 30) {
      return console.log("Тебя поймал, и убил, Охотник за головами");
    } else if (this.team < 7) {
      console.log(
        `Сперва набери команду, у тебя сейчас только ${this.team} человека в команде`
      );
    } else {
      this.gold += 20;
      this.team -= 2;
      this.water += 2;
      this.seizureOfTheShip.food += 2;
      this.seizureOfTheShip.weapon++;
      this.pricePerHead += 15;
      console.log(
        `Ты успешно захватил судно, теперь у тебя : water ${this.water}; food ${this.seizureOfTheShip.food}; gold ${this.gold}; weapon ${this.seizureOfTheShip.weapon} :`
      );
    }
  },

  market() {
    if (this.pricePerHead >= 30) {
      return console.log("Тебя поймал, и убил, Охотник за головами");
    } else if (this.seizureOfTheShip.weapon <= 0) {
      console.log("У тебя ничего нет, больше меня не тревожь");
    } else {
      this.seizureOfTheShip.weapon--;
      this.gold += 5;
    }
  },

  treasureMapSearch() {
    if (this.pricePerHead > 30) {
      return console.log("Тебя поймал, и убил Охотник за головами");
    } else if (this.seizureOfTheShip.food < 2 && this.water < 2) {
      console.log(
        "У тебя нет еды и воды что-бы искать карту, ты умрешь от истощения"
      );
    } else {
      this.seizureOfTheShip.food -= 2;
      this.water -= 2;
      this.map++;
      console.log(
        `Ты отправился в путеществие и нашел карту, и теперь у тебя ${this.map} карта`
      );
    }
  },

  buyMan() {
    if (this.pricePerHead > 30) {
      return console.log("Тебя поймал, и убил Охотник за головами");
    } else if (this.gold < 10) {
      return console.log("У тебя нет денег бомж");
    } else {
      this.team += 2;
      this.gold -= 10;
      console.log(
        `Ты набрал себе людей в команду, теперь в твоей команде ${this.team} человек`
      );
    }
  },
  steal() {
    if (this.pricePerHead > 30) {
      return console.log("Тебя поймал, и убил Охотник за головами");
    } else {
      this.pricePerHead += 7;
      this.gold += 5;
      console.log(`Ты украл золото и теперь у тебя ${this.gold}`);
    }
  },

  treasure() {
    if (this.pricePerHead > 30) {
      return console.log("Тебя поймал, и убил Охотник за головами");
    } else if (this.map <= 0) {
      console.log("У тебя нет карты сокровишь");
    } else {
      this.gold += 10000;
      this.map--;
      this.pricePerHead = 0;
      console.log(
        `Поздравляю ты нашел клад и у тебя сейчас : ${this.gold} золота Батанчик`
      );
    }
  },
};
pirat.steal();
pirat.steal();
pirat.buyMan();
pirat.buyMan();
pirat.capturedShips();
pirat.treasureMapSearch();
pirat.treasure();
