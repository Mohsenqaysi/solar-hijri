var jalaali = require('jalaali-js')
var moment = require('moment-hijri')

m = moment('1411/2/27', 'iYYYY/iM/iD')
 
var jh = jalaali.toJalaali(Number(m.format('YYYY')), Number(m.format('M')), Number(m.format('D')))
var ji = jalaali.toJalaali(1990,9,16)


console.log(jh)
console.log(ji)
