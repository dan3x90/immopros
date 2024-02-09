import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import avatarSchema from '../Validation/schema/avatarSchema.js'; 
const { expect } = chai;

chai.use(chaiAsPromised);

describe('avatarSchema', () => {
    describe('post', () => {
        it('devrait valider un objet post correct', () => {
            const validPost = {
                label: 'Label valide avec plus de trois caractères.',
                url: 'https://www.immo-Pros.com'
            };

            return expect(avatarSchema.post.validateAsync(validPost)).to.be.fulfilled;
        });

        it('devrait rejeter un objet post incorrect', () => {
            const invalidPost = {
                label: 'la',
                url: 'https://www.immo-Pros.com'
            };

            return expect(avatarSchema.post.validateAsync(invalidPost)).to.be.rejected;
        });
    }); 

    describe('update', () => {
        it('devrait valider un objet update correct', () => {
            const validUpdate = {
                label: 'Mise à jour valide avec plus de trois caractères.',
                url: 'https://www.immo-Pros.com'
            };

            return expect(avatarSchema.update.validateAsync(validUpdate)).to.be.fulfilled;
        });

        it('devrait accepter un objet update partiellement rempli', () => {
            const partialUpdate = {
                label: 'Mise à jour valide.',
            };

            return expect(avatarSchema.update.validateAsync(partialUpdate)).to.be.fulfilled;
        });
    }); 
});
