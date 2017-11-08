'use strict';

class Question {
  static All() {
    return this._All
  }

  static Find(id) {
    return this.All()[id-1]
  }

  constructor(content) {
    this.content = content;
    this.save()
  }

  save() {
    this.constructor._All.push(this)
  }
}

Question._All = []

module.exports = Question;
