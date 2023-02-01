const temp = +prompt('Введите темперутуру в цельсиях: ');
alert(`Цельсий: ${temp} ; Фарегейт ${celsiusToFahrenheit(temp)}`);

function celsiusToFahrenheit(sm_temp) {
    fahrenheit = (sm_temp * 9 / 5) + 32
    return +fahrenheit.toFixed(2)
}
