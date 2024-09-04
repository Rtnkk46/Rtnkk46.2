function calculateCompoundInterest() {
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value) / 100;
    const years = parseFloat(document.getElementById('years').value);
    const frequency = parseFloat(document.getElementById('frequency').value);

    if (isNaN(principal) || isNaN(rate) || isNaN(years) || isNaN(frequency)) {
        alert('กรุณากรอกตัวเลขให้ครบทุกช่อง');
        return;
    }

    const compoundInterest = principal * Math.pow((1 + rate / frequency), frequency * years);

    document.getElementById('result').textContent = compoundInterest.toFixed(2);
}
