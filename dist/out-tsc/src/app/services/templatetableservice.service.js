import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
var TEMPLATETABLE_KEY = 'templatetableKey';
var TemplatetableserviceService = /** @class */ (function () {
    function TemplatetableserviceService(storage) {
        this.storage = storage;
    }
    // get one symptom by id
    TemplatetableserviceService.prototype.getSymptomlistItemById = function (id) {
        return this.storage.get(TEMPLATETABLE_KEY).then(function (result) {
            return result.filter(function (item) { return item.id === id; });
        });
    };
    // get all symtoms
    TemplatetableserviceService.prototype.getAllSymptomlistItems = function () {
        return this.storage.get(SYMPTOMLIST_KEY);
    };
    // add a new symptom info into symptomlist, return a promise to indicate the status of creating a key-values pair
    TemplatetableserviceService.prototype.addSymptomlistItem = function (newitem) {
        var _this = this;
        return this.storage.get(SYMPTOMLIST_KEY).then(function (items) {
            if (items) {
                items.push(newitem);
                return _this.storage.set(SYMPTOMLIST_KEY, items);
            }
            else {
                return _this.storage.set(SYMPTOMLIST_KEY, [newitem]);
            }
        });
    };
    // add an array of new symptom info into symptomlist, return a promise to indicate the status of creating a key-values pair
    TemplatetableserviceService.prototype.addSymptomlistItems = function (newitems) {
        var _this = this;
        return this.storage.get(SYMPTOMLIST_KEY).then(function (items) {
            if (items) {
                items.concat(newitems);
                return _this.storage.set(SYMPTOMLIST_KEY, items);
            }
            else {
                return _this.storage.set(SYMPTOMLIST_KEY, newitems);
            }
        });
    };
    // update one symtom list record
    TemplatetableserviceService.prototype.updateSymptomlistItem = function (item) {
        var _this = this;
        return this.storage.get(SYMPTOMLIST_KEY).then(function (items) {
            if (!items || items.length === 0) {
                return null;
            }
            // tslint:disable-next-line:prefer-const
            var newItems = [];
            // tslint:disable-next-line:prefer-const
            for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
                var indexitem = items_1[_i];
                if (indexitem.id === item.id) {
                    newItems.push(item);
                }
                else {
                    newItems.push(indexitem);
                }
            }
            return _this.storage.set(SYMPTOMLIST_KEY, newItems);
        });
    };
    // delete one sysmtom list record by id
    TemplatetableserviceService.prototype.deleteSymptomlistItemById = function (id) {
        var _this = this;
        return this.storage.get(SYMPTOMLIST_KEY).then(function (items) {
            if (!items || items.length === 0) {
                return null;
            }
            // tslint:disable-next-line:prefer-const
            var toKeepItems = [];
            // tslint:disable-next-line:prefer-const
            for (var _i = 0, items_2 = items; _i < items_2.length; _i++) {
                var indexitem = items_2[_i];
                if (indexitem.id !== id) {
                    toKeepItems.push(indexitem);
                }
            }
            return _this.storage.set(SYMPTOMLIST_KEY, toKeepItems);
        });
    };
    TemplatetableserviceService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [Storage])
    ], TemplatetableserviceService);
    return TemplatetableserviceService;
}());
export { TemplatetableserviceService };
//# sourceMappingURL=templatetableservice.service.js.map