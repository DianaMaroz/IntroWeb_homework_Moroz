function greeting(name) {  
         console.log(`Привет, ${name.toUpperCase()}! Мы так рады видеть тебя!`);
    }
    
const user = prompt('Введите ваше имя');
greeting(user)