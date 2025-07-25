document.addEventListener('DOMContentLoaded', () => {

    // Megkeressük az összes "fájl" linket és tartalmi panelt
    const fileLinks = document.querySelectorAll('.file-link');
    const contentPanes = document.querySelectorAll('.content-pane');

    // Végigmegyünk minden egyes fájl linken
    fileLinks.forEach(link => {

        // Minden linkre teszünk egy eseményfigyelőt
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Megakadályozza az oldal ugrását

            // A 'data-target' attribútumból kiolvassuk, melyik tartalmat kell mutatni
            const targetId = link.getAttribute('data-target');
            
            // ELREJTÉS: Először mindenkiről levesszük az 'active' osztályt
            fileLinks.forEach(otherLink => otherLink.classList.remove('active'));
            contentPanes.forEach(pane => pane.classList.remove('active'));

            // MEGJELENÍTÉS: A kattintott linkre és a hozzá tartozó panelre rátesszük az 'active' osztályt
            link.classList.add('active');
            document.getElementById(targetId).classList.add('active');
        });
    });

// 1. Megkeressük az új WORKSPACE linket és az eredeti "rolam.md" linket
    const workspaceLink = document.getElementById('workspace-link');
    const aboutMeLink = document.querySelector('a[data-target="about"]');

    // 2. Eseményfigyelőt teszünk a WORKSPACE linkre
    workspaceLink.addEventListener('click', (event) => {
        event.preventDefault(); // Megakadályozzuk, hogy a '#' miatt ugorjon az oldal

        // 3. A varázslat: Programozottan "rákattintunk" a 'rolam.md' linkre
        // Ez lefuttatja ugyanazt a kódot, mintha a felhasználó tette volna
        if (aboutMeLink) {
            aboutMeLink.click();
        }
    });

});