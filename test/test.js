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

const app = require('../app'); // 여기서 '../app'는 익스프레스 애플리케이션 파일의 경로에 맞게 수정해야 합니다.

describe('Homepage Test', () => {
  it('Page Loading Test', async () => {
    const response = await chai.request(app).get('/');
    const title = extractTitleFromHTML(response.body);

    expect(title).to.equal("ljh010110's Homepage");

    logger.info('Test Log Message');
  });
});
