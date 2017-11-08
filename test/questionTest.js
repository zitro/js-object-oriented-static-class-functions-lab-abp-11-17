const expect = chai.expect;

describe("Question", function() {
  it("is a Class", function(){
    expect(Question).to.be.a("function")
  })

  describe("_All", function(){
    it("defines a property on the class for _All", function(){
      expect(Question._All).to.not.be.undefined;
    })
    it("initialize _All to be an empty Array", function(){
      expect(Question._All).to.be.an('array').that.is.empty
    })
  })

  describe(".All()", function(){
    it("returns the array within _All", function(){
      Question._All = [1]
      expect(Question.All()).to.eql([1])
    })
  })

  describe("save()", function(){
    it("adds the instance into the _All property", function(){
      Question._All = [];

      const question = new Question("What's your favorite food?")
      question.save()

      expect(Question.All()).to.include(question)
    })
  })

  describe("constructor", function(){
    it('accepts the questions content', function(){
      const question = new Question("What's your favorite food?")
      expect(question.content).to.equal("What's your favorite food?")
    })
    it("saves the question into _All", function(){
      Question._All = [];

      const question = new Question("What's your favorite food?")
      expect(Question.All()).to.include(question)
    })
  })

  describe(".Find()", function(){
    it("finds a question by ID", function(){
      Question._All = [];
      
      const question1 = new Question("What's your favorite food?")
      const question2 = new Question("What city were you born in?")
      const question3 = new Question("What's your favorite TV Show")

      expect(Question.Find(2)).to.equal(question2)       
    })
  })
})
