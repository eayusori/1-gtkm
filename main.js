function updateTime() {
  const now = new Date();

  let h = now.getHours();
    let ampm = h >= 12 ? "PM" : "AM";
  let m = now.getMinutes();
  let s = now.getSeconds();

    h = h % 12;
    if (h === 0) {
    h = 12;
    }

    if (h < 10) {
    h = "0" + h;
    } else {
    h = "" + h;
    }

    if (m < 10) {
        m = "0" + m;
    } else {
        m = "" + m;
    }

    if (s < 10) {
        s = "0" + s;
    } else {
        s = "" + s;
    } 

  const days = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
  const months = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
  const dateStr = `${days[now.getDay()]} ${months[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`;

  document.querySelectorAll(".hrs").forEach(el => el.textContent = h);
  document.querySelectorAll(".min").forEach(el => el.textContent = m);
  document.querySelectorAll(".sec").forEach(el => el.textContent = s);
  document.querySelectorAll(".ampm").forEach(el => el.textContent = ampm);
  document.querySelectorAll(".date").forEach(el => el.textContent = dateStr);
}

setInterval(updateTime, 1000);
updateTime();
