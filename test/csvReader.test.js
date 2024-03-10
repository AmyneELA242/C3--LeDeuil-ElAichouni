//Test du Lecteur de CSV
import fs from 'fs';
import CSVReader from '../src/CSVReader.js';
import { expect } from 'chai';

describe('Lecteur CSV', () => {
    const filePath = 'test.csv';

    it('1. Devrait lire le fichier CSV des équipes', async () => {
        const data = [{ id: '1', name: 'John' }, { id: '2', name: 'Jane' }, { id: '3', name: 'Doe' }];
        fs.writeFileSync(filePath, 'id,name\n1,John\n2,Jane\n3,Doe\n');

        const reader = new CSVReader(filePath);
        const result = await reader.readCSV();

        expect(result).to.deep.equal(data);
    });

    afterEach(() => {
        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
        }
    });
});
