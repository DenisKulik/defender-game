export class Team {
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
    characters.forEach((character) => {
      if (!this.members.has(character)) {
        this.members.add(character);
      }
    });
  }

  toArray() {
    return Array.from(this.members);
  }
}

export class ErrorRepository {
  constructor() {
    this.errors = new Map();
  }

  translate(code) {
    if (!this.errors.has(code)) {
      return 'Unknown error';
    }

    return this.errors.get(code);
  }
}
