var number_list = [];
function doAdd(){
    let number = parseInt(document.getElementById('number').value);
    number_list.push(number);
    let items = '';
    for(let n of number_list) {
        items = items + `<li class="p-2 btn btn-primary m-2" 
                style="list-style-type:none;">${n}</li>`
    }
    let numbers_html = `<ul class="d-flex flex-wrap">${items}</ul>`
    document.getElementById("numbers-list").innerHTML = numbers_html;
    document.getElementById('number').value = "";
    document.getElementById('number').focus();
}