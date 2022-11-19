export default function Character(name, type) {
  if (typeof name !== 'string') {
    throw new Error('Name must be a string');
  } else {
    if (name.length < 2 || name.length > 10) {
      throw new Error(
        'Name must contain a minimum of 2 and a maximum of 10 characters'
      );
    }

    this.name = name;
  }

  const characters = {
    Bowman: {
      attack: 25,
      defense: 25,
    },
    Swordsman: {
      attack: 40,
      defense: 10,
    },
    Magician: {
      attack: 10,
      defense: 40,
    },
    Daemon: {
      attack: 10,
      defense: 40,
    },
    Undead: {
      attack: 25,
      defense: 25,
    },
    Zombie: {
      attack: 40,
      defense: 10,
    },
  };

  const typesOfCharacter = Object.keys(characters);

  if (!typesOfCharacter.includes(type)) {
    throw new Error('There is no such type');
  } else {
    this.health = 100;
    this.level = 1;
    this.type = type;
    this.attack = characters[type].attack;
    this.defense = characters[type].defense;
  }
}

Character.prototype.damage = function (points) {
  if (this.health >= 0) {
    this.health -= points * (1 - this.defense / 100);
  }
};
