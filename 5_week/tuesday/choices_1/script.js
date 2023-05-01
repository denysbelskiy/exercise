let choices = ["Vine","Beer","Vodka","Rum","Tequila","Coffee", "Tea","Coke","Sprite","Fanta","Red Bull","Monster","Rivela","Water","Cider","Juice","Codeine"];
// choices.forEach((item) => {
//   console.log(`My #${choices.indexOf(item) + 1} choice is ${item}.`);
// });

choices.forEach((item) => {
  let suffix;
  let itemNum = choices.indexOf(item) + 1;
  let lastItemNum = +(itemNum.toString().split('').pop());
  switch (lastItemNum) {
    case 1:
      suffix = "st";
      if(itemNum == 11){suffix = 'th'};
      break;
    case 2:
      suffix = "nd";
      if(itemNum == 12){suffix = 'th'};
      break;
    case 3:
      suffix = "rd";
      if(itemNum == 13){suffix = 'th'};
      break;
    default:
      suffix = "th";
  }
  console.log(`My ${itemNum + suffix} choice is ${item}.`);
});

