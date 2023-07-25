const thePass = (length) => {
    const allChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:,.<>?';
    let password = '';
  
    if (length < 4) return ('Password length must be at least 4 characters');
  
    for (let i = 0; i < length; i++)
      password += allChars.charAt(Math.floor(Math.random() * allChars.length));
  
    return password;
  };

  const res = thePass(12);
  console.log(res);