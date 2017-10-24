import { 
    Component, 
    Directive, 
    ElementRef, 
    AfterViewInit 
}                                               from '@angular/core';

import { AuthService }      from '../login/guard/auth.service';

import { 
    GlobalConstant 
}                                               from '../helper/globalConstant';

import { 
    globalIntercept 
}                                               from '../service/intercept/globalIntercept';

import { 
    FunctionalityService 
}                                               from '../service/intercept/functionality/functionality.service';

import { 
    UserAccessibility
}                                               from '../service/domain/user/user.domain';

import { 
    UserService 
}                                               from '../service/intercept/user/user.service';

@Directive({
  selector: "[scrollbar]"
})
export class ScrollbarChecked {
    layoutStatus: string;

    ngAfterViewInit(el: ElementRef) {
        if (!$('html').hasClass('ismobile')) {
            //On Custom Class
            if ($('.c-overflow')[0]) {
                //this.scrollBar('.c-overflow', 'minimal-dark', 'y');
                /*jQuery('.c-overflow').mCustomScrollbar({
                    theme: 'minimal-dark',
                    scrollInertia: 100,
                    axis:'yx',
                    mouseWheel: {
                        enable: true,
                        axis: 'y',
                        preventDefault: true
                    }
                });*/
            }
        }
    }

    /*scrollBar(selector, theme, mousewheelaxis) {
        $(selector).mCustomScrollbar({
            theme: theme,
            scrollInertia: 100,
            axis:'yx',
            mouseWheel: {
                enable: true,
                axis: mousewheelaxis,
                preventDefault: true
            }
        });
    }*/
}

@Component({
  selector: 'my-site',
  templateUrl: './site.component.html',
  styleUrls : ['./site.component.css'],
})
export class SiteComponent extends GlobalConstant{

    userMenu: UserAccessibility = new UserAccessibility();
    lookup = {};
    userMenuHeader = [];

    header: any = "Home";
    location: any = "";

    constructor(private authService: AuthService, public globalConstant: GlobalConstant, globalIntercept: globalIntercept, dataService_user : FunctionalityService, private dataService_menu : UserService) {
        super(globalIntercept, dataService_user);
        jQuery('body').removeClass('login-content');
        jQuery('body').css('height', '100%');
        jQuery('body').css('overflow-y', 'scroll');

        this.dataService_menu.getMenuByUserGroupIdAction(sessionStorage.getItem("user_access")).subscribe(data => {
            this.userMenu = data;

            var items = data

            for (var item, i = 0; item = items[i++];) {
                var name = item.menuEntity.menuHeaderEntity.id;
                if (!(name in this.lookup)) {
                    this.lookup[name] = 1;
                    this.userMenuHeader.push(item.menuEntity.menuHeaderEntity);
                }
            }
        });
        //alert(sessionStorage.getItem("user_access"));
    }

    changelocation(header: any, location: any) {
        this.header = header;
        this.location = location;
    }

    logout()
    {
        this.authService.logout();
    }
}