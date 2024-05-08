checkspeed(90);

function checkspeed(speed) {
  limit = 70;
  if (speed < limit) {
    console.log("ok");
    return;
  } else {
    let extra = speed - limit;
    let points = Math.floor(extra / 5);
    if (extra < 5) {
      console.log("Ok");
    } else {
      let resp = points > 12 ? "Suspenso" : points;
      console.log(resp);
    }
  }
}
