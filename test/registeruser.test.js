const chai = require('chai');
const sinon =require('sinon');
const expect =chai.expect;

//mocking dependencies
const bcrypt =require('bcrypt')
const User = require('../src/Models/userModel');
const registerUser = require('../src/Users/services/register_user');


describe('RegisterUser Function', ()=>{
    afterEach(()=>{
        sinon.restore();
    });

    it('should throw an error if required fields are missing', async()=>{
        const input={fname:'',lname:'',email:'',pass:''};

        try{
            await registerUser(input);

        }
        catch(err){
            expect(err.status).to.equal(400);
            expect(err.message).to.equal('Please provide all required fields');
        }
    });

    it('should hash the passwordand create and new user ', async()=>{
        const input={
            fname:'hemant',
            lname:"rajput",
            email:'hemanttesting@gmail.com',
            pass:'password123'
        };
        const hashedPassword = 'hashedpassword123';
        const mockUser = {
            _doc: {
                fname: 'hemant',
                lname: 'rajput',
                email: 'hemanttesting@gmail.com',
                pass: hashedPassword,
            },
        };

        // Stub the bcrypt.hash method
        const hashStub = sinon.stub(bcrypt, 'hash').resolves(hashedPassword);

        // Stub the User.create method
        const createStub = sinon.stub(User, 'create').resolves(mockUser);

        const result = await registerUser(input);

        // Assertions
        expect(hashStub.calledOnceWith(input.pass, 10)).to.be.true;
        expect(createStub.calledOnceWith({
            fname: input.fname,
            lname: input.lname,
            email: input.email,
            pass: hashedPassword,
        })).to.be.true;
        console.log()
        expect(result).to.have.property('fname', 'hemant');
        expect(result).to.have.property('lname', 'rajput');
        expect(result).to.have.property('email', 'hemanttesting@gmail.com');
        expect(result).to.not.have.property('pass');
    });

    it('should throw an error if fname is blank', async () => {
        const input = {
            fname: ' ', // Invalid input
            lname: 'rajput',
            email: 'hemanttesting@gmail.com',
            pass: 'password123',
        };
    
        try {
            await registerUser(input);
            // If no error is thrown, fail the test
            throw new Error('Test failed: Error was not thrown for blank fname');
        } catch (err) {
            expect(err).to.have.property('status', 400);
            expect(err).to.have.property('message', 'Please provide all required fields');
        }
    });
    


})