export default function(i){const a=SEMICOLON.Core;a.loadJS({file:"plugins.stickysidebar.js",id:"canvas-stickysidebar-js",jsFolder:!0}),a.isFuncTrue(()=>jQuery().scwStickySidebar).then(t=>!(!t||(a.initFunction({class:"has-plugin-stickysidebar",event:"pluginStickySidebarReady"}),(i=a.getSelector(i)).length<1))&&void i.each(function(){var t=jQuery(this),i=t.attr("data-offset-top")||110,a=t.attr("data-offset-bottom")||50;t.scwStickySidebar({additionalMarginTop:Number(i),additionalMarginBottom:Number(a)})}))}