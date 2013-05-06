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
var ITEM_TAG_BASIC = 1000;
var nCurCase = 0;

var UITests = [
    "Component Test",
    "VBox Test",
    "HBox Test",
    "GridBox Test",
    "FlowBox Test",
    "BorderBox Test",
    "CardBox Test",
    "AbsoluteBox Test"
];

////////////////////////////////////////////////////////
//
// UIMainLayer
//
////////////////////////////////////////////////////////
var UIMainLayer = cc.LayerGradient.extend({
    ctor:function() {
        this._super();
        cc.associateWithNative( this, cc.LayerGradient );
        this.init( cc.c4b(0,0,0,255), cc.c4b(98,99,117,255));
    },

    onEnter:function () {
        this._super();

        var s = cc.Director.getInstance().getWinSize();

        var menu = cc.Menu.create();
        menu.setPosition(cc.p(0,0));
        cc.MenuItemFont.setFontName("Arial");
        cc.MenuItemFont.setFontSize(24);

        for (var i = 0; i < UITests.length; i++) {
            var pItem = cc.MenuItemFont.create(UITests[i], this.menuCallback, this);
            pItem.setPosition(cc.p(s.width / 2, s.height - (i + 1) * LINE_SPACE));
            menu.addChild(pItem, ITEM_TAG_BASIC + i);
        }

        this.addChild(menu);
    },
    menuCallback:function (sender) {
        var index = sender.getZOrder() - ITEM_TAG_BASIC;
        // create the test scene and run it
        switch (index) {
            case 0:
                runComponentTest();
                break;
            case 1:
                runVBoxTest();
                break;
            case 2:
                runHBoxTest();
                break;
            case 3:
                runGridBoxTest();
                break;
            case 4:
                runFlowBoxTest();
                break;
            case 5:
                runBorderBoxTest();
                break;
            case 6:
                runCardBoxTest();
                break;
            case 7:
                runAbsoluteBoxTest();
                break;
            default:
                break;
        }
    }
});

////////////////////////////////////////////////////////
//
// UIBasicLayer
//
////////////////////////////////////////////////////////
var UIBasicLayer = cc.Layer.extend({
    _controlMenuVisible:false,
    _maxCases:1,
    _curCase:0,
    ctor:function () {
        this._super();
        cc.associateWithNative( this, cc.Layer );
        this.init();
        this._curCase = nCurCase;
    },
    onEnter:function () {
        this._super();

        var s = cc.Director.getInstance().getWinSize();

        cc.MenuItemFont.setFontName("Arial");
        cc.MenuItemFont.setFontSize(24);
        var mainItem = cc.MenuItemFont.create("Back", this.toMainLayer, this);
        mainItem.setPosition(cc.p(s.width - 50, 25));
        var menu = cc.Menu.create(mainItem);
        menu.setPosition(cc.p(0,0));

        if (this._controlMenuVisible) {
            var item1 = cc.MenuItemImage.create(s_pathB1, s_pathB2, this.backCallback, this);
            var item2 = cc.MenuItemImage.create(s_pathR1, s_pathR2, this.restartCallback, this);
            var item3 = cc.MenuItemImage.create(s_pathF1, s_pathF2, this.nextCallback, this);
            item1.setPosition(cc.p(s.width / 2 - 100, 30));
            item2.setPosition(cc.p(s.width / 2, 30));
            item3.setPosition(cc.p(s.width / 2 + 100, 30));

            menu.addChild(item1, ITEM_TAG_BASIC);
            menu.addChild(item2, ITEM_TAG_BASIC);
            menu.addChild(item3, ITEM_TAG_BASIC);
        }
        this.addChild(menu);        
    },
    restartCallback:function (sender) {
        this.showCurrentTest();
    },
    nextCallback:function (sender) {
        this._curCase++;
        this._curCase = this._curCase % this._maxCases;
        nCurCase = this._curCase;
        this.showCurrentTest();
    },
    backCallback:function (sender) {
        this._curCase--;
        if (this._curCase < 0) {
            this._curCase += this._maxCases;
        }
        nCurCase = this._curCase;
        this.showCurrentTest();
    },
    showCurrentTest:function (sender) {
    },
    toMainLayer:function (sender) {
        var scene = new UITestScene();
        scene.runThisTest();
    }
});

////////////////////////////////////////////////////////
//
// UITestScene
//
////////////////////////////////////////////////////////
var UITestScene = TestScene.extend({
    runThisTest:function () {
        var layer = new UIMainLayer();
        this.addChild(layer);
        cc.Director.getInstance().replaceScene(this);
    }
});

