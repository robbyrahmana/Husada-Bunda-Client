export class FieldErrors {
    constructor(
        field: string = "",
        message: string = "",
    ) { }
}

export interface ErrorRecord {
    error? : string;
    fieldErrors : FieldErrors
}