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

var GridBoxTest1 = UIBasicLayer.extend({
 
    showCurrentTest:function () {
        var layer = new GridBoxTest1(true, 2, this._curCase);
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

        var testContainer = new cc.ui.boxes.GridBox(2, 3);

        var red = new cc.Color4B(255,0,0,1);
        var white = new cc.Color4B(255,255,255,1);
        var blue = new cc.Color4B(0, 0, 255, 1);

        var sprite = cc.Sprite.create(s_pathGrossini);
        sprite.setTag("Sprite");
        sprite.setAnchorPoint(0, 0);        
        var sprite2 = cc.Sprite.create(s_pathGrossini);
        sprite2.setTag("Sprite2");
        sprite2.setAnchorPoint(0, 0);    
        
        var nodebox1 = new cc.ui.boxes.NodeBox(sprite);
        nodebox1.setVertAlign(cc.ui.Constants.ALGN_TOP);
        nodebox1.setHorizAlign(cc.ui.Constants.ALGN_CENTER);
        nodebox1.setTag("SpriteBox");
        nodebox1.setColor(cc.ui.Constants.COLOR_BG, blue);
        nodebox1.setMargin(5, 5, 5, 5);

        var nodebox2 = new cc.ui.boxes.NodeBox(sprite2);     
        
        /* Old container tests
        var spriteContainer = new cc.ui.boxes.VBox();
        spriteContainer.setVertAlign(cc.ui.Constants.ALGN_MIDDLE);
        spriteContainer.setHorizAlign(cc.ui.Constants.ALGN_CENTER);
        spriteContainer.setTag("SpriteBox");
        spriteContainer.setColor(cc.ui.Constants.COLOR_BG, blue);
        spriteContainer.setMargin(5, 5, 5, 5);
        
        spriteContainer.addChild(sprite);
        */

        //testContainer.addChild(spriteContainer);

        
        var c1 = new cc.ui.Component();
        c1.setPreferredSize(40, 40);
        c1.setMargin(5, 5, 5, 5);
        c1.setHorizAlign(cc.ui.Constants.ALGN_LEFT);
        c1.setVertAlign(cc.ui.Constants.ALGN_TOP);
        c1.setColor(cc.ui.Constants.COLOR_BG, red);
        testContainer.addChild(c1);
        
        /*
        var c2 = new cc.ui.Component();
        c2.setPreferredSize(40, 40);
        c2.setMargin(5, 5, 5, 5);
        c2.setHorizAlign(cc.ui.Constants.ALGN_CENTER);
        c2.setVertAlign(cc.ui.Constants.ALGN_MIDDLE);
        c2.setColor(cc.ui.Constants.COLOR_BG, white);
        testContainer.addChild(c2);
        */
        // testContainer.addChild(spriteContainer);
        testContainer.addChild(nodebox1);

        var c3 = new cc.ui.Component();
        c3.setPreferredSize(40, 40);
        c3.setMargin(5, 5, 5, 5);
        c3.setHorizAlign(cc.ui.Constants.ALGN_RIGHT);
        c3.setVertAlign(cc.ui.Constants.ALGN_BOTTOM);
        c3.setColor(cc.ui.Constants.COLOR_BG, blue);
        testContainer.addChild(c3);

        var c4 = new cc.ui.Component();
        c4.setPreferredSize(40, 40);
        c4.setMargin(5, 5, 5, 5);
        c4.setHorizAlign(cc.ui.Constants.ALGN_LEFT);
        c4.setVertAlign(cc.ui.Constants.ALGN_TOP);
        c4.setColor(cc.ui.Constants.COLOR_BG, white);
        testContainer.addChild(c4);

        /*
        var c5 = new cc.ui.Component();
        c5.setPreferredSize(40, 40);
        c5.setMargin(5, 5, 5, 5);
        c5.setHorizAlign(cc.ui.Constants.ALGN_CENTER);
        c5.setVertAlign(cc.ui.Constants.ALGN_MIDDLE);
        c5.setColor(cc.ui.Constants.COLOR_BG, blue);
        testContainer.addChild(c5);
        */
        // testContainer.addChild(sprite2);
        testContainer.addChild(nodebox2);
        
        var c6 = new cc.ui.Component();
        c6.setPreferredSize(40, 40);
        c6.setMargin(5, 5, 5, 5);
        c6.setHorizAlign(cc.ui.Constants.ALGN_RIGHT);
        c6.setVertAlign(cc.ui.Constants.ALGN_BOTTOM);
        c6.setColor(cc.ui.Constants.COLOR_BG, red);
        testContainer.addChild(c6);

        /*
        var c7 = new cc.ui.Component();
        c7.setPreferredSize(40, 40);
        c7.setMargin(5, 5, 5, 5);
        c7.setHorizAlign(cc.ui.Constants.ALGN_LEFT);
        c7.setVertAlign(cc.ui.Constants.ALGN_TOP);
        c7.setColor(cc.ui.Constants.COLOR_BG, blue);
        testContainer.addChild(c7);

        var c8 = new cc.ui.Component();
        c8.setPreferredSize(40, 40);
        c8.setMargin(5, 5, 5, 5);
        c8.setHorizAlign(cc.ui.Constants.ALGN_CENTER);
        c8.setVertAlign(cc.ui.Constants.ALGN_MIDDLE);
        c8.setColor(cc.ui.Constants.COLOR_BG, red);
        testContainer.addChild(c8);

        var c9 = new cc.ui.Component();
        c9.setPreferredSize(40, 40);
        c9.setMargin(5, 5, 5, 5);
        c9.setHorizAlign(cc.ui.Constants.ALGN_RIGHT);
        c9.setVertAlign(cc.ui.Constants.ALGN_BOTTOM);
        c9.setColor(cc.ui.Constants.COLOR_BG, white);
        testContainer.addChild(c9);
        */

        testContainer.doLayout(s.width, s.height);
        cc.ui.logI("cc.ui", "testContainer after doLayout: " + testContainer._contentSize.width + ", " + testContainer._contentSize.height);
        testContainer.stretchAndAlign(s.width, s.height);
        this.addChild(testContainer);
    },

    title:function () {
        return "GridBox Test";
    },

    update:function (dt) {
    }
});

function runGridBoxTest() {
    var scene = cc.Scene.create();
    var layer = new GridBoxTest1();
    scene.addChild(layer);
    cc.Director.getInstance().replaceScene(scene);
};
