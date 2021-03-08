document.getElementById('och').hidden = true
document.getElementById('spiska').hidden = true

var i=0;
function oqi(){
    document.getElementById('spiska').hidden = false

    const name = document.querySelector(`#name`).value;
    const last = document.querySelector(`#last`).value;
    const ota = document.querySelector(`#ota`).value;
    const ona = document.querySelector(`#ona`).value;
    const jadval = document.querySelector('#spiska');
    const xato = document.querySelector('#xato');
    
    i++;

    if (ota == null || ona == null || name == null || last == null){
        xato.innerHTML + `<label>Xato kiritildi</label>`
    }

    jadval.innerHTML +=  `   
    <tr>
        <td>${i}</td>
        <td>${name}</td>
        <td>${last}</td>
        <td>${ota}</td>
        <td>${ona}</td>
        
    </tr>`
}

function berkit(){
    document.querySelector('div#quticha').hidden = true;
    document.getElementById('och').hidden = false
}
function och(){
    document.querySelector('div#quticha').hidden = false;
    document.getElementById('och').hidden = true
}




function yurgaz(){
    document.getElementById('ishchi').hidden = true;
    const soqqa = document.getElementById('kub');
    let olcham = 0;
    const vaqt = setInterval(bolim, 5);
    function bolim(){
        if (olcham === 429){
            document.getElementById('ishchi').hidden = false;
            clearInterval(vaqt);
            olcham = 0;
            alert('😂😂😂 Bombed 💣💣💣');
        }
        olcham++
        soqqa.style.top = olcham + "px"
        soqqa.style.left = olcham + "px"
    }
}