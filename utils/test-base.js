const base = require('@playwright/test');


exports.customtest = base.test.extend(
{
testDataForOrder :    {
    username : "pqrs2001@gmail.com",
    password : "Abcd@1234",
    productName:"ADIDAS ORIGINAL"
    
    }

}

)




