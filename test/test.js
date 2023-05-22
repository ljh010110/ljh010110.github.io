const chai = require('chai');
const chaiHttp = require('chai-http');
const winston = require('winston');
const app = require('../app'); // 여기서 '../app'은 익스프레스 애플리케이션 파일의 경로에 맞게 수정해야 합니다.

chai.use(chaiHttp);
const expect = chai.expect;

const logger = winston.createLogger({
  transports: [
    new winston.transports.File({ filename: 'test.log' })
  ]
});

function extractTitleFromHTML(html) {
  // 제목 추출 로직을 구현해야 합니다.
  // 예시로 'html' 매개변수에서 제목을 추출하는 코드를 작성합니다.
  // 예: return html.match(/<title>(.*?)<\/title>/)[1];
  return '';
}

describe('Homepage Test', () => {
  it('Page Loading Test', async () => {
    const response = await chai.request(app).get('/');
    const title = extractTitleFromHTML(response.body);

    expect(title).to.equal("ljh010110's Homepage");

    logger.info('Test Log Message');
  });
});
