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
        //       db.Specialist.create({name: "Давыдова Елена Александровна", uid: "28", job: "врач - детский хирург", companyId: compId, departmentId: depId}).catch(err=>console.log(err));
        //       db.Specialist.create({name: "Шадрин Антон Андреевич", uid: "29", job: "заведующий структурного подразделения (отдела, отделения, лаборатории, кабинета, отряда и другое) медицинской организации - врач-специалист", companyId: compId, departmentId: depId}).catch(err=>console.log(err));
        //     }).catch(err=>console.log(err));

        //     db.Departament.create({name: "Отделение медицинской профилактики", oid: "1.2.643.5.1.13.13.12.2.72.7327.0.346336", address: "г. Тобольск, ул. Красноармейская, 4", companyId: compId}).then(res=>{
        //       const depId = res.id;
        //       db.Specialist.create({name: "Давыдова Елена Александровна", uid: "28", job: "врач - детский хирург", companyId: compId, departmentId: depId}).catch(err=>console.log(err));
        //       db.Specialist.create({name: "Шадрин Антон Андреевич", uid: "29", job: "заведующий структурного подразделения (отдела, отделения, лаборатории, кабинета, отряда и другое) медицинской организации - врач-специалист", companyId: compId, departmentId: depId}).catch(err=>console.log(err));
        //     }).catch(err=>console.log(err));

        // }).catch(err=>console.log(err));

        const tasks = await db.Company.findAll({
          include: [
            { model: db.Departament,
              separate: true },
            { model: db.Departament,
              include: db.Specialist,
              separate: true }
        ]}
        );
        console.log(JSON.stringify(tasks, null, 3));

        // db.Company.findOne({ where: { oid: '1.2.643.5.1.13.13.12.2.72.7326' } }).then(company=>{
   
        //   if(!company) return console.log("Медицинская организация не найдена");
          
        //   let dataAPI = {
        //     name: company.name,
        //     oid: company.oid,
        //     departaments: [],
        //   }

        //   company.getDepartments()
        //   .then(res=>{
        //     for(let i=0; i<res.length;i++) {
        //       let dep = {
        //         id: res[i].id,
        //         name: res[i].name,    
        //         address: res[i].address,
        //         specialist: []
        //       }

        //       company.getSpecialists(db.Departament)
        //       .then(department=>{
        //         for(let i=0; i<department.length;i++) {
        //           if(dep.id == department[i].departmentId) {
        //             let spec = {
        //               id: department[i].departmentId,
        //               name: department[i].name,    
        //               uid: department[i].uid,
        //               job: department[i].job
        //             }
        //             console.log(spec);
        //             dep.specialist.push(spec);
        //           }

                  
        //         }
        //       }).catch(err=>console.log(err));

        //       dataAPI.departaments.push(dep);
        //     }
            
        //     console.log(dataAPI);
        //   })
        //   .catch(err=>console.log(err));

        // }).catch(err=>console.log(err));

      };

module.exports = createData;