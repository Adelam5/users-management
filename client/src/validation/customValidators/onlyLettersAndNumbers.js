const validatorType = "ONLY_LETTERS_AND_NUMBERS"; // AND SPACES

export const onlyLettersAndNumbers = ({ value, customArgs }) => {
  const validationResult = {
    succeeded: false,
    type: validatorType,
    message: customArgs.message || "May contain only letters and numbers",
  };

  if (/^[\w ]+$/g.test(value)) {
    validationResult.succeeded = true;
    validationResult.message = "";
  }

  return validationResult;
};
