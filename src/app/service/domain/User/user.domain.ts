export class UserGroup {
    constructor(
        public id?: string, 
        public cd?: string,
        public name?: string
    ){}
}

export class User {
    constructor(
        public id?: string, 
        public username?: string,
        public password?: string,
        public userGroupEntity?: UserGroup
    ){}
}

export class MenuHeader {
    constructor(
        public id?: string, 
        public name?: string,
        public icon?: string,
        public seqNo?: number
    ){}
}

export class Menu {
    constructor(
        public id?: string, 
        public menuHeaderEntity?: MenuHeader, 
        public link?: string,
        public name?: string,
        public icon?: string,
        public seqNo?: number
    ){}
}

export class UserAccessibility {
    constructor(
        public id?: string, 
        public userGroupEntity?: UserGroup, 
        public menuEntity?: Menu
    ){}
}