const clock = document.getElementById('clock')






setInterval(() => {
    let date = new Date()
    const time = (date.toLocaleTimeString());
    clock.innerHTML = `<h1?>${time}</h1?`
}, 1000);
