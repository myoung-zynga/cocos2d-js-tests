/****************************************************************************
 Copyright (c) 2013      Zynga Inc.

 http://www.cocos2d-x.org

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/

var ComponentTest1 = UIBasicLayer.extend({
 
    showCurrentTest:function () {
        var layer = new ComponentTest1();
        var scene = cc.Scene.create();
        scene.addChild(layer);
        cc.Director.getInstance().replaceScene(scene);
    },

    onEnter:function () {
        this._super();

        var s = cc.Director.getInstance().getWinSize();

        // add title
        var label = cc.LabelTTF.create(this.title(), "Arial", 32);
        this.addChild(label, 1);
        label.setPosition(cc.p(s.width / 2, s.height - 50));

        this.setTouchEnabled(true);
        // this.scheduleUpdate();

        var testComponent = new cc.ui.Component();
        testComponent.setPadding(5, 5, 5, 5);
        testComponent.setPreferredSize(100, 100);
        //testComponent.setPosition(0, 100);
        //testComponent.doLayout(s.width, s.height);

        var fill = new cc.Color4B(255,255,255,0.5);
        cc.ui.logI("ui test", "alpha value: " + fill.a);
        testComponent.setColor(cc.ui.Constants.COLOR_BG, fill);

        //this.addChild(testComponent);

        var testComponent2 = new cc.ui.Component();
        testComponent2.setPreferredSize(50, 50);
        //testComponent2.setPosition(0, 125);
        testComponent2.setMargin(5, 5, 5, 5);
        cc.ui.logI("ui test", "border being set...");
        testComponent2.setBorder(new cc.ui.borders.LineBorder({"t" : 0, "l" : 2, "b" : 2, "r" : 2}, new cc.Color4B(255, 0, 0, 1)));
        //testComponent2.doLayout(s.width, s.height);
        var fill = new cc.Color4B(255,255,255,1);
        cc.ui.logI("ui test", "alpha value: " + fill.a);
        testComponent2.setColor(cc.ui.Constants.COLOR_BG, fill);

        //this.addChild(testComponent2);

        var testContainer = new cc.ui.boxes.VBox();

        testContainer.addChild(testComponent);
        testContainer.addChild(testComponent2);

        testContainer.doLayout(s.width, s.height);
        this.addChild(testContainer);
    },

    title:function () {
        return "Component Test";
    },

    update:function (dt) {
    }
});

function runComponentTest() {
    var scene = cc.Scene.create();
    var layer = new ComponentTest1();
    scene.addChild(layer);
    cc.Director.getInstance().replaceScene(scene);
};
