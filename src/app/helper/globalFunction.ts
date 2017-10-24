import { Injectable } from '@angular/core';

export class GlobalFunction {

    generateArray(obj: any){ return Object.keys(obj).map((key)=>{
        return obj[key]
    }); }

}