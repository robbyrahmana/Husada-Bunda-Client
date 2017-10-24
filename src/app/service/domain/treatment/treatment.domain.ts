export class TreatmentHeader {
    constructor(
        public id?: string, 
        public cd?: string,
        public name?: string,
        public showbody?: number,
        public remark?: string
    ){}
}

export class TreatmentBody {
    constructor(
        public id?: string, 
        public treatmentHeaderEntity?: TreatmentHeader,
        public productEntity?: Product,
        public cd?: string,
        public name?: string,
        public cost?: string,
        public doktercost?: string,
        public remark?: string
    ){}
}

export class Product {
    constructor(
        public id?: string, 
        public cd?: string,
        public name?: string
    ){}
}

