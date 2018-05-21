//求素数只要用这个数去分别除以 根号n之前的素数集合
var isPrime = function (n) {
  if (n === 1) {
    return false
  }
  var m = Math.sqrt(n)
  for (var i = 2; i < m; i++) {
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



//不用Math.sqrt求非负数平方跟，二分法，折半查找。除此之外还有牛顿法（切线交点更接近与值）
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