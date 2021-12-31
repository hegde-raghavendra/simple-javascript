
const user0 = ["/start", "/green", "/blue", "/pink", "/register", "/orange", "/one/two"];
const user1 = ["/start", "/pink", "/register", "/orange", "/red", "a"];
const user2 = ["a", "/one", "/two"];
const user3 = ["/pink", "/orange", "/yellow", "/plum", "/blue", "/tan", "/red", "/amber", "/HotRodPink", "/CornflowerBlue", "/LightGoldenRodYellow", "/BritishRacingGreen"];
const user4 = ["/pink", "/orange", "/amber", "/BritishRacingGreen", "/plum", "/blue", "/tan", "/red", "/lavender", "/HotRodPink", "/CornflowerBlue", "/LightGoldenRodYellow"];
const user5 = ["a"];
const user6 = ["/pink","/orange","/six","/plum","/seven","/tan","/red", "/amber"];

function longestContSeqUrls(user0, user1) {
  
    let i =0;
    let user0Obj = {};
    user0.forEach(element => {
        user0Obj[element] = user0Obj[element] === undefined ? 1 : user0Obj[element]+1;
    });
    i=0;
    user1.forEach(element => {
        user1Obj[element] = user1Obj[element] === undefined ? 1 : user1Obj[element]+1;
    });
    console.log(user0Obj);
    console.log(user1Obj);
  
    let left = 0;
    let right = 0;
    while(left < user0.length & right < user1.length) {
        
    }

}

console.log(longestContSeqUrls(user0,user1));
