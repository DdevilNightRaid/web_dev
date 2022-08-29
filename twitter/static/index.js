//constants:
const tb = document.getElementById('translucent_background');
const loading_c = document.getElementById('loading_circle');
const final_container = document.getElementById('black_Container');
var time
function loading() {
    tb.style.display = 'flex';
    tb.style.justifyContent = 'center';
    tb.style.alignItems = 'center';
    time = setTimeout(signIn, 3000);
}
function signIn(){
    loading_c.style.display = 'none'
    final_container.style.display = 'flex';
    final_container.style.flexDirection = 'column';
}

function hiding(){
    tb.style.display = 'none'
}