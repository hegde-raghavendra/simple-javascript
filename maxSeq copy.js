
const user0 = ["/start", "/green", "/blue", "/pink", "/register", "/orange", "/one/two"];
const user1 = ["/start", "/pink", "/register", "/orange", "/red", "a"];
const user2 = ["a", "/one", "/two"];
const user3 = ["/pink", "/orange", "/yellow", "/plum", "/blue", "/tan", "/red", "/amber", "/HotRodPink", "/CornflowerBlue", "/LightGoldenRodYellow", "/BritishRacingGreen"];
const user4 = ["/pink", "/orange", "/amber", "/BritishRacingGreen", "/plum", "/blue", "/tan", "/red", "/lavender", "/HotRodPink", "/CornflowerBlue", "/LightGoldenRodYellow"];
const user5 = ["a"];
const user6 = ["/pink","/orange","/six","/plum","/seven","/tan","/red", "/amber"];

function longestContSeqUrls(user0, user1) {
  
  let left = 0;
  let right = 0;
  let maxSeq = 0;
  let tempMax = 0;
  let output1 = [];
  let output2 = [];
  let maxLeftIndex = 0;
  let maxRightIndex = 0;
  let index = 0;
  let leftIncremented = false;
  let rightIncremented = false;

  
  while(left < user0.length & right < user1.length) {
    console.log(left + ' ' + right + ' ' + user0[left] + ' ' +  user1[right] + ' ' + maxLeftIndex + ' ' + maxRightIndex);
    
    if (user0[left] === user1[right]) {
        leftIncremented = true;
        rightIncremented = true;
        maxRightIndex = left;
        left++;
        right++;
    } else {
        
        if (leftIncremented) {
            right++;
            rightIncremented=true;
            leftIncremented=false;
            maxLeftIndex = left;
        }
        if (rightIncremented) {
            left++;
            leftIncremented=true;
            rightIncremented=false;
        }
    }
  }
  console.log(left + ' ' + right + ' '  + maxLeftIndex + ' ' + maxRightIndex);

  for(let i=maxLeftIndex; i<=maxRightIndex; i++) {
    output1.push(user0[i]);
  }
  console.log(output1);

  /*

  tempMax = 0;
  maxSeq = 0;
  left = 0;
  right = 0;
  maxLeftIndex = 0;
  maxRightIndex = 0;
  

  while(left < user0.length & right < user1.length) {
    console.log(left + ' ' + right + ' ' + user0[left] + ' ' +  user1[right] + ' ' + maxLeftIndex + ' ' + maxRightIndex);
    
    if (user0[left] === user1[right]) {
        maxRightIndex = right;
       tempMax++;
       if(tempMax >= maxSeq) {
        maxSeq = tempMax;
       }

      left++;
      right++
    } else {
        maxLeftIndex = right;
      tempMax = 0;
      right++;
    }
    
  }
  console.log(left + ' ' + right + ' ' + user0[left] + ' ' +  user1[right] + ' ' + maxLeftIndex + ' ' + maxRightIndex);

  for(let i=maxLeftIndex; i<=maxRightIndex; i++) {
    output2.push(user0[i]);
  }


  console.log(output1.length);
  console.log(output2.length);

  //if(maxLeftIndex === 0 && maxRightIndex === 0) return [];

  if (output1.length > output2.length) return output1;

  return output2;
  */

  
}

console.log(longestContSeqUrls(user0,user1));
