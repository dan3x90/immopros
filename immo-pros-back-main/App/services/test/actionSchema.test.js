import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import actionSchema from '../Validation/schema/actionSchema.js'; 
const { expect } = chai;

chai.use(chaiAsPromised);

describe('actionSchema', () => {
    describe('post', () => {
        it('devrait valider un objet post correct', () => {
            const validPost = {
                description: 'Description valide avec plus de cinq caractères.',
                date: '2023-10-03T00:00:00.000Z',
                information_id: 1
            };

            return expect(actionSchema.post.validateAsync(validPost)).to.be.fulfilled;
        });

        it('devrait rejeter un objet post incorrect', () => {
            const invalidPost = {
                description: 'Test',
                date: '2023-10-03T00:00:00.000Z',
                information_id: 0
            };

            return expect(actionSchema.post.validateAsync(invalidPost)).to.be.rejected;
        });
    });

    describe('update', () => {
        it('devrait valider un objet update correct', () => {
            const validUpdate = {
                description: 'Mise à jour valide avec plus de cinq caractères.',
                date: '2023-10-03T00:00:00.000Z',
                information_id: 2
            };

            return expect(actionSchema.update.validateAsync(validUpdate)).to.be.fulfilled;
        });

        it('devrait accepter un objet update partiellement rempli', () => {
            const partialUpdate = {
                description: 'Mise à jour valide.',
            };

            return expect(actionSchema.update.validateAsync(partialUpdate)).to.be.fulfilled;
        });
    });
});
