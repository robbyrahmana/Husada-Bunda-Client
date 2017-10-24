import { Gender, Religion } from '../maintenance/maintenance.domain';
import { TreatmentBody } from '../treatment/treatment.domain';
import { UserGroup } from '../user/user.domain';

export class Desease {
    constructor(
        public id?: string, 
        public cd?: string,
        public name?: string,
        public remark?: string
    ){}
}

export class DokterCost {
    constructor(
        public id?: string, 
        public functionalityEntity?: Functionality,
        public treatmentBodyEntity?: TreatmentBody,
        public cost?: string
    ){}
}

export class Functionality {
    constructor(
        public id?: string, 
        public positionEntity?: Position,
        public sMFEntity?: SMF,
        public userGroupEntity?: UserGroup,
        public cd?: string,
        public name?: string,
        public genderEntity?: Gender,
        public birthplace?: string,
        public birthday?: Date,
        public religionEntity?: Religion,
        public addrline1?: string,
        public addrline2?: string,
        public addrline3?: string,
        public addrline4?: string,
        public addrline5?: string,
        public postcode?: string,
        public mobilenumber?: string,
        public salary?: string,
        public inDate?: Date
    ){}
}

export class Position {
    constructor(
        public id?: string, 
        public cd?: string,
        public name?: string,
        public remark?: string
    ){}
}

 export class SMF {
     constructor(
        public id?: string, 
        public cd?: string,
        public name?: string,
        public remark?: string
    ){}
 }