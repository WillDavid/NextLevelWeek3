const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {
    
    await saveOrphanage(db, {
        lat: "-3.1079",
        lng: "-60.0231",
        name: "Local de Amor",
        about: "Apenas um teste de about",
        whatsapp: "994215985",
        images: [
            "https://images.unsplash.com/photo-1582167371270-68a4c033e732?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "https://images.unsplash.com/photo-1582167371270-68a4c033e732?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),

        instructions: "Venha como se sentir a vontade e traga muito amor",

        opening_hours: "Horários de visita das 13h até 8h",

        open_on_weekends: "1"
    })

    // Consultar dados da tabela

    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)



    // Consultar somente 1 orphanages pelo id
    const orphanages = await db.all('SELECT * FROM orphanages WHERE id = "2"')
    console.log(orphanages)


    // Apaga tudo

    // Jamais EXECUTAR!
     //console.log(await db.run('DELETE FROM orphanages'))
})