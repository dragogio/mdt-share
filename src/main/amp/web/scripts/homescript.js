if (typeof Lc == "undefined" || !Lc)
{
   var Lc = {};
}
Lc.mdt = Lc.mdt || {};
Lc.mdt.component = Lc.mdt.component || {};

/**
 * HomeScript component.
 *
 * @namespace Lc.mdt
 * @class Lc.mdt.HomeScript
 */
(function()
{
   var Dom = YAHOO.util.Dom;

   /**
    * HomeScript constructor.
    *
    * @param {String} htmlId The HTML id of the parent element
    * @return {Lc.mdt.component.HomeScript} The new component instance
    * @constructor
    */
   Lc.mdt.component.HomeScript = function(htmlId)
   {
      Lc.mdt.component.HomeScript.superclass.constructor.call(this, "Lc.mdt.component.HomeScript",  htmlId, []);

      // Set instance variables
      this._cssHideClass = "lc-mdt-homescript-hidden";

      return this;
   };

   YAHOO.extend(Lc.mdt.component.HomeScript, Alfresco.component.Base,
   {
      /**
       * Object container for initialization options
       *
       * @property options
       * @type object
       */
      options:
      {
         /**
          * Decides if the greeting shall be displayed or not
          *
          * @property displayGreeting
          * @type boolean
          * @default true
          */
         displayGreeting: true
      },

      /**
       * @property _cssHideClass
       * @type string
       * @default "hidden"
       * @private
       */
      _cssHideClass: null,

      /**
       * Called by YUI when parent element is available for scripting
       *
       * @method onReady
       */
      onReady: function()
      {
         // Show message
         Dom.removeClass(this.id + "-greeting", this._cssHideClass);
      }
   });

})();

