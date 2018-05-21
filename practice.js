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