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
  required: {
    value: true,
    message: '이메일을 입력해주세요.',
  },
  pattern: {
    value: VALIDATE.userEmail,
    message: '이메일 형식으로 작성해주세요.',
  },
};
export const phoneValidate = {
  required: {
    value: true,
    message: '휴대폰 번호를 입력해주세요.',
  },
  pattern: {
    value: VALIDATE.userPhone,
    message: '010-XXXX-XXXX 형식으로 입력 해주세요.',
  },
};

export const passwordValidate = {
  required: {
    value: true,
    message: '비밀번호를 입력해주세요.',
  },
  pattern: {
    value: VALIDATE.userPassword,
    message: '숫자, 영문자조합으로 8자리 이상으로 작성해주세요',
  },
  minLength: {
    value: 8,
    message: '8자 이상 작성해주세요',
  },
};

export const passwordCheckValidate = {
  required: {
    value: true,
    message: '비밀번호를 한번 더 입력해주세요.',
  },
};

export const ownerValidate = {
  required: {
    value: true,
    message: '내용을 입력해주세요',
  },
};

export const nicknameValidate = {
  required: {
    value: true,
    message: '닉네임을 입력해주세요.',
  },
  minLength: {
    value: 3,
    message: '닉네임은 3자 이상 작성해주세요',
  },
};

export const vehicleNumberValidate = {
  required: { value: true, message: '' },
  pattern: {
    value: VALIDATE.vehicleNumber,
    message: '잘못된 차량 번호입니다.',
  },
};
