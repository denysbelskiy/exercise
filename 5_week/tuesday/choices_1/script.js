let choices = ["Coffee", "Tea", "Beer", "Vine"];
choices.reverse();
choices.forEach((item) => {
  console.log(`My #${choices.indexOf(item) + 1} choice is ${item}.`);
});

let suffix;
choices.forEach((item) => {
  let suffix;
  switch (choices.indexOf(item)) {
    case 0:
      suffix = "st";
      break;
    case 1:
      suffix = "nd";
      break;
    case 2:
      suffix = "rd";
      break;
    default:
      suffix = "th";
  }
  console.log(`My ${(choices.indexOf(item) + 1) + suffix} choice is ${item}.`);
});

