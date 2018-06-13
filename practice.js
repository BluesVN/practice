//求素数只要用这个数去分别除以 根号n之前的素数集合
var isPrime = function (n) {
  if (n === 1) {
    return false
  }
  var sqrt_n = Math.sqrt(n)
  for (var i = 2; i <= sqrt_n; i++) {
    if (n % i == 0) {
      return false
    }
  }
  return true
}

//返回导函数
var d = function (f) {
  return function (x) {
    var x1 = x - 0.0000001
    var x2 = x + 0.0000001
    var y1 = f(x1)
    var y2 = f(x2)
    var k = (y2 - y1) / (x2 - x1)
    return k
  }
}
var f = function (x) {
  return x * x
}
//返回导函数结束

//水仙花数
var isSXH = function (n) {
  var w = 0
  var m = n
  while (m >= 1) {
    //w代表这个数是几位数
    w++
    m /= 10;
  }
  m = n
  var digit
  var sum = 0
  while (m > 0) {
    digit = m % 10
    sum += Math.pow(digit, w)
    //digit的w次方
    m = (m - digit) / 10
  }
  if (sum === n) {
    return true
  }
  return false
}

//序列跨度
var range = function () {
  var n = +prompt('序列长度')
  var input
  var max = -Infinity
  var min = Infinity
  for (var i = 0; i < n; i++) {
    input = +prompt('序列中的一个')
    if (input > max) {
      max = input
    }
    if (input < min) {
      min = input
    }
  }
  console.log("序列跨度", max - min)
}

// 敲七
var isLucky7 = function (n) {
  //n不等于0
  if (n % 7 === 0) {
    return true
  }
  m = n
  var digit
  while (m > 0) {
    digit = m % 10
    if (digit == 7) {
      return true
    }
    m = (m - digit) / 10
  }
  return false
}


//斐波那契数列
var fibb30 = function () {
  var a = 0, b = 1;
  console.time('fibb')
  for (i = 0; i < 30; i++) {
    console.log(a)//打印a还是b，区别在于第一位是0还是1
    b = a + b
    a = b - a
  }
  console.timeEnd('fibb')
}

//四舍五入 复杂版
var round0 = function (n) {
  n2 = n % 1
  n1 = n - n2
  if (n2 >= 0.5) {
    return n1 + 1
  } else if (n2 > 0 && n2 < 0.5) {
    return n1
  } else {
    if (n2 * (-1) >= 0.5) {
      return 0 - (n * (-1) - n * (-1) % 1 + 1)
    } else {
      return 0 - (n * (-1) - n * (-1) % 1)
    }
  }
}


//取整(小数计算注意精度问题)
var toInt = function (n) {
  var m = n
  if (m >= 0) {
    while (m >= 1) {
      m--
    }
  } else {
    while (m <= -1) {
      m++
    }
  }
  return (n - m)
}
//向下取整 
var floor = function (n) {
  var m = n
  if (m >= 0) {
    while (m >= 1) {
      m--
    }
  } else {
    while (m <= 0) {
      m++
    }
  }
  return (n - m)
}
//向上取整
var ceil = function () {
  var ceil = function (n) {
    var m = n
    if (m >= 0) {
      while (m >= 0) {
        m--
      }
    } else {
      while (m <= -1) {
        m++
      }
    }
    return (n - m)
  }
}
//四舍五入,在数轴上什么数加上0.5，再向下取整都相当于四舍五入了
var round = function (n) {
  return floor(n + 0.5)
}


//最大公约数，辗转相除法，除此之外还有辗转相减。（a*b）/最大公约数=最小公倍数，这个是数学验证的。
var lcf = function (a, b) {
  var max = Math.max(a, b)
  var min = Math.min(a, b)
  var mod
  do {
    mod = max % min
    max = min
    min = mod
  } while (mod > 0) return max
}



//不用Math.sqrt求非负数平方跟，二分法，折半查找。除此之外还有牛顿法（切线交点更接近与值），https://zh.wikipedia.org/wiki/%E7%89%9B%E9%A1%BF%E6%B3%95
function sqrt(n) {
  var left = 0
  var right = n
  var mid
  var count = 0
  while (right - left > 0.0000001) {//精度
    count++
    mid = (left + right) / 2
    if (mid * mid == n) {
      return mid
    } else if (mid * mid < n) {
      left = mid
    } else {
      right = mid
    }
  }
  console.log("查找了" + count + "次")
  return (left + right) / 2
}


//完全数,因数之和相加等于本身（6=1+2+3），和优化素数一样，根号n左有一个因数，对应右边肯定有另一个，所以就不用循环n次了
function isCompleteNum(n) {
  var sum = 1 //一肯定是因数，先算上不用从零开始了
  var s = Math.sqrt(n)
  for (var i = 2; i < s; i++) {
    if (n % i == 0) {
      sum += i
      sum += n / i
    }
  }
  if (s % 1 === 0) {
    sum += s
  }
  if (sum === n) {
    return true
  }
  return false
}

//几次幂/次方  a的几次方等于b 取整(最接近的)
function mi(a, b) {
  var count = 0
  var m = a
  while (m <= b) {
    m *= a
    count++
  }
  return count
}

//power 的递归优化写法,2的100次方等于，2的50次方乘以2的50次方，少乘了很多次。
function power(x, n) {
  if (n === 0) {
    return 1
  }
  if (n === 1) {
    return x
  }
  var count = 0
  if (n % 2 === 0) {
    var h = power(x, n / 2)
    return h * h
  } else {
    var h = power(x, (n - 1) / 2)
    return h * h * x
  }
}



//寻找能够整除1到n之间所有数的数。isPrime是求素数 上面写好了。
function minDivider(n) {
  var res = 1
  for (let i = 2; i < n; i++) {
    if (isPrime(i)) {//如果i是素数，才需要加入到乘积队列里
      power = Math.floor(Math.log(n) / Math.log(i))   //把该素数的几次方加入到乘积队列呢？
      if (power < 2 && power > 0) {
        res *= i
      } else {
        res *= i ** power
      }
    }
  }
  return res
}

//阶乘和排列组合
function factorial(n) {
  var j = 1
  for (i = 1; i <= n; i++) {
    j *= i
  }
  return j
}
//阶乘带入排列 和组合的公式
function C(m, n) {
  return factorial(m) / factorial(n) / factorial(m - n)
}
function A(m, n) {
  return factorial(m) / factorial(m - n)
}



// 返回最大值
function max() {
  var len = arguments.length, result = -Infinity
  for (var i = 0; i < len; i++) {
    if (result < arguments[i]) {
      result = arguments[i]
    }
  }
  return result
}

// 返回最小值   input 1， 2， 3   output 1
function min() {
  var len = arguments.length, result = Infinity
  for (var i = 0; i < len; i++) {
    if (result > arguments[i]) {
      result = arguments[i]
    }
  }
  return result
}
//min  上下一样 只不过一个用了ES6 一个用arguments
function min2(...nums) {
  var min = Infinity
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] < min) {
      min = num[i]
    }
  }
  return min
}






//画图理解闭包
// function multipier(factor) { 
//   return function (number) { 
//     return function (zoomer) { 
//       return zoomer * number * factor
//     }
//   }
// }
// var a = multipier(2)

// var b = a(3)
// var c = a(4)

// var d = c(4)
// var e = b(5)


//查看fibb数列的第n项是多少，可能会爆站。递归方式还可以写前n项和,次方 ，阶乘，要确定第一项和通项公式。
function fibb(n) {
  if (n === 1) {
    return 1
  }
  if (n === 2) {
    return 1
  }
  return fibb(n - 1) + fibb(n - 2)
}
//缓存用过的fibb数组,因为递归找fibb数的时候 重复计算了好多次（前n项fibb和次）
var cache = [0, 1, 1]
function fibb(n) {
  if (n in cache) {
    return cache[n]
  }
  var r = fibb(n - 1) + fibb(n - 2)
  cache[n] = r
  return r
}
//上面可以用三元化简成一行



//阶乘另一种写法
function factorial2(n) {
  if (n === 1) {
    return 1
  } else {
    return n * factorial2(n - 1)
  }
}

//自然数列前n项和
function fnSum(n) {
  if (n === 1) {
    return 1
  } else {
    return n + fnSum(n - 1)
  }
}
//自然数列前n项和,另一种写法。
// function fnA(n) {
//   return n
// }
// function S(n) {
//   if (n === 1) {
//     return fnA(1)
//   } else {
//     return S(n - 1) + fnA(n)
//   }
// }


//看代码，求最后count是多少
// var x = 0
// var i = -8, j = 42
// var count = 0
// while (x < 10) {
//   for (i = x; i < 42; i++) {
//     do {
//       count++
//       j--
//     } while (j > 37)
//   }
//   x++
// }
// console.log(count)


//leetcode fizzbuzz
var fizzBuzz = function (n) {
  var res = []
  for (var i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      res.push('FizzBuzz')
    } else if (i % 5 === 0) {
      res.push('Buzz')
    } else if (i % 3 === 0) {
      res.push('Fizz')
    } else {
      res.push('' + i)
    }
  }
  return res
};

//非负整数，回文数字。12321
function isPalindrome(n) {
  var m = n
  var reverse = 0
  while (m > 0) {
    var digit = m % 10
    reverse = reverse * 10 + digit
    m = (m - digit) / 10
  }
  if (reverse === n) {
    return true
  }
  else {
    return false
  }
}

//输入年月，返回星期。只要天数算对，星期几就不会错。
function dayOneOfMonth(year, month) {
  //2017,11,算17年前有多少天，该年11月前有多少天。天数七天一循环，模7就是星期的规律。
  var days
  var years = year;//公元0年第一月第一天是星期天。
  days = years * 365
  days += parseInt(years / 4) - parseInt(years / 100) + parseInt(years / 400)
  var monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  for (var i = 0; i < month - 1; i++) {
    if (i + 1 === 2) {
      if (isLeapYear(year)) {
        days += 29
      } else {
        days += 28
      }
    } else {
      days += monthDays[i]
    }
  }
  return "星期" + (days % 7)
}
//当年是否是闰年
function isLeapYear(year) {
  if (year % 400 === 0) {
    return true
  }
  if (year % 100 === 0) {
    return false
  }
  if (year % 4 === 0) {
    return true
  }
  return false
}
//根据以上，可以做一下输入年份 用表格打印出本年日历



//数组相关方法  ，仿标准库
function indexOf(ary, value, start = 0) {
  for (var i = start; i < ary.length; i++) {
    if (ary[i] === value) {
      return i
    }
  }
  return -1
}

function lastIndexOf(ary, value, start = 0) {
  for (var i = start; i >= 0; i--) {
    if (ary[i] === value) {
      return i
    }
  }
  return -1
}

function slice(ary, start, end = ary.length) {
  //数组和字符串都有slice方法
  var res = []
  for (var i = start; i < end; i++) {
    res.push(ary[i])
  }
  return res
}

function concat(ary, ) {
  var res = []
  for (var i = 0; i < arguments.length; i++) {
    console.log(arguments[i].length)
    if (arguments[i].length >= 1) {//这里用长度来判断是否是数组可能不太保险，可以Array.isArray(),来判断是否是数组。
      for (aryc of arguments[i]) {
        res.push(aryc)
      }
    } else {
      res.push(arguments[i])
    }
  }
  return res
}


//跨台阶  一次只能跨一步或者两步
function findStep(target) {
  function find(start, history) {
    if (start > target) {
      return null
    }
    if (start === target) {
      console.log(history)
    }

    find(start + 1, history + '[↗一步]')
    find(start + 2, history + '[↗两步]')
  }
  return find(1, "1")
}

//加5乘3树
function findSolution(target) {
  function find(start, history) {
    if (start > target) {
      return null
    }
    if (start === target) {
      console.log(history)
    }
    find(start + 5, '(' + history + ') + 5')
    find(start * 3, '(' + history + ') * 3')
  }
  return find(1, "1")
}


//大整数相加 ，高精度加法，借用数组了。  此法太大丧失精度。
//add([2,2,2,2,2,2],[3,3,3,3,3,3])  返回[5, 5, 5, 5, 5, 5]
function add(a, b) {
  var x = ''
    , y = ''
    , c = 0
  for (var i = 0; i < a.length; i++) {
    x += a[i]
  }
  for (var i = 0; i < b.length; i++) {
    y += b[i]
  }
  c = (+x) + (+y)//这里字符串转number
  var m = c //c是两者相加之和
  var d = []
  while (m > 9) {
    d.unshift(m % 10)
    if (m % 10 > 0) {
      m = (m - (m % 10)) / 10    //这里把余位去掉
    } else if (m % 10 === 0) {
      m = m / 10
    }
  }
  d.unshift(m)
  return d
}
//另一种做法模拟演算，从个位一位位算，进位。此外还有高精度乘法等着你leetcode 43 Multiply Strings。python高精度运算
function plus(a, b) {
  var res = new Array(a.length > b.length ? a.length + 1 : b.length + 1) //先确定结果是个几位数
  var i = a.length - 1
  var j = b.length - 1
  var k = res.length - 1   //下标要比第几位小1，i j k是我们要用到的下标

  var s, r, carry = 0       //r余位，s两位相加的和，carry 进位/初次为0通常是1
  while (a[i] !== undefined || b[j] !== undefined) {
    s = (a[i] ? a[i] : 0) + (b[j] ? b[j] : 0) + carry
    r = s % 10
    carry = (s - r) / 10
    res[k] = r  //这里如果res的第[0]号没机会赋值，默认给空。
    i-- , j-- , k--        //下标统一向左移动
  }
  if (carry === 0) {
    res.shift()
  }
  return res
}
//注意上面那个add的方法，巧用了字符串特性。但是在运算超大的数（超出边缘值）的时候是不精确的/测试最长28位。






//【noi数组逆序存放】
//return a new array
function reverse(ary) {
  var res = []
  for (var i = 0; i < ary.length; i++) {
    res.unshift(ary[i])
  }
  return res
}
//就地反转  no return
function resverAryInPlace(ary) {
  var l = (ary.length / 2) | 0
  //按位或取整,没考虑语义
  for (var i = 0; i < l; i++) {
    var front = i
    var end = ary.length - i - 1
    var t = ary[front]
    ary[front] = ary[end]
    ary[end] = t
  }
}
// 递归函数 先进后出，做到输入n个数并倒序输出
//
//递归一定要有结束条件
//不是结束条件，分支要把问题往结束条件的方向递推
//编写递归函数的时候，把递归函数当成普通函数并且认为它已经正确实现
//想清楚递归函数的功能
function inputAndReverse(n) {
  if (n === 0) {
    return
  } else {
    var v = prompt('请输入')
    inputAndReverse(n - 1)
    console.log(v)
  }
}

//递归思路实现地上捡钱，哪条路线捡的多。
var moneys = [
  [4],
  [3, 1],
  [5, 6, 8],
  [1, 8, 2, 9],
  [4, 1, 7, 2, 9]
]
function maxMoney(ary, x, y) { //x y 代表上面第几行 第几个了
  if (x === ary.length - 1) {
    return ary[x][y]
  } else {
    return ary[x][y] + Math.max(maxMoney(ary, x + 1, y), maxMoney(ary, x + 1, y + 1))
  }
}

//递归方式判断奇偶,爆栈写法
function isEven(n) {
  if (n === 0) {
    return true
  }
  if (n === 1) {
    return false
  }
  return isEven(n - 2)
}

//递归实现模运算， a%b,只考虑正数。 10%3 =  (10-3) %3
function mod(a, b) {
  if (a < b) {
    return a
  } else {
    return mod(a - b, b)
  }
}


//noi校门外的树
function trees(l, parts) {
  var t = new Array(l + 1)
  t.fill(1)
  for (var part of parts) {
    var start = part[0]
    var end = part[1]
    for (var j = start; j <= end; j++) {
      t[j] = 0
    }
  }

  var res = 0
  for (var i = 0; i < t.length; i++) {
    if (t[i]) {
      res++
    }
  }
  return res
}

//石头剪刀布，a b谁赢的多？
function ztf(n, a, b) {//比n回合，a数组里面是a同学的组合规律一组。
  var aw = 0   //a赢次数
  var bw = 0
  var am       //a的所有出拳记录
  var bm
  for (var i = 0, j = 0, k = 0; k < n; i++ , j++ , k++) {
    am = a[i % a.length]
    bm = b[i % b.length]

    if (am === bm) {
      //本次打平
    } else if (am == 0) {
      if (bm == 2) { aw++ } else if (bm == 5) { bw++ }
    } else if (am == 2) {
      if (bm == 0) { bw++ } else if (bm == 5) { aw++ }
    } else if (am == 5) {
      if (bm == 0) { aw++ } else if (bm == 2) { bw++ }
    }
  }
  return aw > bw ? 'Awin' : 'Bwin'
}


//leetcode 771
var numJewelsInStones = function (J, S) {
  var aryJ = J.split('')
  var count = 0

  for (eachS of S) {
    for (let i = 0; i < aryJ.length; i++) {
      if (aryJ[i] === eachS) {
        count++
      }
    }
  }
  return count
};

//求一个数 的质因数分解
function factor(n) {
  res = []
  for (var i = 2; ; i++) {
    if (n % i === 0) {
      res.push(i)
      n = n / i
      i--
      if (n === 1) {
        return res
      }
    }
  }
}

//Counting Bits
function countingBits(n) {
  var res = new Array(n + 1)
  res[0] = 0
  if (n === 0) {
    return res
  }
  var next_two_power = 1
  var prev_two_power
  for (let i = 1; i < res.length; i++) {
    if (i == next_two_power) {
      res[i] = 1
      prev_two_power = next_two_power
      next_two_power = next_two_power * 2
    } else {
      res[i] = res[i - prev_two_power] + 1
    }
  }
  return res
}

//是否2的次方
function isPowerTwo(n) {
  return n > 0 && (n & (n - 1)) === 0
}
// 4的幂，首先要是2的幂，其次4的幂  按位与二进制基数位是1偶数位是0的数 等于零。因为四的幂，转换成二进制最左边基数位是1后面全是。 0b 0101010101010101010101010101010
function isPowerOfFour(n) {
  return n > 0 && ((n & (n - 1)) === 0) && ((n & 715827882) === 0)
}
//3的幂
var isPowerOfThree = function (n) {
  return n > 0 && 1162261467 % n == 0
};


//Minimum Moves to Equal Array Elements,加即是减。
function minMoves(nums) {
  var count = 0
  var min = Infinity
  for (let i = 0; i < nums.length; i++) {
    if (min > nums[i]) {
      min = nums[i]
    }
  }
  for (let i = 0; i < nums.length; i++) {
    count += nums[i] - min
  }
  return count
}
//Hamming Distance 汉明距离
function Hamming(x, y) {
  var z = (x ^ y).toString(2)
  var count = 0
  for (var i = 0; i < z.length; i++) {
    if (z[i] === '1') {
      count++
    }
  }
  return count
}
//不用字符串和循环
function Hamming(x, y) {
  var z = (x ^ y)
  var count = 0
  while (z > 0) {
    if (z % 2 === 0) {
      z = z / 2
    } else {
      z = (z - z % 2) / 2
      count++
    }
  }
  return count
}
//找没重复过的数， input [1,2,3,2,1]  output 3
function singleNumber(nums) {
  var res = nums[0]
  for (var i = 1; i < nums.length; i++) {
    res ^= nums[i]
  }
  return res
}
//原地0向后移动 
var moveZeroes = function (nums) {
  for (var i = 0, j = 0; j < nums.length; j++) {
    if (nums[j] !== 0) {
      nums[i] = nums[j]
      i++
    }
  }
  for (; i < nums.length; i++) {
    nums[i] = 0
  }
};
//35. Search Insert Position
var searchInsert = function (nums, target) {
  var left = 0
  var right = nums.length - 1
  var mid
  if (nums.length === 0 || target <= nums[0]) {
    return 0
  }
  if (target > nums[right]) {
    return nums.length
  }
  if (target === nums[right]) {
    return right
  }
  while (right - left > 1) {
    mid = ((left + right) / 2) | 0
    if (nums[mid] === target) {
      return mid
    } else if (nums[mid] < target) {
      left = mid
    } else {
      right = mid
    }
  }
  if (right - left === 1) {
    return right
  }
};


//two sum
function twoSum(nums, target) {
  var l = 0
  var r = nums.length - 1
  while (l < r) {
    if (nums[l] + nums[r] === target) {
      return [l, r]
    } else if (nums[l] + nums[r] > target) {
      r--
    } else {
      l++
    }
  }
}
//two sum 2
function twoSum2(ary, target) {
  var map = {}
  for (var i = 0; i < ary.length; i++) {
    var t2 = target - ary[i]
    if (t2 in map) {
      return [map[t2], i]
    } else {
      map[ary[i]] = i
    }
  }
}