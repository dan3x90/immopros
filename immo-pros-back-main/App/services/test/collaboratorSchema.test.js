import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import collaboratorSchema from '../Validation/schema/collaboratorSchema.js'; 
const { expect } = chai;

chai.use(chaiAsPromised);

describe('collaboratorSchema', () => {

    describe('post', () => {

        it('devrait valider un objet post correct', () => {
            const validPost = {
                firstname: 'John',
                lastname: 'Doe',
                email: 'john.doe@immo-pros.com',
                password: 'Secure123!',
                phone: '0123456789',
                acces: true,
                secret_key: 'someKey',
                avatar_id: 1
            };

            return expect(collaboratorSchema.post.validateAsync(validPost)).to.be.fulfilled;
        });

        it('devrait rejeter un objet post incorrect', () => {
            const invalidPost = {
                firstname: 'Jo#hn',
                lastname: 'Doe',
                email: 'john.doe@immo-pros',
                password: '1234',
                phone: '01234567899',
                acces: 'true',
                secret_key: 'someKey',
                avatar_id: "one"
            };

            return expect(collaboratorSchema.post.validateAsync(invalidPost)).to.be.rejected;
        });

    });

    describe('update', () => {

        it('devrait valider un objet update correct', () => {
            const validUpdate = {
                firstname: 'Johnny',
                email: 'johnny.doe@immo-pros.com',
                phone: '0987654321',
                acces: false
            };

            return expect(collaboratorSchema.update.validateAsync(validUpdate)).to.be.fulfilled;
        });

        it('devrait accepter un objet update partiellement rempli', () => {
            const partialUpdate = {
                lastname: 'Doey',
            };

            return expect(collaboratorSchema.update.validateAsync(partialUpdate)).to.be.fulfilled;
        });

    });

});
