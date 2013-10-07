// ==UserScript==
// @name             test
// @namespace        Loki
// @author           Loki-Lin
// @version          1.0
// @match            http://hentaiverse.org/?s=Battle*
// @include          http://hentaiverse.org/?s=Battle*
// ==/UserScript==

<div class="bte">
<img src="http://ehgt.org/v/e/haste.png" onmouseover="battle.set_infopane_effect('Hastened', 'The target has been hastened, increasing its action speed by 25%.', 'autocast')" onmouseout="battle.clear_infopane()" /> 
<img src="http://ehgt.org/v/e/channeling.png" onmouseover="battle.set_infopane_effect('Channeling', 'You are channeling the mystic forces of the ever-after. Your next spell is powered up by 50%, and costs no MP.', 5)" onmouseout="battle.clear_infopane()" /> 
<img src="http://ehgt.org/v/e/regen.png" onmouseover="battle.set_infopane_effect('Regen', 'The holy effects of the spell are restoring your body.', 70)" onmouseout="battle.clear_infopane()" /> 
</div>

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