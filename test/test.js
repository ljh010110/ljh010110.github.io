const chai = require('chai');
const chaiHttp = require('chai-http');
const winston = require('winston');

chai.use(chaiHttp);
const expect = chai.expect;

const logger = winston.createLogger({
  transports: [
    new winston.transports.File({ filename: 'test.log' })
  ]
});

describe('Homepage Test', () => {
  it('Page Loading Test', async () => {
    const response = await chai.request(app).get('/');
    const title = extractTitleFromHTML(response.body);

    expect(title).to.equal("ljh010110's Homepage");

    logger.info('Test Log Message');
  });
});
