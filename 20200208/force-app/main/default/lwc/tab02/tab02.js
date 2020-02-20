/* eslint-disable no-console */
import { LightningElement, track } from 'lwc';

import findOpportunity from '@salesforce/apex/OpportunityApi.findOpportunity';

export default class App extends LightningElement {

    // 営業店コード: ShopCode
    // 代理店コード: AgentCode
    // 代理店枝番: AgentSubCode
    // 契約者（団体）コード: ContractorCod
    // 担当（案件）: ChargedPerson
    // サブ担当１: SubChargedPer
    // サブ担当２: SubChargedPer
    // 担当ラベル: ChargedPerson
    // 担当の所属: ChargedBelong
    // 定义tab切换的标签显示规则
    rules = {
        selectAll: {
            ShopCode: true,
            AgentCode: true,
            AgentSubCode: true,
            ContractorCodeGroup: true,
            ChargedPerson: true,
            SubChargedPerson1: true,
            SubChargedPerson2: true,
            ChargedPersonLabel: true,
            ChargedBelong: true
        },
        renewal: {
            ShopCode: false,
            AgentCode: false,
            AgentSubCode: false,
            ContractorCodeGroup: true,
            ChargedPerson: true,
            SubChargedPerson1: true,
            SubChargedPerson2: true,
            ChargedPersonLabel: true,
            ChargedBelong: true
        },
        insNew: {
            ShopCode: true,
            AgentCode: true,
            AgentSubCode: true,
            ContractorCodeGroup: false,
            ChargedPerson: false,
            SubChargedPerson1: false,
            SubChargedPerson2: true,
            ChargedPersonLabel: true,
            ChargedBelong: true
        },
        lifeIns: {
            ShopCode: true,
            AgentCode: true,
            AgentSubCode: true,
            ContractorCodeGroup: true,
            ChargedPerson: true,
            SubChargedPerson1: true,
            SubChargedPerson2: false,
            ChargedPersonLabel: false,
            ChargedBelong: false
        },
        superIns: {
            ShopCode: true,
            AgentCode: false,
            AgentSubCode: true,
            ContractorCodeGroup: false,
            ChargedPerson: true,
            SubChargedPerson1: true,
            SubChargedPerson2: false,
            ChargedPersonLabel: true,
            ChargedBelong: true
        },
        common: {
            ShopCode: true,
            AgentCode: false,
            AgentSubCode: true,
            ContractorCodeGroup: true,
            ChargedPerson: false,
            SubChargedPerson1: true,
            SubChargedPerson2: true,
            ChargedPersonLabel: true,
            ChargedBelong: true
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

    // 控制搜索结果显示
    @track
    dataResults;

    /**
     * 切换标签
     * @param event 触发事件对象
     * @param event.target 触发的标签lightning-tab
     */
    tabselect(event) {
        var value = event.target.value;
        // 重新赋值showFeatures，指定tab的显示规则内容
        this.showFeatures = this.rules[value];
    }

    /**
     * 获取当前页面有效的所有输入框:<lightning-input></lightning-input>
     * 组合成Map型数据，调用Apex的findOpportunity(Map<String,String> keyMap)
     * 将Apex方法中执行的SOQL结果赋值给dataResults
     * 通过子页面中声明的@api公共变量，传递给子页面resutlTable.html显示结果数据。
     */
    searchRecord() {
        // 检索键Map
        let keyMap = {};
        // 获取当前页面有效的所有输入框
        let inputList = this.template.querySelectorAll('lightning-input');

        for (let i = 0; i < inputList.length; i++) {
            // 只对有值项目进行处理
            if (inputList[i].value !== '') {
                // 将有效字段，按键值对存进keyMap
                keyMap[inputList[i].name] = inputList[i].value;
            }
        }
        // 调用Apex的findOpportunity(Map<String,String> keyMap)
        // 获取结果集

        findOpportunity({ keyMap }).then(result => {
                console.log("dataResults", result);
                this.dataResults = result;
            })
            .catch(error => {
                console.log("error", error);
            });

        // ApexMethod({params...}).then(result => {
        //     doSomething...
        // }).catch(error => {
        //     doSomething...
        // });
        //
        // .then()为promise 回调函数，用于处理结果
        // result => {}为 匿名函数ES6特性，也可以写作funciton(){}
    }
}