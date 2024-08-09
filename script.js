const days = Array.from(document.querySelectorAll(".day"));
const spent = Array.from(document.querySelectorAll(".spend"));

const data = [
  {
    day: "mon",
    amount: 17.45,
  },
  {
    day: "tue",
    amount: 34.91,
  },
  {
    day: "wed",
    amount: 52.36,
  },
  {
    day: "thu",
    amount: 31.07,
  },
  {
    day: "fri",
    amount: 23.39,
  },
  {
    day: "sat",
    amount: 43.28,
  },
  {
    day: "sun",
    amount: 25.48,
  },
];

days.map(
  (day, i) => (day.children[0].style.height = `${data[i].amount * 3}px`)
);

const heights = [];

days.map((day) =>
  heights.push(
    +window
      .getComputedStyle(day.children[0])
      .getPropertyValue("height")
      .slice(0, -2)
  )
);

const highest = heights.sort((a, b) => b - a)[0];

const heighestEl = days.filter(
  (day) =>
    +window
      .getComputedStyle(day.children[0])
      .getPropertyValue("height")
      .slice(0, -2) === highest
)[0];

heighestEl.children[0].style.backgroundColor = "hsl(186, 34%, 60%)";

days.map((day, i) =>
  day.children[1].textContent === data[i].day
    ? (spent[i].textContent = `$${data[i].amount}`)
    : null
);

days.map((day, i) =>
  day.children[0].addEventListener("mouseover", function () {
    days.map(day => day.children[0].style.backgroundColor = "hsl(10, 79%, 65%)")
    heighestEl.children[0].style.backgroundColor = "hsl(186, 34%, 60%)";
    spent.map((s) => (s.style.display = "none"));
    spent[i].style.display = "block";
    day.children[0].style.backgroundColor = "hsl(10, 79%, 80%)";
  })
);

days.map((day, i) =>
  day.children[0].addEventListener("mouseout", function () {
    days.map(day => day.children[0].style.backgroundColor = "hsl(10, 79%, 65%)")
    heighestEl.children[0].style.backgroundColor = "hsl(186, 34%, 60%)";
    spent.map((s) => (s.style.display = "none"));
  })
);

heighestEl.children[0].addEventListener('mouseover', function() {
    heighestEl.children[0].style.backgroundColor = "hsl(186, 34%, 80%)";
})
