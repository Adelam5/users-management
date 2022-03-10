const validatorType = "ONLY_LETTERS";

export const onlyLetters = ({ value, customArgs }) => {
  const validationResult = {
    succeeded: false,
    type: validatorType,
    message: customArgs.message || "May contain only letters",
  };

  if (/^[a-zA-Z]+$/.test(value)) {
    validationResult.succeeded = true;
    validationResult.message = "";
  }

  return validationResult;
};
