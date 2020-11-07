import { CustomError } from "./custom-error";

export class QueryError extends CustomError {
  statusCode = 409;

  constructor(message: string) {
    super(message);

    Object.setPrototypeOf(this, QueryError.prototype);
  }

  serializeErrors() {
    return [
      {
        message: this.message,
        field: "req.query",
      },
    ];
  }
}
