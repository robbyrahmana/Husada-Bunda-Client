import { Unit }     from '../maintenance/maintenance.domain';

export class Medicine {
    constructor(
        public id?: string, 
        public cd?: string,
        public name?: string,
        public unitEntity?: Unit,
        public remark?: string
    ){}
}

export class MedicineUnitConverter {
    constructor(
        public id?: string,
        public medicineEntity?: Medicine,
        public unitEntity?: Unit,
        public quantity?: string,
        public price?: string
    ){}
}