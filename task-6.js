function generateRandomPassword(length) {
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const specialCharacters = '!@#$%^&*()_-+=<>?';
  
    const allCharacters = uppercaseLetters + lowercaseLetters + numbers + specialCharacters;
  
    let password = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allCharacters.length);
      password += allCharacters[randomIndex];
    }
  
    return password;
  }
  
  // Test the function
  const passwordLength = 12; // Change this to generate a password of different length
  const randomPassword = generateRandomPassword(passwordLength);
  console.log(randomPassword);
  