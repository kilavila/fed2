/**
 * @function emailCheck
 * @param {string} email
 * @returns {boolean}
 */
function emailCheck(email) {
  console.log(email);
  const emailRegex = /^[\w\-.]+@(stud\.)?noroff\.no$/;
  let emailMatch = emailRegex.test(email);

  console.log(emailMatch);

  if (!emailMatch) {
    alert("Epost ikke gylding, må være en stud.noroff.no epost");
    return false;
  }
  return true;
}

/**
 * @function pswCheck
 * @param {string} password
 * @returns {boolean}
 */
function pswCheck(password) {
  const pswRegex = /[a-zA-Z0-9]{8,20}/g;
  let pswMatch = pswRegex.test(password);
  if (!pswMatch) {
    alert("Passord ikke gylding, må være minst 8 tegn");
    return false;
  }
  return true;
}

export { emailCheck, pswCheck };
