import Character from './classes';

export default class Mythical extends Character {
  constructor(name) {
    super(name);
  }

  set stoned(flag) {
    this._stoned = flag;
  }

  get stoned() {
    return this._stoned;
  }

  set attack(value) {
    this._attack = value;
  }

  get attack() {
    if (!this.distance) {
      throw new Error('The distance is not specified!');
    }

    if (this.distance < 0 || this.distance > 5) {
      return 0;
    }

    let calculateDamage =
      this._attack - (this._attack / 10) * (this.distance - 1);

    if (this._stoned) {
      calculateDamage -= Math.log2(this.distance) * 5;
    }

    return Math.floor(calculateDamage);
  }
}

export class Daemon extends Mythical {
  constructor(name) {
    super(name);
    this.type = 'Daemon';
    this.attack = 10;
    this.defence = 40;
  }
}

export class Magician extends Mythical {
  constructor(name) {
    super(name);
    this.type = 'Magician';
    this.attack = 10;
    this.defence = 40;
  }
}
