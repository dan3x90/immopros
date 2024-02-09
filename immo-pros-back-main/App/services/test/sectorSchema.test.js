import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import sectorSchema from '../Validation/schema/sectorSchema.js'; 
const { expect } = chai;

chai.use(chaiAsPromised);

describe('sectorSchema', () => {

    describe('post', () => {

        it('devrait valider un objet post correct', () => {
            const validPost = {
                label: 'Sector A-1',
                color_code: '#FFAABB',
                city: 'Paris',
                code_zip: '75001',
                collaborator_id: 1
            };

            return expect(sectorSchema.post.validateAsync(validPost)).to.be.fulfilled;
        });

        it('devrait rejeter un objet post avec label incorrect', () => {
            const invalidLabelPost = {
                label: 'Sector$A-1',
                color_code: '#FFAABB',
                city: 'Paris',
                code_zip: '75001',
                collaborator_id: 1
            };

            return expect(sectorSchema.post.validateAsync(invalidLabelPost)).to.be.rejected;
        });

        it('devrait rejeter un objet post avec color_code incorrect', () => {
            const invalidColorCodePost = {
                label: 'Sector A-1',
                color_code: '#ZFAABB',
                city: 'Paris',
                code_zip: '75001',
                collaborator_id: 1
            };

            return expect(sectorSchema.post.validateAsync(invalidColorCodePost)).to.be.rejected;
        });

        // Vous pouvez ajouter plus de tests pour d'autres validations
    });

    describe('update', () => {

        it('devrait valider un objet update correct', () => {
            const validUpdate = {
                label: 'Sector B-2',
                color_code: '#DDAABB',
                city: 'Lyon',
                code_zip: '69001',
                collaborator_id: 2
            };

            return expect(sectorSchema.update.validateAsync(validUpdate)).to.be.fulfilled;
        });

        it('devrait accepter un objet update partiellement rempli', () => {
            const partialUpdate = {
                label: 'Sector C-3',
            };

            return expect(sectorSchema.update.validateAsync(partialUpdate)).to.be.fulfilled;
        });

        // Vous pouvez ajouter plus de tests pour d'autres validations
    });

});
