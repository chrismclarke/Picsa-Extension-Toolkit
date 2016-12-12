/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from './home';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from 'ionic-angular/navigation/nav-controller';
import * as import9 from '@angular/core/src/metadata/view';
import * as import10 from '@angular/core/src/linker/component_factory';
import * as import11 from '../../node_modules/ionic-angular/components/toolbar/toolbar.ngfactory';
import * as import12 from '../../node_modules/ionic-angular/components/navbar/navbar.ngfactory';
import * as import13 from '../../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory';
import * as import14 from '../../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import15 from '../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import16 from 'ionic-angular/config/config';
import * as import17 from '@angular/core/src/linker/element_ref';
import * as import18 from 'ionic-angular/navigation/view-controller';
import * as import19 from 'ionic-angular/components/app/app';
import * as import20 from 'ionic-angular/components/toolbar/toolbar';
import * as import21 from 'ionic-angular/util/keyboard';
import * as import22 from '@angular/core/src/zone/ng_zone';
import * as import23 from 'ionic-angular/components/tabs/tabs';
import * as import24 from '@angular/core/src/linker/template_ref';
import * as import25 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import26 from 'ionic-angular/components/toolbar/toolbar-title';
import * as import27 from 'ionic-angular/components/navbar/navbar';
import * as import28 from '@angular/common/src/directives/ng_for';
import * as import29 from 'ionic-angular/components/content/content';
import * as import30 from '../../node_modules/ionic-angular/components/nav/nav-push.ngfactory';
import * as import31 from '../../node_modules/ionic-angular/components/button/button.ngfactory';
import * as import32 from '../../node_modules/ionic-angular/components/icon/icon.ngfactory';
import * as import33 from 'ionic-angular/components/icon/icon';
import * as import34 from 'ionic-angular/components/button/button';
import * as import35 from 'ionic-angular/components/nav/nav-push';
export var Wrapper_HomePage = (function () {
    function Wrapper_HomePage(p0) {
        this.changed = false;
        this.context = new import0.HomePage(p0);
    }
    Wrapper_HomePage.prototype.detectChangesInternal = function (view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        return changed;
    };
    return Wrapper_HomePage;
}());
var renderType_HomePage_Host = null;
var _View_HomePage_Host0 = (function (_super) {
    __extends(_View_HomePage_Host0, _super);
    function _View_HomePage_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_HomePage_Host0, renderType_HomePage_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_HomePage_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('page-home', rootSelector, null);
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_HomePage0(this.viewUtils, this.injector(0), this._appEl_0);
        this._HomePage_0_4 = new Wrapper_HomePage(this.parentInjector.get(import8.NavController));
        this._appEl_0.initComponent(this._HomePage_0_4.context, [], compView_0);
        compView_0.create(this._HomePage_0_4.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_HomePage_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.HomePage) && (0 === requestNodeIndex))) {
            return this._HomePage_0_4.context;
        }
        return notFoundResult;
    };
    _View_HomePage_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._HomePage_0_4.detectChangesInternal(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_HomePage_Host0;
}(import1.AppView));
function viewFactory_HomePage_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_HomePage_Host === null)) {
        (renderType_HomePage_Host = viewUtils.createRenderComponentType('', 0, import9.ViewEncapsulation.None, [], {}));
    }
    return new _View_HomePage_Host0(viewUtils, parentInjector, declarationEl);
}
export var HomePageNgFactory = new import10.ComponentFactory('page-home', viewFactory_HomePage_Host0, import0.HomePage);
var styles_HomePage = [];
var renderType_HomePage = null;
var _View_HomePage0 = (function (_super) {
    __extends(_View_HomePage0, _super);
    function _View_HomePage0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_HomePage0, renderType_HomePage, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_HomePage0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'ion-header', null);
        this._Header_0_3 = new import11.Wrapper_Header(this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_0), this.renderer, this.parentInjector.get(import18.ViewController, null));
        this._text_1 = this.renderer.createText(this._el_0, '\n  ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'ion-navbar', null);
        this.renderer.setElementAttribute(this._el_2, 'class', 'toolbar');
        this._appEl_2 = new import3.AppElement(2, 0, this, this._el_2);
        var compView_2 = import12.viewFactory_Navbar0(this.viewUtils, this.injector(2), this._appEl_2);
        this._Navbar_2_4 = new import12.Wrapper_Navbar(this.parentInjector.get(import19.App), this.parentInjector.get(import18.ViewController, null), this.parentInjector.get(import8.NavController, null), this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_2), this.renderer);
        this._appEl_2.initComponent(this._Navbar_2_4.context, [], compView_2);
        this._text_3 = this.renderer.createText(null, '\n    ', null);
        this._el_4 = this.renderer.createElement(null, 'ion-title', null);
        this._appEl_4 = new import3.AppElement(4, 2, this, this._el_4);
        var compView_4 = import13.viewFactory_ToolbarTitle0(this.viewUtils, this.injector(4), this._appEl_4);
        this._ToolbarTitle_4_4 = new import13.Wrapper_ToolbarTitle(this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_4), this.renderer, this.parentInjector.get(import20.Toolbar, null), this._Navbar_2_4.context);
        this._appEl_4.initComponent(this._ToolbarTitle_4_4.context, [], compView_4);
        this._text_5 = this.renderer.createText(null, 'PICSA Extension Toolkit', null);
        compView_4.create(this._ToolbarTitle_4_4.context, [[].concat([this._text_5])], null);
        this._text_6 = this.renderer.createText(null, '\n  ', null);
        compView_2.create(this._Navbar_2_4.context, [
            [],
            [],
            [],
            [].concat([
                this._text_3,
                this._el_4,
                this._text_6
            ])
        ], null);
        this._text_7 = this.renderer.createText(this._el_0, '\n', null);
        this._text_8 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_9 = this.renderer.createElement(parentRenderNode, 'ion-content', null);
        this.renderer.setElementAttribute(this._el_9, 'padding', '');
        this._appEl_9 = new import3.AppElement(9, null, this, this._el_9);
        var compView_9 = import14.viewFactory_Content0(this.viewUtils, this.injector(9), this._appEl_9);
        this._Content_9_4 = new import14.Wrapper_Content(this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_9), this.renderer, this.parentInjector.get(import19.App), this.parentInjector.get(import21.Keyboard), this.parentInjector.get(import22.NgZone), this.parentInjector.get(import18.ViewController, null), this.parentInjector.get(import23.Tabs, null));
        this._appEl_9.initComponent(this._Content_9_4.context, [], compView_9);
        this._text_10 = this.renderer.createText(null, '\n  ', null);
        this._anchor_11 = this.renderer.createTemplateAnchor(null, null);
        this._appEl_11 = new import3.AppElement(11, 9, this, this._anchor_11);
        this._TemplateRef_11_5 = new import24.TemplateRef_(this._appEl_11, viewFactory_HomePage1);
        this._NgFor_11_6 = new import15.Wrapper_NgFor(this._appEl_11.vcRef, this._TemplateRef_11_5, this.parentInjector.get(import25.IterableDiffers), this.ref);
        this._text_12 = this.renderer.createText(null, '\n', null);
        compView_9.create(this._Content_9_4.context, [
            [],
            [].concat([
                this._text_10,
                this._appEl_11,
                this._text_12
            ]),
            []
        ], null);
        this._text_13 = this.renderer.createText(parentRenderNode, '\n', null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_2 = import7.UNINITIALIZED;
        this.init([], [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._text_6,
            this._text_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._anchor_11,
            this._text_12,
            this._text_13
        ], [], []);
        return null;
    };
    _View_HomePage0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import26.ToolbarTitle) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 5)))) {
            return this._ToolbarTitle_4_4.context;
        }
        if (((token === import27.Navbar) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 6)))) {
            return this._Navbar_2_4.context;
        }
        if (((token === import20.Header) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._Header_0_3.context;
        }
        if (((token === import24.TemplateRef) && (11 === requestNodeIndex))) {
            return this._TemplateRef_11_5;
        }
        if (((token === import28.NgFor) && (11 === requestNodeIndex))) {
            return this._NgFor_11_6.context;
        }
        if (((token === import29.Content) && ((9 <= requestNodeIndex) && (requestNodeIndex <= 12)))) {
            return this._Content_9_4.context;
        }
        return notFoundResult;
    };
    _View_HomePage0.prototype.detectChangesInternal = function (throwOnChange) {
        this._Header_0_3.detectChangesInternal(this, this._el_0, throwOnChange);
        this._Navbar_2_4.detectChangesInternal(this, this._el_2, throwOnChange);
        if (this._ToolbarTitle_4_4.detectChangesInternal(this, this._el_4, throwOnChange)) {
            this._appEl_4.componentView.markAsCheckOnce();
        }
        if (this._Content_9_4.detectChangesInternal(this, this._el_9, throwOnChange)) {
            this._appEl_9.componentView.markAsCheckOnce();
        }
        var currVal_3 = this.context.buttons;
        this._NgFor_11_6.check_ngForOf(currVal_3, throwOnChange, false);
        this._NgFor_11_6.detectChangesInternal(this, this._anchor_11, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_0 = this._Navbar_2_4.context._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setElementProperty(this._el_2, 'hidden', currVal_0);
            this._expr_0 = currVal_0;
        }
        var currVal_1 = this._Navbar_2_4.context._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setElementClass(this._el_2, 'statusbar-padding', currVal_1);
            this._expr_1 = currVal_1;
        }
        var currVal_2 = this._Content_9_4.context._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setElementClass(this._el_9, 'statusbar-padding', currVal_2);
            this._expr_2 = currVal_2;
        }
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Navbar_2_4.context.ngAfterViewInit();
            }
        }
    };
    _View_HomePage0.prototype.destroyInternal = function () {
        this._Content_9_4.context.ngOnDestroy();
    };
    return _View_HomePage0;
}(import1.AppView));
export function viewFactory_HomePage0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_HomePage === null)) {
        (renderType_HomePage = viewUtils.createRenderComponentType('', 0, import9.ViewEncapsulation.None, styles_HomePage, {}));
    }
    return new _View_HomePage0(viewUtils, parentInjector, declarationEl);
}
var _View_HomePage1 = (function (_super) {
    __extends(_View_HomePage1, _super);
    function _View_HomePage1(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_HomePage1, renderType_HomePage, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_HomePage1.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'div', null);
        this._NavPush_0_3 = new import30.Wrapper_NavPush(this.parent.parentInjector.get(import8.NavController, null));
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'button', null);
        this.renderer.setElementAttribute(this._el_2, 'block', '');
        this.renderer.setElementAttribute(this._el_2, 'icon-left', '');
        this.renderer.setElementAttribute(this._el_2, 'ion-button', '');
        this.renderer.setElementAttribute(this._el_2, 'round', '');
        this._appEl_2 = new import3.AppElement(2, 0, this, this._el_2);
        var compView_2 = import31.viewFactory_Button0(this.viewUtils, this.injector(2), this._appEl_2);
        this._Button_2_4 = new import31.Wrapper_Button(null, '', this.parent.parentInjector.get(import16.Config), new import17.ElementRef(this._el_2), this.renderer);
        this._appEl_2.initComponent(this._Button_2_4.context, [], compView_2);
        this._text_3 = this.renderer.createText(null, '\n      ', null);
        this._el_4 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_4, 'role', 'img');
        this._Icon_4_3 = new import32.Wrapper_Icon(this.parent.parentInjector.get(import16.Config), new import17.ElementRef(this._el_4), this.renderer);
        this._text_5 = this.renderer.createText(null, '', null);
        compView_2.create(this._Button_2_4.context, [[].concat([
                this._text_3,
                this._el_4,
                this._text_5
            ])], null);
        this._text_6 = this.renderer.createText(this._el_0, '\n\n  ', null);
        var disposable_0 = this.renderer.listen(this._el_0, 'click', this.eventHandler(this._handle_click_0_0.bind(this)));
        this._expr_6 = import7.UNINITIALIZED;
        this._expr_7 = import7.UNINITIALIZED;
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._text_6
        ], [disposable_0], []);
        return null;
    };
    _View_HomePage1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import33.Icon) && (4 === requestNodeIndex))) {
            return this._Icon_4_3.context;
        }
        if (((token === import34.Button) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 5)))) {
            return this._Button_2_4.context;
        }
        if (((token === import35.NavPush) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 6)))) {
            return this._NavPush_0_3.context;
        }
        return notFoundResult;
    };
    _View_HomePage1.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_1 = this.context.$implicit.link;
        this._NavPush_0_3.check_navPush(currVal_1, throwOnChange, false);
        this._NavPush_0_3.detectChangesInternal(this, this._el_0, throwOnChange);
        var currVal_2 = '';
        this._Button_2_4.check_round(currVal_2, throwOnChange, false);
        var currVal_3 = '';
        this._Button_2_4.check_block(currVal_3, throwOnChange, false);
        var currVal_4 = import4.interpolate(1, '', this.context.$implicit.color, '');
        this._Button_2_4.check_color(currVal_4, throwOnChange, false);
        if (this._Button_2_4.detectChangesInternal(this, this._el_2, throwOnChange)) {
            this._appEl_2.componentView.markAsCheckOnce();
        }
        var currVal_5 = import4.interpolate(1, '', this.context.$implicit.icon, '');
        this._Icon_4_3.check_name(currVal_5, throwOnChange, false);
        this._Icon_4_3.detectChangesInternal(this, this._el_4, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Button_2_4.context.ngAfterContentInit();
            }
        }
        var currVal_6 = this._Icon_4_3.context._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_6, currVal_6)) {
            this.renderer.setElementClass(this._el_4, 'hide', currVal_6);
            this._expr_6 = currVal_6;
        }
        var currVal_7 = import4.interpolate(1, '\n      ', this.context.$implicit.name, '\n    ');
        if (import4.checkBinding(throwOnChange, this._expr_7, currVal_7)) {
            this.renderer.setText(this._text_5, currVal_7);
            this._expr_7 = currVal_7;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_HomePage1.prototype.destroyInternal = function () {
        this._Icon_4_3.context.ngOnDestroy();
    };
    _View_HomePage1.prototype._handle_click_0_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this._NavPush_0_3.context.onClick() !== false);
        return (true && pd_0);
    };
    return _View_HomePage1;
}(import1.AppView));
function viewFactory_HomePage1(viewUtils, parentInjector, declarationEl) {
    return new _View_HomePage1(viewUtils, parentInjector, declarationEl);
}
//# sourceMappingURL=home.ngfactory.js.map