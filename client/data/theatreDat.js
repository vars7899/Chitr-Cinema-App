let current = new Date();
let currentArray = [];
let dayArray = ["Mon", "Tue", "Wed", "Thr", "Fri", "Sat", "Sun"];

for (let i = 0; i < 14; i++) {
  let dt = new Date(current.getTime() + i * 24 * 60 * 60 * 1000);
  currentArray.push({
    fullDate: dt,
    date: dt.getDate(),
    day: dayArray[dt.getDay()],
  });
}
let availableDate = [...currentArray];

let availableTime = [
  "10:15 AM",
  "12:15 PM",
  "02:15 PM",
  "04:15 PM",
  "06:15 PM",
  "08:15 PM",
];

export { availableDate, availableTime };
