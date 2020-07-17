function tinyFriend (numbers){
    var lowest =numbers[0];
         for(var i=0; i <numbers.length; i++){
        var friendList = numbers[i];
        if (friendList.length <  lowest.length){
            lowest = friendList;
        }
    }
      return lowest;
}
