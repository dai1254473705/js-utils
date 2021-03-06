/**
 * dataMask 
 * 脱敏处理
 * daiyunzhou 2018-12-01 12：13
 * last modify author : daiyunzhou
 * last modify time : 2018-12-01 12：13
 */
'use strict';
import JsUtilLib from '../_init';
import Validata from '../validata';

/**
 * @class DataMask 
 * @method { Function } mobile 手机号脱敏
 * @method { Function } idCardNum 身份证号脱敏
 * @method { Function } bankCardNum 银行卡号脱敏
 * @method { Function } telephone 固定电话脱敏
 * @method { Function } chineseName 中文姓名脱敏
 * @method { Function } email 邮箱脱敏 
 * 
 */
export default class DataMask extends JsUtilLib {
    constructor (){
        super();
        this.validata = new Validata();
    }

    /**
     * mobile data mask
     * @param {String} str <required>  
     * 
     * @example :
     *  mobile('13012314398') // 130****4398
     */
    mobile (str){
        try {
            if ( this.validata.isMobile(str) ) {
                return str.replace(/(\d{3})\d*(\d{4})/,'$1****$2');
            } 
            return str;
        } catch (error) {
            this.logger(error);
            return str;
        }
    }

    /**
     * id card data mask
     * @param {String} str <required>  
     * 
     * @example :
     *  idCardNum('130184188202121212') // **************1212
     */
    idCardNum (str){
        try {
            if ( this.validata.isIdCardNum(str) ) {
                return str.replace(/\d*(\d{4})/,'************$1');
            } 
            return str;
        } catch (error) {
            this.logger(error);
            return str;
        }
    }

    /**
     * bank card number data mask
     * @param {String} str <required>  
     * 
     * @example :
     *  bankCardNum('6217002260009086123') // 130****4398
     */
    bankCardNum (str){
        try {
            if ( this.validata.isBankCardNum(str) ) {
                return str.replace(/(\d{6})\d*(\d{4})/,'$1**********$2');
            } 
            return str;
        } catch (error) {
            this.logger(error);
            return str;
        }
    }

    /**
     * bank card number data mask
     * @param {String} str <required>  
     * 
     * @example :
     *  telephone('010-51662227') // ****2227
     */
    telephone (str){
        try {
            if ( this.validata.isTelephone(str) ) {
                return str.replace(/.*(\d{4})/,'****$1');
            } 
            return str;
        } catch (error) {
            this.logger(error);
            return str;
        }
    }

    /**
     * human name 
     * @param {String} str <required>  
     * @example :
     *  zhName('小孩子') // 小*子
     */
    chineseName (str){
        try {
            if ( this.validata.isZhString(str) ) {
                return str.replace(/(.{1})(.+)(.{1})/,'$1*$3');
            }
            return str;
        } catch (error) {
            this.logger(error);
            return str;
        }
    }

    /**
     * email
     * @param {String} str <required>  
     * @example :
     * email('abcd@qq.com') // 小*子
     */
    email (str){
        try {
            if ( this.validata.isEmail(str) ) {
                return str.replace(/(.{1})(.*)(@.*)/,'$1**$3');
            }
            return str;
        } catch (error) {
            this.logger(error);
            return str;
        }
    }
}