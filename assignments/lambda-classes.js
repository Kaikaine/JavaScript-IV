// CODE here for your Lambda Classes
class Person{
    constructor(base) {
        this.name = base.name;
        this.age = base.age;
        this.location = base.location;
        this.gender = base.gender;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    };
}

class Instructor extends Person{
    constructor(attr) {
        super(attr);
        this.specialty = attr.specialty;
        this.favLanguage = attr.favLanguage;
        this.catchPhrase = attr.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}.`;
    }
    grade(student, subject){
        return `${student.name} receives a perfect score on ${subject}.`;
    };
    points(){
        
    }
}

class Student extends Person{
    constructor(attrS) {
        super(attrS);
        this.previousBackground = attrS.previousBackground;
        this.className = attrS.className;
        this.favSubjects = attrS.favSubjects;
        this.grade = Math.floor(Math.random()*100)
    }
    listsSubjects(arr) {
        for(let i = 0; i<arr.length; i++) {
            console.log(arr[i]);
        }
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}.`;
    };
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}.`
    }
}

class ProjectManager extends Instructor {
    constructor(pm) {
        super(pm);
        this.gradClassName = pm.gradClassName;
        this.favInstructor = pm.favInstructor;
    }
    standup(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!`;
    };
    debugCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    };
}

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

  console.log(fred.name)
  console.log(fred.gender)
  console.log(fred.demo('math'))
  

  const kled = new Student({
      name: "Kled",
      location: 'Noxus',
      age: 350,
      gender: 'yes',
      previousBackground: "War general person thing",
      className: 'CS1991',
      favSubjects: ['Skaarl', 'HTML', 'CSS', 'Insults']
  })

  console.log(fred.grade(kled, 'war'))
  console.log(kled.listsSubjects(kled.favSubjects))
  console.log(kled.PRAssignment('war'))
  console.log(kled.sprintChallenge('insults'))

  const zed = new ProjectManager({
      name: 'Zed',
      location: 'Ionia',
      age: 25,
      gender: 'm',
      gradClassName: 'CS54660111',
      favInstructor: 'Shen'
  })

  console.log(zed.standup('CS11'))
  console.log(zed.debugCode(kled, 'food'))