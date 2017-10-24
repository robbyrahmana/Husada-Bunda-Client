export class AssetGroup {
    constructor(
        public id?: string, 
        public cd?: string,
        public name?: string,
        public description?: string
    ){}
}

export class Asset {
    constructor(
        public id?: string, 
        public cd?: string,
        public name?: string,
        public assetGroupEntity?: AssetGroup,
        public price?: string,
        public getDate?: Date,
        public remark?: string
    ){}
}