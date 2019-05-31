import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Storage } from '@ionic/storage';
var ACTIONLIST_KEY = 'actionlistKey';
var ActionlistserviceService = /** @class */ (function () {
    // constructor() { }
    function ActionlistserviceService(storage) {
        var _this = this;
        this.storage = storage;
        this.storage.get(ACTIONLIST_KEY).then(function (items) {
            if (!items || items.length === 0) {
                // if the storage is empty, initiate symptom list
                _this.initActionlist();
            }
        });
    }
    ActionlistserviceService.prototype.initActionlist = function () {
        // tslint:disable-next-line:prefer-const
        var initItems = [];
        var tempitem = {
            id: uuid(),
            icname: 'ambulance.svg',
            enname: 'Ambulance',
            cnname: '救护车',
            myname: '',
            tmname: ''
        };
        initItems.push(tempitem);
        tempitem = {
            id: uuid(),
            icname: 'medication.svg',
            enname: 'Medication',
            cnname: '药片',
            myname: '',
            tmname: ''
        };
        initItems.push(tempitem);
        this.addActionlistItems(initItems);
    };
    // get one action by id
    ActionlistserviceService.prototype.getActionlistItemById = function (id) {
        return this.storage.get(ACTIONLIST_KEY).then(function (result) {
            return result.filter(function (item) { return item.id === id; });
        });
    };
    // get all actions
    ActionlistserviceService.prototype.getAllActionlistItems = function () {
        return this.storage.get(ACTIONLIST_KEY);
    };
    // add a new action info into actionlist, return a promise to indicate the status of creating a key-values pair
    ActionlistserviceService.prototype.addSActionlistItem = function (newitem) {
        var _this = this;
        return this.storage.get(ACTIONLIST_KEY).then(function (items) {
            if (items) {
                items.push(newitem);
                return _this.storage.set(ACTIONLIST_KEY, items);
            }
            else {
                return _this.storage.set(ACTIONLIST_KEY, [newitem]);
            }
        });
    };
    // add an array of new Action info into Actionlist, return a promise to indicate the status of creating a key-values pair
    ActionlistserviceService.prototype.addActionlistItems = function (newitems) {
        var _this = this;
        return this.storage.get(ACTIONLIST_KEY).then(function (items) {
            if (items) {
                items.concat(newitems);
                return _this.storage.set(ACTIONLIST_KEY, items);
            }
            else {
                return _this.storage.set(ACTIONLIST_KEY, newitems);
            }
        });
    };
    // update one Action list record
    ActionlistserviceService.prototype.updateActionlistItem = function (item) {
        var _this = this;
        return this.storage.get(ACTIONLIST_KEY).then(function (items) {
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
            return _this.storage.set(ACTIONLIST_KEY, newItems);
        });
    };
    // delete one Action list record by id
    ActionlistserviceService.prototype.deleteActionlistItemById = function (id) {
        var _this = this;
        return this.storage.get(ACTIONLIST_KEY).then(function (items) {
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
            return _this.storage.set(ACTIONLIST_KEY, toKeepItems);
        });
    };
    ActionlistserviceService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [Storage])
    ], ActionlistserviceService);
    return ActionlistserviceService;
}());
export { ActionlistserviceService };
//# sourceMappingURL=actionlistservice.service.js.map