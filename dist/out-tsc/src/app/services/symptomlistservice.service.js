import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Storage } from '@ionic/storage';
var SYMPTOMLIST_KEY = 'symptomlistKey';
var SymptomlistserviceService = /** @class */ (function () {
    function SymptomlistserviceService(storage) {
        var _this = this;
        this.storage = storage;
        this.storage.get(SYMPTOMLIST_KEY).then(function (items) {
            if (!items || items.length === 0) {
                // if the storage is empty, initiate symptom list
                _this.initSymptomlist();
            }
        });
    }
    SymptomlistserviceService.prototype.initSymptomlist = function () {
        // tslint:disable-next-line:prefer-const
        var initItems = [];
        var tempitem = {
            id: uuid(),
            icname: 'temperature.svg',
            enname: 'Temperature',
            cnname: '体温',
            myname: '',
            tmname: ''
        };
        initItems.push(tempitem);
        tempitem = {
            id: uuid(),
            icname: 'noshortness.svg',
            enname: 'Noshortness',
            cnname: '正常呼吸',
            myname: '',
            tmname: ''
        };
        initItems.push(tempitem);
        this.addSymptomlistItems(initItems);
    };
    // get one symptom by id
    SymptomlistserviceService.prototype.getSymptomlistItemById = function (id) {
        return this.storage.get(SYMPTOMLIST_KEY).then(function (result) {
            return result.filter(function (item) { return item.id === id; });
        });
    };
    // get all symtoms
    SymptomlistserviceService.prototype.getAllSymptomlistItems = function () {
        return this.storage.get(SYMPTOMLIST_KEY);
    };
    // add a new symptom info into symptomlist, return a promise to indicate the status of creating a key-values pair
    SymptomlistserviceService.prototype.addSymptomlistItem = function (newitem) {
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
    SymptomlistserviceService.prototype.addSymptomlistItems = function (newitems) {
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
    SymptomlistserviceService.prototype.updateSymptomlistItem = function (item) {
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
    SymptomlistserviceService.prototype.deleteSymptomlistItemById = function (id) {
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
    SymptomlistserviceService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [Storage])
    ], SymptomlistserviceService);
    return SymptomlistserviceService;
}());
export { SymptomlistserviceService };
//# sourceMappingURL=symptomlistservice.service.js.map