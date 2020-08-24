const Database = require ('./db')
const db = require('./db')
const  createProffy = require('./createProffy')

Database.then(async (db) => {
    // Inserir os dados 
    proffyValue = { 
          name: "Eduardo Allochio",
          avatar:"https://avatars1.githubusercontent.com/u/43136553?s=460&v=4",
          whatsapp:  27998714453,
          bio:"Estou nessa vida para beber e chorar faço umas brejas artesanais as vezes que ficam muito boas.",
           
        }
        classValeu ={
            subject: 1,
            cost: "209,00",
            // p proffy id virá pelo banco de dados
         }

         classScheduleValues = [
             // class_id virá pelo banco de dados, após cadastramos a class  
             {
                 weekday: 1,
                 time_from: 720,
                 time_to: 1220
             },
             {
                 weekday: 0,
                 time_from: 520,
                 time_to: 1220
             }
         ]


    
     //await createProffy(db,{proffyValue, classValeu, classScheduleValues})

    // Consultar os dados inseridos
    const selectedProffys = await db.all("SELECT * FROM proffys")
    //console.log(selectedProffys)
    
    //consultar as classes de um determinado professor
    // e trazer juntos os dados do professor
    const selectClassesAndProffys = await db.all(`
         SELECT classes.*, proffys.*
         FROM proffys
         JOIN classes ON (classes.proffy_id = proffys.id)
         WHERE classes.proffy_id = 1;
    `)
       //console.log(selectClassesAndProffys)   

       // o horário que a pessoa trabalha, por xemplo, é das 8h - 18h
       // o horário do time_from (8h) precisa ser menor ou igual ao horário solicitado
       // o time)to precisa acima 
       const selectClassesSchedules = await db.all(`
            SELECT class_schedule.*
            FROM class_schedule
            WHERE class_schedule.class_id = 1
            AND   class_schedule.weekday = "0"
            AND   class_schedule.time_from <= "1300"
            AND   class_schedule.time_to > "1300"
       `)
       console.log(selectClassesSchedules)
})  