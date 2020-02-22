/* eslint-disable no-console */
import { LightningElement, track, api } from 'lwc';

const columns = [
    { label: '商談名', fieldName: 'Name' },
    { label: 'お客様名', fieldName: 'CustomerName__c' },
    { label: '金額', fieldName: 'Amount', type: 'currency' },
    { label: '営業店コード', fieldName: 'ShopCode__c' },
    { label: '代理店コード', fieldName: 'AgentCode__c' },
    { label: '代理店枝番', fieldName: 'AgentSubCode__c' },
    { label: '契約者（団体）コード', fieldName: 'ContractorCodeGroup__c' },
    { label: '担当（案件）', fieldName: 'ChargedPerson__c' },
    { label: 'サブ担当１', fieldName: 'SubChargedPerson1__c' },
    { label: 'サブ担当２', fieldName: 'SubChargedPerson2__c' },
    { label: '担当ラベル', fieldName: 'ChargedPersonLabel__c' },
    { label: '担当の所属', fieldName: 'ChargedBelong__c' }
];


export default class ResultTable extends LightningElement {
    @track columns = columns;
    @api list;
}