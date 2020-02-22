public with sharing class OpportunityApi {
    /**
     * @param keyMap 前台传过来的，检索键Map集合
     */
    @AuraEnabled(cacheable=true)
    public static List<Opportunity> findOpportunity(Map<String,String> keyMap) {
        
        // 参照关系
        List<String> chars = new List<String>();
        chars.add('ChargedPerson');
        chars.add('SubChargedPerson1');
        chars.add('SubChargedPerson2');

        // 条件list
        List<String> condition = new List<String>();

        // 遍历keyMap
        for (String key : keyMap.keySet()) {
            String value = keyMap.get(Key);
            // 后缀
            String suffix;
            // 外表参照的项目
            if (chars.contains(key)) {
                suffix = '__r.NAME';
                // 普通项目
            } else {
                suffix = '__c';
            }
            // 拼接成的字段，存进list
            // 例如:shopcode__c = '2001' 
            // 例如:ChargedPerson__r.NAME = '佐藤 結城' 
            condition.add(key + suffix + '= \'' + value + '\'');
        }

        // 将条件list里的每个条件用< AND >拼接成完整的SOQL条件语句
        String conditonStr = String.join(condition, ' AND ');
        // System.debug(conditonStr);

        String query = 'SELECT Name ' +
               ',CustomerName__c ' +
               ',Amount ' +
               ',ShopCode__c ' +
               ',AgentCode__c ' +
               ',AgentSubCode__c ' +
               ',ContractorCodeGroup__c ' +
               ',ChargedPerson__r.Name ' +
               ',SubChargedPerson1__r.Name ' +
               ',SubChargedPerson2__r.Name ' +
               ',ChargedPersonLabel__c ' +
               ',ChargedBelong__c ' +
            'FROM opportunity';

        // 如果有条件，将条件与SOQL的query文拼接1
        if (conditonStr != ''){
            query = query + ' Where ' + conditonStr;
        }

        // 执行SOQL文
        List<Opportunity> result = Database.query(query);

        return result;
     }
}