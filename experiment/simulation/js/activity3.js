function activity3() {
    let text = `
    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <h4 class="center-text fs-20px fw-600"></h4>

        <div class="fs-16px">
        <p>Learning Objective: Calculate time by using given data </p>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act3();' id='temp-btn-5' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML += text;
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function start_act3() {
    let temp_btn = document.getElementById('temp-btn-5');
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text("calculate Time", "tb3-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb3-box'>
        
        <p style="font-size: 24px; font-weight: 600; text-align: center">Activity 3</p> <br>
        
        <h5> An orifice of diameter ${act3_d}mm is fitted at the bottom of a boiler drum of length ${act3_L}m and of diameter ${act3_D}m. The drum is horizontal and half full of water. Find the time required to empty the boiler. </h5>
        <h5>Take c<sub>d</sub> = ${act3_cd}</h5>

        <br>
        <div style='text-align: center;'><img style='width: 50%;' src='./images/img3.png'></div>
        <br><br>

        <h5>Area of orifice</h5>
        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$ a = \\frac{\\pi}{4} d^2 $$
            </span>
            = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal09-inp'> <span id='cal09-val-sp'></span> m<sup>2</sup>
        </p>
        
        <br>
        <h5>Radius</h5>
        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$ R = \\frac{D}{2} $$
            </span>
            = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal10-inp'> <span id='cal10-val-sp'></span> m
        </p>

        <br>
        <h5>H<sub>1</sub></h5>
        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$ H_1 = \\frac{D}{2} $$
            </span>
            = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal11-inp'> <span id='cal11-val-sp'></span> m
        </p>

        <br>
        <p style="font-size: 18px; font-weight: 600; text-align: center">H<sub>2</sub> = 0 &nbsp;&nbsp;&nbsp;  L = ${act3_L}</p>
        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$ T = \\frac{4L}{3 c_d a \\sqrt{2g}} [(2R)^{3/2} - (2R-H)^{3/2}] $$
            </span>
            = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal12-inp'> <span id='cal12-val-sp'></span> sec
        </p>
        <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify4();' id='temp-btn-6' >Verify</button></div>

    </div>
    `;
    maindiv.innerHTML += text;
    internal_calculations3();
    setTimeout(() => { show_step('tb3-box'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function internal_calculations3() {
    act3_a = (Math.PI / 4) * (Math.pow((act3_d / 1000), 2));
    act3_R = act3_D / 2;
    act3_H1 = act3_D / 2;
    //act3_T1 = (4*act3_L/(3*act3_cd*act3_a*(Math.sqrt(2*g)))) * (((2*act3_R)**(3/2)) - ((2*act3_R)-act3_H1)**(3/2) );
    act3_T1 = (4 / 3) * (act3_L / (act3_cd * act3_a * (Math.sqrt(2 * g)))) * ((Math.pow((2 * act3_R), (3 / 2))) - (Math.pow(((2 * act3_R) - act3_H1), (3 / 2))));
}
function verify4() {
    let btn = document.getElementById('temp-btn-6');
    console.log("act3 a = ", act3_a);
    console.log("act3 R = ", act3_R);
    console.log("act3 T = ", act3_T1);
    let inp1 = document.getElementById('cal09-inp');
    let sp1 = document.getElementById('cal09-val-sp');
    let inp2 = document.getElementById('cal10-inp');
    let sp2 = document.getElementById('cal10-val-sp');
    let inp3 = document.getElementById('cal11-inp');
    let sp3 = document.getElementById('cal11-val-sp');
    let inp4 = document.getElementById('cal12-inp');
    let sp4 = document.getElementById('cal12-val-sp');
    if (!verify_values(parseFloat(parseFloat(inp1.value).toFixed(2)), parseFloat(act3_a.toFixed(2)))) {
        alert('Area of orifice is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(parseFloat(inp2.value).toFixed(2)), parseFloat(act3_R.toFixed(2)))) {
        alert('Radius is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(parseFloat(inp3.value).toFixed(2)), parseFloat(act3_R.toFixed(2)))) {
        alert('H1 is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(parseFloat(inp4.value).toFixed(2)), parseFloat(act3_T1.toFixed(2)))) {
        alert('Time is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp1.remove();
    sp1.innerText = `${(act3_a).toFixed(4)}`;
    inp2.remove();
    sp2.innerText = `${(act3_R).toFixed(4)}`;
    inp3.remove();
    sp3.innerText = `${(act3_H1).toFixed(4)}`;
    inp4.remove();
    sp4.innerText = `${(act3_T1).toFixed(4)}`;
    alert('Your entered values are correct!!');
    btn.style.display = 'none';
    exp_complete();
}
function exp_complete() {
    let btn = (document.getElementById('temp-btn-6'));
    btn && btn.remove();
    alert('Experiment completed');
}
//# sourceMappingURL=activity3.js.map