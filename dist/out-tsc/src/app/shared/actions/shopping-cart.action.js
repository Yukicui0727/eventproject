export var ActionTypes;
(function (ActionTypes) {
    ActionTypes["AddItem"] = "[Shopping Cart] AddItem";
    ActionTypes["SetItem"] = "[Shopping Cart] SetItem";
    ActionTypes["RemoveItem"] = "[Shopping Cart] RemoveItem";
    ActionTypes["ClearItems"] = "[Shopping Car] ClearItems";
})(ActionTypes || (ActionTypes = {}));
export class AddItem {
    constructor(payload) {
        this.payload = payload;
        this.type = ActionTypes.AddItem;
    }
}
export class SetItem {
    constructor(payload) {
        this.payload = payload;
        this.type = ActionTypes.SetItem;
    }
}
export class RemoveItem {
    constructor(payload) {
        this.payload = payload;
        this.type = ActionTypes.RemoveItem;
    }
}
export class ClearItems {
    constructor() {
        this.type = ActionTypes.ClearItems;
    }
}
//# sourceMappingURL=shopping-cart.action.js.map