import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import CalcRepository from '../../repositories/calc/calc.repo';

export default class HomeViewControl extends BaseViewControl {
    templateString: string = require('./home.vc.html');

    context: any = {
        num1: '',
        num2: '',
        task: '',
        opt1: '',
        opt2: '',
        total: '',
        showMeResult: false
    };
    
    add(): void {
        let opt1 = parseInt(this.context.num1, 10);
        let opt2 = parseInt(this.context.num2, 10);
        let total = (opt1 + opt2);
        let task = 'adding';
        if (opt1 == null || opt2 == null) {
            alert('Both Fields are requiredf!');
        } else {
            this.context.showMeResult = true;
        }
        this.context.task = task;
        this.context.opt1 = opt1;
        this.context.opt2 = opt2;
        this.context.total = total;
        this.context.num1 = '',
        this.context.num2 = ''
    };
    
    subtract(): void {
        let opt1 = parseInt(this.context.num1, 10);
        let opt2 = parseInt(this.context.num2, 10);
        let total = (opt1 - opt2);
        let task = 'subtracting';
        if (opt1 == null || opt2 == null) {
            alert('Both Fields are requiredf!');
        } else {
            this.context.showMeResult = true;
        }
        this.context.task = task;
        this.context.opt1 = opt1;
        this.context.opt2 = opt2;
        this.context.total = total;
        this.context.num1 = '',
        this.context.num2 = ''
    };
    
    multiply(): void {
        let opt1 = parseInt(this.context.num1, 10);
        let opt2 = parseInt(this.context.num2, 10);
        let total = (opt1 * opt2);
        let task = 'multiplying';
        if (opt1 == null || opt2 == null) {
            alert('Both Fields are requiredf!');
        } else {
            this.context.showMeResult = true;
        }
        this.context.task = task;
        this.context.opt1 = opt1;
        this.context.opt2 = opt2;
        this.context.total = total;
        this.context.num1 = '',
        this.context.num2 = ''
    };
    
    divide(): void {
        let opt1 = parseInt(this.context.num1, 10);
        let opt2 = parseInt(this.context.num2, 10);
        let total = (opt1 / opt2);
        let task = 'dividing';
        if (opt1 == null || opt2 == null) {
            alert('Both Fields are requiredf!');
        } else if (opt2 == 0) {
            alert('You cannot divide by 0. Do not try this or else!');
            this.context.showMeDivide = false;
        } else {
            this.context.showMeResult = true;
        }
        this.context.task = task;
        this.context.opt1 = opt1;
        this.context.opt2 = opt2;
        this.context.total = total;
        this.context.num1 = '',
        this.context.num2 = ''
    };
    
}

register.viewControl('home-vc', HomeViewControl);
