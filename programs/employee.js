let employee=[

		{eid:100,name:"ajay",desig:"devop",join:1981,resign:2003},
		{eid:101,name:"vijay",desig:"devop",join:1992,resign:2008},
		{eid:102,name:"bijoy",desig:"ba",join:1999,resign:2007},
		{eid:103,name:"jhon",desig:"ba",join:1989,resign:2010},
		{eid:104,name:"danie",desig:"qa",join:2009,resign:2014},
		{eid:105,name:"lari",desig:"qa",join:1987,resign:2010},
		]

var bk=employee.filter(obj=>obj.desig=="devop")
     console.log("employee who works in ",bk)

var bk1=employee.map(obj=>[obj.desig,obj.name])
//var bk5=employee.map(obj=>obj.name)
      console.log("employee name and desig",bk1)

var bk2=employee.filter(obj=>obj.join>1980 & obj.join<1990)
      console.log("employee between 80's",bk2)

var bk3=employee.filter(obj=>obj.resign - obj.join>9)
      console.log("employee greater than ",bk3)

var bk4=employee.sort((obj1,obj2)=>obj1.join-obj2.join)
     console.log("sorted",bk4)
//var bk=ar.filter(obj=>obj.price>250)

//for(book of bk){
// console.log(book.name);