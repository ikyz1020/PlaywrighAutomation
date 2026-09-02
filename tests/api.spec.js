import { test, expect } from '@playwright/test';
 
 
// register
// test('User Backend API', async ({request}) => {
// const response = await request.post('https://api-testing-postman.vercel.app/api/v1/users/register',{
// data:{
//   "fullname": "Ismail Khan",
//   "email": "ismailkhan1@gmail.com",
//    "username": "khan01",
//    "password": "khan1234"
// }
 
// });
// console.log(await response.json());
// expect(response.status()).toBe(201);
// });
 
 
//login
// test('User Backend API', async ({request}) => {
// const response = await request.post('https://api-testing-postman.vercel.app/api/v1/users/login',{
// data:{
//   "username": "khan01",
//   "email": "ismailkhan1@gmail.com",
//   "password": "khan1234"
// }
 
// });
// console.log(await response.json());
// expect(response.status()).toBe(200);
// });
 
// get all data
// test('get User API Test', async ({ request }) => {
//   const tokenResponse = await request.post('https://api-testing-postman.vercel.app/api/v1/users/login',
//     {
//       data: {
//         "username": "khan01",
//         "email": "ismailkhan1@gmail.com",
//         "password": "khan1234"
//       }
//     }
//   );
 
//   const tokenData = await tokenResponse.json();
//   const token = tokenData.token;
//   const getResponse = await request.get(
//     `https://api-testing-postman.vercel.app/api/v1/users/current-user`,
//     {
//       headers: {
//         Authorization: `Bearer ${token}`
//       }
//     }
//   );
//     console.log('Status:', getResponse.status());
//     console.log('Response:', await getResponse.json());
//   expect(getResponse.status()).toBe(200);
// });
 
 
//put/update
//1
// test('Update User API Test', async ({ request }) => {
 
//   const tokenResponse = await request.post(
//     'https://api-testing-postman.vercel.app/api/v1/users/login',
//     {
//       data: {
//         username: 'ismailkhan_update',
//         email: 'ismailkhan_updated@gmail.com',
//         password: 'khan1234'
//       }
//     }
//   );
 
//   const tokenData = await tokenResponse.json();
//   const token = tokenData.token;
 
//   const updateResponse = await request.put(
//     'https://api-testing-postman.vercel.app/api/v1/users/replace-account',
//     {
//       headers: {
//         Authorization: `Bearer ${token}`
//       },
 
//       data: {
//         fullname: 'Ismail Khan',
//         email: 'ismailkhan1@gmail.com',
//         username: 'khan01'
//       }
//     }
//   );
 
//   console.log('Status:', updateResponse.status());
//   console.log('Response:', await updateResponse.json());
 
//   expect(updateResponse.status()).toBe(200);
// });
 
//delete
 
// test('Delete User API Test', async ({ request }) => {
//   const tokenResponse = await request.post(
//     'https://api-testing-postman.vercel.app/api/v1/users/login',
//     {
//        data: {
//         "username": "khan01",
//         "email": "ismailkhan1@gmail.com",
//         "password": "khan1234"
//       }
//     }
//   );
 
//   const tokenData = await tokenResponse.json();
//   const token = tokenData.token;
//   const deleteResponse = await request.delete(
//     `https://api-testing-postman.vercel.app/api/v1/users/delete-account`,
//     {
//       headers: {
//         Authorization: `Bearer ${token}`
//       }
//     }
//   );
//         console.log('Status:', deleteResponse.status());
//         console.log('Response:', await deleteResponse.json());
//   expect(deleteResponse.status()).toBe(200);
// });
 