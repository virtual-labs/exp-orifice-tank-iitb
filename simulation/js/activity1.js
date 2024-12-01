let maindiv = document.getElementById('pannelcreate');
function activity1() {
    let text = `
    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <h4 class="center-text fs-20px fw-600"></h4>

        <div class="fs-16px">
        <h5>Flow through orifice at the bottom of the tank</h5>
        <p>Learning Objective: Calculate the discharge rate</p>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act1();' id='temp-btn-1' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML = text;
    setTimeout(() => { MathJax.typeset(); }, 300);
}
//for starting first activity
function start_act1() {
    let temp_btn = document.getElementById('temp-btn-1');
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text("Caculate Time", "tb1-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb1-box'>
        <p style="font-size: 24px; font-weight: 600; text-align: center">Activity 1</p> <br>
        <h5> A circular tank of diameter ${D}m contains water upto a height of ${H1}m. The tank is provided with an orifice of diameter ${d}m at the bottom.<br>Find the time taken by the water:- </h5>
        <h5>1. to fall from ${H1}m to ${H2}m.</h5>
        <h5>2. for completely emptying the tank. </h5>
        <h5>Take c<sub>d</sub> = ${cd}</h5>
        <br>

        <div style='text-align: center;'><img style='width: 20%;' src='./images/img1.png'></div>

        <br>

        <h5>Area of base of the tank</h5>
        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$ A = \\frac{\\pi}{4} D^2 $$
            </span>
            = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal01-inp'> <span id='cal01-val-sp'></span> m<sup>2</sup>
        </p>
        <br>
        <h5>Area of base of orifice</h5>
        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$ a = \\frac{\\pi}{4} d^2 $$
            </span>
            = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal02-inp'> <span id='cal02-val-sp'></span> m<sup>2</sup>
        </p>
        <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify0();'  id='temp-btn-0' >Verify</button></div>
        
        
        <br><br>
        <div id="time_cal" style="display: none">
            <p style="font-size: 18px; font-weight: 600; text-align: center">H<sub>1</sub> = ${H1} &nbsp;&nbsp;&nbsp;  H<sub>2</sub> = ${H2}</p>
            <p style='text-align: center;'> <span style='display: inline-block;' >
                <span style='display: inline-block;' >
                    $$ T = \\frac{2A}{c_d a \\sqrt{2g}} [\\sqrt{H1} - \\sqrt{H2}] $$
                </span>
                = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal03-inp'> <span id='cal03-val-sp'></span> sec
            </p>
            <br>
            <p style="font-size: 18px; font-weight: 600; text-align: center">H<sub>1</sub> = ${H1} &nbsp;&nbsp;&nbsp;  H<sub>2</sub> = 0</p>
            <p style='text-align: center;'> <span style='display: inline-block;' >
                <span style='display: inline-block;' >
                    $$ T = \\frac{2A}{c_d a \\sqrt{2g}} \\sqrt{H1} $$
                </span>
                = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal04-inp'> <span id='cal04-val-sp'></span> sec
            </p>
            <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify1();'  id='temp-btn-1' >Verify</button></div>
        </div>
    </div>

    `;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => { show_step('tb1-box'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
    internal_calculations();
}
function internal_calculations() {
    A = (Math.PI / 4) * (Math.pow(D, 2));
    a = (Math.PI / 4) * (Math.pow(d, 2));
    T1 = (2 * A) / (cd * a * (Math.sqrt(2 * g))) * (Math.sqrt(H1) - Math.sqrt(H2));
    T2 = (2 * A) / (cd * a * (Math.sqrt(2 * g))) * Math.sqrt(H1);
}
function verify0() {
    let btn = document.getElementById('temp-btn-0');
    let div = document.getElementById('time_cal');
    console.log("A = ", A);
    console.log("a = ", a);
    let inp1 = document.getElementById('cal01-inp');
    let sp1 = document.getElementById('cal01-val-sp');
    let inp2 = document.getElementById('cal02-inp');
    let sp2 = document.getElementById('cal02-val-sp');
    if (!verify_values(parseFloat(parseFloat(inp1.value).toFixed(2)), parseFloat(A.toFixed(2)))) {
        alert('Area of tank is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(parseFloat(inp2.value).toFixed(2)), parseFloat(a.toFixed(2)))) {
        alert('Area of orifice in litres is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp1.remove();
    sp1.innerText = `${(A).toFixed(4)}`;
    inp2.remove();
    sp2.innerText = `${(a).toFixed(4)}`;
    alert('Your entered values are correct!!');
    btn.style.display = 'none';
    div.style.display = 'block';
    //activity2();
}
function verify1() {
    let btn = document.getElementById('temp-btn-1');
    let div = document.getElementById('time_cal');
    console.log("T1 = ", T1);
    console.log("T2 = ", T2);
    let inp1 = document.getElementById('cal03-inp');
    let sp1 = document.getElementById('cal03-val-sp');
    let inp2 = document.getElementById('cal04-inp');
    let sp2 = document.getElementById('cal04-val-sp');
    if (!verify_values(parseFloat(parseFloat(inp1.value).toFixed(2)), parseFloat(T1.toFixed(2)))) {
        alert('Time 1 is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(parseFloat(inp2.value).toFixed(2)), parseFloat(T2.toFixed(2)))) {
        alert('Time 2 is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp1.remove();
    sp1.innerText = `${(T1).toFixed(4)}`;
    inp2.remove();
    sp2.innerText = `${(T2).toFixed(4)}`;
    alert('Your entered values are correct!!');
    btn.style.display = 'none';
    //div.style.display = 'block';
    activity2();
}
activity1();
//# sourceMappingURL=activity1.js.map