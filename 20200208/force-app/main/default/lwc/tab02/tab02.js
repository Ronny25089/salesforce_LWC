import { LightningElement, track } from 'lwc';

export default class App extends LightningElement {

    // 定义tab切换的标签显示规则
    rules = {
        selectAll: {
            shopCode: true,
            agentCode: true,
            agentSubCode: true,
            contractorCodeGroup: true,
            chargedPerson: true,
            subChargedPerson1: true,
            subChargedPerson2: true,
            chargedPersonLabel: true,
            chargedBelong: true
        },
        renewal: {
            shopCode: false,
            agentCode: false,
            agentSubCode: false,
            contractorCodeGroup: true,
            chargedPerson: true,
            subChargedPerson1: true,
            subChargedPerson2: true,
            chargedPersonLabel: true,
            chargedBelong: true
        },
        insNew: {
            shopCode: true,
            agentCode: true,
            agentSubCode: true,
            contractorCodeGroup: false,
            chargedPerson: false,
            subChargedPerson1: false,
            subChargedPerson2: true,
            chargedPersonLabel: true,
            chargedBelong: true
        },
        lifeIns: {
            shopCode: true,
            agentCode: true,
            agentSubCode: true,
            contractorCodeGroup: true,
            chargedPerson: true,
            subChargedPerson1: true,
            subChargedPerson2: false,
            chargedPersonLabel: false,
            chargedBelong: false
        },
        superIns: {
            shopCode: true,
            agentCode: false,
            agentSubCode: true,
            contractorCodeGroup: false,
            chargedPerson: true,
            subChargedPerson1: true,
            subChargedPerson2: false,
            chargedPersonLabel: true,
            chargedBelong: true
        },
        common: {
            shopCode: true,
            agentCode: false,
            agentSubCode: true,
            contractorCodeGroup: true,
            chargedPerson: false,
            subChargedPerson1: true,
            subChargedPerson2: true,
            chargedPersonLabel: true,
            chargedBelong: true
        }
    };
    /**
     * @track indicates that if this object changes,
     * the UI should update to reflect those changes.
     * 
     * @track js到html单向动态绑定变量
     */

    // 控制标签显示
    // 默认显示One的显示规则
    @track
    showFeatures = this.rules.selectAll;

    /**
     * @param event 触发事件对象
     * @param event.target 触发的标签lightning-tab
     */
    tabselect(event) {
        var value = event.target.value;
        // 重新赋值showFeatures，指定tab的显示规则内容
        this.showFeatures = this.rules[value];
    }

}