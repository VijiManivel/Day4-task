var obj1 = {
    name: 'Person 1',
    age: 5
  };
      
var obj2 = {
    age:5,
    name: 'person1'
    
  };
      
  JSON.stringify(obj1) === JSON.stringify(obj2)
  // false
      
 console.log(_.isEqual(obj1, obj2));
  // true