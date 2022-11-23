import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello, World 🎸 😂');
  });

  it('/contact (POST) successful', () => {
    return request(app.getHttpServer())
      .post('/contact')
      .send({
        firstname: 'Jerry',
        lastname: 'Heir',
        email: 'nwaezejerry@gmail.com',
        message: 'Hello World',
      })
      .expect({ status: 'success', message: 'Contact added successfully' });
  });

  it('/contact (POST) NO EMAIL', () => {
    return request(app.getHttpServer())
      .post('/contact')
      .send({
        firstname: 'Jerry',
        lastname: 'Heir',
        message: 'Hello World',
      })
      .expect({ status: 'error', message: 'Invalid Request: Missing fields' });
  });
});
