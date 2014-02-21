<@markup id="css" >
   <#-- CSS Dependencies -->
   <@link rel="stylesheet" type="text/css" href="${url.context}/res/lc/mdt/components/homescript.css" group="lc"  />
</@>

<@markup id="js">
   <#-- JavaScript Dependencies -->
   <@script type="text/javascript" src="${url.context}/res/lc/mdt/components/homescript.js" group="lc"/>
</@>

<@markup id="widgets">
   <@createWidgets group="lc"/>
</@>

<@markup id="html">
   <@uniqueIdDiv>
      <#assign el = args.htmlid?html>
      <div class="lc-mdt-homescript">
         <h3>${msg("header.label")}</h3>
         <div id="${el}-greeting" class="lc-mdt-homescript-hidden">
            ${msg("greeting.label")}
         </div>
         <#-- Note! Don't forget to output all user defined input using ?html to avoid xss vectors -->
      </div>
   </@>
</@>