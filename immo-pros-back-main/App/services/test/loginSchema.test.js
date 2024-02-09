import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import loginSchema from '../Validation/schema/loginSchema.js'; 
const { expect } = chai;

chai.use(chaiAsPromised);

describe('loginSchema', () => {

    describe('post', () => {

        it('devrait valider un objet post correct', () => {
            const validPost = {
                email: 'john.doe@immo-pros.com',
                password: 'securePassword'
            };

            return expect(loginSchema.post.validateAsync(validPost)).to.be.fulfilled;
        });

        it('devrait rejeter un objet post avec email incorrect', () => {
            const invalidEmailPost = {
                email: 'john.doeimmo-pros',
                password: 'securePassword'
            };

            return expect(loginSchema.post.validateAsync(invalidEmailPost)).to.be.rejected;
        });

        it('devrait rejeter un objet post avec mot de passe trop court', () => {
            const shortPasswordPost = {
                email: 'john.doe@immo-pros.com',
                password: 'pw'
            };

            return expect(loginSchema.post.validateAsync(shortPasswordPost)).to.be.rejected;
        });

    });

});
