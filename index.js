var katzDeli = []; // [75]
var aNumber = 75;

function takeANumber(katzDeliLine){
  katzDeliLine.push(aNumber);
  var welcome_string = `Welcome! You are number ${katzDeliLine.length} in line.`;
  aNumber++; //1
  return ;
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length < 1){
    return "There is nobody waiting to be served!"
  }
  else{
    return `Currently serving ${katzDeliLine.shift()}.`
  }
}

function currentLine(katzDeliLine){
  if(katzDeliLine.length < 1){
    return "The line is currently empty.";
  }
  var lineString = `The line is currently: `;
  for(let i = 0; i < katzDeliLine.length; i++){
    lineString += `${i+1}. ${katzDeliLine[i]}`;
    
    if(i < katzDeliLine.length - 1){
      lineString += `, `;
    }
  }
  return lineString;
}