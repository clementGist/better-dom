describe("set", function() {
    var link;

    beforeEach(function() {
        setFixtures("<a id='test' href='#'>test</a>");

        link = DOM.find("#test");
    });

    it("should return reference to 'this'", function() {
        expect(link.set("id", "t")).toEqual(link);
    });

    it("should update an appropriate native object attribute", function() {
        expect(link.set("data-test", "t")._node).toHaveAttr("data-test", "t");
    });

    it("should try to update an appropriate native object property first", function() {
        link.set("href", "#test");

        expect(link._node).toHaveAttr("href", "#test");
        expect(link._node.href).not.toEqual("#");
    });

    it("should remove attribute if value is null or false", function() {
        expect(link.set("id", null)._node).not.toHaveAttr("id");
        expect(link.set("href", false)._node).not.toHaveAttr("href");
    });

    it("should accept space-separated property names", function() {
        link.set("id href", "changed");

        expect(link._node).toHaveId("changed");
        expect(link._node).toHaveAttr("href", "changed");
    });

    it("should accept object with key-value pairs", function() {
        link.set({"data-test1": "test1", "data-test2": "test2"});

        expect(link._node).toHaveAttr("data-test1", "test1");
        expect(link._node).toHaveAttr("data-test2", "test2");
    });

    it("should not allow to access to legacy objects", function() {
        Object.keys({
            children: true,
            childNodes: true,
            firstChild: true,
            lastChild: true,
            nextSibling: true,
            previousSibling: true,
            firstElementChild: true,
            lastElementChild: true,
            nextElementSibling: true,
            previousElementSibling: true,
            parentNode: true,
            elements: true
        })
        .forEach(function(propName) {
            expect(function() { link.set(propName, "t"); }).toThrow();
        });
    });

    it("should throw error if argument is invalid", function() {
        expect(function() { link.set(1); }).toThrow();
    });
    
});