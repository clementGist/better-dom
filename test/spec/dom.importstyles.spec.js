describe("DOM.importStyles", function() {
    "use strict";

    it("should accept selector with style string", function() {
        jasmine.sandbox.set("<a id='importStyles1'></a>");

        var link = DOM.find("#importStyles1");

        expect(link.style("display")).not.toBe("none");
        DOM.importStyles("#importStyles1", "display: none");
        expect(link.style("display")).toBe("none");
    });

    it("should accept selector with style object", function() {
        jasmine.sandbox.set("<a id='importStyles2'></a>");

        var link = DOM.find("#importStyles2");

        expect(link.style("display")).not.toBe("none");
        DOM.importStyles("#importStyles2", {"display": "none"});
        expect(link.style("display")).toBe("none");
    });

    it("should handle vendor prefixed properties", function() {
        jasmine.sandbox.set("<a id='importStyles3'></a>");

        var link = DOM.find("#importStyles3");

        expect(link.style("box-sizing")).not.toBe("border-box");
        DOM.importStyles("#importStyles3", {"box-sizing": "border-box"});
        expect(link.style("box-sizing")).toBe("border-box");
    });

    it("should throw error if arguments are invalid", function() {
        expect(function() { DOM.importStyles(1); }).toThrow();
        expect(function() { DOM.importStyles("a"); }).toThrow();
        expect(function() { DOM.importStyles("a", null); }).toThrow();
    });
});