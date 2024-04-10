// https://www.codewars.com/kata/577ff15ad648a14b780000e7/

function greet(language) {
    const opt = [["english", "Welcome"],["czech", "Vitejte"],["danish", "Velkomst"],["dutch", "Welkom"],["estonian", "Tere tulemast"],["finnish", "Tervetuloa"],["flemish", "Welgekomen"],["french", "Bienvenue"],["german", "Willkommen"],["irish", "Failte"],["italian", "Benvenuto"],["latvian", "Gaidits"],["lithuanian", "Laukiamas"],["polish", "Witamy"],["spanish", "Bienvenido"],["swedish", "Valkommen"],["welsh", "Croeso"]]
    let res = 'Welcome';
    opt.map(e => {
        if (language === e[0]) {
            res = e[1];
        }
    })
    return res;
}

console.log(greet("english"))
console.log(greet("dutch"))