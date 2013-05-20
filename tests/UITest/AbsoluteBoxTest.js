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

var AbsoluteBoxTest1 = UIBasicLayer.extend({
 
    showCurrentTest:function () {
        var layer = new AbsoluteBoxTest1();
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

        var testContainer = new cc.ui.boxes.AbsoluteBox();
        testContainer.setColor(cc.ui.Constants.COLOR_BG, new cc.Color4B(255,255,255,.3));
        
        var c = null;

        var red = new cc.Color4B(255,0,0,1);
        var white = new cc.Color4B(255,255,255,1);
        var blue = new cc.Color4B(0, 0, 255, 1);

        var sprite = cc.Sprite.create(s_pathGrossini);
        sprite.setTag("Sprite");
        sprite.setAnchorPoint(0, 0);        
        sprite.setPosition(20, 200);
        
        var spriteContainer = new cc.ui.boxes.VBox();
        spriteContainer.setVertAlign(cc.ui.Constants.ALGN_TOP);
        spriteContainer.setHorizAlign(cc.ui.Constants.ALGN_LEFT);
        spriteContainer.setTag("SpriteBox");
        spriteContainer.setColor(cc.ui.Constants.COLOR_BG, blue);
        spriteContainer.setMargin(5, 5, 5, 5);

        //spriteContainer.addChild(sprite);
        testContainer.addChild(sprite);
        //testContainer.addChild(spriteContainer);

        c = new cc.ui.Component();
        c.setPreferredSize(40, 40);
        c.setMargin(5, 5, 5, 5);
        c.setColor(cc.ui.Constants.COLOR_BG, red);
        c.setPosition(10, 10);
        testContainer.addChild(c);

        c = new cc.ui.Component();
        c.setPreferredSize(40, 40);
        c.setMargin(5, 5, 5, 5);
        c.setColor(cc.ui.Constants.COLOR_BG, white);
        c.setPosition(60, 60);
        testContainer.addChild(c);

        c = new cc.ui.Component();
        c.setPreferredSize(40, 40);
        c.setMargin(5, 5, 5, 5);
        c.setColor(cc.ui.Constants.COLOR_BG, blue);
        c.setPosition(110, 110);
        testContainer.addChild(c);

        testContainer.setPreferredSize(400, 225);
        testContainer.setPosition(200, 112);

        testContainer.doLayout(s.width, s.height);
        cc.ui.logI("cc.ui", "testContainer after doLayout: " + testContainer._contentSize.width + ", " + testContainer._contentSize.height);
        testContainer.stretchAndAlign(400, 225);
        this.addChild(testContainer);
    },

    title:function () {
        return "AbsoluteBox Test";
    },

    update:function (dt) {
    }
});

function runAbsoluteBoxTest() {
    var scene = cc.Scene.create();
    var layer = new AbsoluteBoxTest1();
    scene.addChild(layer);
    cc.Director.getInstance().replaceScene(scene);
};
