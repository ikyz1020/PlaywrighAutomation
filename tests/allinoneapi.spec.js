import { test, expect } from '@playwright/test';
 
test.describe.configure({ mode: 'serial' });
 
let user = {
  fullname: 'Ismail Khan',
  email: `Ismailkhan${Date.now()}@gmail.com`,
  username: `Ismailkhan${Date.now()}`,
  password: 'Ismail12$'
};
 
let token;
 
//register
test('Register User API Test', async ({ request }) => {
 
  const response = await request.post(
    'https://api-testing-postman.vercel.app/api/v1/users/register',
    {
      data: {
        fullname: user.fullname,
        email: user.email,
        username: user.username,
        password: user.password
      }
    }
  );
 
  console.log('Register Status:', response.status());
  console.log('Register Response:', await response.text());
 
  expect(response.status()).toBe(201);
});
 
//login
test('Login User API Test', async ({ request }) => {
 
  const response = await request.post(
    'https://api-testing-postman.vercel.app/api/v1/users/login',
    {
      data: {
        username: user.username,
        email: user.email,
        password: user.password
      }
    }
  );
 
  const responseData = await response.json();
 
  console.log('Login Status:', response.status());
  console.log('Login Response:', responseData);
 
  token = responseData.data.accessToken;
 
  expect(response.status()).toBe(200);
  expect(token).toBeTruthy();
});
 
//fetch user
test('Get Current User API Test', async ({ request }) => {
 
  const response = await request.get(
    'https://api-testing-postman.vercel.app/api/v1/users/current-user',
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
 
  console.log('Get Status:', response.status());
  console.log('Get Response:', await response.json());
 
  expect(response.status()).toBe(200);
});
 
//update user
test('Update User API Test', async ({ request }) => {
 
  const updatedUser = {
    fullname: 'Ismail Khan Updated',
    email: `Ismailkhanupdated${Date.now()}@gmail.com`,
    username: `Ismailkhanupdated${Date.now()}`
  };
 
  const response = await request.put(
    'https://api-testing-postman.vercel.app/api/v1/users/replace-account',
    {
      headers: {
        Authorization: `Bearer ${token}`
      },
 
      data: updatedUser
    }
  );
 
  console.log('Update Status:', response.status());
  console.log('Update Response:', await response.json());
 
  expect(response.status()).toBe(200);
 
  user.fullname = updatedUser.fullname;
  user.email = updatedUser.email;
  user.username = updatedUser.username;
});
 
 
test('Login With Updated User API Test', async ({ request }) => {
 
  const response = await request.post(
    'https://api-testing-postman.vercel.app/api/v1/users/login',
    {
      data: {
        username: user.username,
        email: user.email,
        password: user.password
      }
    }
  );
 
  const responseData = await response.json();
 
  console.log('Updated Login Status:', response.status());
  console.log('Updated Login Response:', responseData);
 
  token = responseData.data.accessToken;
 
  expect(response.status()).toBe(200);
  expect(token).toBeTruthy();
});
 
//delete user
test('Delete Updated User API Test', async ({ request }) => {
 
  const response = await request.delete(
    'https://api-testing-postman.vercel.app/api/v1/users/delete-account',
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
 
  console.log('Delete Status:', response.status());
  console.log('Delete Response:', await response.json());
 
  expect(response.status()).toBe(200);
});
 
 
 