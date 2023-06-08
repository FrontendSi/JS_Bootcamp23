// 1st Function---------------------------------------

function number(a) {
    let result;
    if (a > 0) {
      result = 'positive';
    } else {
      result = 'NOT positive';
    }
    return result;
  }
  console.log(number(0));

  function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  console.log(factorial(5))

// 2nd Function---------------------------------------

function studentInfo(name, surname, faculty, studies) {
    return "Hi, my full name is " + name + " " +  surname + "." + "I study in " + faculty + " " + "and my spceaility is" + " " + studies
}
console.log(studentInfo("Stef", "Signal", "Economics", "Banking sience"))



// 3rd Function---------------------------------------

function myDog(name, bread, color, age) {
    const dog = {
        name:name,
        bread:bread,
        color:color,
        age:age
    }
    return "I have a wonderful dog named " + name + ". She is " + bread + ". The color of her fur is " + color + " and she is young dog- only " + age + " years old"
}

console.log( myDog("Vetra", "Catahoula", "marmur", 2))


