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

var BackgroundTest = UIBasicLayer.extend(
{
 
    showCurrentTest:function () 
    {
        var layer = new BackgroundTest(true, 2, this._curCase);
        var scene = cc.Scene.create();
        scene.addChild(layer);
        cc.Director.getInstance().replaceScene(scene);
    },

    onEnter : function() 
    {
        this._super();

        var s = cc.Director.getInstance().getWinSize();

        // add title
        var label = cc.LabelTTF.create(this.title(), "Arial", 32);
        this.addChild(label, 1);
        label.setPosition(cc.p(s.width / 2, s.height - 50));

        this.setTouchEnabled(true);
        // this.scheduleUpdate();

        var testContainer = new cc.ui.boxes.HBox();

        var red = new cc.Color4B(255,0,0,1);
        var white = new cc.Color4B(255,255,255,1);
        var blue = new cc.Color4B(0, 0, 255, 1);
        
        var control = new cc.ui.Component();
        control.setPreferredSize(100, 100);
        control.setColor(cc.ui.Constants.COLOR_BG, red);
        control.setVertAlign(cc.ui.Constants.ALGN_MIDDLE);
        control.setHorizAlign(cc.ui.Constants.ALGN_CENTER);       
        testContainer.addChild(control);

        var colorTest = new cc.ui.Component();
        colorTest.setMargin(10, 10, 10, 10);
        colorTest.setPadding(10, 10, 10, 10);
        colorTest.setPreferredSize(100, 100);
        colorTest.setColor(cc.ui.Constants.COLOR_BG, white);
        colorTest.setVertAlign(cc.ui.Constants.ALGN_MIDDLE);
        colorTest.setHorizAlign(cc.ui.Constants.ALGN_CENTER);       
        testContainer.addChild(colorTest);

        var imageTest = new cc.ui.Component();
        imageTest.setMargin(10, 10, 10, 10);
        imageTest.setPadding(10, 10, 10, 10);
        imageTest.setPreferredSize(100, 100);
        imageTest.setImage(cc.ui.Constants.IMAGE_BG, s_pathGrossini);
        imageTest.setVertAlign(cc.ui.Constants.ALGN_MIDDLE);
        imageTest.setHorizAlign(cc.ui.Constants.ALGN_CENTER);
        testContainer.addChild(imageTest);

        testContainer.doLayout(s.width, s.height);
        cc.ui.logI("cc.ui", "testContainer after doLayout: " + testContainer._contentSize.width + ", " + testContainer._contentSize.height);
        testContainer.stretchAndAlign(s.width, s.height);
        this.addChild(testContainer);
    },

    title : function() 
    {
        return "Background Test";
    },

    update : function(dt) 
    {
    }
});

function runBackgroundTest() {
    var scene = cc.Scene.create();
    var layer = new BackgroundTest();
    scene.addChild(layer);
    cc.Director.getInstance().replaceScene(scene);
};
