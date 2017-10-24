export class RoomCategory {
    constructor(
        public id?: string, 
        public cd?: string,
        public name?: string,
        public dscp?: string
    ){}
}

export class RoomDetail {
    constructor(
        public id?: string, 
        public cd?: string,
        public name?: string,
        public cost?: string,
        public roomCategoryEntity?: RoomCategory,
        public dscp?: string,
    ){}
}

export class RoomBed {
    constructor(
        public id?: string, 
        public cd?: string,
        public roomDetailEntity?: RoomDetail,
        public dscp?: string,
        public isAvailable?: boolean
    ){}
}