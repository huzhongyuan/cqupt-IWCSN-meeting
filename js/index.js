window.onload = () => {
    // 获取nav dom
    let IWCSN = document.getElementById('IWCSN');
    let Program = document.getElementById('Program');
    let Speakers = document.getElementById('Speakers');
    let Posters = document.getElementById('Posters');
    let Deadlines = document.getElementById('Deadlines');
    let Registration = document.getElementById('Registration');
    let Arrival = document.getElementById('Arrival');
    let Veune = document.getElementById('Veune');
    let Accommodation = document.getElementById('Accommodation');
    let Origanizers = document.getElementById('Origanizers');
    let Contact = document.getElementById('Contact');

    //初始化事件执行
    let init = () => {
        // 初始化内容界面
        document.getElementById("article").innerHTML = '<object type="text/html" data="./component/IWCSN.html"></object>';
    }

    init();
    // 页面交互板块js
    // 设置所有的active为空
    let clearActive = () => {
        let nav = document.getElementsByClassName('nav')[0].children;
        for (let i in nav) {
            nav[i].className = null;
        }
        console.log(nav);
    }
    // 点击IWCSN
    IWCSN.onclick = () => {
        clearActive();
        IWCSN.className = 'active';
        document.getElementById("article").innerHTML = '<object type="text/html" data="./component/IWCSN.html"></object>';
    }
    
    // 点击Program
    Program.onclick = () => {
        clearActive();
        Program.className = 'active';
        document.getElementById("article").innerHTML = '<object type="text/html" data="./component/Program.html"></object>';
    }

    // 点击Speakers
    Speakers.onclick = () => {
        clearActive();
        Speakers.className = 'active';
        document.getElementById("article").innerHTML = '<object type="text/html" data="./component/Speakers.html"></object>';
    }

    // 点击Posters
    Posters.onclick = () => {
        clearActive();
        Posters.className = 'active';
        document.getElementById("article").innerHTML = '<object type="text/html" data="./component/Posters.html"></object>';
    }

    // 点击Deadlines
    Deadlines.onclick = () => {
        clearActive();
        Deadlines.className = 'active';
        document.getElementById("article").innerHTML = '<object type="text/html" data="./component/Deadlines.html"></object>';
    }

    // 点击Registration
    Registration.onclick = () => {
        clearActive();
        Registration.className = 'active';
        document.getElementById("article").innerHTML = '<object type="text/html" data="./component/Registration.html"></object>';
    }
    // 点击Arrival
    Arrival.onclick = () => {
        clearActive();
        Arrival.className = 'active';
        document.getElementById("article").innerHTML = '<object type="text/html" data="./component/Arrival.html"></object>';
    }
    // 点击Veune
    Veune.onclick = () => {
        clearActive();
        Veune.className = 'active';
        document.getElementById("article").innerHTML = '<object type="text/html" data="./component/Veune.html"></object>';
    }
    // 点击Accommodation
    Accommodation.onclick = () => {
        clearActive();
        Accommodation.className = 'active';
        document.getElementById("article").innerHTML = '<object type="text/html" data="./component/Accommodation.html"></object>';
    }
    // 点击Origanizers
    Origanizers.onclick = () => {
        clearActive();
        Origanizers.className = 'active';
        document.getElementById("article").innerHTML = '<object type="text/html" data="./component/Origanizers.html"></object>';
    }
    // 点击Contact
    Contact.onclick = () => {
        clearActive();
        Contact.className = 'active';
        document.getElementById("article").innerHTML = '<object type="text/html" data="./component/Contact.html"></object>';
    }

}