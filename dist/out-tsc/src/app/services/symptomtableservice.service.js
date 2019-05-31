import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
var SYMPTOMSTABLE_KEY = 'symptomstableKey';
var SymptomtableserviceService = /** @class */ (function () {
    function SymptomtableserviceService(storage) {
        this.storage = storage;
    }
    // get one symtom by id
    SymptomtableserviceService.prototype.getSymptomItemById = function (id) {
        return this.storage.get(SYMPTOMSTABLE_KEY).then(function (result) {
            return result.filter(function (item) { return item.id === id; });
        });
    };
    // get all symtoms
    SymptomtableserviceService.prototype.getAllSymptomItems = function () {
        return this.storage.get(SYMPTOMSTABLE_KEY);
    };
    // get symtoms by template id
    SymptomtableserviceService.prototype.getSymptomItemsByTemplateId = function (idtemplate) {
        return this.storage.get(SYMPTOMSTABLE_KEY).then(function (result) {
            return result.filter(function (item) { return item.idtemplate === idtemplate; });
        });
    };
    // get symtoms by template id
    SymptomtableserviceService.prototype.getSymptomItemsByPlanId = function (idplan) {
        return this.storage.get(SYMPTOMSTABLE_KEY).then(function (result) {
            return result.filter(function (item) { return item.idplan === idplan; });
        });
    };
    // add a new symptom info into symptomstable, return a promise to indicate the status of creating a key-values pair
    SymptomtableserviceService.prototype.addSymptomItem = function (newitem) {
        var _this = this;
        return this.storage.get(SYMPTOMSTABLE_KEY).then(function (items) {
            if (items) {
                items.push(newitem);
                return _this.storage.set(SYMPTOMSTABLE_KEY, items);
            }
            else {
                return _this.storage.set(SYMPTOMSTABLE_KEY, [newitem]);
            }
        });
    };
    // add an array of new symtoms into Symptoms table, return a promise to indicate the status of creating a key-values pair
    SymptomtableserviceService.prototype.addSymptomItems = function (newitems) {
        var _this = this;
        return this.storage.get(SYMPTOMSTABLE_KEY).then(function (items) {
            if (items) {
                items.concat(newitems);
                return _this.storage.set(SYMPTOMSTABLE_KEY, items);
            }
            else {
                return _this.storage.set(SYMPTOMSTABLE_KEY, newitems);
            }
        });
    };
    // update one symptoms table record
    SymptomtableserviceService.prototype.updateSymptomItem = function (newitem) {
        var _this = this;
        return this.storage.get(SYMPTOMSTABLE_KEY).then(function (items) {
            if (!items || items.length === 0) {
                return null;
            }
            // tslint:disable-next-line:prefer-const
            var newItems = [];
            // tslint:disable-next-line:prefer-const
            for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
                var indexitem = items_1[_i];
                if (indexitem.id === newitem.id) {
                    newItems.push(newitem);
                }
                else {
                    newItems.push(indexitem);
                }
            }
            return _this.storage.set(SYMPTOMSTABLE_KEY, newItems);
        });
    };
    // update all symptoms table records within one template
    SymptomtableserviceService.prototype.updateSymptomItemsByTemplateId = function (symptomitemsoftemplate, templateid) {
        var _this = this;
        return this.storage.get(SYMPTOMSTABLE_KEY).then(function (items) {
            if (!items || items.length === 0) {
                return null;
            }
            // tslint:disable-next-line:prefer-const
            var newItems = [];
            // tslint:disable-next-line:prefer-const
            for (var _i = 0, items_2 = items; _i < items_2.length; _i++) {
                var indexitem = items_2[_i];
                // backup existing symptom items not included in the template to be updated
                if (indexitem.idtemplate !== templateid) {
                    newItems.push(indexitem);
                }
            }
            // add symptom records in the updating template
            newItems.concat(symptomitemsoftemplate);
            return _this.storage.set(SYMPTOMSTABLE_KEY, newItems);
        });
    };
    // update all symptoms table records within one crisisplan
    SymptomtableserviceService.prototype.updateSymptomItemsByCrisisplanId = function (symptomitemsofcrisisplan, crisisplanid) {
        var _this = this;
        return this.storage.get(SYMPTOMSTABLE_KEY).then(function (items) {
            if (!items || items.length === 0) {
                return null;
            }
            // tslint:disable-next-line:prefer-const
            var newItems = [];
            // tslint:disable-next-line:prefer-const
            for (var _i = 0, items_3 = items; _i < items_3.length; _i++) {
                var indexitem = items_3[_i];
                // backup existing symptom items not included in the crisisplan to be updated
                if (indexitem.idplan !== crisisplanid) {
                    newItems.push(indexitem);
                }
            }
            // add symptom records in the updating crisisplan
            newItems.concat(symptomitemsofcrisisplan);
            return _this.storage.set(SYMPTOMSTABLE_KEY, newItems);
        });
    };
    // delete one Symtom table record by id
    SymptomtableserviceService.prototype.deleteSymptomItemById = function (id) {
        var _this = this;
        return this.storage.get(SYMPTOMSTABLE_KEY).then(function (items) {
            if (!items || items.length === 0) {
                return null;
            }
            // tslint:disable-next-line:prefer-const
            var toKeepItems = [];
            // tslint:disable-next-line:prefer-const
            for (var _i = 0, items_4 = items; _i < items_4.length; _i++) {
                var indexitem = items_4[_i];
                if (indexitem.id !== id) {
                    toKeepItems.push(indexitem);
                }
            }
            return _this.storage.set(SYMPTOMSTABLE_KEY, toKeepItems);
        });
    };
    // delete all Symtom table records in one template by template id
    SymptomtableserviceService.prototype.deleteSymptomItemsByTemplateId = function (templateid) {
        var _this = this;
        return this.storage.get(SYMPTOMSTABLE_KEY).then(function (items) {
            if (!items || items.length === 0) {
                return null;
            }
            // tslint:disable-next-line:prefer-const
            var toKeepItems = [];
            // tslint:disable-next-line:prefer-const
            for (var _i = 0, items_5 = items; _i < items_5.length; _i++) {
                var indexitem = items_5[_i];
                if (indexitem.idtemplate !== templateid) {
                    toKeepItems.push(indexitem);
                }
            }
            return _this.storage.set(SYMPTOMSTABLE_KEY, toKeepItems);
        });
    };
    // delete all Symtom table records in one crisisplan by crisisplan id
    SymptomtableserviceService.prototype.deleteSymptomItemsByCrisisplanId = function (crisisplanid) {
        var _this = this;
        return this.storage.get(SYMPTOMSTABLE_KEY).then(function (items) {
            if (!items || items.length === 0) {
                return null;
            }
            // tslint:disable-next-line:prefer-const
            var toKeepItems = [];
            // tslint:disable-next-line:prefer-const
            for (var _i = 0, items_6 = items; _i < items_6.length; _i++) {
                var indexitem = items_6[_i];
                if (indexitem.idplan !== crisisplanid) {
                    toKeepItems.push(indexitem);
                }
            }
            return _this.storage.set(SYMPTOMSTABLE_KEY, toKeepItems);
        });
    };
    SymptomtableserviceService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [Storage])
    ], SymptomtableserviceService);
    return SymptomtableserviceService;
}());
export { SymptomtableserviceService };
//# sourceMappingURL=symptomtableservice.service.js.map