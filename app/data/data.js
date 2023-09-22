const axios = require("axios");
const db = require("../models");
const { json } = require("sequelize");



// const Op = db.Sequelize.Op;


async function createData() {
          // const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
          // console.log(response.title);
  
        //   db.Company.create({ name: "ГБУЗ ТО ОБЛАСТНАЯ БОЛЬНИЦА № 3", oid: "1.2.643.5.1.13.13.12.2.72.7326" }).then(res=>{
        //     // получаем id созданной МО
        //     const compId = res.id;
        //     //создаем пару вложенности для этой МО
        //     db.Departament.create({name: "Диагностическое отделение", oid: "1.2.643.5.1.13.13.12.2.72.7327.0.22187", address: "г. Тобольск, 3б микрорайон, 24", companyId: compId}).then(res=>{
        //       const depId = res.id;
        //       db.Specialist.create({name: "Давыдова Елена Александровна", uid: "28", job: "врач - детский хирург", companyId: compId, departmentId: depId}).then(res=>{
        //         const specId = res.id;
        //         db.Schedule.create({visit: "2023-09-22T08:00:00+05:00", room: "Кабинет ЭКГ (3б мкр,24)", appointment: "Первичный прием", slot: "Доступен", specialistId: specId})
        //         db.Schedule.create({visit: "2023-09-22T08:30:00+05:00", room: "Кабинет ЭКГ (3б мкр,24)", appointment: "Первичный прием", slot: "Доступен", specialistId: specId})
        //       }).catch(err=>console.log(err));
        //       db.Specialist.create({name: "Давыдова Елена Александровна", uid: "28", job: "врач - детский хирург", companyId: compId, departmentId: depId}).then(res=>{
        //         const specId = res.id;
        //         db.Schedule.create({visit: "2023-09-22T08:00:00+05:00", room: "Кабинет ЭКГ (3б мкр,24)", appointment: "Первичный прием", slot: "Доступен", specialistId: specId})
        //         db.Schedule.create({visit: "2023-09-22T08:30:00+05:00", room: "Кабинет ЭКГ (3б мкр,24)", appointment: "Первичный прием", slot: "Доступен", specialistId: specId})
        //       }).catch(err=>console.log(err));        
        //     }).catch(err=>console.log(err));

        //     db.Departament.create({name: "Диагностическое отделение", oid: "1.2.643.5.1.13.13.12.2.72.7327.0.22187", address: "г. Тобольск, 3б микрорайон, 24", companyId: compId}).then(res=>{
        //       const depId = res.id;
        //       db.Specialist.create({name: "Давыдова Елена Александровна", uid: "28", job: "врач - детский хирург", companyId: compId, departmentId: depId}).then(res=>{
        //         const specId = res.id;
        //         db.Schedule.create({visit: "2023-09-22T08:00:00+05:00", room: "Кабинет ЭКГ (3б мкр,24)", appointment: "Первичный прием", slot: "Доступен", specialistId: specId})
        //         db.Schedule.create({visit: "2023-09-22T08:30:00+05:00", room: "Кабинет ЭКГ (3б мкр,24)", appointment: "Первичный прием", slot: "Доступен", specialistId: specId})
        //       }).catch(err=>console.log(err));
        //     }).catch(err=>console.log(err));
        // }).catch(err=>console.log(err));

        const tasks = await db.Company.findAll({
          include: [
            { model: db.Departament,
              separate: true },
            { model: db.Departament,
              include: [
                { model: db.Specialist },
                { model: db.Specialist,
                include: db.Schedule,
                separate: true }
              ],
              separate: true }
        ]}
        );
        console.log(JSON.stringify(tasks, null, 2));

      };

module.exports = createData;