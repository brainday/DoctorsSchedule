const axios = require("axios");
const db = require("../models");
const { json } = require("sequelize");



async function createData() {
        //   axios.get('http://localhost:5000/api')
        //   .then(res => {
        //     data = [];
        //     data.push(res.data);

            
        //     db.Company.findOne({ where: {oid: res.data.MO_OID} }).then(project => {
        //       if (project === null) {

        //         data.forEach(element => {
        //         db.Company.create({ name: element.MO_Name, oid: element.MO_OID }).then(res=>{

        //           const compId = res.id;

        //           console.log(element.MO_SP_List)
                  
        //           element.MO_SP_List.forEach(dep => {

        //             db.Departament.create({name: dep.SP_MO_Name, oid: dep.SP_MO_OID, address: dep.SP_MO_Address, companyId: compId}).then(res=>{
        //               const depId = res.id;

        //               dep.SP_Resource_List.forEach(spec => {
        //                 db.Specialist.create({name: spec.Specialist, uid: spec.Post_id, job: spec.Post_Name, companyId: compId, departmentId: depId}).then(res=>{
        //                   const specId = res.id;

        //                   spec.Schedule.forEach(sched => {
        //                     db.Schedule.create({visit: sched.VisitTime, room: sched.SP_MO_Room, appointment: sched.TypeAppointment, slot: sched.Slot_Available, specialistId: specId})
        //               })
        //               }).catch(err=>console.log(err));
        //           })
        //         }).catch(err=>console.log(err));
        //       })
        //       })
        //       })
        //       } else {
        //         console.log('Запись найдена!');
        //       };
        //     }).catch(err=>console.log(err));
          
        // }).catch(err => console.log(err))

        // const tasks = await db.Company.findAll({
        //   include: [
        //     { model: db.Departament,
        //       separate: true },
        //     { model: db.Departament,
        //       include: [
        //         { model: db.Specialist },
        //         { model: db.Specialist,
        //         include: db.Schedule,
        //         separate: true }
        //       ],
        //       separate: true }
        // ]}
        // );
        // console.log(JSON.stringify(tasks, null, 2));

      };

module.exports = createData;