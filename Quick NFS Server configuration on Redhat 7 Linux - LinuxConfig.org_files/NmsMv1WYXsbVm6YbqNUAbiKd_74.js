;if(CloudflareApps.matchPage(CloudflareApps.installs['ucd189EKkr2m'].URLPatterns)){(function(){'use strict'
if(!window.addEventListener)return
var options=CloudflareApps.installs['ucd189EKkr2m'].options
var element
function getMaxZIndex(){var max=0
var elements=document.getElementsByTagName('*')
Array.prototype.slice.call(elements).forEach(function(element){var zIndex=parseInt(document.defaultView.getComputedStyle(element).zIndex,10)
max=zIndex?Math.max(max,zIndex):max})
return max}
function hideAlert(e){e.preventDefault();element.style.display='none';document.cookie="coockiless=1; expires=Thu, 18 Dec 2050 12:00:00 UTC";localStorage.coockiless=1;}
function updateElement(){if(localStorage.coockiless)return;element=CloudflareApps.createElement({selector:'body',method:'append'},element)
element.setAttribute('app','cookiless')
element.style.zIndex=getMaxZIndex()+1
var ckElement=document.createElement('cookiless-div');ckElement.className='ckcontent'
ckElement.style.opacity=options.opacity/100;var ckPolicyText=document.createElement('policy-text');ckPolicyText.textContent=options.policyText;var ckAcceptButton=document.createElement('a');ckAcceptButton.className='iAccept';ckAcceptButton.textContent=options.acceptButton;ckElement.appendChild(ckPolicyText);ckElement.appendChild(ckAcceptButton);element.appendChild(ckElement);element.querySelectorAll('.iAccept')[0].addEventListener('click',hideAlert);}
if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',updateElement)}else{updateElement()}
window.CloudflareApps.installs['ucd189EKkr2m'].scope={setOptions:function setOptions(nextOptions){options=nextOptions
updateElement()}}}())};(function(){try{var link=document.createElement('link');link.rel='stylesheet';link.href='data:text/css;charset=utf-8;base64,LyogU2V0IHRoZSBhcHAgYXR0cmlidXRlIHRvIHlvdXIgYXBwJ3MgZGFzaC1kZWxpbWl0ZWQgYWxpYXMuICovCmNsb3VkZmxhcmUtYXBwW2FwcD0iY29va2lsZXNzIl0gewogcG9zaXRpb246IGZpeGVkOwogd2lkdGg6MTAwJTsKIGJvdHRvbTowOwogbGVmdDowOwogei1pbmRleDogMTAwMDA7CiBsaW5lLWhlaWdodDogMjRweDsKfQoKLyogVXNlIG5hdGl2ZSBlbGVtZW50cyB3aGVuIHlvdSdkIGxpa2UgdG8gaW5oZXJpdCBzb21lIHN0eWxlcyBmcm9tIHRoZSBwYWdlLiAqLwpjbG91ZGZsYXJlLWFwcFthcHA9ImNvb2tpbGVzcyJdIGNvb2tpbGVzcy1kaXYgewogIHdpZHRoOjEwMCU7CiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDsKICBjb2xvcjojZmZmOwogIHBhZGRpbmc6MTBweDsKICB0ZXh0LWFsaWduOiBjZW50ZXI7CiAgZGlzcGxheTogYmxvY2s7Cn0KY2xvdWRmbGFyZS1hcHBbYXBwPSJjb29raWxlc3MiXSBjb29raWxlc3MtZGl2IC5pQWNjZXB0IHsKICBjdXJzb3I6IHBvaW50ZXI7CiAgbWFyZ2luLWxlZnQ6IDEwcHg7CiAgY29sb3I6IzE1OUNEODsKCn0K';document.getElementsByTagName('head')[0].appendChild(link);}catch(e){}})();