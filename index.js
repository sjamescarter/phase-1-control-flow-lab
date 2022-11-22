function scuberGreetingForFeet(ft){
  if (ft <= 400) {
    return "This one is on me!"
  } else if (ft <= 2000) {
    return "That will be twenty bucks."
  } else if (ft <= 2500) {
    return "I will gladly take your thirty bucks."
  } else {
    return "No can do."
  }
}

function ternaryCheckCity(city){
  return city === 'NYC' ? "Ok, sounds good." : "No go."
}

function switchOnCharmFromTip(coin){
  switch (coin) {
    case 'generous':
      return "Thank you so much.";
      break;
    case 'not as generous':
      return "Thank you.";
      break;
    default:
      return "Bye."; 
  }
}