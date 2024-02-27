export const VALIDATE: { [key: string]: RegExp } = {
  userEmail:
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  userPassword: /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/,
  userPhone: /^010-\d{4}-\d{4}$/,
  vehicleNumber: /^\d{2,3}\s*[가-힣]{1}\s*\d{4}$/gm,
};

export const requiredValidate = {
  required: {
    value: true,
    message: '',
  },
};

export const emailValidate = {
  pattern: {
    value: VALIDATE.userEmail,
    message: '올바른 이메일 형식으로 입력해주세요.',
  },
};
export const phoneValidate = {
  pattern: {
    value: VALIDATE.userPhone,
    message: '010-XXXX-XXXX 형식으로 입력 해주세요.',
  },
};

export const passwordValidate = {
  pattern: {
    value: VALIDATE.userPassword,
    message: '비밀번호를 확인해주세요',
  },
};

export const passwordCheckValidate = {};

export const ownerValidate = {
  required: {
    value: true,
    message: '내용을 입력해주세요',
  },
};

export const nicknameValidate = {
  minLength: {
    value: 2,
    message: '이름은 2자 이상 작성해주세요',
  },
};

export const vehicleNumberValidate = {
  pattern: {
    value: VALIDATE.vehicleNumber,
    message: '차량번호를 확인해주세요.',
  },
};
