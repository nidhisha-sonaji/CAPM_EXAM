module.exports = cds.service.impl(async function () {
    const { EmployeeSet } = this.entities;
    
    ///   VALIDATIONS FOR CREATE
    this.before('CREATE', EmployeeSet, (req) => {
        const sal = req.data.salaryAmount;
        const curr_code = req.data.Currency;

        console.log(`Salary: ${sal}, Currency: ${curr_code}`);

        if (sal > 50000 && curr_code !== 'USD') {
            req.error("Employee’s salary must be less than 50000 USD");
        } 
    });

    this.before('CREATE', EmployeeSet, (req) => {
        var currency_code = req.data.Currency_code
        if(currency_code != 'USD'){
            req.error("Employee’s salary must be less than 50000 USD");

        }
    });


    this.after('CREATE', EmployeeSet, (req) => {
        console.log("Create operation successful");
    });

    //// VALIDATIONS FOR UPDATE
    this.before('UPDATE',EmployeeSet,(req)=>{
        if(('nameFirst' in req.data) || ('loginName' in req.data) ){
                req.error("Operation not allowed");
        }
    });

    this.after('UPDATE', EmployeeSet, (req) => {
        console.log("Update operation successful");
    });


    /// DELETE VALIDATIONS

    this.on('DELETE',EmployeeSet,(req)=>{
        console.log("Update operation successful");
    })
});



 