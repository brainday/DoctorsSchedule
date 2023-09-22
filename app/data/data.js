const axios = require("axios");
const db = require("../models");



// const Op = db.Sequelize.Op;


async function createData() {
          // const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
          // console.log(response.title);
  
        //   db.Product.create({ name: "Apple"}).then(res=>{
     
        //     // получаем id созданной компании
        //     const compId = res.id;
        //     //создаем пару товаров для этой компании
        //     db.Company.create({name:"iPhone XS", price: 400, companyId: compId}).catch(err=>console.log(err));
        //     db.Company.create({name:"iPhone XR", price: 350, companyId: compId}).catch(err=>console.log(err));

             
        // }).catch(err=>console.log(err));

        db.Product.findOne({ where: { name: 'Apple' } }).then(company=>{
   
          if(!company) return console.log("Company not found");
          company.getProducts()
          .then(res=>{
            for(let i=0; i<res.length;i++)
              console.log(res[i].name, " - ", company.name,  " - ", res[i].price);
          })
          .catch(err=>console.log(err));
        }).catch(err=>console.log(err));
      };

module.exports = createData;