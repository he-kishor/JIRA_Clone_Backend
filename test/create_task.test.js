const chai = require('chai');
const expect = chai.expect;

const createtask = require('../src/Tasks/services/create_task');

describe('create the task',()=>{
    it('Should throw the error that feild is required for TASK CREATION',async()=>{
        const input_data ={
            task_title:" ", task_description:"hemant"
        };

        try{
            await createtask('24533434',input_data);
        }
        catch(err){
            expect(err.status).to.equal(400);
            expect(err.message).to.equal('Please provide all required fields');
        }
    });
})