// ==UserScript==
// @name             test
// @namespace        Loki
// @author           Loki-Lin
// @version          1.0
// @match            http://hentaiverse.org/?s=Battle*
// @include          http://hentaiverse.org/?s=Battle*
// ==/UserScript==

var test = document.querySelector("#qb8");
document.querySelector("#qb8>.btqi").setAttribute('src', "http://ehgt.org/v/e/protection_scroll.png");
test.setAttribute('onclick',"battle.lock_action(this,1,'items','ikey_s1'); battle.set_friendly_subattack('101'); battle.touch_and_go();");
test.setAttribute('onmouseover',"battle.set_infopane_item('Scroll of Protection','Grants the Protection effect.','Consumable');");
/*test.onmouseover = function(){
	this.setAttribute('onclick',"battle.lock_action(this,1,'items','ikey_s1'); battle.set_friendly_subattack('101'); battle.touch_and_go();");
	//this.click();
	setTimeout( "", 250 );
}*/

//document.getElementById('qb8').setAttribute('onmouseover', 'document.getElementById(411).click();');