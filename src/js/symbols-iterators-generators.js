export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('There is already such a character!');
    } else {
      this.members.add(character);
    }
  }

  addAll(...characters) {
    characters.forEach(character => {
      if (!this.members.has(character)) {
        this.members.add(character);
      }
    });
  }

  // iterators
  [Symbol.iterator]() {
    const allPersons = Array.from(this.members);
    let index = -1;
    return {
      next() {
        index++;

        return {
          value: allPersons[index],
          done: index >= allPersons.length,
        };
      },
    };
  }

  // generators
  *[Symbol.iterator]() {
    const allPersons = Array.from(this.members);

    for (let i = 0; i < allPersons.length; i++) {
      yield allPersons[i];
    }
  }
}
