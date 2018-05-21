var restClient = require('node-rest-client').Client;
var client = new restClient();
var newCust = 
    {
        "id": 4,
        "name": "Adobe",
        "image":"images/Adobe",
        "amount": "10500"
    }

    var args = {
        data: newCust,
        headers:{"Content-Type":"application/json"}
}

client.post('http://localhost:3000/customers',args,function(data,resp)
{
    console.log(data);
});

// client.get("http://localhost:3000/customer",function (data, resp) {
//     console.log(JSON.stringify(data));
// });