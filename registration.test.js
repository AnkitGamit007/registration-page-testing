// registration.test.js
describe('Registration Page', () => {
    beforeAll(async () => {
      await page.goto('http://localhost:3000/register');
    });
  
    it('should display the registration form', async () => {
      const form = await page.$('form#registration-form');
      expect(form).not.toBeNull();
    });
  
    it('should register a user successfully', async () => {
      await page.type('input[name="username"]', 'testuser');
      await page.type('input[name="email"]', 'testuser@example.com');
      await page.type('input[name="password"]', 'password123');
      await page.click('button[type="submit"]');
  
      // Check if registration was successful
      const successMessage = await page.$eval('.success-message', el => el.textContent);
      expect(successMessage).toContain('Registration successful');
    });
  
    it('should show an error for missing fields', async () => {
      await page.click('button[type="submit"]');
      
      // Check for error messages
      const errorMessages = await page.$eval('.error-messages', el => el.textContent);
      expect(errorMessages).toContain("All fields are required");
    });
  });
  