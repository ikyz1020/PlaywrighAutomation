# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\api.spec.js >> Register New User
- Location: tests\api.spec.js:47:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 201
Received: 409
```

# Test source

```ts
  1  | // 201-200	Successful registration
  2  | // 400	Bad/invalid request data
  3  | // 401	Missing/invalid authentication
  4  | // 403	Authenticated but not allowed
  5  | // 404	Endpoint/resource doesn't exist
  6  | // 409	Conflict, e.g. existing user
  7  | // 500  A server error has occurred
  8  | 
  9  | import { test, expect } from '@playwright/test';
  10 | 
  11 | //1 200 success
  12 | // test('Get All Books API Test', async ({request}) => {
  13 | // const response = await request.get('https://demoqa.com/BookStore/v1/Books');
  14 | // console.log(await response.json());
  15 | // expect(response.status()).toBe(200);
  16 |  
  17 |  
  18 | // });
  19 | 
  20 | //2 fail due to Book
  21 | // test('Get All Books API Test', async ({request}) => {
  22 | // const response = await request.get('https://demoqa.com/BookStore/v1/Book');
  23 | // console.log(await response.json());
  24 | // expect(response.status()).toBe(200);
  25 |  
  26 |  
  27 | // });
  28 | 
  29 | // 3 post data 409 user already registered
  30 | // test('Get All Books API Test', async ({request}) => {
  31 | // const response = await request.post('https://api-testing-postman.vercel.app/api/v1/users/register',{
  32 | // data:{
  33 | //   "fullname": "Ismail khan",
  34 | //   "email": "test@example.com",
  35 | //   "username": "ismail0123",
  36 | //   "password": "khan12312356"
  37 | // }
  38 | 
  39 | // });
  40 | // console.log(await response.json());
  41 | // expect(response.status()).toBe(201);
  42 |  
  43 |  
  44 | // });
  45 | 
  46 | //4 new user 201 or 200 success
  47 | test('Register New User', async ({ request }) => {
  48 | 
  49 |     const response = await request.post(
  50 |         'https://api-testing-postman.vercel.app/api/v1/users/register',
  51 |         {
  52 |             data: {
  53 |                 fullname: "Ismail khan",
  54 |                 email: "ikyz@gmail.com",
  55 |                 username: "khan1234567",
  56 |                 password: "khan1234"
  57 |             }
  58 |         }
  59 |     );
  60 | 
  61 |     console.log('Status:', response.status());
  62 |     console.log('Response:', await response.json());
  63 | 
> 64 |     expect(response.status()).toBe(201);
     |                               ^ Error: expect(received).toBe(expected) // Object.is equality
  65 | });
  66 | 
  67 | // 404 Negative Test
  68 | // test('Register User - Invalid Endpoint - 404', async ({ request }) => {
  69 | 
  70 | //     const response = await request.post(
  71 | //         'https://api-testing-postman.vercel.app/api/v1/users/register123',
  72 | //         {
  73 | //             data: {
  74 | //                 fullname: "Ismail khan",
  75 | //                 email: "newuser123@example.com",
  76 | //                 username: "newuser123",
  77 | //                 password: "khan1234"
  78 | //             }
  79 | //         }
  80 | //     );
  81 | 
  82 | //     console.log('Status:', response.status());
  83 | //     console.log('Response:', await response.json());
  84 | 
  85 | //     expect(response.status()).toBe(404);
  86 | // });
  87 | 
  88 | //delete user
  89 | // test('Delete User Account API Test', async ({ request }) => {
  90 | 
  91 | //     const response = await request.delete(
  92 | //         'https://api-testing-postman.vercel.app/api/v1/users/delete-account'
  93 | //     );
  94 | 
  95 | //     console.log('Status:', response.status());
  96 | //     console.log('Response:', await response.text());
  97 | 
  98 | //     expect(response.status()).toBe(200);
  99 | // });
```