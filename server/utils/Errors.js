export class GeneralError extends Error {
  constructor() {
    super();
  }

  getCode() {
    return this.code;
  }

  getMessage() {
    return this.message;
  }
}

export class BadRequest extends GeneralError {
  constructor(message) {
    super();
    this.code = 400;
    this.message = message;
  }
}

export class Unauthorized extends GeneralError {
  constructor() {
    super();
    this.code = 401;
    this.message = "Unauthorized";
  }
}

export class Forbidden extends GeneralError {
  constructor() {
    super();
    this.code = 403;
    this.message = "Forbidden"
  }
}

export class NotFound extends GeneralError {
  constructor() {
    super();
    this.code = 404;
    this.message = "Not Found";
  }
}