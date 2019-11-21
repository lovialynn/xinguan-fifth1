function Father(bloodType) {
  this.bloodType = bloodType;
}
Father.prototype.bloodType = "A";
Father.prototype.wife = 'miss';
function Son() {
  Father.call(this, Father.prototype.bloodType);
  this.name = "Jack";
  this.age = "19"; 
  this.phone = 15923359698;
  this.mother = Father.prototype.wife;
}


function Doughter() {
  Father.call(this, Father.prototype.bloodType);
  this.name = "Lovia";
  this.age = "18";
  this.phone = 15923359698
  this.mother = Father.prototype.wife;
}

let son1 = new Son();
Object.defineProperty(son1,'name',{writable: false
})
Object.defineProperty(son1,'bloodType',{writable: false
})
son1.name= 'mike'
let doughter1 = new Doughter();
console.log(doughter1);
console.log(son1);
console.log(son1.name);
console.log(Father.prototype.wife);
console.log(Son.prototype.constructor === Son);

//作业2
let int = document.getElementsByClassName("int")[0];
let bnt = document.getElementsByClassName("bnt")[0];
bnt.onclick = function () {
  var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
  if (!myreg.test(int.value)) {
    return alert("格式有错误");
  } else {
    return alert('提交成功');
  }
}

//作业3
window.onload = function () {
  let int2 = document.getElementsByClassName("int2")[0];
  int2.onblur = function () {
    var myreg = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[^]{8,}$/
    if (!myreg.test(int2.value)) {
      alert('错误')
    }
    let int3 = document.getElementsByClassName("int3")[0];
    int3.onblur = function () {
      if (int2.value != int3.value) {
        alert('两次输入不同')
      }

    }
  }
}