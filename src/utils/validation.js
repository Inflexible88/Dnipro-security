export function validateEmail(value) {
    let error;
    if (!value) {
      error = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = 'Invalid email address!';
    }
    return error;
  }
  
  export function validateUsername(value) {
    let error;
    if (value && value.length < 2) {
      error = 'Invalid phone number!';
    }
    return error;
  }

  export function validatePhoneNumber(value) 
  {
    let error;
    const candidate = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im;

    if (!value.match(candidate)) {
      error = 'Invalid phone number!';
    }
    return error;
  }