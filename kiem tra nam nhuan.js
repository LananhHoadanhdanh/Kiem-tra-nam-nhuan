let nam = parseInt(prompt("Nhập vào số năm"));
if (nam % 4 === 0) {
    if (nam % 100 === 0) {
        if (nam % 400 === 0) {
            alert("Năm " + nam + " là năm nhuận.");
        }
        else {
            alert("Năm " + nam + " không phải là năm nhuận.")
        }

    }
    else {
        alert("Năm " + nam + " là năm nhuận.")
    }
}
else {
    alert("Năm " + nam + " không phải là năm nhuận.")
}