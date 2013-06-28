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

var BorderBoxTest1 = UIBasicLayer.extend({
 
    showCurrentTest:function () {
        var layer = new BorderBoxTest1(true, 2, this._curCase);
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

        var testContainer = new cc.ui.boxes.BorderBox();
        var c = null;

        var red = new cc.Color4B(255,0,0,1);
        var white = new cc.Color4B(255,255,255,1);
        var blue = new cc.Color4B(0, 0, 255, 1);

        var sprite = cc.Sprite.create(s_pathGrossini);
        sprite.setTag("Sprite");
        sprite.setAnchorPoint(0, 0);  
        
        var nodebox = new cc.ui.boxes.NodeBox(sprite);
		nodebox.setVertAlign(cc.ui.Constants.ALGN_MIDDLE);
        nodebox.setHorizAlign(cc.ui.Constants.ALGN_CENTER);
        nodebox.setTag("SpriteBox");
        nodebox.setColor(cc.ui.Constants.COLOR_BG, blue);
        nodebox.setMargin(5, 5, 5, 5);
        
        /* Old container tests
        var spriteContainer = new cc.ui.boxes.VBox();
        spriteContainer.setVertAlign(cc.ui.Constants.ALGN_MIDDLE);
        spriteContainer.setHorizAlign(cc.ui.Constants.ALGN_CENTER);
        spriteContainer.setTag("SpriteBox");
        spriteContainer.setColor(cc.ui.Constants.COLOR_BG, blue);
        spriteContainer.setMargin(5, 5, 5, 5);

        spriteContainer.addChild(sprite);
        //testContainer.addChild(sprite);
        //testContainer.addChild(spriteContainer);
        */

        var shouldStretch = true;
        // North
        c = new cc.ui.Component();
        c.setPreferredSize(200, 55);
        c.setMargin(5, 5, 5, 5);
        c.setColor(cc.ui.Constants.COLOR_BG, red);
        c.setVertAlign(cc.ui.Constants.ALGN_TOP);
        c.setHorizAlign(cc.ui.Constants.ALGN_CENTER);
        c.setShouldStretch(shouldStretch);
        testContainer.addChild(c);
        //testContainer.addChild(sprite);
        //testContainer.addChild(spriteContainer);

        // South
        c = new cc.ui.Component();
        c.setPreferredSize(200, 55);
        c.setMargin(5, 5, 5, 5);
        c.setColor(cc.ui.Constants.COLOR_BG, red);
        c.setVertAlign(cc.ui.Constants.ALGN_TOP);
        c.setHorizAlign(cc.ui.Constants.ALGN_RIGHT);
        c.setShouldStretch(shouldStretch);
        testContainer.addChild(c);
        //testContainer.addChild(sprite);
        //testContainer.addChild(spriteContainer);

        // West
        c = new cc.ui.Component();
        c.setPreferredSize(55, 200);
        c.setMargin(5, 5, 5, 5);
        c.setColor(cc.ui.Constants.COLOR_BG, white);
        c.setVertAlign(cc.ui.Constants.ALGN_BOTTOM);
        c.setHorizAlign(cc.ui.Constants.ALGN_LEFT);
        c.setShouldStretch(shouldStretch);
        testContainer.addChild(c);
        //testContainer.addChild(sprite);
        //testContainer.addChild(spriteContainer);

        // East
        c = new cc.ui.Component();
        c.setPreferredSize(55, 200);
        c.setMargin(5, 5, 5, 5);
        c.setColor(cc.ui.Constants.COLOR_BG, white);
        c.setVertAlign(cc.ui.Constants.ALGN_BOTTOM);
        c.setHorizAlign(cc.ui.Constants.ALGN_LEFT);
        c.setShouldStretch(shouldStretch);
        testContainer.addChild(c);
        //testContainer.addChild(sprite);
        //testContainer.addChild(spriteContainer);

        // Center
        c = new cc.ui.Component();
        c.setPreferredSize(150, 150);
        c.setMargin(5, 5, 5, 5);
        c.setColor(cc.ui.Constants.COLOR_BG, blue);
        c.setVertAlign(cc.ui.Constants.ALGN_BOTTOM);
        c.setHorizAlign(cc.ui.Constants.ALGN_RIGHT);
        c.setShouldStretch(shouldStretch);
        //testContainer.addChild(c);
        //testContainer.addChild(spriteContainer);
        // testContainer.addChild(spriteContainer);
        testContainer.addChild(nodebox);

        testContainer.doLayout(s.width, s.height);
        cc.ui.logI("cc.ui", "testContainer after doLayout: " + testContainer._contentSize.width + ", " + testContainer._contentSize.height);
        testContainer.stretchAndAlign(s.width, s.height);
        this.addChild(testContainer);
    },

    title:function () {
        return "BorderBox Test";
    },

    update:function (dt) {
    }
});

function runBorderBoxTest() {
    var scene = cc.Scene.create();
    var layer = new BorderBoxTest1();
    scene.addChild(layer);
    cc.Director.getInstance().replaceScene(scene);
};
