describe("dispatch", function() {
    var input;

    beforeEach(function() {
        jasmine.sandbox.set("<input id='input'/>");

        input = DOM.find("#input");
    });

    it("should support a function to make a safe sync call", function() {
        var obj = {},
            callback = jasmine.createSpy("callback");

        input.dispatch(callback, 123, obj);
        expect(callback).toHaveBeenCalledWith(123, obj);

        DOM.dispatch(callback, obj, 321);
        expect(callback).toHaveBeenCalledWith(obj, 321);
    });

    it("should support method name as the first argument", function() {
        var spy;

        input.legacy(function(node) { spy = spyOn(node, "focus") });

        expect(input.dispatch("focus")).toBeUndefined();
        expect(spy).toHaveBeenCalled();
    });
});
