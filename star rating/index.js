let stars = document.getElementsByClassName('star');

function basdi(count) {
    remove();
    for (let i = 0; i < count; i++) {
        if (count == 1) cls = "one";
        else if (count == 2) cls = "two";
        else if (count == 3) cls = "three";
        else if (count == 4) cls = "four";
        else if (count == 5) cls = "five";
        stars[i].className = "star " + cls;
    }
    document.getElementById('output').innerHTML = "Your rate is " + count + "/5";
}

function remove() {
    let i = 0;
    while (i < 5) {
        stars[i].className = "star";
        i++;
    }
}