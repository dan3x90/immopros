import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import informationSchema from '../Validation/schema/informationSchema.js'; 
const { expect } = chai;

chai.use(chaiAsPromised);

describe('informationSchema', () => {

    describe('post', () => {

        it('devrait valider un objet post correct', () => {
            const validPost = {
                type: 'appartement',
                owner_name: 'John Doe',
                owner_email: 'john.doe@immo-pros.com',
                address_number: 123,
                address_street: 'Rue de la paix',
                code_zip: 75000,
                address_city: 'Paris',
                source: 'Internet',
                category: 'à vendre',
                date: '2023-10-04',
                collaborator_id: 1,
                sector_id: 2,
                phone_1: '0123456789',
                notification_date: '2023-10-10'
            };

            return expect(informationSchema.post.validateAsync(validPost)).to.be.fulfilled;
        });

        it(`devrait rejeter un objet où code_zip n'est pas un nombre`, () => {
            const invalidPost = {
                type: 'appartement',
                owner_name: 'John Doe',
                owner_email: 'john.doe@immo-pros.com',
                address_number: 123,
                address_street: 'Rue de la paix',
                code_zip: '',
                address_city: 'Paris',
                source: 'Internet',
                category: 'à vendre',
                date: '2023-10-04',
                collaborator_id: 1,
                sector_id: 2,
                phone_1: '0123456789',
                notification_date: '2023-10-10'
            };
    
            return expect(informationSchema.post.validateAsync(invalidPost)).to.be.rejected;
        });
        
        it('devrait rejeter un objet post incorrect', () => {
            const invalidPost = {
                type: 'chalet',
                owner_name: 'Jo#hn Doe',
                owner_email: 'john.doeimmo-pros',
                address_number: "123a",
                address_street: '',
                code_zip: '75a00',
                address_city: '',
                source: '',
                category: 'vendu',
                date: '2023-13-04',
                collaborator_id: 0,
                sector_id: 0,
                phone_1: '01234567899',
                notification_date: '2023-02-30'
            };

            return expect(informationSchema.post.validateAsync(invalidPost)).to.be.rejected;
        });
    });

    describe('update', () => {

        it('devrait valider un objet update correct', () => {
            const validUpdate = {
                type: 'terrain',
                address_city: 'Lyon',
                phone_2: '0987654321',
                notification_date: '2023-10-15'
            };

            return expect(informationSchema.update.validateAsync(validUpdate)).to.be.fulfilled;
        });

        it('devrait accepter un objet update partiellement rempli', () => {
            const partialUpdate = {
                source: 'Agence',
            };

            return expect(informationSchema.update.validateAsync(partialUpdate)).to.be.fulfilled;
        });

    });
});
