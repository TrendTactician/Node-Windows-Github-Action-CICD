const request = require('supertest');
const app = require('../app');

let server;

beforeAll((done) => {
  server = app.listen(3000, () => {
    // Wait for the server to start
    done();
  });
});

afterAll((done) => {
  // Close server and wait for the close event
  server.close(() => {
    // Ensure Jest exits cleanly
    done();
  });
});

describe('Node CI/CD app', () => {
  it('GET / should return message and version', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('message');
    expect(res.body).toHaveProperty('version');
  });

  it('GET /health should return ok status', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('ok');
  });
});
