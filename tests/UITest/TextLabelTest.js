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

var TextLabelTest = UIBasicLayer.extend({
 
    showCurrentTest:function () {
        var layer = new HBoxTest1(true, 2, this._curCase);
        var scene = cc.Scene.create();
        scene.addChild(layer);
        cc.Director.getInstance().replaceScene(scene);
    },

    onEnter:function () {
        this._super();

        var s = cc.Director.getInstance().getWinSize();

        // add title
        var label = new cc.ui.LabelTTF("This should be red, and semi transparent and not all can be shown","Arial",25);
        label.setColor(cc.red());
        label.setPosition(cc.p(100,100));
        cc.Assert(label.getColor() != cc.red(), "set color does not work");
        label.setOpacity(50);
        label.stretchAndAlign(300,100); 
        this.addChild(label, 1);

        var temp = new cc.ui.LabelTTF("White H:C and V:C","Arial",25);
        temp.setColor(cc.white());    
        temp.setPosition(cc.p(0, 0));
        temp.setHorizontalAlignment(cc.TEXT_ALIGNMENT_CENTER);
        temp.setVerticalAlignment(cc.VERTICAL_TEXT_ALIGNMENT_CENTER);
        temp.stretchAndAlign(300,100);
	    this.addChild(temp);

        var temp = new cc.ui.LabelTTF("White H:R and V:B","Impact",30);
        temp.setColor(cc.white());
        temp.setPosition(cc.p(400, 0));
        temp.setHorizontalAlignment(cc.TEXT_ALIGNMENT_RIGHT);
        temp.setVerticalAlignment(cc.VERTICAL_TEXT_ALIGNMENT_BOTTOM);
        temp.stretchAndAlign(300,100);
    	this.addChild(temp);

        var temp = new cc.ui.LabelTTF("White H:L and V:T","Arial",25);
        temp.setColor(cc.white());    
        temp.setPosition(cc.p(400, 200));
        temp.setHorizontalAlignment(cc.TEXT_ALIGNMENT_LEFT);
        temp.setVerticalAlignment(cc.VERTICAL_TEXT_ALIGNMENT_TOP);
        temp.setFontSize(17);
        temp.setDimensions(cc.size(100,100));
        temp.setFontName("Marlett");
        temp.stretchAndAlign(300,100);
	    this.addChild(temp);
        
        this.setTouchEnabled(true);
        // this.scheduleUpdate();

        var testContainer = new cc.ui.boxes.HBox();
        var c = null;

        var red = new cc.Color4B(255,0,0,1);
        var white = new cc.Color4B(255,255,255,1);
        var blue = new cc.Color4B(0, 0, 255, 1);

        var label = new cc.ui.LabelTTF("should have been replaced","Times New Roman",18);
	    label.setColor(cc.blue());
//	    label.setPosition(cc.p(100,100));
        label.setString("Blue text aligned left, vertical center");
        label.setHorizontalAlignment(cc.TEXT_ALIGNMENT_LEFT);
        label.setVerticalAlignment(cc.VERTICAL_TEXT_ALIGNMENT_CENTER);
        label.setVertAlign(cc.ui.Constants.ALGN_TOP);
        label.setHorizAlign(cc.ui.Constants.ALGN_LEFT);
        testContainer.addChild(label, 1);     

        testContainer.doLayout(s.width, s.height);
        cc.ui.logI("cc.ui", "testContainer after doLayout: " + testContainer._contentSize.width + ", " + testContainer._contentSize.height);
        testContainer.stretchAndAlign(s.width, s.height);
        this.addChild(testContainer);
    },

    title:function () {
        return "TextLabel Test";
    },

    update:function (dt) {
    }
});

function runTextLabelTest() {
    var scene = cc.Scene.create();
    var layer = new TextLabelTest();
    scene.addChild(layer);
    cc.Director.getInstance().replaceScene(scene);
};
