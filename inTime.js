let inTime = {
    'raghu' : ['101', '200', '300'],
    'jyoti' : ['103', '110', '2310'],
    'medha' : ['1011', '1022', '1034', '1600'],
    'arya' : ['0800', '1022', '1822']
}

const returnViol = function(inTimes) {

    let output = {}

    for (const inTime in inTimes) {

        let right = 1;
        let left = 0;

        let foundViol = false;

        while(right < inTimes[inTime].length) {

            //console.log(left + ' ' + right + ' ' + parseInt(inTimes[inTime][right]) + ' ' + parseInt(inTimes[inTime][left]));
            if (parseInt(inTimes[inTime][right])- parseInt(inTimes[inTime][left]) < 100) {
                if (right - left >= 2) {
                    foundViol = true; 
                } 
                right = right + 1; 
            } else {
                left = right;
                right = right + 1;
            }

        }

        output[inTime] = foundViol;
        
    }

    return output;
}

console.log(returnViol(inTime));