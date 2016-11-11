const person = ['andy', 26]
const person2 = ['jen', 29]

function greet(name, age) {
  console.log('Hi, ' + name + '! You are ' + age);
}

greet(...person)
greet(...person2)

const names = ['andy', 'jen']
const final = [
  'ro', ...names
]

final.forEach(name => {
  console.log('Hi,', name);
})
