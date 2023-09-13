async function test() {
        const response = await fetch("https://flusteredtendercable.kampfzomby.repl.co/menu");
        const menu = await response.json();
        const hauptgerichte = menu.menu.Hauptgerichte;
        const nachspeisen = menu.menu.Nachspeisen;

        console.log(menu)

        hauptgerichte.forEach(item => {
            console.log(item.bezeichnung)
        });
        console.log(hauptgerichte)
        console.log(nachspeisen)
    }

export default test;