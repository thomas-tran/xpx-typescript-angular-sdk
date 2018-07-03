/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
namespace io.nem.xpx.utils {
    /**
     * The Class StringUtils.
     * @class
     */
    export class StringUtils {
        /**
         * Check if the given array contains the given value (with case-insensitive comparison).
         * 
         * @param {Array} array The array
         * @param {string} value The value to search
         * @return {boolean} true if the array contains the value
         */
        public static containsIgnoreCase(array : string[], value : string) : boolean {
            for(let index187=0; index187 < array.length; index187++) {
                let str = array[index187];
                {
                    if(value == null && str == null) return true;
                    if(value != null && /* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(value, str)) return true;
                }
            }
            return false;
        }

        /**
         * Join an array of strings with the given separator.
         * <p>
         * Note: This might be replaced by utility method from commons-lang or guava someday
         * if one of those libraries is added as dependency.
         * </p>
         * 
         * @param {Array} array     The array of strings
         * @param {string} separator The separator
         * @return {string} the resulting string
         */
        public static join(array : string[], separator : string) : string {
            let len : number = array.length;
            if(len === 0) return "";
            let out : { str: string } = { str: "", toString: function() { return this.str; } };
            /* append */(sb => { sb.str = sb.str.concat(<any>array[0]); return sb; })(out);
            for(let i : number = 1; i < len; i++) {
                /* append */(sb => { sb.str = sb.str.concat(<any>array[i]); return sb; })(/* append */(sb => { sb.str = sb.str.concat(<any>separator); return sb; })(out));
            };
            return /* toString */out.str;
        }

        /**
         * Checks if is empty.
         * 
         * @param {string} str the str
         * @return {boolean} true, if is empty
         */
        public static isEmpty(str : string) : boolean {
            return null == str || /* isEmpty */(str.length === 0);
        }
    }
    StringUtils["__class"] = "io.nem.xpx.utils.StringUtils";

}

