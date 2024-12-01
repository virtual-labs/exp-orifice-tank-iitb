function activity2() {
    let text = `
    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <h4 class="center-text fs-20px fw-600"></h4>

        <div class="fs-16px">
        <p>Learning Objective: Calculate time by using given data </p>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act2();' id='temp-btn-2' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML += text;
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function start_act2() {
    let temp_btn = document.getElementById('temp-btn-2');
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text("calculate Time", "tb2-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb2-box'>
        <p style="font-size: 24px; font-weight: 600; text-align: center">Activity 2</p> <br>
        <h5> A hemispherical tank of diameter ${act2_D}m contains water upto a height of ${act2_H1}m. The tank is provided with an orifice of diameter ${act2_d}m at the bottom.<br>Find the time taken by the water:- </h5>
        <h5>1. to fall from ${act2_H1}m to ${act2_H2}m.</h5>
        <h5>2. for completely emptying the tank. </h5>
        <h5>Take c<sub>d</sub> = ${act2_cd}</h5>

        <br>
        <div style='text-align: center;'><img style='width: 20%;' src='./images/img2.png'></div>
        <br><br>

        <h5>Radius</h5>
        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$ R = \\frac{D}{2} $$
            </span>
            = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal05-inp'> <span id='cal05-val-sp'></span> m
        </p>

        <br>
        <h5>Area of orifice</h5>
        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$ a = \\frac{\\pi}{4} d^2 $$
            </span>
            = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal06-inp'> <span id='cal06-val-sp'></span> m<sup>2</sup>
        </p>
        <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify2();'  id='temp-btn-3' >Verify</button></div>

        <br><br>
        <div id="act2_time_cal" style="display: none">
            <p style="font-size: 18px; font-weight: 600; text-align: center">H<sub>1</sub> = ${act2_H1} &nbsp;&nbsp;&nbsp;  H<sub>2</sub> = ${act2_H2}</p>
            <p style='text-align: center;'> <span style='display: inline-block;' >
                <span style='display: inline-block;' >
                    $$ T = \\frac{\\pi}{c_d a \\sqrt{2g}} [\\frac{4}{3}*R*(H_1^{3/2} - H_2^{3/2}) - \\frac{2}{5}(H_1^{5/2} - H_2^{5/2})] $$
                </span>
                = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal07-inp'> <span id='cal07-val-sp'></span> sec
            </p>
            <br>
            <p style="font-size: 18px; font-weight: 600; text-align: center">H<sub>1</sub> = ${act2_H1} &nbsp;&nbsp;&nbsp;  H<sub>2</sub> = 0</p>
            <p style='text-align: center;'> <span style='display: inline-block;' >
                <span style='display: inline-block;' >
                    $$ T = \\frac{\\pi}{c_d a \\sqrt{2g}} [\\frac{4}{3}*R*(H_1^{3/2} - H_2^{3/2}) - \\frac{2}{5}(H_1^{5/2} - H_2^{5/2})] $$
                </span>
                = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal08-inp'> <span id='cal08-val-sp'></span> sec
            </p>
            <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify3();'  id='temp-btn-4' >Verify</button></div>
        </div>

    </div>

    `;
    maindiv.innerHTML += text;
    internal_calculations2();
    setTimeout(() => { show_step('tb2-box'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function internal_calculations2() {
    R = act2_D / 2;
    act2_a = (Math.PI / 4) * (Math.pow((act2_d / 1000), 2));
    act2_T1 = ((Math.PI) / (act2_cd * act2_a * (Math.sqrt(2 * g)))) * ((4 / 3) * R * ((Math.pow(act2_H1, (3 / 2))) - (Math.pow(act2_H2, (3 / 2)))) - (2 / 5) * ((Math.pow(act2_H1, (5 / 2))) - (Math.pow(act2_H2, (5 / 2)))));
    act2_T2 = ((Math.PI) / (act2_cd * act2_a * (Math.sqrt(2 * g)))) * ((4 / 3) * R * ((Math.pow(act2_H1, (3 / 2)))) - (2 / 5) * ((Math.pow(act2_H1, (5 / 2)))));
}
function verify2() {
    let btn = document.getElementById('temp-btn-3');
    let div = document.getElementById('act2_time_cal');
    console.log("R = ", R);
    console.log("act2 a = ", act2_a);
    let inp1 = document.getElementById('cal05-inp');
    let sp1 = document.getElementById('cal05-val-sp');
    let inp2 = document.getElementById('cal06-inp');
    let sp2 = document.getElementById('cal06-val-sp');
    if (!verify_values(parseFloat(parseFloat(inp1.value).toFixed(2)), parseFloat(R.toFixed(2)))) {
        alert('Radius is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(parseFloat(inp2.value).toFixed(2)), parseFloat(act2_a.toFixed(2)))) {
        alert('Area of orifice is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp1.remove();
    sp1.innerText = `${(R).toFixed(4)}`;
    inp2.remove();
    sp2.innerText = `${(act2_a).toFixed(4)}`;
    alert('Your entered values are correct!!');
    btn.style.display = 'none';
    div.style.display = 'block';
}
function verify3() {
    let btn = document.getElementById('temp-btn-4');
    console.log("act2 T1 = ", act2_T1);
    console.log("act2 T2 = ", act2_T2);
    let inp1 = document.getElementById('cal07-inp');
    let sp1 = document.getElementById('cal07-val-sp');
    let inp2 = document.getElementById('cal08-inp');
    let sp2 = document.getElementById('cal08-val-sp');
    if (!verify_values(parseFloat(parseFloat(inp1.value).toFixed(2)), parseFloat(act2_T1.toFixed(2)))) {
        alert('Radius is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(parseFloat(inp2.value).toFixed(2)), parseFloat(act2_T2.toFixed(2)))) {
        alert('Area of orifice is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp1.remove();
    sp1.innerText = `${(act2_T1).toFixed(4)}`;
    inp2.remove();
    sp2.innerText = `${(act2_T2).toFixed(4)}`;
    alert('Your entered values are correct!!');
    btn.style.display = 'none';
    activity3();
}
//# sourceMappingURL=activity2.js.map