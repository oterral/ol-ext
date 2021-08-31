import ol_ext_inherits from '../ext'
import ol_ext_input_Checkbox from './Checkbox'

/** Switch input
 * @constructor
 * @extends {ol_ext_input_Checkbox}
 * @param {*} options
 *  @param {Element} [input] input element, if non create one
 *  @param {Element} [paren] parent element, if create an input
 */
var ol_ext_input_Switch = function(options) {
  options = options || {};

  ol_ext_input_Checkbox.call(this, options);

  this.element.className = ('ol-ext-toggle-switch ' + (options.className || '')).trim();
};
ol_ext_inherits(ol_ext_input_Switch, ol_ext_input_Checkbox);
  
export default ol_ext_input_Switch
