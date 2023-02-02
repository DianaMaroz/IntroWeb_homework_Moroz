const temp = +prompt('Введите темперутуру в цельсиях: ');
const fahr = celsiusToFahrenheit(temp).toFixed(2)
alert(`Цельсий: ${temp} ; Фарегейт ${fahr}`);

function celsiusToFahrenheit(sm_temp) {
    fahrenheit = (sm_temp * 9 / 5) + 32;
    return fahrenheit;
}
