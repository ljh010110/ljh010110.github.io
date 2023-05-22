const winston = require('winston');

const logger = winston.createLogger({
  transports: [
    new winston.transports.File({ filename: 'test.log' })
  ]
});

describe('Homepage Test', () => {
  it('Page Loading Test', () => {
    
    const response = await chai.request(app).get('/');
    const title = extractTitleFromHTML(response.body);

    expect(title).to.equal("ljh010110's Homepage");

    // 예시로 로그 출력
    logger.info('Test Log Message');
  });
});
