/* eslint-disable no-console */
import { LightningElement, track, wire, api } from 'lwc';
import findOpportunity from '@salesforce/apex/OpportunityApi.findOpportunity';

const columns = [
    { label: '商談名', fieldName: 'Name' },
    { label: '取引先名', fieldName: 'AccountId' },
    { label: '金額', fieldName: 'amount', type: 'currency' },
    { label: '完了予定日', fieldName: 'CloseDate', type: 'date' },
    { label: 'フェーズ', fieldName: 'StageName' },
    { label: '商談所有者', fieldName: 'OwnerId' }
];

export default class ResultTables extends LightningElement {
    @track data = [];
    @track columns = columns;
    @wire(findOpportunity)
    list;

    @api
    record = "name";

}