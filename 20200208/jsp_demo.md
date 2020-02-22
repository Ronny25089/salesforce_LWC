```
XXXX.jsp
<script type="javascript">
...
var isValueSeted = '<% NWRmodel.getPayTimes() %>';
resetPayTimes(isValueSeted);
...
</script>

XXXX.js
function resetPayTimes(defaultPayTime){
    if (isValueSeted == null) {
        # event
        # ...
        $('#open').setAttribute("default", "48");
    }
}
```
-----------------------------------------------------------------------------
```
XXXX.jsp
# JSTL标签
<% ....... %>


<script type="javascript">
function resetPayTimes(defaultPayTime){
    var isValueSeted = '<% NWRmodel.getPayTimes() %>';
    if (isValueSeted == null) {
        # event
        # ...
        $('#open').setAttribute("default", "48");
    }
}

</script>
```
-----------------------------------------------------------------------------

```
XXXXXX.java

    boolean dsbFlg = false;
    if(NWRmodel.getPayTimes() == null){
        dsbFlg=true;
    }
    dsb.setAttribute("dsbFlag",dsbFlg);

// example
public static boolean isExtensible (String dsbName){
    boolean value = dsb.getAttribute("dsbName");
    if(value != null && value == true){
        return true;
    }else {
        return false;
    }
}

XXXXX.jsp
<html>
<% if (dsb.isExtensible("dsbFlag")){%>
<div >
....
</div>
<% } %>
```
