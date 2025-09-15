
import {test as baseTest} from '@playwright/test';
interface TestDataForOrder {
    username: string;
    password: string;
    productName: string;
};
export const customTest = baseTest.extend<{testDataForOrder:TestDataForOrder}>(
{
testDataForOrder :    {
    username : "pqrs2001@gmail.com",
    password : "Abcd@1234",
    productName:"ADIDAS ORIGINAL"
    
    }

}

)




