var user1 = [
  {
    fullName: "Altanshagai Byambasuren",
    day1: 10,
    day2: 10,
    day3: 10,
    day4: 10,
    day5: 10,
    day6: 10,
    day7: 10,
    day8: 10,
    day9: 10,
    day10: 10,
    grandFinal: 75,
    total: 0,
  },
  {
    fullName: "Sukhtsooj Damiran",
    day1: 10,
    day2: 10,
    day3: 10,
    day4: 10,
    day5: 10,
    day6: 10,
    day7: 10,
    day8: 10,
    day9: 10,
    day10: 10,
    grandFinal: 86,
    total: 0,
  },
  {
    fullName: "Sugar Chimeddavaa",
    day1: 10,
    day2: 10,
    day3: 10,
    day4: 10,
    day5: 10,
    day6: 10,
    day7: 10,
    day8: 10,
    day9: 10,
    day10: 10,
    grandFinal: 77,
    total: 0,
  },
  {
    fullName: "Tsatsralt Gerelkhuu",
    day1: 10,
    day2: 10,
    day3: 10,
    day4: 10,
    day5: 0,
    day6: 10,
    day7: 10,
    day8: 0,
    day9: 10,
    day10: 10,
    grandFinal: 56,
    total: 0,
  },
  {
    fullName: "Baasansuren Gan-Erdene",
    day1: 10,
    day2: 10,
    day3: 10,
    day4: 10,
    day5: 10,
    day6: 10,
    day7: 10,
    day8: 0,
    day9: 10,
    day10: 10,
    grandFinal: 86,
    total: 0,
  },
];
var onoo = [];
for (let i = 0; i < user1.length; i++) {
  var a =
    user1[i].day1 +
    user1[i].day2 +
    user1[i].day3 +
    user1[i].day4 +
    user1[i].day5 +
    user1[i].day6 +
    user1[i].day7 +
    user1[i].day8 +
    user1[i].day9 +
    user1[i].day10;
  console.log(a);
  var total = a + user1[i].grandFinal;
  onoo.push({
    fullName: user1[i].fullName,
    total1: a,
    grandFinal: user1[i].grandFinal,
    total: total,
  });
  console.log(onoo);
}
//sort hiij bga ni
function sortJSON(arr, key, way) {
  return onoo.sort(function (a, b) {
    var x = a[key];
    var y = b[key];
    if (way === "123") {
      return x < y ? -1 : x > y ? 1 : 0;
    }
    if (way === "321") {
      return x > y ? -1 : x < y ? 1 : 0;
    }
  });
}

people2 = sortJSON(onoo, "total", "321"); // 123 or 321
console.log(people2);

//ui ruu
for (let i = 0; i < people2.length; i++) {
  html =
    '<div class="erlist"><div class="number">$$number$$</div><div class="fullname">$$name$$</div><div class="total1">$$one$$</div><div class="total2">$$two$$</div><div class="grandtotal">$$all$$</div></div>';
  html = html.replace("$$number$$", i + 1);
  html = html.replace("$$name$$", people2[i].fullName);
  html = html.replace("$$one$$", people2[i].total1);
  html = html.replace("$$two$$", people2[i].grandFinal);
  html = html.replace("$$all$$", people2[i].total);
  document.querySelector(".eregteiList").insertAdjacentHTML("beforeend", html);
}
