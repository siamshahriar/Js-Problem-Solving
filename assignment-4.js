//1

function radianToDegree(radian) {
  if (typeof radian === "number") {
    let degree = radian * (180 / 3.1416);
    return degree.toFixed(2);
  } else {
    return "Please enter a valid Number!!";
  }
}

// console.log(radianToDegree(10));

//2.

function isJavaScriptFile(para) {
  if (typeof para === "string") {
    if (para.endsWith(".js")) {
      return true;
    } else {
      return false;
    }
  } else {
    return "Please enter a valid String!!";
  }
}

// console.log(isJavaScriptFile('app.js'));

//3

function oilPrice(diesel, petrol, octane) {
  if (
    typeof diesel === "number" &&
    typeof petrol === "number" &&
    typeof octane === "number"
  ) {
    let dieselPricePL = 114,
      petrolPricePL = 130,
      octanePricePL = 135;

    return (
      diesel * dieselPricePL + petrol * petrolPricePL + octane * octanePricePL
    );
  } else {
    return "Please enter the three numbers which all are Valid!!";
  }
}

// console.log(oilPrice(0,2,3));


//4


function publicBusFare(number) {
    if(typeof number === 'number'){
      if( number > 50){
        let number2 = number % 50 ;
        if(number2 <= 11){
            return number2 * 250;
        }
        else{
            let number3 = number2 % 11 ;
            return number3 * 250;
        }
    }
    else {
        return 0;
    }
    }
    else{
      return "Please enter a valid number!!"
    }
    
    };


// console.log(publicBusFare(75));

//5

function isBestFriend(friendOne, friendTwo) {
  if (typeof friendOne === 'object' && typeof friendTwo === 'object' && Array.isArray(friendOne) === false && Array.isArray(friendTwo) === false) {
    if (
        friendOne.name.toLowerCase() == friendTwo.friend.toLowerCase() &&
        friendOne.friend.toLowerCase() == friendTwo.name.toLowerCase()
      ) {
        return true;
      } else {
        return false;
      }
  }
  else{
    return "Please enter two valid objects containing name and friend !!";
  }
}

one = { name: "Abul", friend: "Kabul" };
two = { name: "kabul", friend: "abul" };

// console.log(isBestFriend(one, two));
