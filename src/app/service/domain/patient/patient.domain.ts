import { Title, Gender, Religion, BloodGroup, Insurance, Relationship, Education, Rhesus, Work, Identity, Tribe } from '../maintenance/maintenance.domain';

import { RoomCategory, RoomBed, RoomDetail } from '../room/room.domain';

import { Functionality, Desease } from '../functionality/functionality.domain';

import { TreatmentBody, TreatmentHeader } from '../treatment/treatment.domain';

import { Medicine, MedicineUnitConverter } from '../apoteker/apoteker.domain';

import { Status } from '../status/status.domain';

export class Patient {
    constructor(
        public id?: string, 
        public refnopatient?: string,
        public titleEntity?: Title,
        public name?: string,
        public genderEntity?: Gender,
        public relationshipEntity?: Relationship,
        public relationshipname?: string,
        public parentname?: string,
        public birthplace?: String,
        public birthday?: Date,
        public educationEntity?: Education,
        public bloodGroupEntity?: BloodGroup,
        public rhesusEntity?: Rhesus,
        public nationality?: string,
        public workEntity?: Work,
        public identityEntity?: Identity,
        public religionEntity?: Religion,
        public identitynumber?: String,
        public tribeEntity?: Tribe,
        public addrline1?: String,
        public addrline2?: String,
        public addrline3?: String,
        public addrline4?: String,
        public addrline5?: String,
        public postcode?: string,
        public mobilenumber?: String,
        public insuranceEntity?: Insurance,
        public roomCategoryEntity?: RoomCategory,
        public insurancenumber?: String,
        public emergencyname?: string,
        public emergencymobilenumber?: string,
        public emergencyaddress?: string,
        public createDate?:Date
    ){}
}

export class PatientAdministration {
    constructor(
        public id?: string, 
        public refnoadministrations?: string,
        public patientEntity?: Patient,
        public adminoption?: string,
        public deseaseEntity?: Desease,
        public functionalityEntity?: Functionality,
        public roomBedEntity?: RoomBed,
        public insuranceEntity?: Insurance,
        public roomCategoryEntity?: RoomCategory,
        public roomDetailEntity?: RoomDetail,
        public insurancenumber?: String,
        public inDate?:Date,
        public outDate?:Date,
        public cost?:string
    ){}
}

export class PatientTreatment {
    constructor(
        public id?: string, 
        public patientAdministrationEntity?: PatientAdministration,
        public treatmentHeaderEntity?: TreatmentHeader,
        public treatmentBodyEntity?: TreatmentBody,
        public functionalityEntity?: Functionality,
        public cost?: string,
        public doktercost?: string,
        public remark?: string,
        public createDate?: Date,
        public status?: Status
    ){}
}

export class PatientMedicine {
    constructor(
        public id?: string, 
        public patientAdministrationEntity?: PatientAdministration,
        public treatmentBodyEntity?: TreatmentBody,
        public refnomedicine?: string,
        public totalCost?: string,
        public status?: Status,
        public collectDate?: Date,
        public createDate?: Date
    ){}
}

export class PatientMedicineDetails {
    constructor(
        public id?: string, 
        public patientMedicineEntity?: PatientMedicine,
        public medicineEntity?: Medicine,
        public medicineUnitConverterEntity?: MedicineUnitConverter,
        public quantity?: number,
        public cost?: number
    ){}
}

export class PatientOperation {
    constructor(
        public id?: string, 
        public patientAdministrationEntity?: PatientAdministration,
        public functionalityEntity?: Functionality,
        public remark?: string,
        public createDate?: Date
    ){}
}

export class PatientOperationDetails {
    constructor(
        public id?: string, 
        public patientOperationEntity?: PatientOperation,
        public treatmentHeaderEntity?: TreatmentHeader,
        public treatmentBodyEntity?: TreatmentBody,
        public cost?: string,
        public doktercost?: string,
        public remark?: string,
        public status?: Status
    ){}
}
