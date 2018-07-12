import { Injectable } from "@angular/core";

export interface MenuItem{
displayName: string;
disabled?: boolean;
iconName: string;
route?: string;
children?: MenuItem[];
}

@Injectable()
export class  MenuService{

items :Array<MenuItem>;
isVertical = false;


}